import {AppRegistry} from 'react-native';
import Inicio from './android/app/src/screens/inicio.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Inicio);
