import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A202E',
    flex: 1,
    paddingLeft: 20
  },
  user_detail_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10, paddingLeft: 20
  },
  user_name_email_container: {
    paddingLeft: 15
  },
  settings_item_style: {
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;