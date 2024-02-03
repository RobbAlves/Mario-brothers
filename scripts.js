const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".Mascara-mario2")




function cliqueinobotao(){
form.style.left = "50%"
form.style.transform = "translateX(-50%)"
mascara.style.visibility = "visible"

}

function descliqueiobotao(){
form.style.left = "100%"
form.style.transform = "translateX(0)"
mascara.style.visibility = "hidden"

}