function calculateLateFeeCost() {
    //How many late books do you have?
    var amountOfLateBooks = prompt("How many late books do you have?");

    //convert to a number
    var amountOfLateBooks = parseInt(amountOfLateBooks);

    //How many Late DVDs do you have?
    var amountOfLateDvds = prompt("How many late Dvd's do you have?");

    //convert to a number
    var amountOfLateDvds = parseInt(amountOfLateDvds);

    var amountOfDaysLate = prompt("How many days are your books and Dvd's late?")

    var amountOfDaysLate =parseInt(amountOfDaysLate);


    //get the late fee cost of a book
    var lateFeePerBook = 0.25;



    //get the late fee cost of a dvd
    var lateFeePerDvd = 0.50;

    var lateFeePerDay = 0.75;



    //find total gallons by dividing miles by MPG
    var totalBookFeeCost = amountOfLateBooks * lateFeePerBook;

    // find total gas cost by total gallons * $/gallon
    var totalDvdFeeCost = amountOfLateDvds * lateFeePerDvd;

    var totalDaysFeeCost = totalBookFeeCost + totalDvdFeeCost * lateFeePerDay

    var totalLateFeeCostDisplay = totalBookFeeCost + totalDvdFeeCost + lateFeePerDay;




    // output total fee cost

    alert(`Your total late fee is $${totalLateFeeCostDisplay} for late books and dvd's.`);


}
