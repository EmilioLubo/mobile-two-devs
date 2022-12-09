import { View, Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import reactionsActions from '../redux/actions/reactionsActions'

export default function Reaction({reload,name,userId,idS,icon}) {
    let {token} = useSelector(state => state.userReducer)
    let dispatch = useDispatch()
    let { updateShReactions} = reactionsActions
    let clickHandler = () => {
        dispatch(updateShReactions({token, name, idS}))
            .then(res => reload())
            .catch(err => console.log(err))
            reload()
    }
  return (
    <View style={{justifyContent:'center'}} >
        <TouchableOpacity onPress={clickHandler}><Image source={{uri:icon}} style={{width:25,height:25,marginLeft:50}} /></TouchableOpacity>
        <Text style={{textAlign:'right',marginRight:10}}>{userId.length}</Text>
    </View>
  )
}