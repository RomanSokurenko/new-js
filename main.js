let userName = prompt("Ваше имя");
let userSurname = prompt("Ваша фамилия");
let userAvto = prompt("Номер вашего авто");
const korp = "100.000 грн";
alert(`${userName} ${userSurname} у вас обнаружен штраф в размере ${korp}`);
let payMent = confirm("Хотите ли вы его оплатить");
let tramSlation = prompt("Введите сумму которую вы хотите оплатить");
let yesNo = confirm("Вы точно хотите оплатить данный штраф?");
alert(
  `${userName} ${userSurname} вы оплатили штраф в количестве ${tramSlation}.Чек 567849309503`
);
