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

import { Sentry } from 'react-native-sentry';

const sentryDsn = Platform.select({"ios":"https://5a23933befb849f9986fd516ddd8daa4:5d3272001dbb4c9e8ba295a8cb76e274@sentry.io/265332","android":"https://5a23933befb849f9986fd516ddd8daa4:5d3272001dbb4c9e8ba295a8cb76e274@sentry.io/265332"});
Sentry.config(sentryDsn).install();


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
