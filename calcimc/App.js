import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';
import InputApp from './components/inputApp';
import BtnCalcular from './components/btnCalcular';

export default function calcimg() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcImc = () => {
    if (!peso) {
      alert('informe o peso');
      return;
    }
    if (!altura) {
      alert('informe a altura');
      return;
    }

    const r = peso / (Math.pow(altura, 2));
    setResultado(r.toFixed(1));
  };

  return (
    <SafeAreaView style={estilos.corpo}>
      <View style={estilos.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>

      <InputApp aoModificar={setPeso} txtInput={'Informe seu Peso'} />
      <InputApp aoModificar={setAltura} txtInput={'Informe sua Altura'} />

      <BtnCalcular aoClicar={calcImc}/>

    
      { resultado ?
        <View> 
          <View style={estilos.bloco}>
            <Text>Resultado: {resultado}</Text>
          </View>

          <View>
            <Image
              source={require('./assets/tabela2.png')}
              style={estilos.tabela}
            />
          </View>
        </View>
      : null }

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  corpo: {
    padding: 10,
  },
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  bloco: {
    marginBottom: 10,
  },
  btnCalc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
  },
  tabela:{
    width: '100%',
    resizeMode: 'contain',
  },
});