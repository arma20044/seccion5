import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { DimensionesScreen } from './src/screens/DimensionesScreen'
import { FlexScreen } from './src/screens/FlexScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
          {/* <BoxObjectModelScreen/> */}
          {/* <DimensionesScreen/> */}
          {/* <PositionScreen/> */}
          {/* <FlexScreen/> */}
          <TareaScreen/>
    </SafeAreaView>
    

  )
}
