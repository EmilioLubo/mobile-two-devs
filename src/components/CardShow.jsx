import { View, Text , Image,Button,Modal} from 'react-native'
import React , {useState}from 'react'

export default function CardShow({photo,name,description,id,price,date}) {
    let [open,setOpen] = useState(false)
  return (
    <View style={{backgroundColor:'#fff',padding:20,margin:15}} >
      <Image source={{uri:photo}}  style={{width:300,height:300}} />
      <Text style={{textAlign:'center',fontSize:30,fontWeight:'500'}} >{name}</Text>
      <Text style={{textAlign:'center'}} ><Text style={{fontWeight:'500',fontSize:18}}>Description:</Text> {description}</Text>
      <Text style={{textAlign:'center'}} ><Text style={{fontWeight:'500',fontSize:18}}>Date: </Text> {date.slice(0,10)}</Text>
      <Text style={{textAlign:'center'}} ><Text style={{fontWeight:'500',fontSize:18}}>Price: $ </Text> {price}</Text>
      <Button title='Comment' value={id} onPress={()=>setOpen(true)} ></Button>
      <Modal  visible={open}>
        
      </Modal>
    </View>
  )
}