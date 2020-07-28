import React, { Component } from 'react'
import {Text,TouchableOpacity,View,FlatList,StyleSheet, TextInput} from 'react-native'
import { connect } from 'react-redux'
//import {VIEWDATA } from '../../src/action/type';
//import ViewData from '../../src/action/index'
import {dataFetch} from '../../src/action/index'
import Vmde from '../Components/ViewMultipaleDatesEntry'
import Input from '../Components/SeacrchInput'

class AllData extends Component{
    constructor(){
        super()
        this.state={
            values: [],
            inputVal:''
            
            
        }
    }

    static getDerivedStateFromProps(props, state) {
     return{
          values : props.val
     }
    }

    componentDidMount() {
   
    }
    shouldComponentUpdate() {
        return true;
      }

      submitValue=()=>{
          this.state.inputVal != '' ? this.props.abc(this.state.inputVal):console.log('null')

      }
      pass=()=>{

      }
      
    render(){       

        return(
            <View>
            <TextInput
                placeholder='Try Date'
                onChangeText={inputVal=> this.setState({inputVal})}               
            />
            

            <Input/>
            <Vmde data = {this.state.values}/>

        
                <TouchableOpacity onPress={this.submitValue}>
                <Text>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.pass}>
                    <Text>Props Pass</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        val: state.arrayData
    }
}
const mapDispatchToProps = dispatch =>{
    return ({
        abc: (a) => {dispatch(dataFetch(a))}
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(AllData)