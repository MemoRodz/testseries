import React, { useState } from 'react';

function InputTriangular({ numero, setNumero, handleCalcularTriangular }) {
    return (
        <div>
            <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <button onClick={handleCalcularTriangular}>Calcular Número Triangular.</button>
        </div>
    )
}

export default InputTriangular;