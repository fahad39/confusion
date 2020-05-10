import "react-native-gesture-handler";
import React, { Component } from "react";
import Menu from "./menucomponent";
import Home from "./HomeComponent";
import DishDetail from "./DishDetail";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
const navigator = createDrawerNavigator(
  {
    Homeflow: createStackNavigator(
      {
        Home: Home,
      },
      {
        navigationOptions: {
          title: "Home",
          drawerLabel: "Home",
          headerStyle: {
            backgroundColor: "#512DA8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
        },
      }
    ),
    Menuflow: createStackNavigator(
      {
        menu: Menu,
        dishdetail: DishDetail,
      },
      {
        navigationOptions: {
          drawerLabel: "Menu",
          headerStyle: {
            backgroundColor: "#512DA8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
        },
      }
    ),
    Aboutpage: createStackNavigator(
      {
        Aboutus: Aboutus,
      },
      {
        navigationOptions: {
          title: "About us",
          drawerLabel: "About us",
          headerStyle: {
            backgroundColor: "#512DA8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
        },
      }
    ),
    contactpage: createStackNavigator(
      {
        Contactus: Contactus,
      },
      {
        navigationOptions: {
          title: "Contact us",
          drawerLabel: "Contact us",
          headerStyle: {
            backgroundColor: "#512DA8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
        },
      }
    ),
  },
  {
    drawerBackgroundColor: "#D1C4E9",
  }
);

const MainNavigator = createAppContainer(navigator);

class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Expo.Constants.statusBarHeight }}>
        <MainNavigator></MainNavigator>
      </View>
    );
  }
}

export default Main;
