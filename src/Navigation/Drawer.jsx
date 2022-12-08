import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Hotels from '../screens/Hotels'

const DrawerNav = createDrawerNavigator()

export default function Drawer(){
    return (
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={Home}/>
            <DrawerNav.Screen name='Cities' component={Cities}/>
            <DrawerNav.Screen name='Hotels' component={Hotels}/>
        </DrawerNav.Navigator>
    )
}