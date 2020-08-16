import React, { Component, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
//import { TextInput } from 'react-native-gesture-handler'
import { connect } from "react-redux";
import { getDatabyDACMAPI, ViewData } from "../../src/action/index";
import styles from "../style/getDataDate&CounntryM.js";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import DataInsert from "../Pages/DataPost";

class GetData_DACM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getData: [],
      getCountrys: [],
      inputDate: "",
      inputCountry: "",
      language: "Nothing",
      vsData: false,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      getData: props.getCountry,
    };
  }
  onSubmit = () => {
    if (this.state.inputDate != "" && this.state.inputCountry != "") {
      let d = this.state.inputDate;
      let c = this.state.inputCountry;
      this.props.submit(d, c);
      this.state.vsData = true;
    }
  };
  render() {
    const VData = () => {
      if (this.state.vsData === true) {
        if (this.state.getData === "Error") {
          return (
            <View>
              <Text>No Data Avilable</Text>
            </View>
          )
        } else {
          return (
            <View>
              <Card>
                <Text>Active Cases: {this.state.getData.ActiveCases}</Text>
                <Text>Population: {this.state.getData.Population}</Text>
                <Text>TotalDeaths: {this.state.getData.TotalDeaths}</Text>
                <Text>New Deaths: {this.state.getData.NewDeaths}</Text>
                <Text>TotalRecovered:{this.state.getData.TotalRecovered}</Text>
                <Text> Serious: {this.state.getData.Serious}</Text>
              </Card>
            </View>
          );

        }

      } else {
        return (
          <View>
            <Text></Text>
          </View>
        );
      }
    };
    return (
      <View style={styles.mainPage}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder="Input Date"
            onChangeText={(inputDate) => this.setState({ inputDate })}
          />

          <TextInput
            style={styles.input}
            placeholder="Input Country"
            onChangeText={(inputCountry) => this.setState({ inputCountry })}
          />
          <TouchableHighlight style={styles.btn} onPress={this.onSubmit}>
            <Text>Submit</Text>
          </TouchableHighlight>
          <DataInsert />
        </View>
        <VData />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  getCountry: state.getDatabyDCM,
});
const mapDispatchToProps = (dispatch) => {
  return {
    submit: (d, c) => {
      dispatch(getDatabyDACMAPI(d, c));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetData_DACM);
