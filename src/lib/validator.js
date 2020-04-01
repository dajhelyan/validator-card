
export const validatorCard = (num) => {
  let arrNumCard = num.split('').reverse() /* destructurando el string e invirtiendo los numeros del array */
  /* convirtiendo cada string en numero */
  .map((ele, index) => { /* deberia recorrer el array y solo en los numeros que esten en las posiciones impares ejecutar el algoritmo */
    let parseElem = parseInt(ele)
    if (index % 2 == 1) { //dividir un numero impar por 2 devuelve 1
      let newNum = parseElem * 2;
      return newNum.toString().split('').reduce((a, c) => { //convirtiendo los numeros en string y con reduce suma los 2 digitos
        return a + parseInt(c) 
        }, 0)
    } else {
      return parseElem
    }
  })

  const sum = arrNumCard.reduce((a, c) => {
      return a + c;
    }, 0) 
    if(sum % 10 === 0) {
      console.log('la tarjeta es valida')
    } else {
      console.log('la tarjeta es invalida')
    }
      console.log(sum, '0')

  console.log(arrNumCard, 'm')
}

