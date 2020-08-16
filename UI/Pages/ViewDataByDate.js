import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";
import { connect } from "react-redux";
import { fetchDataAPIbyDate } from "../../src/action/index";
import ADFL from "../Components/AllDataFlatList";
import styles from "../style/styleFile";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

class AllDataByDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputDate: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      data: props.dateValue,
    };
  }
  componentDidMount() {
    let autoCall = () => {
      let count = true;
      let month = parseInt(new Date().getMonth());
      month = month + 1;
      let getDate = parseInt(new Date().getDate());
      let year = parseInt(new Date().getFullYear());
      let date = getDate + "-" + month + "-" + year;
      console.log(date);
      let hours = new Date().getHours();
      hours = parseInt(hours);
      console.log(hours);
      if (hours >= 0 && hours <= 15) {
        date = getDate - 1 + "-" + month + "-" + year;
        if (count === true) {
          date != "" ? this.props.hitSubmit(date) : console.log("error");
          console.log(date);
          count = false;
        }
      } else {
        if (count === true) {
          date != "" ? this.props.hitSubmit(date) : console.log("error");
          console.log(date);
          count = false;
        }
      }
    };
    autoCall();
  }

  submit = () => {
    this.state.inputDate != ""
      ? this.props.hitSubmit(this.state.inputDate)
      : console.log("error");
  };

  render() {
    const DataCheck = () => {
      if (this.state.data === "Error") {
        return (
          <View>
            <Text style={styles.noText}>No Data avilable</Text>
          </View>
        );
      } else {
        return (
          <View>         
            <View style={styles.contendDataSet}>
              <View style={{margin:4}}>
                <Text>Country Name</Text>
                <ADFL dataSet={this.state.data.CountryName} />
              </View>
              <View style={{margin:4}}>
                <Text >Total Cases </Text>
                <ADFL dataSet={this.state.data.TotalCases} />
              </View>
              <View style={{margin:4}}>
                <Text >New Cases</Text>
                <ADFL dataSet={this.state.data.NewCases} />
              </View>
              <View style={{margin:4}}>
                <Text >Total Deaths</Text>
                <ADFL dataSet={this.state.data.TotalDeaths} />
              </View>
              <View style={{margin:4}}>
                <Text>New Deaths</Text>
                <ADFL dataSet={this.state.data.NewDeaths} />
              </View>
              <View style={{margin:4}}>
                <Text>Total Recovered</Text>
                <ADFL dataSet={this.state.data.TotalRecovered} />
              </View>
              <View style={{margin:4}}>
                <Text>Active Cases</Text>
                <ADFL dataSet={this.state.data.ActiveCases} />
              </View>
              <View style={{margin:4}}>
                <Text>Serious</Text>
                <ADFL dataSet={this.state.data.Serious} />
              </View>
              <View style={{margin:4}}>
                <Text>Population</Text>
                <ADFL dataSet={this.state.data.Population} />
              </View>
            </View>
          </View>
        );
      }
    };

    return (
      <View style={styles.allDataView}>
        <View style={styles.HeadBar}>
          <TextInput
            style={styles.inputDate}
            placeholder="Enter the date"
            onChangeText={(inputDate) => this.setState({ inputDate })}
            multiline={false}
          />
          <TouchableHighlight onPress={this.submit} style={styles.button}>
            <Text>Submit</Text>
          </TouchableHighlight>
        </View>
      
        <Card>
          <DataCheck />
        </Card>
       
        
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  dateValue: state.dataByDate,
});
const mapDispatchToProps = (dispatch) => {
  return {
    hitSubmit: (a) => {
      dispatch(fetchDataAPIbyDate(a));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllDataByDate);
