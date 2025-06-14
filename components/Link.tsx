import React from 'react';
import { Text, Linking, Pressable, StyleSheet } from 'react-native';

type LinkProps = {
  url: string;
  label?: string;
};

export default function CityLink({ url, label = "Go to city page" }: LinkProps) {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <Text style={styles.link}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
button: {
  backgroundColor: '#424242', 
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 25,
  marginBottom: 20,
},
link: {
  color: '#FFFFFF', 
  fontWeight: '600',
  textAlign: 'center',
},
});
