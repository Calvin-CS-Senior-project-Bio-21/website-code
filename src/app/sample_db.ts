import { dataPoint } from "./DataPoint";

// test data (I don't know what a good amount of CO2 is)
export const SAMPLE_1: dataPoint[] = [
    {time: "2021-11-04T02:30", type: 0, value: 420},  // type: CO2; value: PPM
    {time: "2021-11-04T02:30", type: 1, value: 40},   // type: Humidity; value: %
    {time: "2021-11-04T02:30", type: 3, value: 2}    // type: Temperature; value: C
]

export const SAMPLE_2: dataPoint[] = [
    {time: "2021-11-04T14:30", type: 0, value: 600},  // type: CO2; value: PPM
    {time: "2021-11-04T14:30", type: 1, value: 80},   // type: Humidity; value: %
    {time: "2021-11-04T14:30", type: 3, value: 7}    // type: Temperature; value: C
]