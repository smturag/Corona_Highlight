import React,{Component} from 'react'
import {View,StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {countCountryApi} from '../../src/action/index'
import { Dimensions } from 'react-native';
import Vmde from '../Components/ViewMultipaleDatesEntry'


class MaxCountryData extends Component{
    constructor(props){
        super(props)
            this.state={
                data:[],
                inputDate:''

            }
        }
        static getDerivedStateFromProps(props, state) {
           return{
            data: props.countCountry
           }
            
        }
        componentDidMount(){
           
        }
        onSubmit=()=>{
            this.state.inputDate!=''? this.props.hitSubmit(this.state.inputDate):console.log('error')
            
        }        

        render(){
            return(
                <View>
                    <TextInput
                        placeholder= 'Enter the Date'
                        onChangeText={(inputDate)=> this.setState({inputDate})}

                    />
                    
                    <Vmde data = {this.state.data}/>
                    <TouchableOpacity onPress={this.onSubmit}>
                        <Text>Done</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    
    const styles = StyleSheet.create({
        header:{
            color: '#ff3399',
            fontSize: 30,
            flex: 1,
            marginTop:0
            
        }

    })
   
    const mapStateToProps = (state, ownProps) => ({
        countCountry: state.countCountry
        
    })
    
    const mapDispatchToProps = dispatch =>{
        return{
            hitSubmit:(a)=>{dispatch(countCountryApi(a))}
        }
        
    }
    export default connect(mapStateToProps, mapDispatchToProps)(MaxCountryData)
    
