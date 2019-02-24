import React from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainContainer from '../../screens/Main/MainContainer';
import LoginContainer from '../../screens/Login/LoginContainer';
import RegisterContainer from '../../screens/Register/RegisterContainer';
import HomeContainer from '../../screens/Home/HomeContainer';
import AuthLoadingScreen from '../../utils/components/Splash/SplashScreen';
const AuthNavigator = createStackNavigator({
    Main:MainContainer,
    Login: LoginContainer,
    Register: RegisterContainer,
},{
    initialRouteName:'Login',
    mode:'modal',
    transitionConfig: () => ({
        transitionSpec: {
          duration: 300,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
                  const {layout, position, scene} = sceneProps;
                  const {index} = scene;
  
                  const width = layout.initWidth;
                  const translateX = position.interpolate({
                      inputRange: [index - 1, index, index + 1],
                      outputRange: [width, 0, 0],
                  });
  
                  const opacity = position.interpolate({
                      inputRange: [index - 1, index - 0.99, index],
                      outputRange: [0, 1, 1],
                  });
  
                  return {opacity, transform: [{translateX: translateX}]};
              },
      })
})
  
export default createAppContainer(createSwitchNavigator({
    AuthLoading:AuthLoadingScreen,
    Auth:AuthNavigator,
    Home:HomeContainer
},{
    initialRouteName:'AuthLoading'
}));