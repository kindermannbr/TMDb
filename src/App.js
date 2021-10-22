const url = 'http://localhost:8000/';

async function getContent(){
    try {
        
         fetch(url)
        .then( (res) => res.json() )
        .then( (json) => { 
            
            showApiData(json.results);
            //results é o array com os dados, para serem usados dentro da função showApiData
        })

    } catch (error) {
        console.log(error);
    }
}

getContent();


function showApiData(movies){
    let output = '';

    for(let movie of movies){
        output += `<img src=https://image.tmdb.org/t/p/w300${movie.poster_path} />`
        
    }
    document.body.innerHTML = output ;
}