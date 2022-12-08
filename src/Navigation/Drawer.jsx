import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Hotels from '../screens/Hotels'
import Shows from '../screens/Shows'
import SignIn from '../screens/SignIn'

const DrawerNav = createDrawerNavigator()

export default function Drawer(){
    return (
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={Home}/>
            <DrawerNav.Screen name='Cities' component={Cities}/>
            <DrawerNav.Screen name='Hotels' component={Hotels}/>
            <DrawerNav.Screen name='Shows' component={Shows}/>
            <DrawerNav.Screen name='Sign In' component={SignIn}/>
        </DrawerNav.Navigator>
    )
}