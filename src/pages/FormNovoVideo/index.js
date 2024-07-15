import React, { useState } from 'react';
import Titulo from 'components/Titulo';
import styles from './FormNovoVideo.module.css';

function FormNovoVideo({ onSave }) {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [capa, setCapa] = useState('');
    const [link, setLink] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({ id: Date.now(), titulo, categoria, capa, link, descricao });
    };

    return (
        <>
            <div className={styles.titulos}>
                <Titulo>
                    <h1>Adicione um novo vídeo</h1>
                </Titulo>
                <h2 className={styles.subtitulo}>Complete o formulário para criar um novo card de vídeo.</h2>
            </div>
            <form className={styles.FormNovoVideo} onSubmit={handleSubmit}>
                <div className={styles.primeiraFila}>
                    <label>
                        Título:
                        <input className={styles.Barra} type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </label>
                    <label>
                        Categoria:
                        <input className={styles.Barra} type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                    </label>
                </div>
                <div className={styles.segundaFila}>
                    <label>
                        Capa (URL):
                        <input className={styles.Barra} type="text" value={capa} onChange={(e) => setCapa(e.target.value)} />
                    </label>
                    <label>
                        Link do Vídeo:
                        <input className={styles.Barra} type="text" value={link} onChange={(e) => setLink(e.target.value)} />
                    </label>
                </div>
                <label>
                    Descrição:
                    <textarea className={styles.BarraDescricao} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </label>
                <button type="submit">Salvar</button>
            </form>
        </>
    );
}

export default FormNovoVideo;
