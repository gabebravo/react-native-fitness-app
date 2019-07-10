import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry'

// THESE ARE COMMON COMPONENTS IF YOU WANT TO TEST
// import List from './rn-comps/List'
// import Form from './rn-comps/Form'
// import RnImage from './rn-comps/RnImage'
// <RnImage path='https://avatars3.githubusercontent.com/u/13320719?s=200' />

/* NOTES : 
  rnf = This command will create a reactNative functional component
  rnc = This command will create a reactNative class component
*/

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});

export default App 