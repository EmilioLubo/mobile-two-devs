import { SafeAreaView , Text ,Image ,Button} from 'react-native'
import React from 'react'

export default function CardCity({id,name,photo,population}) {
  return (
    <SafeAreaView style={{backgroundColor:'#fff',padding:20,margin:15}} >
      <Image source={{uri:photo}}  style={{width:300,height:300}} />
      <Text style={{textAlign:'center'}} >{name}</Text>
      <Text style={{textAlign:'center'}} >Population: {population.toLocaleString("fr-FR")}</Text>
      <Button title='see more'  ></Button>
    </SafeAreaView>
  )
}