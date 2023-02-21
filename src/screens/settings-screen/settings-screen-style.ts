import { StyleSheet } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// const insets = useSafeAreaInsets();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1A202E',
    paddingTop:35
  },
  user_detail_container:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:10
  },
  user_name_email_container:{
    paddingLeft:15
  }
});

export default styles;