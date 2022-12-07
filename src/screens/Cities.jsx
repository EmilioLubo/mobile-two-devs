import { SafeAreaView, View, Text, FlatList } from 'react-native'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

export default function Cities({navigation}) {

    let cities = useSelector(state => state.cities)
    let dispatch = useDispatch()
    let {getCities} = citiesActions

    useEffect(() => {
        dispatch(getCities())
    }, [])

  return (
    <SafeAreaView>
      <Text>Cities</Text>
      <FlatList data={cities} keyExtractor={(item) => item._id} renderItem={({item, index}) => {
        return(
            <View>item.name</View>
        )
      }}/>
    </SafeAreaView>
  )
}
