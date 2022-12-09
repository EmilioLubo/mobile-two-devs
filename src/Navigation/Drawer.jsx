import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Hotels from '../screens/Hotels'
import City from '../screens/City'
import Shows from '../screens/Shows'
import SignIn from '../screens/SignIn'
import Itineraries from '../screens/Itineraries'
import SignUp from '../screens/SignUp'
import Profile from '../screens/Profile'
import { useSelector } from 'react-redux'
import MyReactions from '../screens/MyReactions'
import SignOut from '../screens/SignOut'

const DrawerNav = createDrawerNavigator()

export default function Drawer(){

    let {id, logged} = useSelector(state => state.userReducer)

    return (
        <DrawerNav.Navigator name='root'>
            <DrawerNav.Screen name='Home' component={Home}/>
            <DrawerNav.Screen name='Cities' component={Cities}/>
            <DrawerNav.Screen name='Hotels' component={Hotels}/>
            <DrawerNav.Screen options={{drawerItemStyle: {display: 'none'}}} name='City' initialParams={{id: ''}} component={City}/>
            <DrawerNav.Screen name='Shows' component={Shows}/>
            <DrawerNav.Screen name='SignIn' component={SignIn}/>
            <DrawerNav.Screen options={{drawerItemStyle: {display: 'none'}}} name='Itineraries' initialParams={{id: ''}} component={Itineraries}/>
            <DrawerNav.Screen name='SignUp' component={SignUp}/>
            {logged ?
                (<>
                <DrawerNav.Screen name='Profile' initialParams={{id: id}} component={Profile}/>
                <DrawerNav.Screen name='MyReactions' component={MyReactions}/>
                <DrawerNav.Screen name='SignOut' component={SignOut}/>
                </>
                ) :
                <></>
            }
        </DrawerNav.Navigator>
    )
}