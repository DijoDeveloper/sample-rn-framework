/**
 * @Author: Dinesh S
 * @Date: 2021-11-08
 * @Desc: ExpenseOut - Root Entrypoint
 */

import App from './app/Entry';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
