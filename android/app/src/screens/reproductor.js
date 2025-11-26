import React from 'react';
import { View, Text } from 'react-native';

// Debe ser una función de componente React válida
export default function Media({ route }) {
  const jugador = route.params?.jugador;
  return (
    <View>
      <Text>Media de {jugador.nombre}</Text>
    </View>
  );
}