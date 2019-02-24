import React from 'react';
import {View,Text} from 'react-native';
class RegisterContainer extends React.Component{
    static navigationOptions = {
        headerTitle:'Register',
    }
    render(){
        return(
            <View>
                <Text>Register container</Text>
            </View>
        )
    }
}

export default RegisterContainer;