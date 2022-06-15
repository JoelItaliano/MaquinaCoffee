const input = require('sync-input');

const espresso = {
    mmWater : 250,
    mmMilk : 0,
    grCafe : 16,
    cacao : 0,
    vasosDesechables : 1,
    cost : 4
}
const latte = {
    mmWater : 350,
    mmMilk : 75,
    grCafe : 20,
    cacao : 0,
    vasosDesechables : 1,
    cost : 7
}
const cappuccino = {
    mmWater : 200,
    mmMilk : 100,
    grCafe : 12,
    cacao : 0,
    vasosDesechables : 1,
    cost : 6
}
const mocha = {
    mmWater : 50,
    mmMilk : 200,
    grCafe : 50,
    cacao : 100,
    vasosDesechables : 1,
    cost : 9
}
const chocolate = {
    mmWater : 0,
    mmMilk : 300,
    grCafe : 0,
    cacao : 150,
    vasosDesechables : 1,
    cost : 10
}



const stockWater = 400;
const stockMilk = 540;
const stockGrCoffee = 120;
const stockCacao = 100;
const vasosDesechables = 9;
let money = 550;

let stockMateriales = [stockWater, stockMilk, stockGrCoffee, stockCacao, vasosDesechables, money];



do {
    const opcion = input('Write action (Buy, Fill, Take, Remaining, Exit):\n');
      if (opcion === 'buy'){
        cafesDisponibles();
      }else if (opcion === 'fill'){
        stockIngredientesCoffee();
      }else if (opcion === 'take'){
        stockMateriales[5] -= stockMateriales[5];
      }else if(opcion === 'remaining') {
        materialesCoffes();
      }else if (opcion === 'exit'){
          break;
      }
}while (true)




/*Funcion que indica la cantidad de materiales de la máquina*/
function materialesCoffes (){
    console.log(`The coffee machine has:'
                ${stockMateriales[0]} ml of water
                ${stockMateriales[1]} ml of milk
                ${stockMateriales[2]} g of coffee beans
                ${stockMateriales[3]} g of cacao
                ${stockMateriales[4]} disposable cups
                $ ${stockMateriales[5]} of money'`)
}
/*Funcion que marca que cafes dispone*/
function cafesDisponibles(){
    const buy = input('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4- Mocha, 5- chocolatada, 6- back:\n');
    switch (buy) {
        case '1':
            materialesDisponibles(espresso);
            break;
        case '2':
            materialesDisponibles(latte);
            break;
        case '3':
            materialesDisponibles(cappuccino);
            break;
        case '4':
            materialesDisponibles(mocha);
            break;
        case '5':
            materialesDisponibles(chocolate);
            break;
        case '6':
        case 'back':
            break;
    }
}
/*funcion que rellena los materiales*/
function stockIngredientesCoffee(){
    stockMateriales[0] += parseInt(input("Write how many ml of water the coffee machine has:\n" ));
    stockMateriales[1] += parseInt(input("Write how many ml of milk the coffee machine has:\n" ));
    stockMateriales[2] += parseInt(input("Write how many grams of coffee beans the coffee machine has\n" ));
    stockMateriales[3] += parseInt(input("Write how many grams of cacao the coffee machine has\n" ));
    stockMateriales[4] += parseInt(input("how many disposable cups they want to add to the coffee machine?\n"));
}

/*funcion que controla que haya suficiente coffee*/
function materialesDisponibles (coffees){
    if (stockMateriales[0] < coffees.mmWater) {
        console.log( 'Sorry, not enough water!\n');
    }else if (stockMateriales[1] < coffees.mmMilk) {
        console.log( 'Sorry, not enough milk!\n');
    }else if (stockMateriales[2] < coffees.grCafe) {
        console.log('Sorry, not enough g of Coffee!\n');
    }else if(stockMateriales[3] < coffees.cacao) {
        console.log( 'Sorry, not enough g of cacao!\n');
    }else if(stockMateriales[4] < coffees.vasosDesechables) {
        console.log( 'Sorry, not enough disposable cups!\n');
    }else{
        stockMateriales[0] -= coffees.mmWater;
        stockMateriales[1] -= coffees.mmMilk;
        stockMateriales[2] -= coffees.grCafe;
        stockMateriales[3] -= coffees.cacao;
        stockMateriales[4] -= coffees.vasosDesechables;
        stockMateriales[5] += coffees.cost;
       console.log('I have enough resources, making you a coffee!\n');
    }
}