// Steps :
//on récupère les éléments du DOM
let result = document.getElementById("result");
//Initialisation des variables
let currentNumber = "";
let operation = "";
let firstNumber = "";
let secondNumber = "";
//1. Fonction pour récupérer le nombre
const number = (nb) => {
  currentNumber = currentNumber + nb;
  result.value = currentNumber;
  //   console.log(currentNumber);
};

//2. Fonction qui permet d'ajouter un opérateur
const addOperator = (operator) => {
  firstNumber = currentNumber;
  operation = operator;
  //   console.log(operator);
  currentNumber = "";
  result.value = `${firstNumber} ${operation}`;
  //   console.log(result.value);
};
//3. Fonction qui permet de supprimer le résultat
const deleteResult = () => {
  result.value = "0";
  currentNumber = "";
  operation = "";
  firstNumber = "";
  secondNumber = "";
};
//4. Fonction qui permet l'addition de deux nombres
const addition = (number1, number2) => {
  return parseFloat(number1) + parseFloat(number2);
};
//5. Fonction qui permet la soustraction de deux nombres
const soustraction = (number1, number2) => {
  return parseFloat(number1) - parseFloat(number2);
};
//6. Fonction qui permet la multiplication de deux nombres
const multiplication = (number1, number2) => {
  return parseFloat(number1) * parseFloat(number2);
};
//7. Fonction qui permet la division de deux nombres
const division = (number1, number2) => {
  return parseFloat(number1) / parseFloat(number2);
};
//8. Fonction qui permet de faire un pourcentage (nb1 * nb2 / 100)
const pourcentage = (number1, number2) => {
  return (parseFloat(number1) * parseFloat(number2)) / 100;
};
//9. Fonction qui permet de faire le calcul (utilisation d un switch case) il faut aussi mettre à jour l'affichage
const calcul = () => {
  secondNumber = currentNumber;
  let res;
  switch (operation) {
    case "+":
      res = addition(firstNumber, secondNumber);
      break;
    case "-":
      res = soustraction(firstNumber, secondNumber);
      break;
    case "x":
      res = multiplication(firstNumber, secondNumber);
      break;
    case "/":
      if (secondNumber === "0") {
        res = "Error";
        break;
      }
      res = division(firstNumber, secondNumber);
      break;
    case "%":
      res = pourcentage(firstNumber, secondNumber);
      break;
  }
  result.value = res;
  currentNumber = res;
  firstNumber = "";
  secondNumber = "";
};
