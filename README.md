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
2. Navigate to the directory containing the example app code using your terminal or command prompt.
3. Create a .env file with 
```EXPO_PUBLIC_IPADDR = localhost
MONGODB_URL = mongodb+srv://puckerfishy:tamagachi@cluster0.kbfgpln.mongodb.net/VirtualPetDatabase```
4. Run `npm install` to install the project dependencies.
5. Once the installation is complete, run `npm start`(or npx start) to start the Expo development server.
6. A QR code will be generated in your terminal or command prompt(this might take a minute or three depending on your CPU).
7. Open Expo Go on your mobile device and scan the QR code.
8. Wait for Expo Go to load the project. Once loaded, you should see the example app running on your device.

