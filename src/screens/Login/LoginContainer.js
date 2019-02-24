import React from 'react';
import {View,Text,Button, AsyncStorage,KeyboardAvoidingView, Image } from 'react-native';
import * as FontIcon from 'react-native-vector-icons/FontAwesome';
import { Input, Icon, Header } from 'react-native-elements';
import styles from './LoginStyle';
class LoginContainer extends React.Component{

    static navigationOptions = {
        header:null,
        headerTitle:'Login',
        headerStyle:{
            backgroundColor:'#202225'
        },
        headerTintColor:'white'
    }


    async login(){
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Home')
    }
    render(){
        return(
            <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
                <Image source={require('../../assets/img/sample.jpg')} style={{
                    position:'absolute',
                    opacity:0.4
                }}/>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: '#fff',type:'material' }}
                    centerComponent={{ text: 'MY APP', style: { color: '#fff',fontWeight:'bold',fontSize:20 } }}
                    containerStyle={{backgroundColor:'transparent',paddingTop:15,flex:1,alignItems:'flex-start',borderBottomWidth:0}}
                />
                <View style={styles.FormContainer}>

                    <View style={styles.FormTitleContainer}>
                        <View>
                            <Text style={styles.FormTitle}>Welcome back!</Text>
                        </View>
                      
                        <View>
                            <Text style={styles.FormSubTitle}>Login with your email to start.</Text>
                        </View>
                    </View>

                    <View style={styles.FormInputsContainer}>
                        <Input
                            placeholder='Email'
                            placeholderTextColor='gray'
                            selectionColor='white'
                            keyboardType='email-address'
                            leftIcon={{ type: 'font-awesome', name: 'envelope',color:'white',size:16 }}
                            inputStyle={{
                                color:'white',
                                fontSize:15,
                            }}
                            containerStyle={{marginBottom:10}}
                        />

                        <Input
                            placeholder='Password'
                            placeholderTextColor='gray'
                            selectionColor='white'
                            leftIcon={{ type: 'font-awesome', name: 'lock',color:'white'  }}
                            inputStyle={{
                                color:'white',
                                fontSize:15
                            }}
                            containerStyle={{marginBottom:10}}
                        />
                        <Text style={{
                            color:'gray',
                            margin:11,
                            fontSize:11
                        }}>Forgot your password?</Text>
                    </View>

                    <View style={styles.FormButtonContainer}>
                        <Text style={styles.FormButton} onPress={()=>this.login()}>LOGIN</Text>
                    </View>
                </View>
            </KeyboardAvoidingView >
        )
    }
}

export default LoginContainer;