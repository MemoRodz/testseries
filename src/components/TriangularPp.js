import React, { useState } from 'react';
import Serie from '../Class/Series';
import InputTriangular from './TriangularInput';
import TriangularResult from './TriangularResult';

function Triangular() {
    const [numero, setNumero] = useState(0);
    const [resultadoTriangular, setResultadoTriangular] = useState(0);

    const handleCalcularTriangular = () => {
        const n = parseInt(numero);
        const serie = new Serie(n);
        const resultado = serie.TriangularN(n);
        setResultadoTriangular(resultado);
    };
    return (
        <div>
        <div>Cálculo de número de Triangular.</div>
            <InputTriangular numero={numero} setNumero={setNumero} handleCalcularTriangular={handleCalcularTriangular} />
            {resultadoTriangular > 0 && <TriangularResult resultado={resultadoTriangular} />}
        </div>
    )
}

export default Triangular;