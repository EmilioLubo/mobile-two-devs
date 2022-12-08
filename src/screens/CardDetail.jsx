import { View, Text , Image , Button , Modal,FlatList} from 'react-native'
import React , {useState,useEffect} from 'react'
import showsActions from '../redux/actions/showAction'
import { useDispatch, useSelector } from 'react-redux'


export default function CardDetail({id, name , photo , capacity}) {
    let [open , setOpen] = useState(false)
    let dispatch = useDispatch()
  let {show} = useSelector(store=>store.showsReducer)
  let {getShowH} = showsActions

  useEffect(()=>{
    dispatch(getShowH(id))
  },[])

  return (
    <View style={{backgroundColor:'#ffa',padding:20,margin:15,alignItems:'center'}} >
      <Image source={{uri:photo}}  style={{width:300,height:300}} />
      <Text style={{textAlign:'center'}} >{name}</Text>
      <Text style={{textAlign:'center'}} >Capacity: {capacity}</Text>
      <Button title='view shows' onPress={()=>setOpen(true)} ></Button>
        <Modal visible={open}>
            <FlatList data={show} keyExtractor={(item)=>item._id} renderItem={({item})=>{
                return(
                    <View style={{backgroundColor:'#ffa',padding:20,margin:15}}>
                        <Text style={{textAlign:'center',fontSize:25,fontWeight:'500'}}>{item.name}</Text>
                        <Image source={{uri:item.photo}} style={{width:300,height:200}} />
                        <Text><Text style={{fontWeight:'500',fontSize:18}}>Description:</Text> {item.description}</Text>
                        <Text><Text style={{fontWeight:'500',fontSize:18}}>Date:</Text> {item.date.slice(0,10)}</Text>
                        <Text><Text style={{fontWeight:'500',fontSize:18}}>price: $</Text> {item.price}</Text>
                    </View>
                )
            }}/>
        <Button title='Go back' onPress={()=>setOpen(false)} ></Button>
        
        </Modal>
     </View>
  )
}