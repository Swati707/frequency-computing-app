# [Frequency-compting-app](https://ttt-swati-kanchan.herokuapp.com/)

> ### This simple Client-Server application finds the top N most frequently occuring words in a text file stored at a remote URL using web scraping. Live version of this application can be found [here](https://ttt-swati-kanchan.herokuapp.com/).

## Table of contents

- [How it works?](#how-it-works)
- [Getting started](#getting-started)
- [Different Components of the code](#different-components-of-the-code)
- [Libraries and Plugins used](#libraries-and-plugins-used)
- [Test Cases](#test-cases)

## How it works?

Stack used here is:
1. Environment and all the dependencies for Backend is an RESTful web service using Node.js and Express.js Framework.
2. Angular4 PRIMENG framework is used as the web interface(Frontend).

## Getting started

Clone this repository into your system.

### Frontend

1. Navigate to ttt-assignment-freq-app/frontend in your terminal
2. Run `npm install` to install required dependencies
3. Run `ng build -prod` to build the angular product and integrate and assemble all the components into a single `index.html` in "../public" folder

### Backend

1. Navigate to ttt-assignment-freq-app in your terminal
2. Run `npm install` to install required dependencies

### Running the application

1. Navigate to ttt-assignment-freq-app in your terminal
2. Run `node index`
3. Go to your browser and open the link http://localhost:8080
4. Try with different values of 'N'

![alt tag](https://github.com/Swati707/ttt-assignment-freq-app/blob/master/App%20Screenshots/Homepage.PNG?raw=true)

## Different Components of the code

### package.json
It contains all the metadata information of the application like the packages and there versions. There are 2 package.json files - one in main app `ttt-assignment-freq-app` and another in `ttt-assignment-freq-app\frontend` folder.

### index.js
1. Creates an Express server named as `app`
2. Add middlewares `cors` and `body-parser`
3. Add static file `\public` to the server
4. Creates API that renders `\public\index.html` at the homepage http://localhost/
5. Creates GET API that receives 'N' as parameter and then calls appropriate backend controller function
6. Finally initiates the server at port no. 3000 of your local machine.

#### public/
> This is generated only after building the frontend folder using `ng build -prod`
Stores the index.html file and its dependencies which is finally rendered at homepage.

### backend/controller

#### hash.js
Contains a function modules that computes a *hash* for a given string passed as an arguement to it.
#### frequency_calculator.js

> Contains module `getTopNMostFrequentWords` which takes `req`, `res` and `next` as parameters and sends JSON array of objects storing top N most frequently occuring words in http://www.terriblytinytales.com/test.txt as response in `res`. 

This module web scrapes the whole web page at http://www.terriblytinytales.com/test.txt and then uses the text in HTML body which is then splitted into array of words. 

Each word is then hashed and stored in the JSON object *frequency* with `word` and `frequency` properties storing the particular word and its frequency in the text file. This *frequency* array is then sorted according to property `frequency`.

And then top N elements of array *frequency* is stored in `n_most_frequent_words` and sent as response.

### frontend

> #### This stores the angular project for Frontend of the application

#### src/
Stores all the source files of our angular project.

##### 1. app/components/word-frequency/
Stores all the `.ts`, `.html`, and `.css` files of the component rendered in main app component module.
#### 2. app/model/frequency.ts
Defines and exports a class storing data members of JSON object `frequency`
#### 3. app/services/word-frequency-info.service.ts
Defines the service, used by the component `word-frequency`, of making an HTTP GET request to the backend server.

## Libraries and Plugins used

- **express**
- **cors**
- **body-parser**
- **request-promise**
- **cheerio**
- **path**
- **@angular**
- **primeng**
- **HttpClientModule from @angular/common/http**
- **FormsModule from @angular/forms**
- **InputTextModule, ButtonModule, DataViewModule, KeyFilterModule, TooltipModule from primeng**

## Test Cases

### N = 0
![alt tag](https://github.com/Swati707/ttt-assignment-freq-app/blob/master/App%20Screenshots/n_is_0.PNG?raw=true)

### N = 1
![alt tag](https://github.com/Swati707/ttt-assignment-freq-app/blob/master/App%20Screenshots/n_is_1.PNG?raw=true)

### N = 5
![alt tag](https://github.com/Swati707/ttt-assignment-freq-app/blob/master/App%20Screenshots/n_is_5.PNG?raw=true)

### N = 20
![alt tag](https://github.com/Swati707/ttt-assignment-freq-app/blob/master/App%20Screenshots/n_is_20.PNG?raw=true)

### N = 200
![alt tag](https://github.com/Swati707/ttt-assignment-freq-app/blob/master/App%20Screenshots/n_is_200_start.PNG?raw=true)
### ...
![alt tag](https://github.com/Swati707/ttt-assignment-freq-app/blob/master/App%20Screenshots/n_is_200_end.PNG?raw=true)

### N = 400 (maximum 328 different words are there)
![alt tag](https://github.com/Swati707/ttt-assignment-freq-app/blob/master/App%20Screenshots/n_is_400_start.PNG?raw=true)
### ...
![alt tag](https://github.com/Swati707/ttt-assignment-freq-app/blob/master/App%20Screenshots/n_is_400_end.PNG?raw=true)

[link](https://ttt-swati-kanchan.herokuapp.com/)

© [Swati Kanchan](https://github.com/Swati707)
