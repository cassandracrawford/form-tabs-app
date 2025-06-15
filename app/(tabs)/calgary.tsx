import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CityLink from '../../components/Link';
import CityInfo from '../../components/Info';

export default function Calgary() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.welcome}>Welcome to My New App</Text>
      <Text style={styles.title}>Calgary</Text>
      <Image source={require('../../assets/calgary.jpg')} style={styles.image} />
      <CityInfo text="Calgary is known as the 'Blue Sky City'. It hosts the famous Stampede and offers easy access to the Rockies." />
      </ScrollView>
      <View style={styles.linkContainer}>
        <CityLink url="https://www.calgary.ca/home.html" />
      </View>
    </View>
  );
}const styles = StyleSheet.create({
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
   welcome: {
   fontSize: 20,
   fontWeight: '500',
   fontFamily: 'serif', 
   fontStyle: 'italic',
   color: '#880E4F',
   textAlign: 'center',
   marginBottom: 12,
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
