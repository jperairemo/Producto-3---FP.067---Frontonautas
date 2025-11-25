import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './detalle.styles';

// El componente Detalles recibe 'route' como prop
export default function Detalles({ route }) {

  // 1. Extraer los datos del jugador de 'route.params'
  const { jugadorData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalles del Jugador</Text>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>{jugadorData.nombre} {jugadorData.apellidos}</Text>
      <Text style={styles.label}>Posición:</Text>
      <Text style={styles.value}>{jugadorData.posicion}</Text>
      <Text style={styles.label}>ID:</Text>
      <Text style={styles.value}>{jugadorData.id}</Text>
    </View>
  );
}