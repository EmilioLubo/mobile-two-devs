import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,ImageBackground,Image} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import Home from './src/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#efe' />
      <Provider store={store}>
      <Home/>
      </Provider>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afa',
    alignItems: 'center',
    justifyContent: 'center',

  },
  
});
