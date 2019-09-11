const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/2c14fee3c8958c546927dac83d673cb0/' + lat + ',' + long + '?units=si&lang=en';

    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        }else if (body.error){
            callback('Unable to find weather forecast!', undefined);
        }else {
            callback(undefined, body.daily.data[0].summary +' It is currently ' + body.currently.temperature + ' degrees out. There is a ' +
                    body.currently.precipProbability + '% chance of rain. Temperature high is ' + body.daily.data[0].temperatureHigh
                    + ' and Temeperature low is ' + body.daily.data[0].temperatureLow + '.');
        }
    });


};





module.exports = forecast;