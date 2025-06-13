import {View, StyleSheet, Text} from "react-native";

export default function Calgary() {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
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
});