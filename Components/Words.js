
import React,{useState, useEffect} from 'react';


import Word from './Word'

import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';


const Words =  ({boxWords}) => {

  const [current , setCurrent] = useState(0)

  const nextWord = () => {

  setCurrent(prev => prev + 1)
  }

  useEffect(() => {
   const scroll =  setTimeout(() => {
     nextWord()
   }, 3000);
    return () => {
    clearInterval(scroll)
     }
  }, [current])



return (
  <View style = {styles.container}>
      <ImageBackground source = {require('../night-1851685_1280.png')} style = {styles.image}>
    <Word boxWords = {boxWords} nextWord = {nextWord} text = {boxWords[current]} current = {current} />
   </ImageBackground>
  </View>
 );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  redirect: {
    position:'absolute',
    top:20,
    right:20,
    fontSize:13,
    color:'white'
    },
    image: {
      flex: 1,
      resizeMode: "contain",
      justifyContent: "center"
    }
});

export default Words;
