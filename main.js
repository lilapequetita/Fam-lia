var lista_img=["familia_sprite_1.jpg", "familia_sprite_2.jpg", "familia_sprite_3.jpg", "familia_sprite_4.jpg", "familia_sprite_5.jpg"];
var lista_nome=["Aimée", "Gabriel", "Spike", "Elisa (eu)", "Viviane"];
var  indice=0;
function trocar(){
    indice=indice+1
    if(indice>=lista_img.length){
        indice=0;
    }
    document.getElementById("familia").src=lista_img[indice];
    document.getElementById("nome").innerHTML=lista_nome[indice];
}
