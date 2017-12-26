import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  View
} from 'react-native';

import {
  Home,
  Search,
} from './src/scenes';
import StorybookUI from './storybook';

const App = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Parler',
      },
    },
    Search: {
      screen: Search,
    },
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    }
  }
);

export default App;
// module.exports = __DEV__ ? StorybookUI : App;
