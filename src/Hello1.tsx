import * as React from "react";
import { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
interface IHelloFormProps {
  name: string;
  //handleChange(event: any): void;
}

export default class HelloWorldApp extends Component<IHelloFormProps, any> {
  constructor(props: IHelloFormProps) {
    super(props);
    this.state = { showText: true };
    setInterval(() => {
      this.setState((previousState: any) => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.name : "Eric";
    return (
      <View style={{
        flex: 1,
        flexDirection: "row",
        //justifyContent: "flex-start",
        //alignItems: "stretch",
       // height: 50,
        backgroundColor: "blue"
      }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            //justifyContent: "flex-start",
            //alignItems: "stretch",
           // height: 50,
            backgroundColor: "blue"
          }}
        >
          <Text style={styles.red}>Hello {this.props.name}</Text>
          <Text style={styles.bigblue}>Hello {display}</Text>
        </View>
        {/* <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center"
            //alignItems: 'center',
          }}
        >
          <View
            style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
          <View
            style={{ width: 50, height: 50, backgroundColor: "steelblue" }}
          />
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color: "#19d5db",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  }
});
