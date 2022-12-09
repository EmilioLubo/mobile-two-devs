import { SafeAreaView , Text ,Image ,Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CardProfile({name, age, photo, email, role}) {

    let navigation = useNavigation()

  return (
    <SafeAreaView style={{backgroundColor:'#fff',padding:20,margin:15}} >
      <Image source={{uri:photo}}  style={{width:300,height:300}} />
      <Text style={{fontFamily: 'monospace', fontWeight: '800', fontSize: 20 ,textAlign:'center', margin:5}} >Name: {name}</Text>
      <Text style={{fontFamily: 'monospace', fontWeight: '800', fontSize: 20 ,textAlign:'center', margin:5}} >Age: {age}</Text>
      <Text style={{fontFamily: 'monospace', fontWeight: '800', fontSize: 20 ,textAlign:'center', margin:5}} >Email: {email}</Text>
      <Text style={{fontFamily: 'monospace', fontWeight: '800', fontSize: 20 ,textAlign:'center', margin:5, marginBottom:30}} >Role: {role}</Text>
      <Button title='My Reactions' onPress={() => navigation.navigate('Home')}></Button>
    </SafeAreaView>
  )
}