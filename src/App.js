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
        output += 
        `<div className="image">
            <img src=https://image.tmdb.org/t/p/w300${movie.poster_path} />
        </div>
        <div className="title">
            ${movie.original_title}
        </div>
        <div className="date">
            ${movie.release_date}
        </div>`
        
        
    }
    document.body.innerHTML = output ;
}