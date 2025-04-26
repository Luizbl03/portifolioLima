verifica = (event)=>{
    if(event.key === "Enter"){
        verificaPalavra();
    }
}

verificaPalavra = ()=>{
    let texto = document.querySelector(".entraTexto").value;
    let compara = texto
        .toLowerCase() // Converte tudo para minúsculo
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/\s/g, "") // Remove espaços
        .replace(/[-,\.!?]/g, ""); // Remove caracteres como hífens, vírgulas e pontos

    let word = compara
        .split("")   // Divide string original em cada caractere individual
        .reverse()   // Inverte a ordem dos elementos dentro do próprio array
        .join("");   // Junta todos os elementos de um array em uma única string
    
    if(compara === word){
       document.querySelector(".resultado").innerHTML = `A palavra ou frase "${texto}" é um PALÍNDROMO.` ;
    }else{
        document.querySelector(".resultado").innerHTML = `A palavra ou frase "${texto}" não é um PALÍNDROMO..`; 
    };
}