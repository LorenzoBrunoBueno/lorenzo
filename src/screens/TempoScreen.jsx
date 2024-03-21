import { useEffect, useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import styles from "../config/styles";
import axios from "axios";

const API_KEY = "81586585389fa05780c30813255a7b07";
const CITY_NAME = "Joinville";

export default function TempoScreen() {
    const [tempoData, setTempoData] = useState(null);

    useEffect(() => {
        const fetchTempo = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;

            try {
                const response = await axios.get(url);
                console.log(response.data);
                setTempoData(response.data);
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

          </Card.Content>
        </Card>
      )}
        </View>
    );
}