const request = require('request')
const geocode = require('./utils/geocode')

const url = 'http://api.weatherstack.com/current?access_key=2c94d99fc0d6151701d3b572a165ac87&query=37.8267,-122.42333'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFmaWluZHJhaiIsImEiOiJja3VydXB2dHY1OTR4MndtYXpyZDJvYWdmIn0.3tbbXmWrx1smiRSG8uZDVw&limit=1'

// request({url: url, json: true},(error, response)=>{
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.location.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         // console.log(response)
//         // const data = JSON.parse(response.body)
//         // console.log(response.body.current)
//         // const datatempr = response.body.current.temperature
//         const weather_desc = response.body.current.weather_descriptions[0]
//         const feelslike = response.body.current.feelslike
//         const precip = response.body.current.precip
//         console.log('it is currently', weather_desc, 'It feels like',feelslike,'Celcius. And there is',precip,"% of rain")
//     }
// })

// request({url: geocodeURL, json: true},(error, response)=>{
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })



geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 s timer')
// }, 2000) //miliseconds

// setTimeout(()=>{
//     console.log('0 s timer')
// }, 0) //miliseconds

// console.log('Stopping')