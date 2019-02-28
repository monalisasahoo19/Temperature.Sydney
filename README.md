# Monthly smallest temperature spread for Sydney

[![CircleCI](https://circleci.com/gh/monalisasahoo19/Temperature.Sydney.svg?style=svg)](https://circleci.com/gh/monalisasahoo19/Temperature.Sydney)

In [sydney-temperature.csv] file, you’ll find monthly average temperature data
for Sydney for 2018.

Write a program that reads the csv file and outputs the month (column one)
that has the smallest temperature spread 
(the maximum temperature is the second column, the minimum the third column). 
Display the temperature
spread as well.

Instructions
- You can choose to write the program in any programming language of
your choice. (We use Node JS.)
- CSV file should not be modified. We will run the program on our version
of the csv file.
- Please include some executable test cases for your application
- Please provide detailed instructions (incl. environment details) on how
to run the program and the tests.

### Dependencies 
* [mochajs] - Mocha is a feature-rich JavaScript test framework running on Node.js

### How to run the test in your local machine?

- The automation test requires [Node.js](https://nodejs.org/) to run.
- Clone the repository.
- Install the dependencies.
    ```sh
    $ cd Temperature.Sydney
    $ npm install
    ```
- Start the API tests 
    ```sh
    $ npm test
    ```
    
- Expected Test Result as in CircleCI [test output] from `$ npm test`.


```javascript

    npm test
    
    > temperature.sydney@1.0.0 test /home/circleci/project
    > mocha
    
    
    
      Monthly average temperature data for Sydney with csv format for 2018
    { month: 'February',
      meanMaximum: 25.8,
      meanMinimum: 18.8,
      spread: '7.00' }
        ✓ should display the smallest temperature spread
    
    
      1 passing (7ms)

      
```



#### Thank you!

[//]: # 
 
  [node.js]: <http://nodejs.org>
  [sydney-temperature.csv]: <https://github.com/monalisasahoo19/Temperature.Sydney/blob/master/data/sydney-temperatures.csv>
  [test output]:<https://circleci.com/gh/monalisasahoo19/Temperature.Sydney/1>
  [mochajs]:<https://mochajs.org>
