import * as React from 'react';
import { render } from 'react-dom';
import { Button, View, Text,TextInput,Image,Tab,TouchableOpacity,Alert, ScrollView } from 'react-native';
import livreurImage from '../Images/moto_livreur.png';

export default class Home extends React.Component{

    render(){
        return(
            <ScrollView >
                <View style={styles.homeContainer}>
                    <View style={styles.homecontent1}>
                        <View>
                          <Text style={{fontSize:20,paddingBottom:15,paddingTop:15}}>Bienvenu</Text>
                        </View>
                    </View>
                    <View style={styles.homecontent2}>
                        <View>
                            <Text style={{fontSize:20,paddingBottom:10}}>Vous avez besoin de livrés des colis?</Text>
                            <View style={{display:'flex',alignItems:'center'}}>
                               <Text style={{fontSize:16}}> veuillez visite votre profile  !!</Text>
                               <Text style={{fontSize:16}}>Et decouvrir notre application !!</Text>
                            </View>
                        </View>  
                    </View>
                    <View style={styles.homecontent3}>
                        <View >
                        <Image
                         source={livreurImage}
                        />
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}


const styles={

    homeContainer:{
     height:510,
     display:'flex',
     justifyContent:'center',
     backgroundColor:'#dddddd',
     
    },
    homecontent1:{
      marginBottom:30,
      display:'flex',
      alignItems:'center'
    },
    homecontent2:{
        marginBottom:30,
        
        paddingTop:15,
        paddingBottom:15,
        display:'flex',
        alignItems:'center'
    },
    homecontent3:{
        
        paddingTop:15,
        paddingBottom:15,
       
        display:'flex',
        alignItems:'center',
    }
}