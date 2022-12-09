import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Hotels from '../screens/Hotels'
import City from '../screens/City'
import Shows from '../screens/Shows'
import SignIn from '../screens/SignIn'
import Itineraries from '../screens/Itineraries'

const DrawerNav = createDrawerNavigator()

export default function Drawer(){
    return (
        <DrawerNav.Navigator name='root'>
            <DrawerNav.Screen name='Home' component={Home}/>
            <DrawerNav.Screen name='Cities' component={Cities}/>
            <DrawerNav.Screen name='Hotels' component={Hotels}/>
            <DrawerNav.Screen options={{drawerItemStyle: {display: 'none'}}} name='City' initialParams={{id: ''}} component={City}/>
            <DrawerNav.Screen name='Shows' component={Shows}/>
            <DrawerNav.Screen name='Sign In' component={SignIn}/>
            <DrawerNav.Screen options={{drawerItemStyle: {display: 'none'}}} name='Itineraries' initialParams={{id: ''}} component={Itineraries}/>
        </DrawerNav.Navigator>
    )
}