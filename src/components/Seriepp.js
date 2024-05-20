import React, { useState } from 'react';
import Serie from '../Class/Series';
import InputSerie from './SerieInput';
import SerieResult from './SerieRetult';

function Series() {
    const [numero, setNumero] = useState(0);
    const [resultadoSerie, setResultadoSerie] = useState(0);

    const handleCalcularSerie = () => {
        const n = parseInt(numero);
        const serie = new Serie(n);
        const resultado = serie.serie(n);
        setResultadoSerie(resultado);
    };

    return (
        <div>
        <div>Cálculo de la serie.</div>
            <InputSerie numero={numero} setNumero={setNumero} handleCalcularSerie={handleCalcularSerie} />
            {SerieResult > 0 && <resultadoSerie resultado={resultadoSerie} />}
        <div>
            <img href='../img/Serie.png'></img>
        </div>
        </div>
    )
}

export default Series;
