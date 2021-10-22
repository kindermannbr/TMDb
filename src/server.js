import cors from 'cors';
import express, { response }  from 'express';
import axios from 'axios';

const app = express();

const api_key = '329085419c66cceb93d8fed3ae453dc8';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjkwODU0MTljNjZjY2ViOTNkOGZlZDNhZTQ1M2RjOCIsInN1YiI6IjYxNmY1NjdkOGYyNmJjMDAyZTZmMThiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bXL3sEzfz2n9gfbSxvCfZP3_sMvT41hEe_TAM19Efmw';
const url = `https://api.themoviedb.org/4/list/1?sort_by=title.asc&language=pt-BR&api_key=${api_key}&page=1`;

app.use(cors())

app.get('/' , async(req, res) => {
    try {
        
        const { data } = await axios({
            method: 'get',
            url: url,
            headers: {'authorization': `Bearer ${token}`, 'content-type': 'application/json;charset=utf-8' }
          })
          return res.json(data);

    } catch (error) {
        console.error(error)
    }
})
app.listen(8000);