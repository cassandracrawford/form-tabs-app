import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import credentials from '../assets/credentials.json';

type LoginProps = {
  username: string;
  password: string;
  setUsername: (text: string) => void;
  setPassword: (text: string) => void;
  usernameError?: string;
  passwordError?: string;
  onLogin: () => void;
};

export default function Login({
  username,
  password,
  setUsername,
  setPassword,
  usernameError,
  passwordError,
  onLogin,
}: LoginProps){

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={{...styles.title, fontSize: 32}}>Sign in</Text>
      <Text style={{...styles.title, fontSize: 14, letterSpacing: 4, marginBottom: 40}}>your account</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor = 'white'
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      {usernameError ? <Text style={{color: 'white'}}>{usernameError}</Text> : null}
      <TextInput
        placeholder="Password"
        placeholderTextColor = 'white'
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}
      <Text style={{color: 'white'}}>Forgot Password?</Text>
      <Pressable style={({ pressed }) => [
        styles.button,
        pressed && { backgroundColor: pressed ? '#f2f2f2' : 'white' },
        ]} onPress={onLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
      <Text style={{color: 'white'}}>Do you have an account? Sign up!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E94C89',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    margin: 2,
  },
  input: {
    padding: 10,
    borderColor: 'white',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#E94C89',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  errorMessage: {
    color: 'white',
  },
});
