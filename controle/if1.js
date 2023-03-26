function soBoaNoticia(nota){
  if(nota >= 7){
    console.log('Aprovado com ' + nota)
  }
}

soBoaNoticia(7.6)
soBoaNoticia(6.9 )

function seForVerdadeEuFalo(valor){
  if(valor){
    console.log('E verdade...' + valor)
  }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(5,9)