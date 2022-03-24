import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export const DimensionesScreen = () => {

const { width, height } = useWindowDimensions();

  return (

    <View>
      <View style= { styles.container }>

            <View style= {  styles.cajaMorada } />
            <View style= {  styles.cajaNaranja } />
            <View/>    
            
        </View>
        <Text style={ styles.title }>W: { width}, H: {height} </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856D5',
        width: '50%',
        height: '50%'

    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },
    title:{
        fontSize: 30,
        textAlign: 'center'
    }
});