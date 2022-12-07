import { View, Text,ImageBackground,Image,StyleSheet } from 'react-native'
import React from 'react'
import Carousel from './Carousel'

export default function Home() {
  return (
    <View>
      <ImageBackground source={{uri:'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80'}}  style={{flex:1,width:400,paddingTop:60,alignItems:'center',justifyContent:'flex-end',height:450}}>
      <Image  source={require('../assets/logo_transparent.png')} style={{width:250,height:250}}/>
      <Text style={styles.text}>Just dream it...</Text>
      <Text style={styles.text}>...we make it happens</Text>
      </ImageBackground>
      <Carousel/>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    
      },
})