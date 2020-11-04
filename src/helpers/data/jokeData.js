import axios from 'axios';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/jokes/random').then((response) => {
    const joke = response.data;
    resolve(joke);
  }).catch((error) => reject(error));
});

export default { getJoke };
