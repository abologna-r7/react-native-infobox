import { StyleSheet } from 'react-native'

const InfoBoxStyle = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 15,
  },
  info: {
    backgroundColor: '#2168f7',
  },
  error: {
    backgroundColor: '#f71f07',
  },
  warning: {
    backgroundColor: '#f5bd07',
  },
  close: {
    textAlign: 'right',
  },
})

export {
  InfoBoxStyle,
}
