import { StyleSheet } from 'react-native';

export const colors = {
  white: '#fff',
  deepGray: '#3E4A59',
  contributionThick: '#32BD58',
  contributionLight: '#def0e8',
  cashoutLight: '#f7e7e3',
  cashoutThick: '#ED7136'
}

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerText: {
    marginTop: 30,
    fontSize: 32,
    fontWeight: '500',
    color: colors.deepGray
  },
});
