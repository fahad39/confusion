import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Icon, CheckBox, Input, Button } from "react-native-elements";
import * as SecureStore from "expo-secure-store";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Asset } from "expo-asset";
import * as ImageManipulator from "expo-image-manipulator";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { baseUrl } from "../shared/baseUrl";

class loginTab extends Component {
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
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="sign-in"
        type="font-awesome"
        size={24}
        iconStyle={{ color: "#a0e5d2" }}
      ></Icon>
    ),
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
            icon={
              <Icon
                name="sign-in"
                type="font-awesome"
                size={24}
                color="white"
              ></Icon>
            }
            buttonStyle={{ backgroundColor: "#512DA8" }}
          ></Button>
        </View>
        <View style={styles.formButton}>
          <Button
            title="Register"
            onPress={() => this.props.navigation.navigate("Register")}
            clear
            icon={
              <Icon
                name="user-plus"
                type="font-awesome"
                size={24}
                color="blue"
              ></Icon>
            }
            titleStyle={{ color: "blue" }}
          ></Button>
        </View>
      </View>
    );
  }
}

class RegisterTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      imageUrl: baseUrl + "image/logo.png",
      remember: false,
    };
  }
  getImageFromCamera = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (
      cameraPermission.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      let capturedImage = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!capturedImage.cancelled) {
        console.log(capturedImage);
        this.processImage(capturedImage.uri);
      }
    }
  };

  processImage = async (ImageUri) => {
    let processedImage = await ImageManipulator.manipulate(
      ImageUri,
      [{ resize: { width: 400 } }],
      {
        format: "png",
      }
    );
    console.log(processedImage);
    this.setState({ imageUrl: processedImage.uri });
  };

  static navigationOptions = {
    title: "RegisterTab",
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="user-plus"
        type="font-awesome"
        size={24}
        iconStyle={{ color: "#a0e5d2" }}
      ></Icon>
    ),
  };

  handleRegister() {
    console.log(JSON.stringify(this.state));
    if (this.state.remember)
      SecureStore.setItemAsync(
        "userinfo",
        JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      ).catch((error) => console.log("Could not save user info", error));
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: this.state.imageUrl }}
              loadingIndicatorSource={require("./images/logo.png")}
              style={styles.image}
            />
            <Button title="Camera" onPress={this.getImageFromCamera} />
          </View>
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
          <Input
            placeholder="First Name"
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(firstname) =>
              this.setState({ firstname: firstname })
            }
            value={this.state.firstname}
            containerStyle={styles.Input}
          ></Input>
          <Input
            placeholder="Last Name"
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(lastname) => this.setState({ lastname: lastname })}
            value={this.state.lastname}
            containerStyle={styles.Input}
          ></Input>
          <Input
            placeholder="Email"
            leftIcon={{ type: "font-awesome", name: "envelope-o" }}
            onChangeText={(email) => this.setState({ email: email })}
            value={this.state.email}
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
              title="Register"
              onPress={() => this.handleRegister()}
              icon={
                <Icon
                  name="user-plus"
                  type="font-awesome"
                  size={24}
                  color="white"
                ></Icon>
              }
              buttonStyle={{ backgroundColor: "#512DA8" }}
            ></Button>
          </View>
        </View>
      </ScrollView>
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
    margin: 20,
  },
  formCheckbox: {
    margin: 20,
    backgroundColor: null,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  image: {
    margin: 10,
    width: 80,
    height: 60,
  },
});
const login = createBottomTabNavigator(
  {
    login: loginTab,
    Register: RegisterTab,
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#9575CD",
      inactiveBackgroundColor: "#D1C4E9",
      activeTintColor: "#ffffff",
      inactiveTintColor: "gray",
    },
  }
);
export default login;
