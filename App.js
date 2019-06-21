import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
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