
import React,{useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useHistory } from 'react-router-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import TestItem from './TestItem';

const Test =  ({boxWords, level, wordsData}) => {

  const [updatedData, setUpdatedData] = useState([])
  const [levelProperty, setLevelProperty] = useState([])
  const [visibility, setVisibility] = useState(true)


  useEffect(() => { 
    switch (level) {
      case 'Başlanğıc':
        setUpdatedData(wordsData.beginner)
        setLevelProperty('beginner')
        break;
      case 'Orta':
         setUpdatedData(wordsData.intermediate)
        setLevelProperty('intermediate')
        break;
      case 'Yuxarı':
         setUpdatedData(wordsData.advanced)
        setLevelProperty('advanced')
        break;
      default:
        break;
    }
  },[])

  const storeAnswer = () => {
    let newArray = wordsData
    newArray[levelProperty] = updatedData
    storeData(newArray)
  }


    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
      } catch (e) {
        console.log(e);
      }
    }

    const hideSubmit = () => {
      setVisibility(!visibility)
    }
    const startGame = () => {
      history.push('/landingPage')
    }


    let visibilityValue = visibility ? 'flex' : 'none'
    let history = useHistory();
  
return (
  <View style = {styles.container}>
    <ImageBackground source = {require('../night-1851685_1280.png')} style = {styles.image}>
    <Text style = {styles.heading}>Sözlərin tərcümələrini yazın və sonda təsdiqləyin</Text>
    <ScrollView style = {styles.boxWords}>
    {boxWords.map((item, index) => <TestItem key = {index} updatedData = {updatedData} setUpdatedData = {setUpdatedData} text = {item} level = {level} wordsData = {wordsData} hideSubmit = {hideSubmit} />)} 
    </ScrollView>
    <TouchableOpacity style = {[styles.TouchableOpacity,{display:visibilityValue}]}>
   <Text 
    style = {styles.btn}
    onPress = {() => {
      storeAnswer();
      startGame()
    }}
   >
    Təsdiqlə
   </Text>
   </TouchableOpacity>
   </ImageBackground>
  </View>
 );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#1687a7'
  },
  boxWords : {
    flex:1
  },
  heading : {
  marginTop: 30,
  marginBottom:15,
  color:'white',
  fontSize:20,
  textAlign:'center'
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  },
  TouchableOpacity : {
    marginTop:30,
    height:100,
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
  },
  btn : {
    textAlign:'center',
    textAlignVertical:'center',
    borderRadius:10,
    width:wp('50%'),
    height:50,
    color:'white',
    backgroundColor:'#00587a',
    fontSize:wp('6%')
  }
});

export default Test;
