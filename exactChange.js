// Create a function that takes in two arguments(balance and amount paid) return the smallest amount of bills/coins to the customer as possible.
// change('19.40','20.00') should return "2 quarters, 1 dime"
// change('10.00', '10.00') should return "exact change"
// change('100.00', '90.00') should return "$10 still owed"

function change(bal, paid) {
    let amount = '';
    let hundreds
    let demons = [100,50,20,10,5,1,0.25,0.10,0.5,0.1]
    if (bal === paid) {
        return "exact change"
    }
    if (Number(bal) > Number(paid)) {
        return `${bal - paid} still remaining`
    }
    let change = paid - bal
    while (change > 0) {

    }

}
change(15.25, 202.00)
