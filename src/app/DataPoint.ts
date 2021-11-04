/*
 * time: uses ISO_8601 <Date>T<time>
 * type: 0 = CO2 (ppm), 1 = Humidity (%), 2 = temperature (degrees C), 3 = Error Handling (for now)
 * value: according to the type 
*/

export interface dataPoint {
    time: String;
    type: Number;
    value: Number;
}