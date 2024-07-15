import React, { useEffect, useState } from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import VideoRow from "components/VideoRow";
import VideoEditForm from "components/VideoEditForm";
import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Inicio.module.css';

function Inicio() {
    const [videos, setVideos] = useState([]);
    const [editVideo, setEditVideo] = useState(null);
    const [categoriaVideos, setCategoriaVideos] = useState({});
    const { favorito } = useFavoritoContext();

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Samiihh/AluraFlix/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados);
                categorizarVideos(dados);
            });
    }, []);

    const categorizarVideos = (videos) => {
        const categorizar = videos.reduce((acc, video) => {
            if (!acc[video.categoria]) {
                acc[video.categoria] = [];
            }
            acc[video.categoria].push(video);
            return acc;
        }, {});
        setCategoriaVideos(categorizar);
    };

    const handleSave = (updatedVideo) => {
        setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
        setEditVideo(null);
        categorizarVideos(videos);
    };

    const handleDelete = (videoId) => {
        setVideos(videos.filter(video => video.id !== videoId));
        categorizarVideos(videos);
    };

    return (
        <>
            <Banner imagem="home" />
            <section className={styles.container}>
                {Object.keys(categoriaVideos).map(categoria => (
                    <VideoRow
                        key={categoria}
                        categoria={categoria}
                        videos={categoriaVideos[categoria]}
                        onEdit={(video) => setEditVideo(video)}
                        onDelete={handleDelete}
                    />
                ))}
                {favorito.length > 0 && (
                    <VideoRow
                        key="Favoritos"
                        categoria="Favoritos"
                        videos={favorito}
                        onEdit={(video) => setEditVideo(video)}
                        onDelete={handleDelete}
                    />
                )}
            </section>
            {editVideo && (
                <VideoEditForm
                    video={editVideo}
                    onSave={handleSave}
                    onCancel={() => setEditVideo(null)}
                />
            )}
        </>
    );
}

export default Inicio;




