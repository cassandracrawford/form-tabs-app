import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
1
    const validateForm = () => {
        let isValid = true;
        
        // username must be at least 5 characters long
        if (username.length < 5) {
            setUsernameError('Username must be at least 5 character long.');
            isValid = false;
        } else {
            setUsernameError('');
        }

        // password must be at least 8 characters long
        // password must include at least one uppercase letter, one lowercase letter, one number and one special character
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
        if (validateForm()) {
            console.log('Login successful');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.title}>Login to your account.</Text>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
            {usernameError ? <Text>{usernameError}</Text> : null}
            <TextInput placeholder="Password" value={password} onChangeText={setPassword}style={styles.input} secureTextEntry/>
            {passwordError ? <Text>{passwordError}</Text> : null}
            <Pressable style={styles.button} onPress={handleLogin}>
            <Text>Sign in</Text>
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
  }
});
