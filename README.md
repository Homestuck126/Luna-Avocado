Please ensure that before you start this guide you have Node.js and NPM installed on your device
# How to run our Expo Go app

This guide will walk you through the installation process for Expo Go, a mobile app that allows you to preview and test your Expo projects directly on your iOS or Android device. Additionally, we'll provide instructions on running our app using Expo Go.

## Installation

### iOS

1. Install Expo Go from the App Store by searching for "Expo Go" or by visiting [Expo Go on the App Store](https://apps.apple.com/us/app/expo-go/id982107779).
2. Once installed, you're ready to proceed to running your Expo project.
3. Disclaimer: some IOS models don't work. If that is the case, please install IOS simulator on your laptop. Instructions will be below
#### iOS Simulator 
1) go to the appstore
2) search for Xcode
3) download
4) once fully downloaded, there should be an option to download iOS simluator
5) Follow these directions: [https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators]
6) In your .env file, please change `EXPO_PUBLIC_IPADDR = localhost`

### Android

1. Install Expo Go from the Google Play Store by searching for "Expo Go" or by visiting [Expo Go on Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent).
2. After installation, you're ready to move on to running your Expo project.

## Running our application

Now that you have Expo Go installed on your device, let's run an example app using Expo Go.

1. Clone or download this repository.
2. Navigate to the directory where you downloaded this repository using your terminal or command prompt.
3. Create a .env file with 
```
EXPO_PUBLIC_IPADDR = <YOUR_IP_ADDRESS>
MONGODB_URL = mongodb+srv://puckerfishy:tamagachi@cluster0.kbfgpln.mongodb.net/VirtualPetDatabase
```
IMPORTANT: Be sure to replace <YOUR_IP_ADDRESS> with your IPv4 address if you want to emulate on your mobile device. If you wish to use your iOS Simulator on your laptop replace <YOUR_IP_ADDRESS> with localhost. The MONGODB_URL should remain the same as in the example above. 

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
  * If you're using iOS Simulator on laptop, instad of scanning a QR code please type `i` into terminal to run the simulator
9. Before scanning, please ensure your phone is on the same network as the computer you are running from.
10. If you are using an iOS device/iPhone, simply open the camera app and scan the QR code. It will automatically redirect to Expo Go.
   If you are on Android, open Expo Go and scan the QR code from there.
12. Wait for Expo Go to load the project. Once loaded, you should see the example app running on your device.

## How to use our application
1. Click Sign up, type in you username, password and bio. Make sure to remember your username and password.
<img src="images/IMG_4431.PNG" alt="image" width="200" height="auto">
2. Then, you log in with the previous usernames and password.
<img src="images/IMG_4432.PNG" alt="image" width="200" height="auto">
3. You now have access to your profile. It shows your username and bio.
<img src="images/IMG_4433.PNG" alt="image" width="200" height="auto">
4. Go to the top left corner and you can see a sidebar with profile, feed pet, and friends.
### How to use Feed Pet
5. Click Feed pet and you will see our Macro tracker, which has calories protiens carbohydrates and fats.
<img src="images/IMG_4434.PNG" alt="image" width="200" height="auto">
6. In the middle there is log food, which allows us to log food with calories protiens carbohydrates and fats.
<img src="images/IMG_4435.PNG" alt="image" width="200" height="auto">
7. When you click log food, you can input all the details of the food you ate.
8. You can then click submit and the progress bars should update to the input.
9. on the bottom, you should see your food log. (the edit has yet to be implemented)
### How to use friends.
10. You can go to friends as well.
<img src="images/IMG_4436.jpg" alt="image" width="200" height="auto">
11. For example, you can add jalentest1(case sensitive)
<img src="images/IMG_4437.jpg" alt="image" width="200" height="auto">
12. Now it should show their profile.

13. You can click on the profile to enlarge it and show the information. 
