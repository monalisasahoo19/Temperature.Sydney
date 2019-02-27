const assert = require('assert');
const csvHelper = require('./csvHelper');

describe('Monthly average temperature data for Sydney with csv format for 2018', () => {
    it('should display the smallest temperature spread', async () => {

        //Sanitise the csv with heterogeneous lines to uniform lines
        let sanitisedCSVContent = await csvHelper.sanitize('data/sydney-temperatures.csv');

        //Convert the Sanitise csv content and parse it to JSON format
        let weatherJSON = csvHelper.convertToJson(sanitisedCSVContent);

        //Derive the Spread Column and store in a new JSON variable
        let spreadWeatherJSON = weatherJSON.map((weather) => {
            return {
                month: weather.month,
                meanMaximum: parseFloat(weather.meanMaximum),
                meanMinimum: parseFloat(weather.meanMinimum),
                spread: (parseFloat(weather.meanMaximum) - parseFloat(weather.meanMinimum)).toFixed(2)
            }
        });

        //Find the smallest spread element from the 'spreadWeatherJSON' array
        let smallestSpread = spreadWeatherJSON.reduce((min, item) => (item.spread > min.spread) ? min : item, {});

        //Display the smallest spread element
        console.log(smallestSpread);

        //Assert with expected result
        assert.equal(smallestSpread.month, 'February');

        assert.equal(smallestSpread.spread, 7.00);


    });
});