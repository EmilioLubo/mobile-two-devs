import { View, Text,TextInput,TouchableOpacity,Alert} from 'react-native'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../redux/actions/userAction'



export default function SignIn({navigation}) {
    let dispatch = useDispatch()
    
    let {signIn} = userActions
    let {logged} = useSelector(store=>store.userReducer)
    let [email,setEmail] = useState([])
    let[pass,setPass] = useState([])
    console.log(logged)
    let dato ={
        email:email,
        password:pass
    }

    let submit = ()=>{
        dispatch(signIn(dato))
        Alert.alert('succesful')
        navigation.navigate('Home')
    }





  return (
    <View style={{paddingTop:20}}>
      <Text style={{textAlign:'center',}}>User Email</Text>
        <TextInput placeholder='Email...' style={{backgroundColor:'#5555',margin:10,padding:15}} value={email} onChangeText={(item)=>{setEmail(item)}}/>
        <Text style={{textAlign:'center',}}>Password</Text>
        <TextInput placeholder='Password...' style={{backgroundColor:'#5555',margin:10,padding:15}} value={pass} onChangeText={(item)=>{setPass(item)}} />
        <TouchableOpacity style={{backgroundColor:'#2B9CD9',padding:10,margin:10,borderRadius:25}} onPress={submit} ><Text style={{color:'#fff',textAlign:'center'}}>Sign In</Text></TouchableOpacity>
        <Text style={{textAlign:'center',}}>Don't have a Account?</Text>
        <TouchableOpacity style={{backgroundColor:'#2B9CD9',padding:10,margin:10,borderRadius:25}} ><Text style={{color:'#fff',textAlign:'center'}}>Sign Up</Text></TouchableOpacity>
    </View>
  )
}