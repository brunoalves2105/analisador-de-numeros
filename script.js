var ent = document.getElementById('num')
var cad = document.getElementById('cad')
var ana = document.getElementById('analisar')
var num = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    ana.style.display = 'initial'
    if(isNum(ent.value) && !inList(ent.value, num)){
        num.push(Number(ent.value))
        cad.innerHTML += `<li>${ent.value} adicionado</li>`
        res.innerHTML = ''
    } else {
        alert('Digite um numero valido e que não esteja na lista !')
    }
    ent.value = ''
    ent.focus()
} 

function analisar(){
    ana.style.display = 'none'
    if(num.length == 0){
        alert('digite valores para finalizar')
    } else {
        let tot = num.length
        let menor = num[0]
        let maior = num[0]
        let soma = 0
        let media = 0

        for(let pos in num){
            soma += num[pos]
            if(num[pos] < menor){
                menor = num[pos]
            }
            if(num[pos] > maior){
                maior = num[pos]
            }
        }
        media = soma / tot

        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O menor numero cadastrado foi ${menor}</p>`
        res.innerHTML += `<p>O maior numero cadastrado foi ${maior}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}`
        res.innerHTML += `<p>A media dos valores é ${media.toFixed(2)}`
    }
}

function zerar(){
    ana.style.display = 'initial'
    num = []
    res.innerHTML = ''
    cad.innerHTML = ''
}