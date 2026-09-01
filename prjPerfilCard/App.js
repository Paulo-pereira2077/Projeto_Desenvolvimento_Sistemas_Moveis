import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { View, Text, Image } from 'react-native';
import styles from './styles';
const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://picsum.photos/100' }}
        style={styles.avatar} />
      <Text style={styles.name}>Maria Silva</Text>
      <Text style={styles.role}>Desenvolvedora React Native</Text>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>127</Text>
          <Text style={styles.statLabel}> Projetos</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statValue}>2.5k</Text>
        <Text style={styles.statLabel}> Seguidores</Text>
      </View>
    </View>
</View >
  );
}