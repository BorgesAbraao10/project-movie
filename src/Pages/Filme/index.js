import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './filme-info.css';

import api from '../../services/api';



function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:'1f044149653f684e988c7b4a718ca1f3',
                    language: 'pt-Br',
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Filme não encontrado");
                navigate("/", { replace: true });
                return;
            })
        }

        loadFilme();

        return () =>console.log("Componente foi desmontado")

    }, [navigate, id]);

    if(loading){
        return(
            <div className='filme-info'>
                Carregando detalhes...
            </div>
        )
    }


    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a target="blank" href={`http://youtube.com/results?search_query=${filme.title} Trailer`}> 
                    Trailer
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Filme;
