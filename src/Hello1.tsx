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
    let display = this.state.showText ? this.props.name : " ";
    return (
      <View style={{flex: 1, height:100, backgroundColor: 'blue'}}>
        <Text style={ styles.red}>Hello {this.props.name}</Text>
        <Text style={styles.bigblue}>Hello {display}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    bigblue: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });