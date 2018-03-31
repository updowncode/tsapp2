import * as React from "react";
import { Component } from "react";
import { View, Text } from "react-native";
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
      <View>
        <Text>Hello {this.props.name}</Text>
        <Text>Hello {display}</Text>
      </View>
    );
  }
}
