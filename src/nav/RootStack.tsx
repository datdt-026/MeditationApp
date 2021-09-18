import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import WelcomeSleep from '../screens/WelcomeSleep';
import SleepMusic from '../screens/SleepMusic';

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  CourseDetail: undefined;
  SleepMusic: undefined;
};

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeSleep"
          component={WelcomeSleep}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SleepMusic"
          component={SleepMusic}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
