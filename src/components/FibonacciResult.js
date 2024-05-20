import React from 'react';

function FibonacciResult({ resultado }) {
  return (
    <div>
      <p>El n-ésimo número de Fibonacci es: {resultado}</p>
    </div>
  );
}

export default FibonacciResult;