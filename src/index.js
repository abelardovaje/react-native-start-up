import React from 'react';
import {View, Text} from 'react-native';
import AppNavigator from './config/navigators/AppNavigator';
class AppRoot extends React.Component{
    constructor(props){
        super(props);
    }
 
    render(){   
        return(         
           <AppNavigator/>
        )
    }
}

export default AppRoot;