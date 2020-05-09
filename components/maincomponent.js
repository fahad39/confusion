import React, { Component } from "react";
import Menu from "./menucomponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";
import { View } from "react-native";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <View>
        <Menu
          dishes={this.state.dishes}
          onPress={(dishId) => this.onDishSelect(dishId)}
        ></Menu>
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        ></DishDetail>
      </View>
    );
  }
}

export default Main;
