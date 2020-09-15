const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b45b89c9d9827638b34862bde443e05d&query=' + latitude + ',' + longitude
   
    request({url, json:true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather application', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + 
                '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' 
                + body.current.feelslike + ' degrees out.')
        }
    })

}

module.exports = forecast