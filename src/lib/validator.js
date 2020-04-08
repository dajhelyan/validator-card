

export const validateField = (creditCardNumber, spanelem) => {
  if (creditCardNumber === null || creditCardNumber.length > 16 || creditCardNumber.length < 16) {
    return spanelem.innerHTML = `<small>Los digitos de la tarjeta deben contener 16 digitos.</small>`
  } else {
    return true;
  }
} 

export const validatorCard = (creditCardNumber) => {
  let arrNumCard = creditCardNumber.split('').reverse() /* destructurando el string e invirtiendo los numeros del array */
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
    return sum % 10 === 0 ? true : false;
}

export const maskify = (creditCardNumber) => {
  let lengthStr = creditCardNumber.length;

  if(lengthStr <= 4) {
    return creditCardNumber;
  }

  return creditCardNumber.split('').map((ele, index) => {
    /* ternario que retorna true solo a los 4 ultimos elementos, si es false retorna "#" */
    return (lengthStr - index <= 4) ? ele : '#';
  }).join('');
}
