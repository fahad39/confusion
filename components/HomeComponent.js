import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { Card } from "react-native-elements";

import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

import { Loading } from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

function RenderItem(props) {
  const item = props.item;
  if (props.isLoading) {
    return <Loading></Loading>;
  } else if (props.errMess) {
    return (
      <View>
        <Text>{props.errMess}</Text>
      </View>
    );
  } else {
    if (item != null) {
      return (
        <Card
          featuredTitle={item.name}
          featuredSubtitle={item.designation}
          image={{ uri: baseUrl + "/" + item.image }}
        >
          <Text style={styles.cards}>{item.description}</Text>
        </Card>
      );
    } else {
      return <View></View>;
    }
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.ainmatedValue = new Animated.Value(0);
  }

  static NavigationOptions = {
    title: "Home",
  };

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.ainmatedValue.setValue(0);
    Animated.timing(this.ainmatedValue, {
      toValue: 8,
      duration: 7000,
      easing: Easing.linear,
    }).start(() => this.animate());
  }

  render() {
    const xpos1 = this.ainmatedValue.interpolate({
      inputRange: [0, 1, 3, 5, 8],
      outputRange: [1200, 600, 0, -600, -1200],
    });
    const xpos2 = this.ainmatedValue.interpolate({
      inputRange: [0, 2, 4, 6, 8],
      outputRange: [1200, 600, 0, -600, -1200],
    });
    const xpos3 = this.ainmatedValue.interpolate({
      inputRange: [0, 3, 5, 7, 8],
      outputRange: [1200, 600, 0, -600, -1200],
    });
    return (
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Animated.View
          style={{ width: "100%", transform: [{ translateX: xpos1 }] }}
        >
          <RenderItem
            item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
          ></RenderItem>
        </Animated.View>
        <Animated.View
          style={{ width: "100%", transform: [{ translateX: xpos2 }] }}
        >
          <RenderItem
            item={
              this.props.promotions.promotions.filter(
                (promo) => promo.featured
              )[0]
            }
            isLoading={this.props.promotions.isLoading}
            errMess={this.props.promotions.errMess}
          ></RenderItem>
        </Animated.View>
        <Animated.View
          style={{ width: "100%", transform: [{ translateX: xpos3 }] }}
        >
          <RenderItem
            item={
              this.props.leaders.leaders.filter((leader) => leader.featured)[0]
            }
            isLoading={this.props.leaders.isLoading}
            errMess={this.props.leaders.errMess}
          ></RenderItem>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    margin: 10,
  },
});
export default connect(mapStateToProps)(Home);
