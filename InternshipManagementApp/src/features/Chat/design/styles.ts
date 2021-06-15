import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500'
  },
  row: {
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flexShrink: 1
  },
  header: {
    flexDirection: 'row'
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000'
  },
  dateText: {},
  contentText: {
    color: '#949494',
    fontSize: 16,
    marginTop: 2
  },
  listTitle: {
    fontSize: 22
  },
  listDescription: {
    fontSize: 16
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})