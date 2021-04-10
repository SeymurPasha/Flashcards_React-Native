
import React, {useState, useEffect} from 'react';
import { Dimensions } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { Redirect } from 'react-router-native';

const Box =  ({item,setBoxWords, groups, setLoader}) => {

  const [redirect, setRedirect] = useState(false)
  const [color, setColor] = useState('#a0bcdf')
  const [boxWidth, setBoxWidth] = useState(80)

  const sectionID  = groups.indexOf(item) + 1


const wordsCompleted = () => {
  
  const completedWords = item.filter(w => w.completed == true);

  if(completedWords.length === 0) {
    setColor('#a0bcdf')
  }
  else if(completedWords.length === item.length ) {
     setColor('#002839')
  }
  else if(completedWords.length <= 7 ) {
     setColor('#2ec2ff')
  }
  else if(completedWords.length <= 9) {
    setColor('#0090cc')
  }

  }
  
  useEffect(() => {
  wordsCompleted()
  }, [item])

  const redirectToWords = () => {
    setTimeout(() => {
      setRedirect(true)
    }, 2000);
  }

  useEffect(() => {
    const windowWidth = Dimensions.get('screen').width
    windowWidth <= 360 ? setBoxWidth(70) : setBoxWidth(80)
  }, []);

  return (
      <View style={[styles.item,{backgroundColor: color, width:boxWidth}]}> 
        <TouchableOpacity>
        <Text onPress = {() => {
          setLoader(true)
          setBoxWords(item)
          redirectToWords()
        }
        } 
        style={styles.title}>
        {sectionID}
          </Text>
        </TouchableOpacity>
       
        {redirect ? <Redirect to='/words'/> : null}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    width:80,
    height:40,
    padding: 10,
    marginVertical: 8,
    borderRadius:10,
    marginHorizontal: 6,
  },
  title: {
    textAlign:'center',
    fontSize: wp('4%'),
    fontWeight:'700',
    color:'white'
  },
});


export default Box;
