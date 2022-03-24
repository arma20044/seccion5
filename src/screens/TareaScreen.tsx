import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={ styles.container }>
        <View style= { styles.cajaMorada }/>
        <View style= { styles.cajaNaranaja }/>
        <View style= { styles.cajaAzul }/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        //alignItems: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        //alignSelf: 'center'
        //flexDirection: 'column',
        //position: 'relative',
       justifyContent: 'flex-end',
       //flexWrap: 'nowrap'
        
        
    },
    cajaMorada: {
        //flex: 1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D5',
        //alignItems: 'flex-start',
        alignContent: 'center'
        //alignSelf: 'flex-end'

    },
    cajaNaranaja: {
       // flex: 1,
        width: 100,
       height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        //alignSelf: 'flex-end'
        //left: 100

    },
    cajaAzul: {
        //flexDirection: 'row',
      //  flex:2,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        //alignSelf: 'flex-start'
        //justifyContent: 'space-between
        top:100,
        right:200
    },
    
});