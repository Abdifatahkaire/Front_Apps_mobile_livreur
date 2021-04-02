import * as React from 'react';
import { render } from 'react-dom';
import { Button, Picker, View, Text,TextInput,Image,Tab,TouchableOpacity,Alert, ScrollView } from 'react-native';

export default class Inscrire extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isFocus1:true,
            isFocus2:true,
            isFocus3:true,
            isFocus4:true,
            isFocus5:true,
            nom:'',
            tel:'',
            type:'',
            email:'',
            mot_de_passe:'',
            repeter_mot_de_passe:'',
            errorChamps1:false,
            errorChamps2:false,
            errorChamps3:false,
            errorChamps4:false,
            errorChamps5:false,
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

    SignUp = () => {
      
       if(this.state.nom === ''){
           this.setState({errorChamps1:true})
       }
       if(this.state.tel === ''){
        this.setState({errorChamps2:true})
    }
    if(this.state.email === ''){
        this.setState({errorChamps3:true})
    }
    
    if(this.state.mot_de_passe === ''){
        this.setState({errorChamps4:true})
    }
    if(this.state.repeter_mot_de_passe === ''){
        this.setState({errorChamps5:true})
    }

    if(this.state.nom !== '' && this.state.tel !== '' && this.state.email !== '' && this.state.mot_de_passe !== '' && this.state.repeter_mot_de_passe !== ''){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === false) {
          Alert.alert("Email is Not Correct");
        }
        else {
          Alert.alert("Email is Correct");
        }
    }

    }

    render(){

        return (
            <ScrollView >
                <View style={styles.inscrireContainer}>
                    <View style={styles.inscrireContent}>
                        <TextInput value={this.state.nom} onChangeText={(text)=>this.setState({nom:text})} onFocus={this.handleFocus1}  onBlur={this.handleBlur1} style={[{flex:1,marginBottom:10},{borderBottomColor: this.state.isFocused1  ? 'forestgreen' : 'black',borderBottomWidth:1,borderRadius:4}]} placeholder='Nom complete'/>
                        {this.state.errorChamps1 && <View><Text style={{color:'red',fontSize:8}}>Please completer le nom</Text></View> }
                         
                       
                        <TextInput value={this.state.tel} onChangeText={(text)=>this.setState({tel:text})} onFocus={this.handleFocus2}  onBlur={this.handleBlur2} style={[{flex:1,marginBottom:10},{borderBottomColor: this.state.isFocused2  ? 'forestgreen' : 'black',borderBottomWidth:1,borderRadius:4}]} placeholder='votre numero '/>
                        {this.state.errorChamps2 && <View><Text style={{color:'red',fontSize:8,marginBottom:10}}>Please completer votre telephone</Text></View> }
                        
                        <Text>Type d'inscription:</Text>
                        <Picker
                            selectedValue={this.state.type}
                            onValueChange={(itemValue, itemIndex) => {
                            this.setState({type:itemValue});
                            }}
                        >
                            <Picker.Item label="user" value="user" />
                            <Picker.Item label="livreur" value="livreur" />
                            
                            
                        </Picker>
                        <TextInput value={this.state.email3} onChangeText={(text)=>this.setState({email:text})} onFocus={this.handleFocus3}  onBlur={this.handleBlur3} style={[{flex:1,marginBottom:10},{borderBottomColor: this.state.isFocused3  ? 'forestgreen' : 'black',borderBottomWidth:1,borderRadius:4}]}  placeholder='email'/>
                        {this.state.errorChamps3 && <View><Text style={{color:'red',fontSize:8}}>Please completer votre email</Text></View> }
                        
                        <TextInput value={this.state.mot_de_passe} onChangeText={(text)=>this.setState({mot_de_passe:text})} onFocus={this.handleFocus4}  onBlur={this.handleBlur4} style={[{flex:1,marginBottom:10},{borderBottomColor: this.state.isFocused4  ? 'forestgreen' : 'black',borderBottomWidth:1,borderRadius:4}]} placeholder='mot de passe'/>
                        
                        {this.state.errorChamps4 &&  <View><Text style={{color:'red',fontSize:8}}>Please completer votre mot de passe</Text></View>  }
                        
                        <TextInput value={this.state.repeter_mot_de_passe} onChangeText={(text)=>this.setState({repeter_mot_de_passe:text})} onFocus={this.handleFocus5}  onBlur={this.handleBlur5} style={[{flex:1,marginBottom:10},{borderBottomColor: this.state.isFocused5  ? 'forestgreen' : 'black',borderBottomWidth:1,borderRadius:4}]} placeholder='répeter votre mot de passe'/>
                        {this.state.errorChamps5 && <View><Text style={{color:'red',fontSize:8,marginBottom:15}}>Please completer réperter votre  mot_de_passe</Text></View> }
                        
                        
                        <View style={{flex:1,justifyContent:'center'}}>
                            <TouchableOpacity
                                    style={{backgroundColor:'forestgreen',paddingBottom:10,paddingTop:10,borderRadius:4,display:'flex',alignItems:'center'}}
                                    onPress={this.SignUp.bind(this)}
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