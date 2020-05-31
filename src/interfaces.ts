export interface Weather {
  name: string
  sys: {
    country: string
  }
  main: {
    temp: number
  }
  weather: [{ icon: string; description: string }]
}
