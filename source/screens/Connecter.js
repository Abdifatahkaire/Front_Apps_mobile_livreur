import * as React from 'react';
import { render } from 'react-dom';
import { Button, View, Text,TextInput,Image,Tab,TouchableOpacity,Alert, ScrollView } from 'react-native';

export default class Connecter extends React.Component {

   constructor(props){
       super(props);
   }

    render(){

        return (<ScrollView>
               <View style={styles.connecterContainer}>
                     <View style={styles.connecterContent1}>
                        <TextInput style={{borderWidth:1,borderColor:'forestgreen',marginBottom:15}} placeholder='Email'/>
                        <TextInput style={{borderWidth:1,borderColor:'forestgreen',marginBottom:15}} placeholder='mot de passe'/>
                        <TouchableOpacity
                                    style={{backgroundColor:'forestgreen',paddingBottom:10,paddingTop:10,borderRadius:4,display:'flex',alignItems:'center'}}
                                    onPress={()=>{}}
                                    >
                                    <Text style={{color:'#fff',fontSize:16}}>Se Connectez-vous</Text>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.connecterContent2}>
                        <View>
                           <Text style={{fontSize:20}}>or</Text>
                        </View> 
                         
                     </View>
                     <View style={styles.connecterContent3}>
                         <View style={{display:"flex",alignItems:'center'}}>
                               <View style={{display:'flex',flexDirection:'row'}}>
                                   <View  style={{marginRight:15,display:'flex',justifyContent:'center',}}>
                                       <Text style={{fontSize:16}}>Se connecter avec </Text>
                                   </View>
                                   <View  style={{marginRight:15}}>
                                        <TouchableOpacity
                                                        style={{backgroundColor:'forestgreen',paddingRight:15,paddingLeft:15,paddingTop:5,paddingBottom:5,borderRadius:4}}
                                                        onPress={()=>{}}
                                                        >
                                                        <Text style={{color:'#fff',fontSize:20}}>F</Text>
                                            </TouchableOpacity>
                                   </View>
                                   <View  >
                                        <TouchableOpacity
                                                        style={{backgroundColor:'forestgreen',paddingRight:15,paddingLeft:15,paddingTop:5,paddingBottom:5,borderRadius:4}}
                                                        onPress={()=>{}}
                                                        >
                                                        <Text style={{color:'#fff',fontSize:20}}>G</Text>
                                        </TouchableOpacity>
                                   </View>
                                    
                                   
                                    
                                </View> 
                                
                         </View>
                         
                     </View>
               </View>
        </ScrollView>);
    }
}



const styles={
    connecterContainer:{
       height:550,
      
       display:'flex',
       justifyContent:'space-around',
       backgroundColor:'#dddddd',
       paddingLeft:10,
       paddingRight:10
    },
    connecterContent1:{
       
    },
    connecterContent2:{
        
        borderColor:'forestgreen',
         display:'flex',
         alignItems:'center'
    },
    connecterContent3:{
     
        borderColor:'forestgreen',
        display:'flex',
        paddingBottom:150
        
    }

}