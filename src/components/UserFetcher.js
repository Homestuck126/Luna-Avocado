import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserFetcher = ({ apiUrl, username, children }) => {
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
            console.log(friends ? friends : "DNE")
            setUser(friends);
            console.log(friends)
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

    if (apiUrl && username) {
      fetchUserData();
    }
  }, [apiUrl, username]);  // Removed setUser and user from the dependency array

  console.log(user);
  return <>{children(user ? user : [])}</>;
};

export default UserFetcher;
