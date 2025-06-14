import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="calgary"
        options={{
          title: 'Calgary',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="city" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="edmonton"
        options={{
          title: 'Edmonton',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="city-variant" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
