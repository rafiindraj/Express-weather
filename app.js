const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=2c94d99fc0d6151701d3b572a165ac87&query=37.8267,-122.42333'

request({url: url},(error, response)=>{
    // console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.current)
})
// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 s timer')
// }, 2000) //miliseconds

// setTimeout(()=>{
//     console.log('0 s timer')
// }, 0) //miliseconds

// console.log('Stopping')