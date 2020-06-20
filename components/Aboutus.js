import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    leaders: state.leaders,
  };
};

function History() {
  return (
    <Card title="About us">
      <Text>
        Started in 2010, Ristorante con Fusion quickly established itself as a
        culinary icon par excellence in Hong Kong. With its unique brand of
        world fusion cuisine that can be found nowhere else, it enjoys patronage
        from the A-list clientele in Hong Kong. Featuring four of the best
        three-star Michelin chefs in the world, you never know what will arrive
        on your plate the next time you visit us. The restaurant traces its
        humble beginnings to The Frying Pan, a successful chain started by our
        CEO, Mr. Peter Pan, that featured for the first time the world's best
        cuisines in a pan.
      </Text>
    </Card>
  );
}

function RenderItem(props) {
  const item = props.item;
  if (item != null) {
    return (
      <Card title="Corporate Leadership">
        {item.map((u, i) => {
          return (
            <ListItem
              key={i}
              title={u.name}
              subtitle={u.description}
              hideChevron={true}
              leftAvatar={{ source: { uri: baseUrl + "/" + u.image } }}
            ></ListItem>
          );
        })}
      </Card>
    );
  }
}

class Aboutus extends Component {
  static navigationOptions = {};

  render() {
    if (this.props.leaders.isLoading) {
      return (
        <ScrollView>
          <History></History>
          <Card title="Corporate Leadership">
            <Loading></Loading>
          </Card>
        </ScrollView>
      );
    } else if (this.props.leaders.errMess) {
      return (
        <ScrollView>
          <History></History>
          <Card title="Corporate Leadership">
            <Text>{this.props.leaders.errMess}</Text>
          </Card>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <History></History>
          <RenderItem item={this.props.leaders.leaders}></RenderItem>
        </ScrollView>
      );
    }
  }
}

export default connect(mapStateToProps)(Aboutus);
