
import React,{useEffect} from 'react';
import Section from './Section'
import Heading from './Heading'
import { Dimensions, AsyncStorageStatic, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

  const LandingPage =  ({setWordsLevel, setData, topMargin}) => {

    useEffect(() => {
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key')
         jsonValue != null ? JSON.parse(jsonValue) : null;
         setData(JSON.parse(jsonValue))
        } catch(e) {
        console.log(e);
        }
      }
      getData()
    }, [])
    
     
useEffect(() => {
  const windowHeight = Dimensions.get('screen').height
}, []);

return (
  <ImageBackground source = {require('../night-1851685_1280.png')} style = {styles.image}>
  <View style = {styles.container}>
 <Heading />
 <View style = {[ styles.button, {marginTop: topMargin}]}>
 <Section level = {'Başlanğıc'} setWordsLevel = {setWordsLevel}  />
 <Section level = {'Orta'}  setWordsLevel = {setWordsLevel} />
 <Section level = {'Yuxarı'} setWordsLevel = {setWordsLevel} />
 </View>
  </View>
  </ImageBackground>
 );
};

const styles = StyleSheet.create({
    container: {
      marginTop:50,
      flex:1,
      margin:4,
      fontFamily: 'Fraunces'
    },
    button : {
      flex:1,
      alignItems:'center',
    },
    image: {
      flex: 1,
      resizeMode: "contain",
      justifyContent: "center"
    }
  });


export default LandingPage;
