let title = prompt('Մուտքագրեք վերնագիր')
let titleText = document.getElementsByTagName('h1')
titleText[0].innerHTML = title 
let bacColor = prompt('Մուտքագրեք գույնը')
document.body.style.backgroundColor = bacColor
document.body.style.margin = '0px'
document.body.style.boxSizing = 'border-box'
titleText[0].style.color = 'black'
titleText[0].style.fontFamily = 'Poppins', 'sans-serif'
titleText[0].style.fontSize = '52px'
titleText[0].style.textAlign = 'center'
titleText[0].style.margin = '121px 0px 101px 0px'
let blocks = document.getElementsByClassName('main-blocks')
blocks[0].style.maxWidth = '1110px'
blocks[0].style.margin = '0 auto'
blocks[0].style.display = 'flex'
blocks[0].style.justifyContent = 'space-between'
blocks[0].style.flexWrap = 'wrap'
blocks[0].style.marginBottom = '87px'
let block = document.querySelectorAll('.block-1')
for (let i = 0; i  <  block.length; i++) {  
    block[i].style.maxWidth = '367px';
    block[i].style.width = '100%'
    block[i].style.height = '264px';
    block[i].style.backgroundSize = 'cover'
    block[i].style.position = 'relative'
    block[i].style.margin = '0 auto'
}
block[0].style.backgroundImage = 'url("./IMG/Rectangle\ 12.png")'
let blockBottom = document.querySelectorAll('.content-bottom')
for (let j = 0; j < blockBottom.length; j++) {
    blockBottom[j].style.maxWidth = '343px';
    blockBottom[j].style.width = '100%'
    blockBottom[j].style.backgroundColor = '#083C6E';
    blockBottom[j].style.opacity = '0.9';
    blockBottom[j].style.display = 'flex';
    blockBottom[j].style.position = 'absolute';
    blockBottom[j].style.bottom = '0';   
    blockBottom[j].style.padding = '8px 12px 7px 12px'
    blockBottom[j].style.justifyContent = 'space-between'
    blockBottom[j].style.alignItems = 'center'
}
let saleButton = document.querySelectorAll('.sale')
for (let k = 0; k < saleButton.length; k++) {
    saleButton[k].style.fontFamily =  'Rubik', 'sans-serif';
    saleButton[k].style.textDecoration = 'none';
    saleButton[k].style.backgroundColor = '#083C6E';
    saleButton[k].style.padding = '11px 20px 10px 21px';
    saleButton[k].style.fonSize = '14px';
    saleButton[k].style.lineHeight = '30px';
    saleButton[k].style.color = 'white';
    saleButton[k].style.maxWidth = '80px'
    saleButton[k].style.textAlign = 'center'
    saleButton[k].style.position = 'absolute'
    saleButton[k].style.top = '13px'
    saleButton[k].style.left = '13px'
}
let contentText = document.querySelectorAll('.content-bottom > p')
for (let g = 0;g < contentText.length;g++) {
    contentText[g].style.fontFamily = 'Poppins', 'sans-serif'
    contentText[g].style.fontSize = '20px'
    contentText[g].style.lineHeight = '30px'
    contentText[g].style.color = 'white'
    contentText[g].style.margin = '0'
}
let price = document.querySelectorAll('.content-bottom > a')
for (let l = 0; l < price.length;l++) {
    price[l].style.border = 'solid 1.5px white'
    price[l].style.borderRadius = '5px'
    price[l].style.fontSize = '18px'
    price[l].style.lineHeight = '28px'
    price[l].style.padding = '13px 16px 13px 17px'
    price[l].style.fontFamily = 'Poppins', 'sans-serif'
    price[l].style.color = 'white'
    price[l].style.textDecoration = 'none';
}
block[1].style.backgroundImage = 'url("./IMG/Rectangle\ 13.png")'
block[2].style.backgroundImage = 'url("./IMG/Rectangle\ 14.png")'
let bottomImage = document.querySelector('.bg-image')
bottomImage.style.backgroundImage = 'url("./IMG/Rectangle\ 16.png")'
bottomImage.style.width = '100%'
bottomImage.style.height = '447px'
bottomImage.style.marginBottom = '88px'
let imageColor = document.querySelector('.bg-color')
imageColor.style.backgroundColor = '#152242'
imageColor.style.opacity = '0.5'
imageColor.style.width = '100%'
imageColor.style.height = '100%'



