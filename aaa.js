function DoTheCaesarRoll(){
    var text = document.getElementById("dado").value;
    var cifra = parseInt(document.getElementById("cifra").value)%26;
    var separadinho = text.split("");
    for (var i = separadinho.length; i>=0; i--){
        if (separadinho[i] != " "){
            if (text.charCodeAt(i)>=97){
            var CodigoDoChar = text.charCodeAt(i);
            CodigoDoChar = CodigoDoChar - 97;
            var CharCifrado = CodigoDoChar + cifra;
            CharCifrado = CharCifrado % 26;
            separadinho[i] = String.fromCharCode(CharCifrado+97);
            }else{
                var CodigoDoChar = text.charCodeAt(i);
                CodigoDoChar = CodigoDoChar - 65;
                var CharCifrado = CodigoDoChar + cifra;
                CharCifrado = CharCifrado % 26;
                separadinho[i] = String.fromCharCode(CharCifrado+65); 
            }
        }continue;
    }
    var resposta = separadinho.join("");
    document.getElementById("saida").innerHTML = resposta;

}

function Choosing(){
    var texto = document.getElementById("dado").value;
    var cifra = parseInt(document.getElementById("cifra").value)%26;

    if(document.getElementById('SeiACifra').checked){
        RollCaesarTheDoButWithoutTheCypher(texto);

    }else{
        RollCaesarTheDo(texto,cifra);
    }
    //if 

}

function RollCaesarTheDo(a,b){
    var text = a;
    var cifra = b;
    var separadinho = text.split("");
    for (var i = separadinho.length; i>=0; i--){
        if (separadinho[i] != " "){
            if (text.charCodeAt(i)>=97){
            var CodigoDoChar = text.charCodeAt(i);
            CodigoDoChar = CodigoDoChar - 97;
            var CharCifrado =26+ (CodigoDoChar - cifra);
            CharCifrado = CharCifrado % 26;
            separadinho[i] = String.fromCharCode(CharCifrado+97);
        }else{
            var CodigoDoChar = text.charCodeAt(i);
            CodigoDoChar = CodigoDoChar - 65;
            var CharCifrado =26 +( CodigoDoChar - cifra);
            CharCifrado = CharCifrado % 26;
            separadinho[i] = String.fromCharCode(CharCifrado+65); 
            }
        }continue;
    }
    var resposta = separadinho.join("");
    document.getElementById("saida").innerHTML = resposta;

}

function RollCaesarTheDoButWithoutTheCypher(a){
    var text = a;
    var separadinho = text.split("");
    for(var j = 0;j<26;j++){
    for (var i = separadinho.length; i>=0; i--){
        if (separadinho[i] != " "){
            if (text.charCodeAt(i)>=97){
            var CodigoDoChar = text.charCodeAt(i);
            CodigoDoChar = CodigoDoChar - 97;
            var CharCifrado =26+ (CodigoDoChar - j);
            CharCifrado = CharCifrado % 26;
            separadinho[i] = String.fromCharCode(CharCifrado+97);
         }else{
            var CodigoDoChar = text.charCodeAt(i);
            CodigoDoChar = CodigoDoChar - 65;
            var CharCifrado =26 +( CodigoDoChar - j);
            CharCifrado = CharCifrado % 26;
            separadinho[i] = String.fromCharCode(CharCifrado+65); 
            }
        }continue;
    }
    var resposta = separadinho.join("") + " || " + resposta;
}

document.getElementById("saida").innerHTML = resposta;

}