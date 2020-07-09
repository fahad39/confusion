import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

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

  sendMail() {
    MailComposer.composeAsync({
      recipients: ["huccanefahad07@gmail.com"],
      subject: "Test Email",
      body: "Hello from expo",
    });
  }

  render() {
    return (
      <View>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title={this.state.head}>
            <Text>
              121, Clear Water Bay Road{`\n`} Clear Water Bay, Kowloon{`\n`}{" "}
              HONG KONG{`\n`} Tel: +852 1234 5678{`\n`} Fax: +852 8765 4321
              {`\n`} Email:confusion@food.net
            </Text>
          </Card>
          <Button
            title="Send Email"
            buttonStyle={{ backgroundColor: "#512AD8" }}
            icon={
              <Icon name="envelope-o" type="font-awesome" color="white"></Icon>
            }
            onPress={this.sendMail}
          ></Button>
        </Animatable.View>
      </View>
    );
  }
}

export default Contactus;
