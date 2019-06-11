import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const age = 39;

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{ `Open your app! Your age is ${age}` }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ff0000'
  }
});

export default App 
