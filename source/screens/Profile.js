import * as React from 'react';
import { render } from 'react-dom';
import { Button, View, Text,TextInput,Image,Tab,TouchableOpacity,Alert, ScrollView } from 'react-native';

export default class Profile extends React.Component{

  constructor(props){
      super(props);
  }

    render(){
        return(
        
           <ScrollView  >
                <View style={styles.Profilcontainer}>
                     <View  style={styles.content}>
                     
                     
                     
                     <View style={styles.centrerTitre}>
                       <Text style={styles.textTitre}>Votre Profile</Text>
                    </View>
                     <Text style={{fontSize:16}}>Pour proposer des colis et voir les livreur disponoble, S'il vous plait Connectez-vous
                         ou Inscrivez-vous
                     </Text> 
                     <View style={styles.buttons}>
                         <View >
                                <TouchableOpacity
                            style={styles.buttonConnecter}
                            onPress={()=>{this.props.navigation.navigate('Se Connecter')}}
                            >
                            <Text style={{color:'#fff',fontSize:16}}>Se Connecter</Text>
                            </TouchableOpacity>
                            <View style={{display:'flex',alignItems:'center'}}>
                                <TouchableOpacity
                                
                                onPress={()=>{this.props.navigation.navigate('Inscrire')}}
                                >
                                <Text style={{color:'forestgreen',fontSize:16}}>Inscrivez-vous</Text>
                                </TouchableOpacity>
                            </View>
                         </View>
                     </View> 

                     </View >
                </View>
           </ScrollView>


            )
    }
}


const styles={
  
     Profilcontainer:{
         height:510,
         
        
         display:'flex',
         justifyContent:'center',
         backgroundColor:'#dadada'
     }
     ,
     content:{
        
         paddingBottom:150,
         paddingLeft:10,
         paddingRight:10
         
     },
     centrerTitre:{
       display:'flex',
       alignItems:'center',
       marginBottom:15
     },
     textTitre:{
         fontSize:30,

     },
     buttons:{
         display:'flex',
        
         alignItems:'center',
         
     },
     buttonConnecter:{
         backgroundColor:'forestgreen',
         marginTop:15,
         marginBottom:15,
         paddingLeft:70,
         paddingRight:70,
         paddingTop:10,
         paddingBottom:10,
         borderRadius:4,
         
         
     }
}