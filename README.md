Please ensure that before you start this guide you have Node.js and NPM installed on your device
# How to run our Expo Go app

This guide will walk you through the installation process for Expo Go, a mobile app that allows you to preview and test your Expo projects directly on your iOS or Android device. Additionally, we'll provide instructions on running our app using Expo Go.

## Installation

### iOS

1. Install Expo Go from the App Store by searching for "Expo Go" or by visiting [Expo Go on the App Store](https://apps.apple.com/us/app/expo-go/id982107779).
2. Once installed, you're ready to proceed to running your Expo project.

### Android

1. Install Expo Go from the Google Play Store by searching for "Expo Go" or by visiting [Expo Go on Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent).
2. After installation, you're ready to move on to running your Expo project.

## Running our application

Now that you have Expo Go installed on your device, let's run an example app using Expo Go.

1. Clone or download this repository.
2. Navigate to the directory where you downloaded this repository using your terminal or command prompt.
3. Create a .env file with 
```
EXPO_PUBLIC_IPADDR = localhost
MONGODB_URL = mongodb+srv://puckerfishy:tamagachi@cluster0.kbfgpln.mongodb.net/VirtualPetDatabase
```
localhost should be the ip address of your computer, and the MONGODB_URL should remain the same as in the example above. 

4. Run `npm install` to install the project dependencies.
5. At this point, we're ready to run both the SERVER (to connect to the database) and Expo Go (to simulate the project). 
First, we will run the server. In your terminal, run this line to connect to the MongoDB server.
  On Windows:
  ```
  node --env-file=.env .\src\services\server.js
  ```
  or for Mac:
  ```
  node --env-file=.env ./src/services/server.js
  ```

6. Once server is running, open another terminal instance and navigate to the project repository again. In here, run `npm start`(or npx start) to start the Expo development server.

7. A QR code will be generated in your terminal or command prompt(this might take a minute or three depending on your CPU).
8. Open Expo Go on your mobile device and scan the QR code.
9. Wait for Expo Go to load the project. Once loaded, you should see the example app running on your device.

## How to use our application
1. Click Sign up, type in you username, password and bio. Make sure to remember your username and password.
2. Then, you log in with the previous usernames and password.
3. You now have access to your profile. It shows your username and bio.
4. Go to the top left corner and you can see a sidebar with profile, feed pet, and friends.
### How to use Feed Pet
5. Click Feed pet and you will see our Macro tracker, which has calories protiens carbohydrates and fats.
6. In the middle there is log food, which allows us to log food with calories protiens carbohydrates and fats.
7. When you click log food, you can input all the details of the food you ate.
8. You can then click submit and the progress bars should update to the input.
9. on the bottom, you should see your food log. (the edit has yet to be implemented)
### How to use friends.
10. You can go to friends as well.
11. For example, you can add jalentest1(case sensitive)
12. Now it should show their profile.
13. You can click on the profile to enlarge it and show the information. 
