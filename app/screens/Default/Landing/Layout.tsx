/**
 * Landing layout page
 * @Author: Anand R
 * @Date: Wed Nov 17 2021 19:22:35 GMT+0530 (India Standard Time)
 * @Desc: View part for component
 */
import React from 'react';
import style from './Style';
import {View} from 'react-native';
import {withTheme} from '../../../utils/ThemeProvider';
import Text from '../../../components/CustomText';

interface IProps {
  theme: any;
}

const Layout = (props: IProps) => {
  const styles = style(props.theme);
  return (
    <View style={styles.container}>
      <Text>Landing</Text>
    </View>
  );
};
export default withTheme(Layout);
