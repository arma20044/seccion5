import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
      <View style={ styles.container}>
        
                <Text style={ styles.caja1 }>Caja1</Text>
                <Text style={ styles.caja2 }>Caja2</Text>
                <Text style={ styles.caja3 }>Caja3</Text>
        
      </View>      
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        //flexDirection: 'row',
        //justifyContent: 'flex-end',
        //alignItems: 'flex-end'
    },
    caja1: {
        //flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2: {
        //flex: 4,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja3: {
        //flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    }
});
