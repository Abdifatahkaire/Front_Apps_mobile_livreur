import * as React from 'react';
import { Button, View, Text,TextInput,Image,Tab,TouchableOpacity } from 'react-native';




export default  class  Connexion extends React.Component {

    render(){
      return (

        <View  style={styles.container}>

       

               
     
    

    
        
         <View style={{flex:1}}><Text  >Email:</Text></View>
         <View style={{flex:1}}><TextInput style={styles.textInpuborder}  placeholder='Votre email'/></View>
         <View style={{flex:1}}><Text >Mot de passe:</Text></View>
         <View style={{flex:1}}><TextInput style={styles.textInpuborder}  placeholder='mot de passe'/></View>
    

   
         <View style={{flex:1}}>
               <TouchableOpacity
               style={styles.buttons1}
               onPress={()=>{}}
             >
               <Text style={{color:'#fff'}}>Se Connecter</Text>
             </TouchableOpacity>
         </View>
    



</View  >

      );
    }
    
  }



  const styles={
    container:{
      
      
      padding:10,display:'flex',flex:1
      
    
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