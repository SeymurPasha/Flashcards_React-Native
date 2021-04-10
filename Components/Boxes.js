

import React, {useState, useEffect, useCallback, useMemo} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



import Box from './Box'


const Boxes =  ({level, wordsData, setBoxWords,  showLoader, setLoader, numCol}) => {


  const [groups, setGroups] = useState([])


  let selectedLevel = []

  useEffect(() => {
    switch (level) {
      case 'Başlanğıc':
        selectedLevel = wordsData.beginner
        break;
      case 'Orta':
        selectedLevel = wordsData.intermediate
        break;
      case 'Yuxarı':
        selectedLevel = wordsData.advanced
        break;
      default:
        break;
    }
  }, [])

  useEffect(() => {
    setLoader(false)
    return () => {
      setLoader(false)
    }
  }, [])


    const renderItem = ({ item }) => {
   
      return (
        <Box
          groups = {groups}
          item={item}
          setBoxWords={setBoxWords}
          setLoader = {setLoader}
        />
      );
    };

    const keyExtractor = useCallback((item, index) =>index, [])

    const group = () => {
    let result = []
    if(selectedLevel) {
    for(let i =0; i<selectedLevel.length;i+=10) {
      result.push(selectedLevel.slice(i,i+10))
    }
  }
    setGroups(result)
    }

    useEffect(() => {
     group()
    },[])


return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source = {require('../night-1851685_1280.png')} style = {styles.image}>
        <Text style = {styles.header}>Xanalardan birini seçin</Text>
        <FlatList
          style = {[{marginLeft:10}]}
          data={groups}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns = {numCol}
          initialNumToRender = {12}
          maxToRenderPerBatch = {4}
          updateCellsBatchingPeriod = {500}
        />
         <ActivityIndicator animating = {showLoader} color = 'gold' size = 'large' style = {styles.indicator} />
        </ImageBackground>
      </SafeAreaView>
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight:5
  },
  header : {
    color:'white',
    textAlign:'center',
    fontSize:wp('7%'),
    marginTop:35,
    marginBottom:50
  },
  item: {
    marginVertical: 6,
    marginHorizontal: 8,
    backgroundColor:'#5fd0ff'
  },
  title: {
    fontSize: 12,
    color:'white'
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
    },
    indicator: {
      position:'absolute',
      top:80,
      width:wp('100%')
    }
});


export default Boxes;
