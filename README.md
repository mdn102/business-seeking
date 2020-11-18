# Business Seeking

## [a Yelp-like clone](http://fascinated-skate.surge.sh)

Projects uses React's functionalities like ; 

- Creating Static Components
- Passing Information to Components
- Setting the State of Ravenous Components
- Interacting with the Yelp API

## Info about app

- As a user, I should be able to search for restaurants,
  - should be able to view a list of restaurants returned by the Yelp API
  - should be able to sort through restaurants using a filter

## Set-up

```
npm install
npm start 
```

### Fetch Polyfill Usage for Old Browsers

fetch() is a browser API, older browsers may not support it. To increase the accessibility of Ravenous to a wider audience of users, we’ll need to add a fetch() polyfill to support older browsers. 

run `npm install whatwg-fetch --save` to install the whatwg-fetch polyfill and add it to your package.json file.


### How to solve CORS policy problem?

fetch() don't function correctly due to CORS restrictions. [cors-anywhere](https://cors-anywhere.herokuapp.com/)

We can bypass this restriction with an API called CORS Anywhere. CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.

Prepend the URL path passed to the first argument in fetch() with the following:

`https://cors-anywhere.herokuapp.com/`


### Yelp Authorization header

When we make requests to the Yelp API, we have to present a form of identification for the browser. This is because the Yelp API wants to know that we are authorized to access the API.

This identification is presented using our API key as a browser header.


### Improvements to App

- Make addresses clickable and have them open the address in Google Maps in a new tab
  
- Make images clickable and have them open the business’ website in a new tab
  
- Clicking on a different sorting option automatically requires the Yelp API, rather than having to manually click “Let’s Go” again

- Implement a type of sort (for example, by entering a distance or radius from a central location)

- Allow you to search by pressing “Enter” (or “Return”) on your keyboard, as opposed to manually clicking
Add autocompletion of addresses to the “Location” input

