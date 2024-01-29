import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { useState } from 'react';
import { CheckBox } from 'react-native-elements';

const LoginScreen = (props) => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [checked, setchecked] = useState(false);

   
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textTitle}>LoginScreen</Text>
            <TextInput
                placeholder=' Nhập username'
                style={styles.inputname}
                ref={input => { this.textInput1 = input }}
                onChangeText={(user) => setusername(user)}></TextInput>
            <TextInput
                placeholder=' Nhập password'
                style={styles.inputpass}
                secureTextEntry={true}
                ref={input => { this.textInput = input }}
                onChangeText={(pass) => setpassword(pass)}></TextInput>
            <CheckBox
                title={"Remember me"}
                checked={checked}
                onPress={() => setchecked(!checked)}
            ></CheckBox>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.buttonLogin} onPress={checkLogin} >
                <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin} onPress={register} >
                <Text style={{ color: 'white' }}>Register</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        alignItems: 'center'
    },
    textTitle: {
        marginTop: 150,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'teal'
    },
    inputname: {
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10
    },
    inputpass: {
        borderWidth: 1,
        width: 300,
        height: 40,
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10

    },
    buttonLogin: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'teal',
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
})