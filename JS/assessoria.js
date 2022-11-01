//window.alert("teste");

var arrow = document.querySelector(".arrow");
var container = document.querySelector(".sub-menu")

arrow.onclick = e =>{
    if(!container.classList.contains('oculto')){
        container.classList.add('oculto');
    }else{
        container.classList.remove('oculto');
    }
}