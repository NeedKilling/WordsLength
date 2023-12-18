"use strict"

const textarea = document.querySelector('textarea');
const symbol = document.getElementById('symbol');
const words = document.getElementById('words');
const resetBtn = document.getElementById('resetBtn');

const body = document.querySelector('body')
console.log(body)

textarea.addEventListener('input',() => {

    let subString = textarea.value;
    symbol.textContent = subString.split(/\s/).join('').length
    words.textContent = subString.split(/\s/).filter(item => (item !== '' && /[a-zA-Zа-яА-Я]/.test(item))).length

    subString ? resetBtn.classList.add('active') : resetBtn.classList.remove('active')

});

resetBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    document.querySelector('.wordsinput').reset()
    symbol.textContent = 0;
    words.textContent = 0;
    resetBtn.classList.remove('active')
});


const random = () => {
    return Math.floor(Math.random() * 255)
}

let randomColorBody = setTimeout(function randomColor(){
    body.style.cssText = `background-color: rgba(${random()},${random()},${random()},0.3); transition: all ease .5s`
    randomColorBody = setTimeout(randomColor,3000)
    console.log(body.style.cssText)
},3000)

// let randomColorHex = setInterval(function(){
//     const color = Math.floor(Math.random() * 16777215).toString(16)
//     body.style.cssText = `background-color: #${color}; transition: all ease .5s;`;
//     console.log(color);
// },2000)


