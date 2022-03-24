import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        <Text 
          style={
            styles.title
          }
        >BoxObjectModelScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red'
  },
    title: {
      fontSize: 20,
      //backgroundColor: 'red'
      width: 150,
      borderWidth: 5
    }
});
