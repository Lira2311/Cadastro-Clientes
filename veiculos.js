function usuario(){
    if(document.getElementById("e-mail").value.length<3){
        alert("Insira os dados de usuário!")
    }if(document.getElementById("password").value.length<3){
        alert("Por favor insira a senha!")
    }
}

function confirmar() {
    if(document.getElementById("veic").value.length==""){
        alert("Insira marca do veículo!")
    }if(document.getElementById("mod").value.length==""){
        alert("Insira modelo do veículo!")
    }if(document.getElementById("ano").value.length==""){
        alert("Insira ano do veículo!")
    }if(document.getElementById("chassi").value.length==""){
        alert("Insira chassi do veículo!")
    }if(document.getElementById("km").value.length==""){
        alert("Insira km do veículo!")
    }if(document.getElementById("cadast").value.length==""){
        alert("Insira data de cadastro do veículo!")
    }else{
        alert("Dados Inseridos!")
}

}