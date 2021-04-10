
import React  from 'react';
import { useHistory } from "react-router-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const Start =  ({topMargin}) => {

let history = useHistory();

const startGame = () => {
  history.push('/landingPage')
}

  
return (
  <View style = {styles.content}>
    <Text
    onPress = {startGame} 
    style = {[styles.start,{marginTop:topMargin}]}>
     Başla
    </Text>  
    </View>
 );
};

const styles = StyleSheet.create({
  content : {
  alignItems:'center'
  },
  start : {
    width: wp('50%'),
    padding:10,
    backgroundColor:'#00587a',
    color:'white',
    fontSize:wp('6%'),
    textAlignVertical:'center',
    textAlign:'center',
    borderRadius:16
  }
});


export default Start;
