import { useQuery } from '@tanstack/react-query';
import axios, { Axios } from "axios";

type MyType = {
    address: string
}

/* async function fetchWeather (text: string)  {
   
   return await axios.get<WhetherModel>('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+"London"+"?key=CMKWDT7RJRF7AY5UY6SRUNN3P');
     
} */





/* const useNetworkCallback = (text:string) => useQuery({queryKey:[ 'get-key', 'text' ], queryFn:() => axios.get<WhetherModel>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+${text}+"?key=CMKWDT7RJRF7AY5UY6SRUNN3P`)
.then(response => response.data)}); */
 
const useNetworkCallback  = (text: string) => {
    return useQuery({
        queryKey: ["whether"],
        queryFn: async () => (await axios.get<WhetherModel>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${text}?key=CMKWDT7RJRF7AY5UY6SRUNN3P`)
      )});
}
export default useNetworkCallback;


export interface WhetherModel {
    queryCost: number
    latitude: number
    longitude: number
    resolvedAddress: string
    address: string
    timezone: string
    tzoffset: number
    description: string
    days: Day[]
    alerts: any[]
    stations: Stations
    currentConditions: CurrentConditions
  }
  
  export interface Day {
    datetime: string
    datetimeEpoch: number
    tempmax: number
    tempmin: number
    temp: number
    feelslikemax: number
    feelslikemin: number
    feelslike: number
    dew: number
    humidity: number
    precip: number
    precipprob: number
    precipcover: number
    preciptype?: string[]
    snow: number
    snowdepth: number
    windgust: number
    windspeed: number
    winddir: number
    pressure: number
    cloudcover: number
    visibility: number
    solarradiation: number
    solarenergy: number
    uvindex: number
    severerisk: number
    sunrise: string
    sunriseEpoch: number
    sunset: string
    sunsetEpoch: number
    moonphase: number
    conditions: string
    description: string
    icon: string
    stations?: string[]
    source: string
    hours: Hour[]
  }
  
  export interface Hour {
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: number
    precipprob: number
    snow: number
    snowdepth: number
    preciptype?: string[]
    windgust: number
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    solarenergy: number
    uvindex: number
    severerisk: number
    conditions: string
    icon: string
    stations?: string[]
    source: string
  }
  
  export interface Stations {
    EGWU: Egwu
    EGLC: Eglc
    EGLL: Egll
    D5621: D5621
    F6665: F6665
    F8628: F8628
  }
  
  export interface Egwu {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface Eglc {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface Egll {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface D5621 {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface F6665 {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface F8628 {
    distance: number
    latitude: number
    longitude: number
    useCount: number
    id: string
    name: string
    quality: number
    contribution: number
  }
  
  export interface CurrentConditions {
    datetime: string
    datetimeEpoch: number
    temp: number
    feelslike: number
    humidity: number
    dew: number
    precip: number
    precipprob: number
    snow: number
    snowdepth: number
    preciptype: any
    windgust: number
    windspeed: number
    winddir: number
    pressure: number
    visibility: number
    cloudcover: number
    solarradiation: number
    solarenergy: number
    uvindex: number
    conditions: string
    icon: string
    stations: string[]
    source: string
    sunrise: string
    sunriseEpoch: number
    sunset: string
    sunsetEpoch: number
    moonphase: number
  }
  