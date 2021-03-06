
## Sopra Steria Initiative React Native Application

### A Starter App for [React Native](https://facebook.github.io/react-native/docs/getting-started.html) + [NativeBase](http://nativebase.io/) + [React Navigation](https://reactnavigation.org/) + [CodePush](https://github.com/Microsoft/react-native-code-push) Sopra Steria Initiative App (iOS & Android)

#### A simple starter project for [React Native](https://facebook.github.io/react-native/docs/getting-started.html) + [NativeBase](http://nativebase.io/) + [React Navigation](https://reactnavigation.org/) + [CodePush](https://github.com/Microsoft/react-native-code-push) Apps (iOS & Android) apps on iOS and Android.

No need of reinventing the wheel. This is a starter project to get the basic plumping of React Native with NativeBase, React Navigation and CodePush.

If you want to develop for Android Platform then you must have Android development environment installed on your computer.

If you want to develop for iOS Platform then you must have iOS development environment installed on your computer.

If you want to develop for iOS and Android Platforms then you must have iOS development environment installed on your computer and Android development environment installed on your computer.

WARNING : If you develop for only one platform, please send a pull request to ask for merge.

# Content

-	[Screens](#screens)
-	[Technologies](#technologies)
-	[Get Started](#get-started)
- [Keep in mind](#keep-in-mind)


## Screens

- Login workflow with LinkedInLoginScreen, SopraSteriaEmailLoginScreen.
- A rest API example with SopraSteriaEmailLoginScreen.
- Modal and Drawer navigation with CoreNavigation and LoginNavigation.
- LinkedInSDK integration.

## Technologies
*Technologies used in Native Project*

### [React Native](https://github.com/facebook/react-native)
React Native helps in making the development work easier and allowing the developers to focus on the core app features in every new release. It is the fastest-developing mobile app development that essentially permits you to create an isolated product with often outcomes.

**The hymn of React Native — learn once, write anywhere.**

React Native takes charge of the view controllers and programmatically generates native views using javascript. This means that you can have all the speed and power of a native application, with the ease of development that comes with React.


### [NativeBase](http://nativebase.io/)

NativeBase is a free and open source framework from the team of [StrapMobile](http://strapmobile.com/).

This framework enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6. NativeBase builds a layer on top of React Native that provides you with basic set of components for mobile application development.

The applications stack of components is built using native UI components and because of that, there are no compromises with the User Experience of the applications.  NativeBase is targeted specially on the look and feel, and UI interplay of your app.

NativeBase without a doubt fits in well with mobile applications which cut downs one huge part of your app The Front end.

-	*[On GitHub](https://github.com/GeekyAnts/NativeBase)*
-	*[NativeBase Features](http://nativebase.io/documentation)*
-	*[NativeBase Components](http://nativebase.io/components)*
-	*[Docs](http://nativebase.io/documentation)*
-	*[Blogs](https://blog.nativebase.io/)*


### [CodePush](https://github.com/Microsoft/react-native-code-push)

React Native app is composed of JavaScript files, images, which are bundled together by the packager and distributed as part of a platform-specific binary (i.e. an .ipa or .apk file). Once the app is released, updating either the JavaScript code or image assets, requires you to recompile and redistribute the entire binary.

The CodePush plugin helps get product improvements in front of your end users instantly, with the aid of preserving your javascript and images synchronized with updates you launch to the CodePush server. This way, your app gets the benefits of an offline mobile experience, as well as the "web-like" agility of side-loading updates as soon as they are available.



### [React Navigation](https://reactnavigation.org/)

Navigation views that deliver 60fps animations, and utilize native components to deliver a great look and feel. It will becomes the standard navigation library in the next release of React Native. More detail [here](https://facebook.github.io/react-native/docs/navigation.html).


### [React-native-linkedin-sdk](https://github.com/joonhocho/react-native-linkedin-sdk)

- [Register of application](https://www.linkedin.com/developer/apps/224807/mobile)
- [Android install](https://developer.linkedin.com/docs/android-sdk#)
- [iOS install](https://developer.linkedin.com/docs/ios-sdk#)

Warning : We doesn't update plist.info with LSApplicationQueriesSchemes because LinkedIn SDK doesn't call the callback. [More information](https://github.com/tonyli508/LinkedinSwift/issues/22).

## Get Started

###1. System Requirements

* Globally installed [node](https://nodejs.org/en/)

* Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)

* Install [CodePush](https://microsoft.github.io/code-push/) globally and get keys for your app.


###2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/SopraSteriaGroup/initiatives_frontend_mobile.git

$ cd initiatives_frontend_mobile/

$ npm install
```

```sh
$ react-native link
```

[CodePush](https://github.com/Microsoft/react-native-code-push) plugin installation and key deployment.


###3. Simulate for iOS

*	Run the following command in your terminal

```sh
$ react-native run-ios
```

###4. Simulate for Android

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal

```sh
$ react-native run-android
```

## Keep in mind

Feel free to add technologies that you want to this project but please : complete this readme with a little paragraph on the technology you introduced and why you think we need it.

Currently we don't use some well known technologies like Redux. We think that we don't need it immediately. And you ? Why Redux ? What about MobX ?

### [Redux](http://redux.js.org)

As the requirements for JavaScript single-page applications have become increasingly complicated, our code must manage more state than ever before. UI state is also increasing in complexity, as we need to manage the active route, the selected tab, whether to show a spinner or not, should pagination controls be displayed, and so on.

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the steps of three.

-	The **state** of whole application is stored in an object tree within a single **store**.
-	The only way to mutate the state is to emit an **action**, an object describing what happened.
-	To specify how the state tree is transformed by actions, you write pure **reducers**.
