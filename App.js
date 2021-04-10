

import React, { useState, useEffect } from 'react';
import Words from  './Components/Words';
import Boxes from './Components/Boxes';
import Test from './Components/Test';
import  Description from './Components/Description'
import  Start from './Components/Start'
import LandingPage from './Components/LandingPage';
import Main from './Components/Main'
import { NativeRouter, Route } from "react-router-native";
import {StyleSheet, View, ImageBackground} from 'react-native';
import { Dimensions } from 'react-native'
import data from './data'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tts from 'react-native-tts'




const App = () => {
  
  const [level, setLevel] = useState('');
  const [boxWords, setBoxWords] = useState([]);
  const [wordsData, setData] = useState({})
  const [showLoader, setLoader] = useState(false)
  const [topMargin, setMargin] = useState(80)
  const [numCol, setNumCol] = useState(4)

  const setWordsLevel = (name) => {
   setLevel(name);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
       jsonValue == null ? storeData(data) : null;
      } catch(e) {
      console.log(e);
      }
    }
    getData()
  }, [])

  useEffect(() => {
    Tts.setDefaultVoice('en-gb-x-gbc-network')
  }, [])

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
     await  AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
     console.log(e);
    }
  }



  useEffect(() => {
    const windowHeight = Dimensions.get('screen').height
    const windowWidth = Dimensions.get('screen').width
    windowHeight < 500 ? setMargin(30) : null
    windowWidth < 360 ? setNumCol(3) :null
  }, []);


  return (
    <NativeRouter>
   <ImageBackground source = {require('./night-1851685_1280.png')} style = {styles.image}>
    <View style = {styles.App}>
    <Main />
    <Route path = '/' exact render = {() => <Description />} /> 
    <Route path = '/' exact render = {() => <Start topMargin = {topMargin} />} /> 
    <Route path = '/landingPage' exact render ={(props) => <LandingPage {...props} setWordsLevel = {setWordsLevel} setData = {setData} topMargin = {topMargin} />} />
    <Route path = '/boxes' exact render = {(props) => <Boxes {...props} level = {level} setBoxWords = {setBoxWords} wordsData = {wordsData} showLoader = {showLoader}  setLoader = {setLoader} numCol = {numCol} />}/>
    <Route path = '/words' exact render = {(props) => <Words {...props}  boxWords = {boxWords}  setLoader = {setLoader} />}/>
    <Route path = '/test' exact render = {(props) => <Test {...props}  boxWords = {boxWords} level = {level} wordsData = {wordsData} />}/>
    </View>
    </ImageBackground>
    </NativeRouter>
  );
}


const styles = StyleSheet.create({
  App: {
    flex:1,
    textAlign:'center',
    fontFamily:'Roboto',
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  }
});

export default App;

