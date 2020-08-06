import React, { Component, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
//import { TextInput } from 'react-native-gesture-handler'
import { connect } from "react-redux";
import { getDatabyDACMAPI, ViewData } from "../../src/action/index";
import { Picker } from "@react-native-community/picker";
import DDL from "../Components/DropDown";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";
import { FlatList } from "react-native-gesture-handler";

class GetData_DACM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getData: [],
      getCountrys: [],
      inputDate: "",
      inputCountry: "",
      language: "Nothing",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      getData: props.getCountry
    };
  }
  onSubmit = () => {
    if (this.state.inputDate != "" && this.state.inputCountry != "") {
      let d = this.state.inputDate;
      let c = this.state.inputCountry;

      this.props.submit(d, c);
    }
  };
  render() {
    return (
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <TextInput
          placeholder="Input Date"
          onChangeText={(inputDate) => this.setState({ inputDate })}
        />

        <TextInput
          placeholder="Input Country"
          onChangeText={(inputCountry) => this.setState({ inputCountry })}
        />

        <TouchableOpacity onPress={this.onSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>


        <Text>{this.state.getData.ActiveCases}</Text>
        <Text>{this.state.getData.Population}</Text>
        <Text>{this.state.getData.TotalDeaths}</Text>
        <Text>{this.state.getData.NewDeaths}</Text>
        <Text>{this.state.getData.TotalRecovered}</Text>
        <Text>{this.state.getData.Serious}</Text>
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
