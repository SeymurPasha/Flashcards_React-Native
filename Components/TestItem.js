import Icon from 'react-native-vector-icons/FontAwesome5'
import React,{useState, useEffect} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Tts from 'react-native-tts'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';


const TestItem =  ({text, updatedData, setUpdatedData, hideSubmit}) => {

    const [answer, submitAnswer] = useState('')
    const [color, setColor] = useState('gray');
   

    
    const checkAnswer = () => {

     if (answer == text.eng && answer !== '') {
      setColor('green')
      setUpdatedData(updatedData.map(item => item.eng === text.eng ? {...item, completed : true} : item))
     }
      
    } 

      useEffect(() => {
        checkAnswer()
      }, [answer])


return (
  
    <View style = {styles.container}> 
      <Text  style = {styles.az}>{text.az}</Text>
      <Icon name = "volume-up" style = {styles.dinle} onPress = {() => Tts.speak(text.eng)}  size = {30} color = 'gold'/>
      <TextInput
      onChangeText = {(text) => submitAnswer(text)}
      value = {answer}
      style={[styles.input,{borderColor:color}]}
      onFocus = {hideSubmit}
      onBlur = {hideSubmit}
      />
      
   </View>

 );
};


const styles = StyleSheet.create({
  container : {
    display:'flex',
    flexDirection:'column'
  },
  az : {
    height:hp('8%'),
    color:'white',
    textAlign:'center',
    fontSize:wp('7%'),
    margin:10,
  },
  input:{
    height:hp('8%'),
    color:'white',
    textAlign:'center',
    borderColor:'gray',
    borderWidth:3,
    borderRadius:20,
    fontSize:wp('7%'),
    margin:10
  },
  dinle : {
  alignSelf:'center',
  }
   
  });

export default TestItem;
