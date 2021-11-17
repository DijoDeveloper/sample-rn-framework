/**
 * @Author: Anand R
 * @Date: 2021-11-08
 * @Desc: ZenOnco - Root Entrypoint
 */

import App from './app/Entry';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
