var subVal = { 'premium': 5, 'enterprise': 10, 'platinum': 15 };


var radioOptions = document.getElementsByName('Subscription');

console.log(radioOptions);

radioOptions.forEach(function(e)
{addEventListener.click(showPriceDiv(e.value)) }
);

function showPriceDiv(subType) {
    if (subType == 'free')
        document.getElementById('priceDiv').style.display = 'none';
    else {
        console.log("inside else")
        document.getElementById('priceDiv').style.display = 'block';
        document.getElementById('amount').value = '';
    }
    document.getElementById('subVal').textContent = subVal[subType];
    document.getElementById('totalVal').textContent = 0;
}

function computeTotal() {
    var amount = document.getElementById('amount').value;
    var price = document.getElementById('subVal').textContent;
    var totalVal = amount * price;
    document.getElementById('totalVal').textContent = totalVal;
}



/*
if (document.getElementById('premium').checked = 'true')
    subVal = 5;
else if (document.getElementById('enterprise').checked == true)
    subVal = 10;
else if (document.getElementById('platinum').checked == true)
    subVal = 15;
*/