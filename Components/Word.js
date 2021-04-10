
import React, { useEffect } from 'react';
import Tts from 'react-native-tts'


import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Redirect } from 'react-router-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




const Word =  ({boxWords,text,current}) => {

  useEffect(() => {
    text ? Tts.speak(text.eng,
      {
        androidParams: {
          KEY_PARAM_PAN: 1,
          KEY_PARAM_VOLUME: 1,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      }
      ) : Tts.stop()
  
  }, [text])

  if(current < boxWords.length ) {
  return (
  <View style = {styles.container}>
  <Text style = {styles.showAz} >{text.az}</Text>
  <Text style = {styles.eng} >{text.eng}</Text>
  </View>
  );
}
else {
  return (
    <View style = {styles.container}>
      <Redirect to = '/test' />
    </View>
    );
}
};



const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:hp('8%'),
    alignItems:'center'
  },
  eng: {
    position:'absolute',
    textAlign:'center',
    top:100,
    width:350,
    height:80,
    fontSize : wp('11%'),
    padding:5,
    color:'white',
  },
  showAz: {
    position:'absolute',
    textAlign:'center',
    top:235,
    width:350,
    height:80,
    fontSize : wp('11%'),
    color:'white',
    padding:5,
  }
});


export default Word;
