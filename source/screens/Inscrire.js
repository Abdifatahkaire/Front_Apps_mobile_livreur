import * as React from 'react';
import { render } from 'react-dom';
import { Button, View, Text,TextInput,Image,Tab,TouchableOpacity,Alert, ScrollView } from 'react-native';

export default class Inscrire extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isFocus1:true,
            isFocus2:true,
            isFocus3:true,
            isFocus4:true,
            isFocus5:true
        }
    }

    handleFocus1 = () => this.setState({isFocused1: true})

    handleBlur1 = () => this.setState({isFocused1: false})

    handleFocus2 = () => this.setState({isFocused2: true})

    handleBlur2 = () => this.setState({isFocused2: false})

    handleFocus3 = () => this.setState({isFocused3: true})

    handleBlur3 = () => this.setState({isFocused3: false})

    handleFocus4 = () => this.setState({isFocused4: true})

    handleBlur4 = () => this.setState({isFocused4: false})

    handleFocus5 = () => this.setState({isFocused5: true})

    handleBlur5 = () => this.setState({isFocused5: false})

    render(){

        return (
            <ScrollView >
                <View style={styles.inscrireContainer}>
                    <View style={styles.inscrireContent}>
                        <TextInput onFocus={this.handleFocus1}  onBlur={this.handleBlur1} style={[{flex:1,marginBottom:10},{borderBottomColor: this.state.isFocused1  ? 'forestgreen' : 'black',borderBottomWidth:1,borderRadius:4}]} placeholder='Nom complete'/>
                        <TextInput onFocus={this.handleFocus2}  onBlur={this.handleBlur2} style={[{flex:1,marginBottom:10},{borderBottomColor: this.state.isFocused2  ? 'forestgreen' : 'black',borderBottomWidth:1,borderRadius:4}]} placeholder='votre numero '/>
                        <TextInput onFocus={this.handleFocus3}  onBlur={this.handleBlur3} style={[{flex:1,marginBottom:10},{borderBottomColor: this.state.isFocused3  ? 'forestgreen' : 'black',borderBottomWidth:1,borderRadius:4}]}  placeholder='email'/>
                        <TextInput onFocus={this.handleFocus4}  onBlur={this.handleBlur4} style={[{flex:1,marginBottom:10},{borderBottomColor: this.state.isFocused4  ? 'forestgreen' : 'black',borderBottomWidth:1,borderRadius:4}]} placeholder='mot de passe'/>
                        <TextInput onFocus={this.handleFocus5}  onBlur={this.handleBlur5} style={[{flex:1,marginBottom:10},{borderBottomColor: this.state.isFocused5  ? 'forestgreen' : 'black',borderBottomWidth:1,borderRadius:4}]} placeholder='répeter votre mot de passe'/>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <TouchableOpacity
                                    style={{backgroundColor:'forestgreen',paddingBottom:10,paddingTop:10,borderRadius:4,display:'flex',alignItems:'center'}}
                                    onPress={()=>{}}
                                    >
                                    <Text style={{color:'#fff',fontSize:16}}>Inscrivez-vous</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles={
    inscrireContainer:{
        height:700,
        display:'flex',
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10
        

    },
    inscrireContent:{
      height:400,
      
      display:'flex'
      
    }
}