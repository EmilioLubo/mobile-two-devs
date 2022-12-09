import { SafeAreaView, Text, View, Image, Button, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function CardItinerary({itId, name, photo,description, duration, price}) {

    let [count, setCount] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
                            count < 2 ? setCount(++count) : setCount(0)
                        }, 3000)
                        return () => {
                            clearInterval(interval)
                        }
    }, [count])

  return (
    <SafeAreaView style={{backgroundColor:'#fff',padding:20,margin:15, alignItems: 'center'}} >
      <Image source={{uri:photo[count]}}  style={{width:300,height:300}} />
      <Text style={styles.title} >{name}</Text>
      <Text>{description}</Text>
      <Text style={{alignSelf: 'flex-start'}}>Duration: {duration} hs.</Text>
      <Text>Price: ${price?.toFixed(2)}</Text>
      <View><Text>Reactions</Text></View>
      <Button title='Comments' onPress={() => ''}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title: {
        textAlign:'center',
        fontFamily: 'monospace',
        fontSize: 15,
        fontWeight: '800',
        textDecorationLine: 'underline',
        margin: 5
    },
    text: {

    }
})