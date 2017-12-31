import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    alignSelf: 'stretch',
  },
  flatListItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  flatListItemText: {
    flex: 1,
    fontSize: 20,
  },
  flatListItemIcon: {
    flex: 1,
  }
});
