const dotenv = require('dotenv');
dotenv.config();

const Yelp = {
  search(term, location, sortBy) {
    //  return a promise that will ultimately resolve to our list of businesses.
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    }) //fetch /businesses endpoint
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {  //jsonResponse has a businesses key, valid business
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
  }
};

export default Yelp;