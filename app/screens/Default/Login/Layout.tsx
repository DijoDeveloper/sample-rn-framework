/**
 * Login layout page
 * @Author: Dinesh S
 * @Date: Fri Nov 12 2021 13:46:28 GMT+0530 (India Standard Time)
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
      <Text>Login</Text>
    </View>
  );
};
export default withTheme(Layout);
