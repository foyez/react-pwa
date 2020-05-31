import axios from 'axios'
import { Weather } from '../interfaces'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'f33a484cf794d08d0148764789aaba32'

export const fetchWeather = async (query: string): Promise<Weather> => {
  const { data } = await axios.get<Weather>(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  })

  return data
}
