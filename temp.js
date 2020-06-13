var bank_balance=prompt("What is your bank balance?"); //ask to user
var purchaseAmount=0;


const holder=bank_balance; //a bin to store the constant value of bank_balance
const TAX_RATE=13;
const PHONE_PRICE=300;
const ACCESSORY_PRICE=20;
const THRESHOLD= (bank_balance * 0.9);//90% of the entire money I have would be my threshold

	while(PHONE_PRICE<bank_balance){ //to check if the phone price would ever meet the bank balance. Run till the money isn't drained
		purchaseAmount=purchaseAmount+PHONE_PRICE;
		bank_balance=bank_balance-PHONE_PRICE;
		
		if(purchaseAmount<THRESHOLD){
			purchaseAmount=purchaseAmount+ACCESSORY_PRICE;
			bank_balance=bank_balance-ACCESSORY_PRICE;
		}
	}
	
function addTax(amount){
	amount=amount+ (amount*(TAX_RATE/100));
	while(amount>holder){ //to check if added tax would surpass the total money customer has. If it passes, decrease the no of phones I can buy
		amount=amount-PHONE_PRICE;
	}
	return amount;
}
function formatamount(amount){
	return ("The total price is: $"+ amount);
}

var finalAmount= addTax(purchaseAmount);
console.log(formatamount(finalAmount));


