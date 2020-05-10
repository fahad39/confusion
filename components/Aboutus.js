import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { LEADERS } from "../shared/leaders";
import { FlatList } from "react-native-gesture-handler";

function RenderItem(props) {
  const item = props.item;
  const heading = props.heading;
  if (item != null) {
    return (
      <Card title={heading}>
        {item.map((u, i) => {
          return (
            <ListItem
              key={i}
              title={u.name}
              subtitle={u.description}
              hideChevron={true}
              leftAvatar={{ source: require("../assets/profile2.png") }}
            ></ListItem>
          );
        })}
      </Card>
    );
  } else {
    return <View></View>;
  }
}

class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: "Our History",
      cardhead: "Corporate Leadership",
      leaders: LEADERS,
    };
  }
  static navigationOptions = {
    title: "About us",
  };

  render() {
    return (
      <ScrollView>
        <Card title={this.state.head}>
          <Text>
            Started in 2010, Ristorante con Fusion quickly established itself as
            a culinary icon par excellence in Hong Kong. With its unique brand
            of world fusion cuisine that can be found nowhere else, it enjoys
            patronage from the A-list clientele in Hong Kong. Featuring four of
            the best three-star Michelin chefs in the world, you never know what
            will arrive on your plate the next time you visit us. The restaurant
            traces its humble beginnings to The Frying Pan, a successful chain
            started by our CEO, Mr. Peter Pan, that featured for the first time
            the world's best cuisines in a pan.
          </Text>
        </Card>
        {/* <FlatList
          data={this.state.leaders}
          renderItem={RenderItem}
          keyExtractor={(item,heading) => {item.id.toString()
        heading}}
        ></FlatList> */}

        <RenderItem
          item={this.state.leaders}
          heading={this.state.cardhead}
        ></RenderItem>
      </ScrollView>
    );
  }
}

export default Aboutus;
