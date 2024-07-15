import React from 'react';
import styles from './VideoCard.module.css';
import {iconeFavoritar, useHandleFavoritar, iconeEditar, handleEditar, iconeExcluir, handleExcluir} from '../Card'

const VideoCard = ({ video }) => {
  return (
    <div className={styles['video-card']}> 
        <a href={video.link} target="_blank" rel="noopener noreferrer" className={styles['video-card-link']}>
            <img src={video.capa} alt={video.titulo} className={styles['video-card-img']}></img>
        </a>
        <h3 className={styles['video-card-title']}>{video.titulo}</h3>
        <div className={styles.icons}>
            <img
                src={iconeFavoritar}
                alt="Favoritar filme"
                className={styles.icon}
                onClick={useHandleFavoritar}
            />
            <img
                src={iconeEditar}
                alt="Editar filme"
                className={styles.icon}
                onClick={handleEditar}
            />
                <img
                    src={iconeExcluir}
                    alt="Excluir filme"
                    className={styles.icon}
                    onClick={handleExcluir}
                />
        </div>
        <p className={styles['video-card-description']}>{video.descricao}</p>
    </div>
  );
};

export default VideoCard;

