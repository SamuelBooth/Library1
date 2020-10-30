


$(document).ready(
    function () {
        $("#lateFeeButton").click(calcFee());
        $("#priceButton").click(showPopup);


        function calcFee()
        {
            var numberOfLateBooks = $("#numberOfLateBooks").val();
            numberOfLateBooks = parseFloat(numberOfLateBooks);

            var numberOfLateDvds = $("#numberOfLateDvds").val();
            numberOfLateDvds = parseFloat(numberOfLateDvds);

            var numberOfDaysLate = $("#numberOfDaysLate").val();
            numberOfDaysLate= parseInt(numberOfDaysLate);

            var costPerLateBook = 0.25;

            var costPerLateDvd = 0.75;

            var totalCostPerDay = 1.00;

            var totalLateFeeCostPerDay= costPerLateBook * costPerLateDvd * totalCostPerDay;

            var TotalFee = totalLateFeeCostPerDay * numberOfLateBooks + numberOfLateDvds;





            $("#lateFeeOutput").text(TotalFee.toFixed(2));

            $(".output").show();
        }




    }
);


