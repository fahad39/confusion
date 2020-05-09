import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

function RenderDish(props) {
  const dish = props.dish;
  if (dish != null) {
    return (
      <Card
        featuredTitle={dish.name}
        //image={require("./images/uthappizza.jpg")}
      >
        <Text styele={{ margin: 10 }}>{dish.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

function DishDetail(props) {
  return <RenderDish dish={props.dish}></RenderDish>;
}

export default DishDetail;
