import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CityLink from '../../components/Link';
import CityInfo from '../../components/Info';

export default function Edmonton() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Edmonton</Text>
        <Image source={require('../../assets/edmonton.jpg')} style={styles.image} />
        <CityInfo text="Edmonton is Alberta’s capital city, famous for the West Edmonton Mall, river valley parks, and vibrant arts scene." />
      </ScrollView>
      <View style={styles.linkContainer}>
        <CityLink url="https://www.edmonton.ca/" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FDE5EC', 
  },
  scroll: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontStyle: 'italic',
    color: '#B71C1C', 
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  linkContainer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#FDE5EC',
  },
});
