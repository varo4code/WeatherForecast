import axios from 'axios'

export const apiWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: import.meta.env.VITE_APP_ID,
    units: 'metric',
  },
})
