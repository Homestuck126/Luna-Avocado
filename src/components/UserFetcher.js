import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserFetcher = ({ apiUrl, username, children, choice }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(apiUrl, { timeout: 10000 });
        const users = response.data.users;
        if (username) {
          const matchingUser = users.find(user => user.username === username);
          if (matchingUser) {
            const friendsUsernames = matchingUser.Friends || [];
            const friends = users.filter(user => friendsUsernames.includes(user.username));
            setUser(friends);
          } else {
            setUser(null);
          }
        } else {
          setUser(users);
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

      fetchUserData();
  }, [apiUrl, username]);  // Removed setUser and user from the dependency array

  return <>{children(user ? user : [])}</>;
};

export default UserFetcher;
