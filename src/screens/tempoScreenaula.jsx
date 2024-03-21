import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../config/styles";
import axios from "axios";

const API_KEY = "81586585389fa05780c30813255a7b07";
const CITY_NAME = "Joinville";

export default function TempoScreenAula(){
    const [temperatura, setTemperatura] = useState('');

   
    useEffect(()=>{
        const fetchTempo = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;

                const response = await axios.get(url);
                console.log(response.data);
                setTemperatura(response.data);
                
        };
        fetchTempo();
    }, []) //só uma vez

    return(
        <View>
            <Text>
                <Button onPress={() => }>

                </Button>
            </Text>
            
        </View>
    )
}