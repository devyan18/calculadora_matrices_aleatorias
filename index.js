import matricesAleatorias from './matricesAleatorias.js'
import calcMatrices from './multiplicationMatriz.js'

const matriz1 = matricesAleatorias()
const matriz2 = matricesAleatorias()

console.table(matriz1)
console.table(matriz2)

const matrizResult = calcMatrices(matriz1, matriz2)

console.table(matrizResult)