import React, { useState } from "react";
import { Button, View, Text,TextInput,Image,Tab,TouchableOpacity,Alert, ScrollView } from 'react-native';
import axios from 'axios';


function Inscrire({ navigation })  {


  const [nomState, setNom] = useState("");
  const [telState, setTel] = useState("0");
  const [typeState, setType] = useState("User");
  const [emailState, setEmail] = useState("");
  const [mot_de_passeState, setMot_de_passe] = useState("");
     
      
  


  const onSubmit = async () => {
    
   axios.get('http://192.168.1.15:4000/')
            .then(res => {
              console.log(res.data);
               
            })
            .catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message);
               // ADD THIS THROW error
                throw error;
              });
  };

  
  

  

    return (

      <ScrollView  >
          <View>
            <Text >bonjour</Text>
          </View>
      </ScrollView>
  );
  

}


const styles={
  container:{
    
    
    padding:10,display:'flex',flex:1,
    borderWidth:1
    
  
  }
  ,
  content:{
      borderColor:'blue',
      borderWidth:1,
      flex:1,heeight:300
      
  },
  textInpuborder:{
    borderWidth:1,
  
  },
  text:{
    marginBottom:10,
   
  },
  buttons1:{
    backgroundColor:'forestgreen',
    padding:10,
  
    alignItems: "center",
    borderRadius:4
  }
}


export default Inscrire;