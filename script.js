function calcular() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var n3 = document.getElementById('n3')
    var n4 = document.getElementById('n4')
    var res = document.getElementById('res')
    res.innerHTML=`Resultado: `
    if (n1.value.length == 0) {

      alert('Digite os dados do 1° valor')

    } else if (n2.value.length == 0) {

      alert('Digite os dados do 2° valor')

    } else if (n3.value.length == 0) {

      alert('Digite os dados do 3° valor')

    } else if (n4.value.length == 0) {

      alert('Digite os dados do 4° valor')

    } else {
      if ((n1.value)=='x' || (n1.value)=='X') {

          res.innerHTML+=`${Number(n2.value) * Number(n3.value)/Number(n4.value)}`

      } else if ((n2.value)=='x' || (n2.value)=='X') {

        res.innerHTML+=`${Number(n1.value) * Number(n4.value)/Number(n3.value)}`

      } else if ((n3.value)=='x' || (n3.value)=='X') {

        res.innerHTML+=`${Number(n1.value) * Number(n4.value)/Number(n2.value)}`

      } else if ((n4.value)=='x'|| (n4.value)=='X') {

        res.innerHTML+=`${Number(n2.value) * Number(n3.value)/Number(n1.value)}`

      } else {
          res.innerHTML='!!ErRo!!'
      }
    }
  }