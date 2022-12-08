import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/Navigation/Drawer';

export default function App() {
  return (
      <SafeAreaView style={{height: "100%"}}>
        <NavigationContainer>
          <Provider store={store}>
            <Drawer/>
          </Provider>
        </NavigationContainer>
      </SafeAreaView>
  )
}
