import React, { useEffect, useState } from "react";
import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";
import VideoRow from "components/VideoRow"; 

function PaginaBase() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Simulação da chamada à API
        fetch('URL_DA_SUA_API')
            .then(response => response.json())
            .then(data => setVideos(data.videos));
    }, []);

    const categorias = [...new Set(videos.map(video => video.categoria))];

    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                    {categorias.map(categoria => (
                        <VideoRow 
                            key={categoria} 
                            categoria={categoria} 
                            videos={videos.filter(video => video.categoria === categoria)} 
                        />
                    ))}
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    );
}

export default PaginaBase;
