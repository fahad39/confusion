import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
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
  static NavigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView>
        <RenderItem
          item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
        ></RenderItem>

        <RenderItem
          item={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          isLoading={this.props.promotions.isLoading}
          errMess={this.props.promotions.errMess}
        ></RenderItem>

        <RenderItem
          item={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
          isLoading={this.props.leaders.isLoading}
          errMess={this.props.leaders.errMess}
        ></RenderItem>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    margin: 10,
  },
});
export default connect(mapStateToProps)(Home);
