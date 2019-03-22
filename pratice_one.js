const TAX_RATE = 0.17;
const PHONE_PRICE = 1000;
const ACCESSORY_PRICE = 10;
const BANK_ACCOUNT_BALANCE = prompt("INTRODUCE YOUR BANKING ACCOUNT BALANCE", "10000");

const NUMBER_OF_PHONES_TO_BUY = prompt("INTRODUCE THE NUMBER OF PHONES TO BUY", 1);
const NUMBER_OF_ACCESSORIES = prompt("INTRODUCE THE NUMBER OF ACCESSORIES", 0);

function calculatePhonePrice() {
    return PHONE_PRICE + (PHONE_PRICE * TAX_RATE); 
}

function calculateTotalPrice() {
    var numberOfPhones = Number(NUMBER_OF_PHONES_TO_BUY);
    var totalPrice = 0;
    for(var i=0; i< numberOfPhones; i++ ) {
       totalPrice += calculatePhonePrice();
    }
    return totalPrice;
}

function validateTotalPrice(totalPrice) {
    var bankAccountBalance = Number(BANK_ACCOUNT_BALANCE);
    if(totalPrice>bankAccountBalance) {
        return false;
    }
    return true;
}

function formatPrice(price) {
    return "$ "+ String(price);
 }

function execute() {
  console.log(formatPrice(validateTotalPrice(calculateTotalPrice())));
}
execute();
