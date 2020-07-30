import React,{Component} from 'react'
import {View,Text,TextInput, TouchableOpacity,ScrollView } from 'react-native'

import { connect } from 'react-redux'
import {fetchDataAPIbyDate} from '../../src/action/index'
import ADFL from '../../UI/Components/AllDataFlatList'


class AllDataByDate extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            inputDate:''


        }
    } 
    static getDerivedStateFromProps(props, state) {
        return{
            data: props.dateValue

        }
    }
    componentDidMount(){

    }


    submit=()=>{
        this.state.inputDate!=''? this.props.hitSubmit(this.state.inputDate):console.log('error')
    }

    render(){



        return(
            <View>
               <TextInput
                   placeholder="Enter the date"
                   onChangeText={(inputDate)=> this.setState({inputDate})}
               />
               
               <View style={{flexDirection: 'row', flexWrap: 'wrap' }}>
                <ADFL dataSet={this.state.data.CountryName}/>
                <ADFL dataSet={this.state.data.TotalCases}/>
                <ADFL dataSet={this.state.data.NewCase}/>
                <ADFL dataSet={this.state.data.TotalDeaths}/>
                <ADFL dataSet={this.state.data.NewDeaths}/>
                <ADFL dataSet={this.state.data.TotalRecovered}/>
                <ADFL dataSet={this.state.data.ActiveCases}/>
                <ADFL dataSet={this.state.data.Serious}/>
                <ADFL dataSet={this.state.data.Population}/>
                

               </View>
               
             
               <TouchableOpacity onPress={this.submit}>
                <Text>Submit</Text>

               </TouchableOpacity>
                
            </View>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    dateValue: state.dataByDate

    
})
const mapDispatchToProps = dispatch=>{
    return{
        hitSubmit:(a)=>{dispatch(fetchDataAPIbyDate(a))}

    }
    
}


export default connect(mapStateToProps,mapDispatchToProps)(AllDataByDate)

