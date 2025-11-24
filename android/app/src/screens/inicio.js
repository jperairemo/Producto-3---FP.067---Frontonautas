import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './inicio.styles';


import { db } from '../firebase/firebase';
import { ref, onValue, get, child } from 'firebase/database';


export default function Inicio() {


  const [jugadores, setJugadores] = useState([]);


  useEffect(() => {


    // ============================
    // 1. Comprobación solicitada en el enunciado ("once")
    // ============================
    const rootRef = ref(db);


    get(child(rootRef, "jugadores"))
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log("Datos recibidos con get() (equivalente a once):");
          console.log(snapshot.val());
        } else {
          console.log("No existen datos en la ruta jugadores");
        }
      })
      .catch(err => console.error(err));




    // ============================
    // 2. Lectura en tiempo real
    // ============================
    const jugadoresRef = ref(db, "jugadores");


    onValue(jugadoresRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
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
