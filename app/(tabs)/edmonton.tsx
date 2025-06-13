import {View, StyleSheet, Text} from "react-native";

export default function Edmonton() {
  return (
    <View style={styles.container}>
      <Text>Edmonton</Text>
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