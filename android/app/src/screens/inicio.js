import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './inicio.styles';

import { db } from '../firebase/firebase';
import { ref, onValue } from 'firebase/database';

export default function Inicio() {

  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    // leer jugadores realtime
    const jugadoresRef = ref(db, "jugadores");

    onValue(jugadoresRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // convertir objeto a array usable por FlatList
        const lista = Object.keys(data).map(id => ({
          id,
          ...data[id]
        }));
        setJugadores(lista);
      }
    });
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>EQUIPO BASKET</Text>
      </View>

      <TouchableOpacity style={styles.btnNuevoJugador}>
        <Text style={styles.btnText}>+ Nuevo jugador</Text>
      </TouchableOpacity>

      <FlatList
        data={jugadores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardLeft}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>👤</Text>
              </View>

              <View>
                <Text style={styles.nombre}>{item.nombre} {item.apellidos}</Text>
                <Text style={styles.posicion}>{item.posicion}</Text>
              </View>
            </View>

            <TouchableOpacity>
              <Text style={styles.deleteIcon}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
