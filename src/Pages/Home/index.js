// useEffect ciclo de vida - useState armazenar em algum estado 
// URL da API: /movie/now_playing?api_key=1f044149653f684e988c7b4a718ca1f3&language=pt-BR

import { useEffect, useState} from "react";
import api from '../../services/api';


function Home(){    
    const [filmes, setFilmes] = useState([]);


    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get('/movie/now_playing', {
                params:{
                    api_key:'1f044149653f684e988c7b4a718ca1f3',
                    language: 'pt-Br',
                    page: 1,
                }
            })

           // console.log(response.data.results.slice(0,10));
           setFilmes(response.data.results.slice(0,10))

        }       

        loadFilmes();

    }, [])

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=> {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;