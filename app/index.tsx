import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Login from '../components/Login';
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
      router.push('/(tabs)/calgary');
    };

  return (
    <View style={styles.container}>
       <Login
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        usernameError={usernameError}
        passwordError={passwordError}
        onLogin={handleLogin}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});