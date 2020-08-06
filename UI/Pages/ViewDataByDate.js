import React, { Component} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

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
            let count = true
            let month = parseInt(new Date().getMonth());
            month = month + 1;
            let getDate = parseInt(new Date().getDate())
            let year = parseInt(new Date().getFullYear())
            let date = getDate + "-" + month + "-" + year
            console.log(date)
            let hours = new Date().getHours()
            if (hours > 0 && hours < 15) {
                 date = (getDate-1) + "-" + month + "-" + year
                 if (count === true) {                 
                    date != "" ? this.props.hitSubmit(date) : console.log("error");
                    console.log(date);
                    count = false
    
                }

            }else{
                if (count === true) {                 
                    date != "" ? this.props.hitSubmit(date) : console.log("error");
                    console.log(date);
                    count = false    
                }

            }
        }
         autoCall()



    }

    submit = () => {
        this.state.inputDate != ""
            ? this.props.hitSubmit(this.state.inputDate)
            : console.log("error");
    };

    render() {

        return (
            <View style={{ alignContent: "center" }}>
                <TextInput
                    placeholder="Enter the date"
                    onChangeText={(inputDate) => this.setState({ inputDate })}
                />

                <TouchableOpacity onPress={this.submit}>
                    <Text>Submit</Text>
                </TouchableOpacity>


                <Card>
                    <View style={{ flexDirection: "row" }}>


                        <ADFL dataSet={this.state.data.CountryName} />
                        <ADFL dataSet={this.state.data.TotalCases} />
                        <ADFL dataSet={this.state.data.NewCases} />
                        <ADFL dataSet={this.state.data.TotalDeaths} />
                        <ADFL dataSet={this.state.data.NewDeaths} />
                        <ADFL dataSet={this.state.data.TotalRecovered} />
                        <ADFL dataSet={this.state.data.ActiveCases} />
                        <ADFL dataSet={this.state.data.Serious} />
                        <ADFL dataSet={this.state.data.Population} />
                    </View>
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
