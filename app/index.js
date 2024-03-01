import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import axios from "axios";
import { useRouter } from "expo-router";

export default function Page() {
    const [users, setUsers] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get("http://localhost:3000/users", { timeout: 10000 });
            setUsers(response.data);
          } catch (error) {
            console.log("error fetching user data", error);
          }
        };
        fetchUserData();
    }, []);
    console.log(users);
    return (
        <SafeAreaView>
            <ScrollView>
                {users.map((user, index) => (
                    <Text key={index}>{user.name} - Macros: {user.macros}</Text>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

// import { StyleSheet, Text, View } from "react-native";

// export default function Page() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <Text style={styles.title}>Hello World</Text>
//         <Text style={styles.subtitle}>This is the first page of your app.</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
