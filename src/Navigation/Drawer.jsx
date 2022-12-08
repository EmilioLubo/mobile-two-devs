import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import Hotels from '../screens/Hotels'
import City from '../screens/City'

const DrawerNav = createDrawerNavigator()

export default function Drawer(){
    return (
        <DrawerNav.Navigator name='root'>
            <DrawerNav.Screen name='Home' component={Home}/>
            <DrawerNav.Screen name='Cities' component={Cities}/>
            <DrawerNav.Screen name='Hotels' component={Hotels}/>
            <DrawerNav.Screen options={{drawerItemStyle: {display: 'none'}}} name='City' initialParams={{id: ''}} component={City}/>
        </DrawerNav.Navigator>
    )
}