import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import credentials from '../assets/credentials.json';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const router = useRouter();

  const validateForm = () => {
    let isValid = true;

    if (username.length < 5) {
      setUsernameError('Username must be at least 5 character long.');
      isValid = false;
    } else {
      setUsernameError('');
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Must be 8+ chars with a-z, A-Z, 0-9 & symbol.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    const user = credentials.users.find((u) => u.username === username);

    if (!user) {
      Alert.alert('Login Failed', 'Username not found.');
      return;
    }

    if (user.password !== password) {
      Alert.alert('Login Failed', 'Incorrect password.');
      return;
    }

    Alert.alert('Login Success', `Welcome, ${username}!`);
    router.push('/home');
  };

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
      <Pressable style={styles.button} onPress={handleLogin}>
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
