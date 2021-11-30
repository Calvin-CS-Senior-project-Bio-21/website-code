/*
 * time: uses ISO_8601 <Date>T<time>
 * type: 0 = CO2 (ppm), 1 = Humidity (%), 2 = temperature (degrees C), 3 = Error Handling (for now)
 * value: according to the type 
*/

export interface dataPoint {
    time: String;
    co2: number;
    humidity: number;
    temperature: number;
}

// export interface dataPoint {
//     CO2: number;
//     Humidity: number;
//     Temp: number;
// }

export interface Item {
    name: string;
  }
