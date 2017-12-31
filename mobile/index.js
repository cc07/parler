import { AppRegistry } from 'react-native';
import Sentry from 'sentry-expo';
// import 'expo';

import App from './App';

AppRegistry.registerComponent('main', () => App);
Sentry.config('https://5a23933befb849f9986fd516ddd8daa4@sentry.io/265332').install();
