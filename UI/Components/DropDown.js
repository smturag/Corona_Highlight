
import React, { Component } from 'react'
import { View } from 'react-native'
import { Picker } from '@react-native-community/picker';

const Abc = React.forwardRef((props, ref) => (
    <Picker
        ref={ref}
        {...props}
        selectedValue={'abc'}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })

        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaSt" value="jsa" />
    </Picker>
)
)
export default Abc