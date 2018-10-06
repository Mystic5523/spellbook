import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API


// code below must be changed to pull spell list for entered criteria on user's pc
// possible new api.js needed for seperate private calls to created pc spell lists
export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
