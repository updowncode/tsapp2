import * as React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "react-native-button";
export interface IAppProps {
  name: string;
}
export interface IState {
  username: string;
  password: string;
  isLoggedIn: boolean;
  showWarning: boolean;
  warnMsg: string;
}
export interface IWarningBanner {
  showWarning: boolean;
  warnMsg: string;
}

class WarningBanner extends React.Component<IWarningBanner, any> {
  public p :IWarningBanner;
  constructor(props) {
    super(props);
    this.p = props;
  }
  render() {
    if (!this.p.showWarning) {
      return null;
    }
    return <text style={styles.warn}>{this.p.warnMsg}</text>;
  }
}

export default class LoginComponent extends React.Component<IAppProps, IState> {
  public state: IState;
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this, this.state);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      showWarning: false,
      warnMsg: "sdfsf"
    };
  }
  handleLoginClick() {
    this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
    const username = this.state.username;
    const password = this.state.password;
  }
  public render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />

        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          style={{
            fontSize: 20,
            color: "green",
            borderWidth: 1,
            width: 200,
            margin: 10,
            backgroundColor: "#e9c216"
          }}
          styleDisabled={{ color: "red" }}
          //disabled={this.state.isLoggedIn}
          onPress={() => this.handleLoginClick()}
        >
          Login {this.state.isLoggedIn ? "ON" : "OFF"}
        </Button>
        <Button
          containerStyle={{
            padding: 5,
            height: 40,
            //borderWidth: 1,
            overflow: "hidden",
            borderRadius: 4,
            backgroundColor: "white"
          }}
          disabledContainerStyle={{ backgroundColor: "grey" }}
          style={{ fontSize: 20, color: "green" }}
        >
         Forget Password
        </Button>
        <WarningBanner 
          showWarning={this.state.showWarning}
          warnMsg={this.state.warnMsg}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 0,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5
  },
  button: {
    flex: 2,
    paddingVertical: 0
  },
  warn: {
    color: "red"
  },
  textInput: {
    borderWidth: 1,
    color: "#0000FF",
    margin: 10,
    padding: 2,
    paddingLeft: 5,
    width: 200
  }
});
