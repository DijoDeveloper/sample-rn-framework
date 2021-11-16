/** 
 * javascript comment 
 * @Author: Dinesh S
 * @Date: 2019-11-15 
 * @Desc:  Localized Strings added - Language
 */

import AsyncStorage from '@react-native-community/async-storage';
import i18n from 'i18n-js';
import translate from './Text';

const translationGetters = {
   // lazy requires (metro bundler does not support symlinks)
   en: () => require('../config/translations/en.json'),
   hn: () => require('../config/translations/hn.json'),
 };
 
 const setI18nConfig = async () => {
 
   var language = await AsyncStorage.getItem('LANGUAGE_KEY');
   var languageTag = "en";
 
   if (language != null) {
     languageTag = JSON.parse(language).languageTag;
   }
 
   // clear translation cache
   translate.cache.clear();
   // set i18n-js config
   i18n.translations = { [languageTag]: translationGetters[languageTag]() };
   i18n.locale = languageTag;
 };
 
 export default setI18nConfig;