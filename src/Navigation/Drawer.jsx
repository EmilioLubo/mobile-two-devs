import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Cities from '../screens/Cities'

const DrawerNav = createDrawerNavigator()

export default function Drawer(){
    return (
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={Home}/>
            <DrawerNav.Screen name='Cities' component={Cities}/>
        </DrawerNav.Navigator>
    )
}