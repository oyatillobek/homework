var elForm = document.querySelector('.form')
var elInp = document.querySelector('.inp')
var elIList = document.querySelector('.list')
var arr = []
elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    arr.push(elInp.value)
    fnFor(arr)

})
function fnFor (arr){
    elIList.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        var newb= document.createElement('b')
        var newButton = document.createElement('button')
        var newLi = document.createElement('li')
        newButton.textContent = 'del'
        newb.textContent = arr[i]
        newLi.appendChild(newb)
        newLi.appendChild(newButton)
        elIList.appendChild(newLi) 
    }
}

function image() {
    var imageUrl = document.querySelector(".image").value;
    var imgElement = document.querySelector(".img");
    imgElement.src = imageUrl;
}