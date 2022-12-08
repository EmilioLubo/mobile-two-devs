import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import Shows from './src/Shows';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#efe' />
      <Provider store={store}>
      
        <Shows/>
      
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
