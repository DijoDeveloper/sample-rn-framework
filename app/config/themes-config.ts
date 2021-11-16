/* App config for theme */

const darKTheme = {
  theme_key: 'DARK_THEME',
};

const lightTheme = {
  theme_key: 'LIGHT_THEME',
};

const rtlStyles = {
  alignItems: 'flex-start',
  textAlign: 'right',
  flexDirection: 'row-reverse',
  key: 'RTL',
  RTL: true,
};

const ltrStyles = {
  alignItems: 'flex-end',
  textAlign: 'left',
  flexDirection: 'row',
  key: 'LTR',
  RTL: false,
};

export const layoutStyles = [rtlStyles, ltrStyles];
const themes = [darKTheme, lightTheme];
export default themes;
