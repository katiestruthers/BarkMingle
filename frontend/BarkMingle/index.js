import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

// import { enableLegacyWebImplementation } from 'react-native-gesture-handler';

// enableLegacyWebImplementation(true);

AppRegistry.registerComponent(appName, () => App);
