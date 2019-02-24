import React from 'react';
import {View,Text,AsyncStorage,Button} from 'react-native';
class HomeContainer extends React.Component{


    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render(){
        return(
            <View style={{flex:1}}>
                <Text>Home container</Text>
                <Button title="Logout" onPress={()=>this.logout()}/>
            </View>
        )
    }
}

export default HomeContainer;