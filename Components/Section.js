
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { useHistory } from 'react-router-native';


const Section =  ({level, setWordsLevel}) => {

  let history = useHistory();


return (
  <View>
 <TouchableOpacity>
   <Text 
    style = {styles.btn}
    onPress = {() => {
    setWordsLevel(level);
    history.push('/boxes');
   }}
   >
    {level}
   </Text>
   </TouchableOpacity>
   </View>
 );
};
const styles = StyleSheet.create({
  btn: {
    width:wp('50%'),
    textAlign:'center',
    margin:10,
    padding:10,
    borderRadius:20,
    backgroundColor:'#00587a',
    color:'white',
    fontSize:wp('6%'),
  }
});

export default Section;
