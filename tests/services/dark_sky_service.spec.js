var shell = require('shelljs');
var request = require("supertest");
var service = require('../../lib/services/dark_sky_service');

describe('Test ', () => {
  test('It should get a json response from the Dark Sky API', async () => {
    let response = await service.getWeather({ lat: 39.7392358, lng: -104.990251 })

    expect(response).toHaveProperty('currently')
    expect(response.currently).toHaveProperty('summary')
    expect(response.currently).toHaveProperty('icon')
    expect(response.currently).toHaveProperty('precipIntensity')
    expect(response.currently).toHaveProperty('precipProbability')
    expect(response.currently).toHaveProperty('temperature')
    expect(response.currently).toHaveProperty('humidity')
    expect(response.currently).toHaveProperty('pressure')
    expect(response.currently).toHaveProperty('windSpeed')
    expect(response.currently).toHaveProperty('windGust')
    expect(response.currently).toHaveProperty('windBearing')
    expect(response.currently).toHaveProperty('cloudCover')
    expect(response.currently).toHaveProperty('visibility')

    expect(response).toHaveProperty('hourly')
    expect(response.hourly).toHaveProperty('summary')
    expect(response.hourly).toHaveProperty('icon')
    expect(response.hourly).toHaveProperty('data')
    expect(response.hourly.data[0]).toHaveProperty('time')
    expect(response.hourly.data[0]).toHaveProperty('summary')
    expect(response.hourly.data[0]).toHaveProperty('icon')
    expect(response.hourly.data[0]).toHaveProperty('precipIntensity')
    expect(response.hourly.data[0]).toHaveProperty('precipProbability')
    expect(response.hourly.data[0]).toHaveProperty('temperature')
    expect(response.hourly.data[0]).toHaveProperty('humidity')
    expect(response.hourly.data[0]).toHaveProperty('pressure')
    expect(response.hourly.data[0]).toHaveProperty('windSpeed')
    expect(response.hourly.data[0]).toHaveProperty('windGust')
    expect(response.hourly.data[0]).toHaveProperty('windBearing')
    expect(response.hourly.data[0]).toHaveProperty('cloudCover')
    expect(response.hourly.data[0]).toHaveProperty('visibility')

    expect(response).toHaveProperty('daily')
    expect(response.daily).toHaveProperty('summary')
    expect(response.daily).toHaveProperty('icon')
    expect(response.daily).toHaveProperty('data')
    expect(response.daily.data[0]).toHaveProperty('time')
    expect(response.daily.data[0]).toHaveProperty('summary')
    expect(response.daily.data[0]).toHaveProperty('icon')
    expect(response.daily.data[0]).toHaveProperty('sunriseTime')
    expect(response.daily.data[0]).toHaveProperty('sunsetTime')
    expect(response.daily.data[0]).toHaveProperty('precipIntensity')
    expect(response.daily.data[0]).toHaveProperty('precipIntensityMax')
    expect(response.daily.data[0]).toHaveProperty('precipIntensityMaxTime')
    expect(response.daily.data[0]).toHaveProperty('precipProbability')
    expect(response.daily.data[0]).toHaveProperty('precipType')
    expect(response.daily.data[0]).toHaveProperty('temperatureHigh')
    expect(response.daily.data[0]).toHaveProperty('temperatureLow')
    expect(response.daily.data[0]).toHaveProperty('humidity')
    expect(response.daily.data[0]).toHaveProperty('pressure')
    expect(response.daily.data[0]).toHaveProperty('windSpeed')
    expect(response.daily.data[0]).toHaveProperty('windGust')
    expect(response.daily.data[0]).toHaveProperty('cloudCover')
    expect(response.daily.data[0]).toHaveProperty('visibility')
    expect(response.daily.data[0]).toHaveProperty('temperatureMin')
    expect(response.daily.data[0]).toHaveProperty('temperatureMax')
  });
});