import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  }
});

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
      </View>
    );
  }
}

export default App 