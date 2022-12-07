import { View , Text ,Image ,Button} from 'react-native'
import React from 'react'

export default function CardHotel({id,name,photo,capacity}) {
  return (
    <View style={{backgroundColor:'#fff',padding:20,margin:15}} >
      <Image source={{uri:photo}}  style={{width:300,height:300}} />
      <Text style={{textAlign:'center'}} >{name}</Text>
      <Text style={{textAlign:'center'}} >Capacity: {capacity}</Text>
      <Button title='see more'  ></Button>
    </View>
  )
}

