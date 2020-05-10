import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: "Contact Information",
    };
  }

  static navigationOptions = {
    title: "Contact us",
  };

  render() {
    return (
      <View>
        <Card title={this.state.head}>
          <Text>
            121, Clear Water Bay Road{`\n`} Clear Water Bay, Kowloon{`\n`} HONG
            KONG{`\n`} Tel: +852 1234 5678{`\n`} Fax: +852 8765 4321{`\n`}{" "}
            Email:confusion@food.net
          </Text>
        </Card>
      </View>
    );
  }
}

export default Contactus;
