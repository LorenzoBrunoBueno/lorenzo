import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-papaer";
import styles from "../config/styles";
import axios from "axios";

const API_KEY = "81586585389fa05780c30813255a7b07";
const CITY_NAME = "Joinville";

export default function TempoScreen(){
    useEffect(() => {
        const fetchTempo = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;

            try {
                const response = await axios.get(url);
                console.log(response.data);
            } catch (error) {
                console.error("There was an error!", error);
            }
        };
        fetchTempo();
    }, []);

    return(
        <View style={styles.container}>
            <Text variant="bodyLarge">
                Tempo {CITY_NAME}
            </Text>
            {tempoData && (
        <Card style={styles.card}>
          <Card.Title title="Detalhes do Tempo" />
          <Card.Content>
            <Text>Temperatura: {tempoData.main.temp}°C</Text>
            <Text>Sensação térmica: {tempoData.main.feels_like}°C</Text>
            <Text>Temperatura mínima: {tempoData.main.temp_min}°C</Text>
            <Text>Temperatura máxima: {tempoData.main.temp_max}°C</Text>
            <Text>Pressão: {tempoData.main.pressure} hPa</Text>
            <Text>Umidade: {tempoData.main.humidity}%</Text>
            <Text>Visibilidade: {tempoData.visibility / 1000} km</Text>
            <Text>Vento: {tempoData.wind.speed} m/s</Text>
            <Text>Descrição: {tempoData.weather[0].description}</Text>
          </Card.Content>
        </Card>
      )}
        </View>
    );
}