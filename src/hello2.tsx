import * as React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export interface AppProps {}

export default class TextInputComponent extends React.Component<AppProps, any> {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.blue}
          underlineColorAndroid='transparent'
          placeholder="Type here to translate me!"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{width:100, padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕🍕🍕🍕🍕🍕🍕🍕🍕")
            .join(" ")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blue: {
    color: "#0000FF",
   // height: 40,
    width: 200,
    borderWidth: 1,
    padding: 0,
    
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});
