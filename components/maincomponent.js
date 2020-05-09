import "react-native-gesture-handler";
import React, { Component } from "react";
import Menu from "./menucomponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const navigator = createStackNavigator(
  {
    menu: Menu,
    dishdetail: DishDetail,
  },
  {
    intialRouteName: "menu",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const MenuNavigator = createAppContainer(navigator);

class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Expo.Constants.statusBarHeight }}>
        <MenuNavigator></MenuNavigator>
      </View>
    );
  }
}

export default Main;
