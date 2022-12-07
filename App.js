import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import Hotels from './src/Hotels';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#efe' />
      <Provider store={store}>
      
        <Hotels/>
      
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
