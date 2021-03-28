import * as React from 'react';
import { render } from 'react-dom';
import { Button, View, Text,TextInput,Image,Tab,TouchableOpacity,Alert, ScrollView } from 'react-native';

export default class Inscrire extends React.Component {


    render(){

        return (
            <ScrollView >
                <View style={styles.inscrireContainer}>
                    <View style={styles.inscrireContent}>
                        <TextInput  style={{flex:1,borderWidth:1,borderRadius:4,borderColor:'forestgreen',marginBottom:10}} placeholder='Nom complete'/>
                        <TextInput style={{flex:1,borderWidth:1,borderRadius:4,borderColor:'forestgreen',marginBottom:10}} placeholder='votre numero '/>
                        <TextInput style={{flex:1,borderWidth:1,borderRadius:4,borderColor:'forestgreen',marginBottom:10}}  placeholder='email'/>
                        <TextInput style={{flex:1,borderWidth:1,borderRadius:4,borderColor:'forestgreen',marginBottom:10}} placeholder='mot de passe'/>
                        <TextInput style={{flex:1,borderWidth:1,borderRadius:4,borderColor:'forestgreen',marginBottom:10}} placeholder='répeter votre mot de passe'/>
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