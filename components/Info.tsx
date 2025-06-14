import { View, Text, StyleSheet } from 'react-native';

type InfoProps = {
  text: string;
};

export default function CityInfo({ text }: InfoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>🤔 Did you know?</Text>
      <Text style={styles.body}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF', 
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginTop: 30,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#880E4F',
    marginBottom: 10,
  },
  body: {
    fontSize: 17,
    color: '#3E3E3E',
    lineHeight: 24,
    textAlign: 'justify',
  },
});
