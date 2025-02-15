import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CityInterface } from '../interfaces/city.interface'
import { apiCity } from '../api/apiCity'
import { apiWeather } from '../api/apiWeather'
import type { Weather } from '../interfaces/weather.interface'
// import type { Pollution } from '../interfaces/pollution.interface'
import type { Forecast } from '../interfaces/forecast.interface'

export const useWeatherStore = defineStore('weather', () => {
  const isLoading = ref(false)
  const isError = ref(false)
  const city = ref<CityInterface | null>(null)
  const weather = ref<Weather | null>(null)
  const forecast = ref<Forecast | null>(null)
  // const pollution = ref<Pollution | null>(null)

  const showError = () => {
    isError.value = true
    isLoading.value = false
    setTimeout(() => {
      isError.value = false
    }, 500)
  }

  // Search city and returns its data
  const getCity = async (search: string) => {
    try {
      //Search city
      const res = await apiCity.get<CityInterface[]>('direct', {
        params: {
          q: search,
        },
      })

      return res.data
    } catch (error) {
      throw new Error('Error searching the city: ' + error)
    }
  }

  const getWeather = async (lat: number, lon: number) => {
    try {
      const res = await apiWeather.get<Weather>('/weather', {
        params: {
          lat,
          lon,
        },
      })

      return res.data
    } catch (error) {
      throw new Error('Error getting the weather: ' + error)
    }
  }

  const getForecast = async (lat: number, lon: number) => {
    try {
      const res = await apiWeather.get<Forecast>('/forecast', {
        params: {
          lat,
          lon,
          cnt: 16
        },
      })

      return res.data
    } catch (error) {
      throw new Error('Error getting the weather: ' + error)
    }
  }

  // const getPollution = async (lat: number, lon: number) => {
  //   try {
  //     const res = await apiWeather.get<Pollution>('/air_pollution/forecast', {
  //       params: {
  //         lat,
  //         lon,
  //       },
  //     })

  //     return res.data
  //   } catch (error) {
  //     throw new Error('Error getting the weather: ' + error)
  //   }
  // }

  const getCityWeather = async (search: string) => {
    if (search.trim().length == 0) {
      console.warn('Empty search')
      showError()
      return
    }
    isLoading.value = true
    const resCity = await getCity(search)
    // If cant find the city
    if (resCity?.length == 0) {
      showError()
      return
    }

    weather.value = await getWeather(resCity[0].lat, resCity[0].lon)
    forecast.value = await getForecast(resCity[0].lat, resCity[0].lon)
    // pollution.value = await getPollution(resCity[0].lat, resCity[0].lon)

    isLoading.value = false
    return (city.value = resCity[0])
  }

  return {
    isLoading,
    isError,
    city,
    weather,
    forecast,
    getCityWeather,
  }
})
