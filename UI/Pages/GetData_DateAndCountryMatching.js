import React,{Component} from 'react'
import {View,TextInput} from 'react-native'
//import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import {getDatabyDACMAPI} from '../../src/action/index'
import { Dropdown } from 'react-native-material-dropdown';



class GetData_DACM extends Component{
    constructor(props){
        super(props)
        this.state={
            getData:[],
            inputDate:'',
            inputCountry:'',
             data: [{
                value: 'Banana',
              }, {
                value: 'Mango',
              }, {
                value: 'Pear',
              }]

        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        
    }
    render(){

        return(
            <View style={{alignContent:'center',alignItems: 'center'}}>
                <TextInput
                    placeholder='Input Date'
                    onChangeText={(inputDate)=>this.setState({inputDate})}
                />
                 <Dropdown
                    label='Favorite Fruit'
                    data={this.state.data.value}
                />
                {/* <ModalDropdown options={['option 1', 'option 2']}/> */}
                
               
            </View>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    
})
const mapDispatchToProps = dispatch =>{
    return{
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GetData_DACM)
