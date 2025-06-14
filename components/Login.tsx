import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput, Alert } from 'react-native';

type LoginProps = {
  username: string;
  password: string;
  setUsername: (text: string) => void;
  setPassword: (text: string) => void;
  usernameError?: string;
  passwordError?: string;
  setUsernameError: (text: string) => void;
  setPasswordError: (text: string) => void; 
  onLogin: () => void;
};

export default function Login({
  username,
  password,
  setUsername,
  setPassword,
  usernameError,
  passwordError,
  setUsernameError,
  setPasswordError,
  onLogin,
}: LoginProps){

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={{...styles.title, fontSize: 32}}>Sign in</Text>
      <Text style={{...styles.title, fontSize: 14, letterSpacing: 4, marginBottom: 20}}>your account</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor = 'white'
        value={username}
        onChangeText={(text) => {
          setUsername(text);
          if (text.length >= 5) {
          setUsernameError('');
          }
        }}
        style={styles.input}
      />
      {usernameError ? <Text style={styles.errorMessage}>{usernameError}</Text> : null}
      <TextInput
        placeholder="Password"
        placeholderTextColor = 'white'
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          if (passwordRegex.test(text)) {
          setPasswordError('');
          }
        }}
        style={styles.input}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}
      <Text style={{color: '#F8C0D7', alignSelf: 'flex-end', paddingHorizontal: '10%', marginTop:4}}>Forgot Password?</Text>
      <Pressable style={({ pressed }) => [
        styles.button,
        pressed && {
          backgroundColor: '#F8C0D7',
        },
        ]} onPress={onLogin}>
        {({ pressed }) => (
    <Text
      style={[
        styles.buttonText,
        pressed && {
          color: 'white',     
          fontWeight: 900,    
        },
      ]}
    >
      Sign in
    </Text>
  )}
      </Pressable>
      <Text style={{color: '#F8C0D7', marginTop: 8}}>Don't have an account? Sign up</Text>
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
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
  },
  input: {
    padding: 10,
    borderColor: 'white',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 5,
    width: '80%',
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 30,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#E64D8C',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  errorMessage: {
    color: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
  },
});
