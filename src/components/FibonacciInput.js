import React from 'react';

function InputFibonacci({ numero, setNumero, handleCalcularFibonacci }) {
  return (
    <div>
      <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
      <button onClick={handleCalcularFibonacci}>Calcular Fibonacci</button>
    </div>
  );
}

export default InputFibonacci;