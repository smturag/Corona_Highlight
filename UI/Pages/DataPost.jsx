import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DataInsertApi } from '../../src/action/index'
import { connect } from 'react-redux'


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
                <TouchableOpacity onPress={this.onSubmit}>
                    <Text>DataInsert</Text>
                </TouchableOpacity>
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


