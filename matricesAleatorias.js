export default function matrizAleatoria() {

  let arrResult = []

  const random = () => Math.floor(Math.random() * (10 - 1) + 1)
  const randomHundred = () => Math.floor(Math.random() * (100 - 1) + 1)

  const colums = random()
  const rows = random()

  for (let x = 0; x < colums; x++) {
    arrResult[x] = []
    for (let y = 0; y < rows; y++) {
      arrResult[x][y] = randomHundred()
    }
  }

  return arrResult
}