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
      <Text style={styles.title}>Login to your account.</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      {usernameError ? <Text>{usernameError}</Text> : null}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      {passwordError ? <Text>{passwordError}</Text> : null}
      <Pressable style={styles.button} onPress={onLogin}>
        <Text style={{ color: '#fff' }}>Sign in</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
  },
});
