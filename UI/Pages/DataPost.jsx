import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DataInsertApi } from '../../src/action/index'
import { connect } from 'react-redux'
import { TouchableHighlight } from "react-native-gesture-handler";
import styles from "../style/getDataDate&CounntryM";


class DataInsert extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() { }
    onSubmit = () => {
       return DataInsertApi()
        console.log('Going')

    };
    render() {
        return (
            <View>
                <TouchableHighlight style={styles.btnDataInsert} onPress={this.onSubmit}>
                    <Text>DataInsert</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitTo: () => { dispatch(DataInsertApi()) }

    }
}

export default connect(mapDispatchToProps)(DataInsert)


