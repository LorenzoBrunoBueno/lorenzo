import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../config/styles";
 
const API = "58f0cf79195fef97df91af42c5973568";
const cidade = "Blumenau"
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API}&units=metric`;
 
export default function TempoScreenAula() {
  const [temperatura, setTemperatura] = useState("");
  const [icone, setIcone] = useState("");
 
  const fetchTempo = async () => {
    // vou lá buscar o JSON na internet
    const resposta = await fetch(URL);
    // recebo essa informação e converto ela em programação que é JSON
    const data = await resposta.json();
    console.log(resposta); // formato texto
    console.log(data); // já está convertido pra JSON
    setTemperatura(data);
    setIcone(data.weather[0].icon);
  };
 
  useEffect(() => {
    fetchTempo();
  }, []);
  // array vazio no final de useEffect simula simboliza
  // que a função será executada apenas uma vez, quando o componente for montado
 
  return (
    <View style={styles.container}>
      {icone && (
        <>
          <Text
            variant="displayMedium"
            style={{ textAlign: "center", marginVertical: 10 }}
          >
            Temperatura em {cidade}
          </Text>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${icone}@2x.png`,
            }}
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              borderRadius: 200,
            }}
          />
        </>
      )}
      <Text variant="headlineSmall">Informações</Text>
      <Text>Temperatura atual: {temperatura?.main?.temp}</Text>
      <Text>Temperatura Máxima: {temperatura?.main?.temp_max}</Text>
      <Text>Temperatura Minima: {temperatura?.main?.temp_min}</Text>
    </View>
  );
}