/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 */

import * as React from "react";
import { Component } from "react";
import { Platform, StyleSheet, Text, Image, View } from "react-native";
import HelloWorldApp from "./src/Hello1";
import TextInputComponent from "./src/hello2";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface Props {}
export default class App extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    let pic = {
      uri: "https://b2b.toureast.com/content/images/te-logo.png"
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native12345</Text>
        <TextInputComponent />
        <HelloWorldApp name="Amy12346 " />
        <Image
          style={{ alignSelf: "center", height: 50, width: 50 }}
          source={pic}
          resizeMode="stretch"
        />
        <Image style={styles.stretch} source={require("./src/te-logo.png")} />
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
   // alignItems: "center",
    backgroundColor: "#FFF"
  },
  welcome: {
    flex:1,
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    flex:1,
    
    textAlign: "center",
    color: "#FFF000",
    marginBottom: 5
  },
  stretch: {
    flex:1,
    alignSelf: "center"
  }
});
