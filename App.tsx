import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Inicio from './android/app/src/screens/inicio.js'; // Asegúrate que la ruta es correcta

export default function App() {
  return (
    <SafeAreaProvider>
      <Inicio />
    </SafeAreaProvider>
  );
}
