import axios from 'axios';

const api_key = '329085419c66cceb93d8fed3ae453dc8';


async function findMovie(movie_id){
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=pt-BR`);
        console.log(response);
    } catch (error) {
      console.log(error)   
    }
}

findMovie(36586);

