import {StyleSheet} from 'react-native';
import * as colors from '../../config/colors';
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.PrimaryBackground
    },
    FormContainer:{
        flex:25,
        backgroundColor:colors.SecondBackground,
        margin:10,
        borderRadius:4
    },
    FormInputsContainer:{
        flex:20,
        padding:5, 
        alignItems:'flex-start',
        flexDirection:'column',
    },
    FormTitleContainer:{
        flex:5,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    FormTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    }, 
    FormSubTitle:{
        color:'gray',
        fontSize:11
    },  
    FormButtonContainer:{
        flex:2,
        alignItems:'flex-end',
        justifyContent:'center',
        flexDirection:'row',
       
    },
    FormButton:{
        color:'white',
        padding:15,
        backgroundColor:'#19B5FE',
        textAlign:'center',
        borderRadius:3,
        width:'99%',
        margin:3,
        // marginTop:-7,
       
    } 
});

export default styles;