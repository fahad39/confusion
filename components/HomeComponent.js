import React, { Component } from "react";
import { View, Text } from "react-native";

class Home extends Component {
  static NavigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <View>
        <Text>home</Text>
      </View>
    );
  }
}

export default Home;
