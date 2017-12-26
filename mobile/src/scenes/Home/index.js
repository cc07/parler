import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './styles';
import { HeaderIcon } from 'src/components';

export default class Home extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: <HeaderIcon name={ 'plus' }
                             align="right"
                             onPress={ () => { navigation.navigate('Search') }} />,
  });

  render() {
    return (
      <View style={ styles.container }>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>testing</Text>
      </View>
    );
  }
}
