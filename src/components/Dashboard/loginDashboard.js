import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

let loginObject = {
  user: '',
  password: ''
}

const onUserChangeText = (text) => {
  loginObject.user = text;
}

const onPasswordChangeText = (text) => {
  loginObject.password = text;
}


const LoginDashboard = (props) => {
  const { submitLogin, isError } = props;

  const error = (isError) ? 'INVALID USER/PASSWORD' : '';

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => onUserChangeText(text)}
        placeholder='Login' />
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => onPasswordChangeText(text)}
        placeholder='Password' />
      <TouchableOpacity onPress={()=>submitLogin(loginObject)} style={styles.button}>
        <Text style={styles.buttonText}> {'Login'} </Text>
      </TouchableOpacity>
      <Text style={styles.errorText}> {error} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  	justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  inputText: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    margin: 10,
  },
  button: {
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: 'rgb(233, 233, 233)',
    borderWidth: 1,
    borderColor: 'rgb(213, 213, 213)',
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  errorText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'red'
  }
})

export default LoginDashboard
