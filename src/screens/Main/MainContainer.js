import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';
import * as colors from '../../config/colors';
class MainContainer extends React.Component{
    static navigationOptions = {
        header:null
    }

    constructor(props){
        super(props);
        this.handleNavigation = this.handleNavigation.bind(this)
    }

    componentDidMount(){
      
    }

    handleNavigation(screen){
        // alert(screen);
        this.props.navigation.navigate(screen,{});
    }

    render(){
       
        return(
            <View style={styles.MainContainer}>
                <View style={styles.LogoContainer}>
                    <Text style={styles.Logo}>My App</Text>
                </View>

                <View style={styles.NavigationContainer}>
                    <View style={styles.NavMessage}>
                       <Text style={styles.Title}>Welcome to my APP</Text>
                       <Text style={styles.SubTitle}>Login or register to get started</Text>
                    </View>

                    <View>
                        <Text  style={styles.NavButton} onPress={()=>this.handleNavigation('Login')}>LOGIN</Text>
                    </View>

                    <View>
                        <Text style={styles.NavButton}  onPress={()=>this.handleNavigation('Register')}>REGISTER</Text>         
                    </View>
                </View>
        
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:colors.PrimaryBackground
    },
    LogoContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    Logo:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
    NavigationContainer:{
        flex:1,
        backgroundColor:colors.SecondBackground,
        justifyContent:'space-around',
        alignItems:'center',
        margin:10,
        borderRadius:4
    },
    NavMessage:{
        alignItems:'center',
    },
    Title:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    },
    SubTitle:{
        color:'gray',
        fontSize:11
    },  
    NavButton:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    }
   
})

export default MainContainer;