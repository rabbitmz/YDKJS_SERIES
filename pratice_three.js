var tipCalculator = function(bill, percentage) {
    return (percentage/100)*bill;
};

function calculatorRule(bill) 
{
    let tip;
    if(bill<=50) 
    {
       tip = tipCalculator(bill, 20);

    } else if(bill>50 && bill<=200) {
        tip = tipCalculator(bill, 15);
    } else if(bill >200) {
        tip = tipCalculator(bill, 10);
    }
    return new Number(tip).toFixed(2);
}

function main () {
    let tips = [];
    let amounts = [124, 48, 268];
    let tip;
    for(var i=0;i<amounts.length;i++)
    {
       tip = calculatorRule(amounts[i]);
       tips[i] = tip;
       amounts[i] = new Number(amounts[i]) + new Number(tip); 
    }
    console.log(tips);
    console.log(amounts);
}