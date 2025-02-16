export interface Pollution {
  coord: Coord
  list: List[]
}

export interface Coord {
  lon: number
  lat: number
}

export interface List {
  main: Main
  components: { [key: string]: number }
  dt: number
}

export interface Main {
  aqi: number
}
