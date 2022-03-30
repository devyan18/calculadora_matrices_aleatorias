//método para calcular 2 matrices de 1 dimensión
const calcVectores = (array1, array2) => {
  let acc = 0
  for (let i = 0; i < array1.length; i++) {
    acc += array1[i] * array2[i]
  }

  return acc
}

// función para calcular 2 matrices bidimensionales
export default function calcMatrices(matriz1, matriz2){
  if(matriz1[0].length === matriz2.length){
    let matrizResult = []
    let vectorResult = []

    // creamos una matriz base para el resultado final
    for (let y = 0; y < matriz1.length; y++) {
      matrizResult[y] = []
    }

    // recorremos los args de las matrices
    for (let x = 0; x < matriz1.length; x++) {
      let arr1 = []
      let arr2 = []

      // conseguimos el primer vector para calcular
      arr1 = matriz1[x]

      // conseguimos el segundo vector para calcular
      for (let z = 0; z < matriz2[0].length; z++) {
        for (let y = 0; y < matriz2.length; y++) {
          arr2.push(matriz2[y][z])
        }
        // agregamos los resultados a un vector común
        vectorResult.push(calcVectores(arr1, arr2))
        arr2 = []
      }
    }
    
    // definimos un contador
    let count = 0

    // agregamos los resultados a la matriz final
    for (let f = 0; f < matriz1.length; f++) {
      for (let g = 0; g < matriz2[0].length; g++) {
        matrizResult[f][g] = vectorResult[count]
        count++
      }
    }

    return matrizResult
  }else{
    return 'Error: Las matrices no son compatibles'
  }
}