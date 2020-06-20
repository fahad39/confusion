import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  ScrollView,
  Switch,
  Button,
  Modal,
} from "react-native";
import { Card } from "react-native-elements";

import DatePicker from "react-native-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guest: 1,
      rooftop: false,
      date: "",
      showModal: false,
    };
  }

  static navigationOptions = {
    title: "Reserve Table",
  };

  handleReservation() {
    console.log(this.state);
    this.toggleModal();
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  resetform() {
    this.setState({
      guest: 1,
      rooftop: false,
      date: "",
      showModal: false,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Number Of Guest</Text>
          <Picker
            style={styles.formItem}
            selectedValue={this.state.guest}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ guest: itemValue })
            }
          >
            <Picker.Item label="1" value="1"></Picker.Item>
            <Picker.Item label="2" value="2"></Picker.Item>
            <Picker.Item label="3" value="3"></Picker.Item>
            <Picker.Item label="4" value="4"></Picker.Item>
            <Picker.Item label="5" value="5"></Picker.Item>
            <Picker.Item label="6" value="6"></Picker.Item>
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>RoofTop ?</Text>
          <Switch
            style={styles.formItem}
            value={this.state.rooftop}
            trackColor="#512DA8"
            onValueChange={(Value) => this.setState({ rooftop: Value })}
          ></Switch>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date and Time</Text>
          <DatePicker
            style={{ flex: 2, marginRight: 20 }}
            date={this.state.date}
            format=""
            mode="datetime"
            placeholder="select date and Time"
            minDate="2017-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              this.setState({ date: date });
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Button
            title="reserve"
            color="#512DA8"
            onPress={() => this.handleReservation()}
            accessibilityLabel="Learn more about this button"
          ></Button>
        </View>
        <Modal
          animationType={"slide"}
          transparent={false}
          onDismiss={() => this.toggleModal()}
          onRequestClose={() => this.toggleModal()}
          visible={this.state.showModal}
        >
          <View>
            <Text style={styles.modalTitle}>Your Reservation</Text>
            <Text style={styles.modalText}>
              Number of Guests : {this.state.guest}
            </Text>
            <Text style={styles.modalText}>
              Roof Top : {this.state.rooftop ? "Yes" : "No"}
            </Text>
            <Text style={styles.modalText}>
              Date and Time : {this.state.date}
            </Text>
            <Button
              onPress={() => {
                this.toggleModal();
                this.resetform();
              }}
              title="Close"
              color="#512DA8"
            ></Button>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    textAlign: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  formdate: {
    flex: 2,
    marginRight: 20,
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#512DA8",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});

export default Reservation;
