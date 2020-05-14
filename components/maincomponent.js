import "react-native-gesture-handler";
import React, { Component } from "react";
import Menu from "./menucomponent";
import Home from "./HomeComponent";
import DishDetail from "./DishDetail";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import {
  View,
  Platform,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import SafeAreaView from "react-native-safe-area-view";
import { Icon } from "react-native-elements";

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./images/res.png")}
            style={styles.drawerImage}
          ></Image>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>La RATATOUILLE</Text>
        </View>
      </View>
      <DrawerItems {...props}></DrawerItems>
    </SafeAreaView>
  </ScrollView>
);

const navigator = createDrawerNavigator(
  {
    Homeflow: createStackNavigator(
      {
        Home: Home,
      },
      {
        navigationOptions: ({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              color="black"
              onPress={() => navigation.toggleDrawer()}
            ></Icon>
          ),

          title: "Home",
          drawerLabel: "Home",
          drawerIcon: ({ tintColor }) => (
            <Icon
              name="home"
              type="font-awesome"
              size={24}
              color={tintColor}
            ></Icon>
          ),
          headerStyle: {
            backgroundColor: "#512DA8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
        }),
      }
    ),
    Menuflow: createStackNavigator(
      {
        menu: {
          screen: Menu,
          navigationOptions: ({ navigation }) => ({
            headerLeft: () => (
              <Icon
                name="menu"
                size={24}
                color="black"
                onPress={() => navigation.toggleDrawer()}
              ></Icon>
            ),
          }),
        },
        dishdetail: DishDetail,
      },
      {
        initialRouteName: "menu",
        navigationOptions: {
          drawerLabel: "Menu",
          drawerIcon: ({ tintColor }) => (
            <Icon
              name="list"
              type="font-awesome"
              size={24}
              color={tintColor}
            ></Icon>
          ),
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
        navigationOptions: ({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            ></Icon>
          ),
          title: "About us",
          drawerLabel: "About us",
          drawerIcon: ({ tintColor }) => (
            <Icon
              name="info-circle"
              type="font-awesome"
              size={24}
              color={tintColor}
            ></Icon>
          ),
          headerStyle: {
            backgroundColor: "#512DA8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
        }),
      }
    ),
    contactpage: createStackNavigator(
      {
        Contactus: Contactus,
      },
      {
        navigationOptions: ({ navigtion }) => ({
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            ></Icon>
          ),
          title: "Contact us",
          drawerLabel: "Contact us",
          drawerIcon: ({ tintColor }) => (
            <Icon
              name="address-card"
              type="font-awesome"
              size={22}
              color={tintColor}
            ></Icon>
          ),
          headerStyle: {
            backgroundColor: "#512DA8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
          },
        }),
      }
    ),
  },
  {
    drawerBackgroundColor: "#D1C4E9",
    contentComponent: CustomDrawerContentComponent,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#512DA8",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
});

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
