class Series {

    constructor(n){
        this.entero = parseInt(n);
    }

    isEntero(entero) {
        return Number.isInteger(entero);
      }

    TriangularN(entero) {
        if (entero < 1) {
          throw new Error("n debe ser mayor o igual a 1");
        }
        console.log(`Entero en triangular: ${entero} `);
        return entero * (entero + 1) / 2;
      }

      fibonacci(entero) {
        if (entero < 0) {
          throw new Error("n debe ser un número entero positivo");
        }
    
        if (entero === 0 || entero === 1) {
          return entero;
        }
        
        console.log(`Entero en fibonacci: ${entero} `);

        let a = 0;
        let b = 1;
        let fn = 0;
    
        for (let i = 2; i <= entero; i++) {
          fn = a + b;
          a = b;
          b = fn;
        }
    
        return fn;
      }

      primo(entero) {
        if (entero < 1) {
          throw new Error("n debe ser un número entero positivo");
        }
        
        console.log(`Entero en primo: ${entero} `);

        let encontrados = 0;
        let numero = 2;
    
        while (encontrados < entero) {
          if (this.esPrimo(numero)) {
            encontrados++;
          }
    
          numero++;
        }
    
        return numero - 1;
      }
    
      esPrimo(numero) {
        if (numero <= 1) {
          return false;
        }
    
        for (let i = 2; i <= Math.sqrt(numero); i++) {
          if (numero % i === 0) {
            return false;
          }
        }
    
        return true;
      }

      serie4(entero) {
        if(this.isEntero(entero)){
            throw new Error("n debe ser Entero.");
        }

        let triangular = this.TriangularN(entero - 1);
        let fibo = this.fibonacci(entero + 2);
        let primoN = this.primo(entero);

        return ((4 * primoN) - triangular) / fibo;
      }

      serie(entero) {
        let num = parseInt(entero)
        if(this.isEntero(entero)){
            throw new Error("n debe ser Entero.");
        }

        let triangular = this.TriangularN(num - 1);
        console.log(`Triangular ${triangular}`);
        let fibo = this.fibonacci(num + 2);
        console.log(`Fibonacci: ${fibo}`);
        let primoN = this.primo(num);
        console.log(`PrimoN: ${primoN}`);

        let seriedad = (primoN - triangular) / fibo;

        return seriedad;
      }
}