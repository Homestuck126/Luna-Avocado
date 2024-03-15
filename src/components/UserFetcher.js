import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserFetcher = ({ apiUrl, userContext, children, choice }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("ReFetch\n")
        const response = await axios.get(apiUrl, { timeout: 10000 });
        const users = response.data.users;
        if (userContext.username) {
          const matchingUser = users.find(user => user.username === userContext.username);
          if (matchingUser) {
            const friendsUsernames = matchingUser.Friends || [];
            console.log(friends)
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
  }, [apiUrl, userContext]);  // Removed setUser and user from the dependency array

  return <>{children(user ? user : [])}</>;
};

export default UserFetcher;
