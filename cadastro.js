function usuario(){
    if(document.getElementById("e-mail").value.length== " "){
        alert("Insira os dados de usuário!")
    }if(document.getElementById("password").value.length== " "){
        alert("Por favor insira a senha!")
    }
}

function confirmar() {

    
    if(document.getElementById("nome").value.length== " "){
        alert("Por favor, preencha o campo NOME corretamente!")
    }if (document.getElementById("rg").value.length== " "){
        alert("Por favor, preencha o campo RG corretamente!")
    }if (document.getElementById("cpf").value.length== " "){
        alert("Por favor, preencha o campo CPF corretamente!")
    }if (document.getElementById("nasc").value.length== " "){
        alert("Por favor, preencha o campo DATA DE NASCIMENTO corretamente!")
    }if (document.getElementById("fone").value.length== " "){
        alert("Por favor, preencha o campo TELEFONE FIXO corretamente!")
    }if (document.getElementById("fone2").value.length== " "){
        alert("Por favor, preencha o campo CELULAR corretamente!")
    }if (document.getElementById("email").value.length== " "){
        alert("Por favor, preencha o campo EMAIL corretamente!")
    }if (document.getElementById("endereco").value.length== " "){
        alert("Por favor, preencha o campo ENDEREÇO corretamente!")
    }if (document.getElementById("cidade").value.length== " "){
        alert("Por favor, preencha o campo CIDADE corretamente!")
    }if (document.getElementById("cep").value.length== " "){
        alert("Por favor, preencha o campo CEP corretamente!")
    }else{
        alert("Cadastro efeituado com sucesso!")
    
}
}
