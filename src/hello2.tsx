import * as React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export interface IAppProps {
  name?: string;
}

export default class TextInputComponent extends React.Component<IAppProps, any> {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  public render() {
    return (
      <View>
        <TextInput
          style={styles.blue}
          underlineColorAndroid="transparent"
          placeholder="Type here to translate me!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{width: 100, padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map((word) => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blue: {
    borderWidth: 1,
    color: "#0000FF",
   // height: 40,
   padding: 0,
    width: 200,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center",
 },
});
