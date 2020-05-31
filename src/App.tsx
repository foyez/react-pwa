import React, { useState, ChangeEvent, KeyboardEvent } from 'react'

import './App.css'
import { fetchWeather } from './api/fetchWeather'
import { Weather } from './interfaces'

export const App: React.FC = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState<Weather>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value)
  }

  const search = async (e: KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)
      console.log(data)

      setWeather(data)
      setQuery('')
    }
  }

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        onKeyPress={search}
      />

      {weather?.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;</sup>
          </div>
          <div className="info">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  )
}
