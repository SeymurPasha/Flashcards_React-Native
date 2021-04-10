
import React,{ useEffect } from 'react';
import {useHistory } from "react-router-native";


import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const Main =  () => {

  let history = useHistory();


return (
  <View style = {styles.header}>
    <Text 
    style = {styles.text}
    onPress = {() => {
    history.push('/')
     }}
    >Əsas səhifə</Text>
    
    <Text 
    style = {styles.text}
    onPress = {() => {
    history.goBack()
     }}
    >Geri</Text>
  </View>
 );
};

const styles = StyleSheet.create({
  header : {
    flex:0,
    flexDirection:'row',
    justifyContent:'space-around',
  textAlign:'center',

  },
  text: {
    width:200,
    padding:15,
    textAlign:'center',
    color:'white',
    fontSize:20,
    fontWeight:'900'
  }
});



export default Main;
