import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Card, Icon, CheckBox, Input } from "react-native-elements";
import * as SecureStore from "expo-secure-store";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      remember: false,
    };
  }

  componentDidMount() {
    SecureStore.getItemAsync("userInfo").then((userdata) => {
      let userinfo = JSON.parse(userdata);
      if (userinfo) {
        this.setState({ username: userinfo.username });
        this.setState({ password: userinfo.password });
        this.setState({ remember: true });
      }
    });
  }
  static navigationOptions = {
    title: "Login",
  };

  handleLogin() {
    console.log(JSON.stringify(this.state));
    if (this.state.remember) {
      SecureStore.setItemAsync(
        "userInfo",
        JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      ).Catch((error) => {
        console.log("Couldn't save the information ", error);
      });
    } else {
      SecureStore.deleteItemAsync("userInfo").catch((error) =>
        console.log("couldn't delete user info", error)
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="username"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(username) => this.setState({ username: username })}
          value={this.state.username}
          containerStyle={styles.Input}
        ></Input>
        <Input
          placeholder="password"
          leftIcon={{ type: "font-awesome", name: "key" }}
          onChangeText={(password) => this.setState({ password: password })}
          value={this.state.password}
          containerStyle={styles.Input}
        ></Input>
        <CheckBox
          title="Remember me"
          center
          checked={this.state.remember}
          onPress={() => this.setState({ remember: !this.state.remember })}
          containerStyle={styles.formCheckbox}
        ></CheckBox>
        <View style={styles.formButton}>
          <Button
            title="Login"
            onPress={() => this.handleLogin()}
            color="#512DA8"
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 40,
  },
  formButton: {
    margin: 60,
  },
  formInput: {
    margin: 40,
  },
  formCheckbox: {
    margin: 40,
    backgroundColor: null,
  },
});

export default login;
