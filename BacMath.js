$(document).ready(
    function(){

        $("button").click(BacMath);
    }
);

function BacMath(){

    let totalBeers = parseFloat( $("input#totalBeers").val() );

    let totalWine = parseFloat( $("input#totalWine").val() );

    let totalShots = parseFloat( $("input#totalShots").val() );

    let totalWeight = parseFloat( $("input#totalWeight").val() );

    let time = parseFloat( $("input#time").val() );

    let beerOunces = (totalBeers * 0.54);

    let wineOunces = (totalWine * 0.60);

    let shotOunces = (totalShots * 0.60);

    let totalOunces = (beerOunces + wineOunces + shotOunces) * 7.5;

    let totalOuncesWithWeight = (totalOunces / totalWeight)

    let bac = totalOuncesWithWeight - (0.015 * time);

    let displayBAC = bac.toFixed(3);

    $("#displayBAC").text("Your Blood Alcohol Content (BAC) is: " + displayBAC + "%");

}