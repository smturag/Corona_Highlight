import React, { Component,useEffect,useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { countCountryApi } from "../../src/action/index";
import { Dimensions } from "react-native";
import Vmde from "../Components/ViewMultipaleDatesEntry";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import st from "../style/maxCountry";
import { TouchableHighlight } from "react-native-gesture-handler";

class MaxCountryData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputDate: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      data: props.countCountry,
    };
  }
  componentDidMount() {
   
   }
  onSubmit = () => {
    this.state.inputDate != ""
      ? this.props.hitSubmit(this.state.inputDate)
      : console.log("error");
  };



  render() {
   
    return (
      <View style={st.mainPage}>
        <View style={st.headBox}>
          <TextInput
            style={st.input}
            placeholder="Enter the Dates"
            onChangeText={(inputDate) => this.setState({ inputDate })}
          />
          <TouchableHighlight style={st.btn} onPress={this.onSubmit}>
            <Text>Done</Text>
          </TouchableHighlight>
        </View>
        <View style={st.vsData}>
          <Vmde data={this.state.data} />
          <Vmde fDate={this.state.inputDate}/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  countCountry: state.countCountry,
});

const mapDispatchToProps = (dispatch) => {
  return {
    hitSubmit: (a) => {
      dispatch(countCountryApi(a));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MaxCountryData);
