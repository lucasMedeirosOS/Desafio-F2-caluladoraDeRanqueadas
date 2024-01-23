
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nickname;
let numA = 0;
let numB = 0;



function aprendizadoDoHeroiD(){
  rl.question(`Escolha entre 1 e 9 para saber quantas derrotas ${nickname} durante seu aprendizado: `, (aprendizadoDoHeroiD) => {
    if (!isNaN(aprendizadoDoHeroiD) && aprendizadoDoHeroiD >= 1 && aprendizadoDoHeroiD <= 9) {
      switch (aprendizadoDoHeroiD) {
        case '1':
          console.log(("Durante seu aprendizado ", nickname,", obteve um total de  ") + (aprendizadoDoHeroiD = 19) + (" de derrotas e está evoluindo. " ));
          numA += parseInt(aprendizadoDoHeroiD);
          jornadaDoHeroiV();
          break;
        case '2':
          console.log(("Durante seu aprendizado ", nickname,", obteve um total de  ") + (aprendizadoDoHeroiD = 290) + (" de derrotas e está evoluindo. " ));
          numA += parseInt(aprendizadoDoHeroiD);
          jornadaDoHeroiV();
          break;
        case '3':
          console.log(("Durante seu aprendizado ", nickname,", obteve um total de  ") + (aprendizadoDoHeroiD = 10) + (" de derrotas e está evoluindo. " ));
          numA += parseInt(aprendizadoDoHeroiD);
          jornadaDoHeroiV();
          break;
        case '4':
          console.log(("Durante seu aprendizado ", nickname,", obteve um total de  ") + (aprendizadoDoHeroiD = 24) + (" de derrotas e está evoluindo. " ));
          numA += parseInt(aprendizadoDoHeroiD);
          jornadaDoHeroiV();
          break;
        case '5':
          console.log(("Durante seu aprendizado ", nickname,", obteve um total de  ") + (aprendizadoDoHeroiD = 25) + (" de derrotas e está evoluindo. " ));
          numA += parseInt(aprendizadoDoHeroiD);
          jornadaDoHeroiV();
          break;
        case '6':
          console.log(("Durante seu aprendizado ", nickname,", obteve um total de  ") + (aprendizadoDoHeroiD = 220) + (" de derrotas e está evoluindo. " ));
          numA += parseInt(aprendizadoDoHeroiD);
          jornadaDoHeroiV();
          break;
        case '7':
          console.log(("Durante seu aprendizado ", nickname,", obteve um total de  ") + (aprendizadoDoHeroiD = 6) + (" de derrotas e está evoluindo. " ));
          numA += parseInt(aprendizadoDoHeroiD);
          jornadaDoHeroiV();
          break;
        case '8':
          console.log(("Durante seu aprendizado ", nickname,", obteve um total de  ") + (aprendizadoDoHeroiD = 9902) + (" de derrotas e está evoluindo. " ));
          numA += parseInt(aprendizadoDoHeroiD);
          jornadaDoHeroiV();
          break;
        case '9':
          console.log(("Durante seu aprendizado ", nickname,", obteve um total de  ") + (aprendizadoDoHeroiD = 0) + (" de derrotas e está evoluindo. " ));
          numA += parseInt(aprendizadoDoHeroiD);
          jornadaDoHeroiV();
          break;
      }
    } else {
      console.log("Número de caminho não reconhecido. Tente novamente.");
      aprendizadoDoHeroiD();
    }
  });


}

function jornadaDoHeroiV(){
  rl.question('Escolha o caminho entre 1 e 9 para saber o número de partidas Vencidas pelo Herói: ', (jornadaDoHeroiV) => {
    if (!isNaN(jornadaDoHeroiV) && jornadaDoHeroiV >= 1 && jornadaDoHeroiV <= 9) {
      switch (jornadaDoHeroiV) {
        case '1':
          console.log(("Parabéns ", nickname,", até o momento você obteve ") + (jornadaDoHeroiV = 20) + (" de vitórias vamos descobrir seu nível na Rankeada" ));
          numB += parseInt(jornadaDoHeroiV);
          caluldoraRanqueada();
          break;
        case '2':
          console.log(("Parabéns ", nickname,", até o momento você obteve ") + (jornadaDoHeroiV = 300) + (" de vitórias vamos descobrir seu nível na Rankeada" ));
          numB += parseInt(jornadaDoHeroiV);
          caluldoraRanqueada();
          break;
        case '3':
          console.log(("Parabéns ", nickname,", até o momento você obteve ") + (jornadaDoHeroiV = 1) + (" de vitórias vamos descobrir seu nível na Rankeada" ));
          numB += parseInt(jornadaDoHeroiV);
          caluldoraRanqueada();
          break;
        case '4':
          console.log(("Parabéns ", nickname,", até o momento você obteve ") + (jornadaDoHeroiV = 46) + (" de vitórias vamos descobrir seu nível na Rankeada" ));
          numB += parseInt(jornadaDoHeroiV);
          caluldoraRanqueada();
          break;
        case '5':
          console.log(("Parabéns ", nickname,", até o momento você obteve ") + (jornadaDoHeroiV = 57) + (" de vitórias vamos descobrir seu nível na Rankeada" ));
          numB += parseInt(jornadaDoHeroiV);
          caluldoraRanqueada();
          break;
        case '6':
          console.log(("Parabéns ", nickname,", até o momento você obteve ") + (jornadaDoHeroiV = 250) + (" de vitórias vamos descobrir seu nível na Rankeada" ));
          numB += parseInt(jornadaDoHeroiV);
          caluldoraRanqueada();
          break;
        case '7':
          console.log(("Parabéns ", nickname,", até o momento você obteve ") + (jornadaDoHeroiV = 95) + (" de vitórias vamos descobrir seu nível na Rankeada" ));
          numB += parseInt(jornadaDoHeroiV);
          caluldoraRanqueada();
          break;
        case '8':
          console.log(("Parabéns ", nickname,", até o momento você obteve ") + (jornadaDoHeroiV = 10001) + (" de vitórias vamos descobrir seu nível na Rankeada" ));
          numB += parseInt(jornadaDoHeroiV);
          caluldoraRanqueada();
          break;
        case '9':
          console.log(("Parabéns ", nickname,", até o momento você obteve ") + (jornadaDoHeroiV = 82) + (" de vitórias vamos descobrir seu nível na Rankeada" ));
          numB += parseInt(jornadaDoHeroiV);
          caluldoraRanqueada();
          break;
      }
    } else {
      console.log("Número de caminho não reconhecido. Tente novamente.");
      jornadaDoHeroiV();
    }
  });


}

function caluldoraRanqueada(){
  console.log(numA, numB)
  let resultado = (numB - numA)
  if (resultado <= 0) {
    console.log(" Game Over: ", nickname, " não atingiu um número satisfatório de vítorias maior que o de derrotas para poder ser  Rankeado! ")
    console.log(" ")
    console.log("Comece novamente!! ")
    explicandoODesafio()
  }else if(resultado > 0 && resultado <= 10){ 
    console.log(" Parabéns ", nickname, ", você foi Rankeado e está no nível Ferro!")
    console.log(" V: ", numB, " D: ", numA, " Está positivo em: ", resultado," Mais ainda temos um caminho a percorrer! " )

  }else if(resultado <= 20){ 
    console.log(" Parabéns ", nickname, ", você foi Rankeado e está no nível Bronze")
    console.log(" V: ", numB, " D: ", numA, " Está positivo em: ", resultado," E está começando a mostrar resultados! " )

  }else if(resultado <= 30){ 
    console.log(" Parabéns ", nickname, ", você foi Rankeado e está no nível Prata!")
    console.log(" V: ", numB, " D: ", numA, " Está positivo em: ", resultado," Você sabe o que está fazendo! " )

  }else if(resultado <= 50){ 
    console.log(" Parabéns ", nickname, ", você foi Rankeado e está no nível Ouro!")
    console.log(" V: ", numB, " D: ", numA, " Está positivo em: ", resultado," Você começou a se destacar! " )

  }else if(resultado <= 80){ 
    console.log(" Parabéns ", nickname, ", você foi Rankeado e está no nível Diamante")
    console.log(" V: ", numB, " D: ", numA, " Está positivo em: ", resultado," E já se tornou uma referência no que faz " )

  }else if(resultado <= 90){ 
    console.log(" Parabéns ", nickname, ", você foi Rankeado e está no nível Lendario!")
    console.log(" V: ", numB, " D: ", numA, " Está positivo em: ", resultado," Você é um ídolo para todos neste jogo, para ganharem de você, teram que se esforçar! " )

  }else{ 
      console.log(" Parabéns ", nickname, ", você foi Rankeado e está no nível Imortal")
      console.log(" V: ", numB, " D: ", numA, " Está positivo em: ", resultado," Você é uma lenda no game e ganhar de você é impossível! " )
  };

  rl.close()
  
};

rl.on('close', () => {
    process.exit(0);
  }
);

function userDataBase(){

    rl.question("Insira o Nome de seu Herói: ", (userInput) => {
        nickname = userInput;
        console.log(" ")
        console.log("Bem vindo ", nickname, "! ")
        console.log(" ")
        console.log("E lá vamos nós. ")
        aprendizadoDoHeroiD()
    })
    
}

function explicandoODesafio(){
    console.log(" O desafio propôe que de acordo com a quantidade de vítorias e derrotas durante o trajeto do Heroí, seja feito um calculo para poder qualificar seu nível de experiencia ")
    console.log(" ")
    console.log(" Logo este código foi pensado para que de acordo com a escolha de um número aleatório entre 1 e 9 ele terá um número de Vitórias")
    console.log(" ")
    console.log(" E depois o mesmo escolherá de forma aleatória entre 1 e 9 para que seja determinado o número de Derrotas")
    console.log(" ")
    console.log(" Após suas Escolhas o Usuário terá o seu Ranking calculado pelo sistema. ")
    console.log(" ")
    
    userDataBase()
}

explicandoODesafio()