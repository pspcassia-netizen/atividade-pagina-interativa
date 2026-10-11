function saudarUsuario(){
    let nome= document.getElementById("nomeUsuario").value;
    let paragrafoMensagem= document.getElementById("mensagemResultado");
    if(nome.trim()===""){
        paragrafoMensagem.textContent= "Por Favor,digite um nome válido ! X";
        paragrafoMensagem.Style.color= "red";
    } else {
        paragrafoMensagem.textContent="Olá,"+ nome +"! Seja muito bem-vindo (a) à progamação! 🚀";
        paragrafoMensagem.Style.color="green";
    }
}