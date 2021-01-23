
function kilometerToMeter(kilometer){
    var meter = 1000 * kilometer;
    return meter;
}


function budgetCalculator(x, y, z){
    var watch = 50 * x;
    var phone = 100 * y;
    var leptop = 500 * z;
    var result = watch + phone + leptop;
    return result;
}


function hotelCost(rent){
    var taka = 0;
    if (rent <= 10) {
        taka = rent * 100;
    } else if (rent <= 20) {
        var firstPart = 10 * 100;
        var remaining = rent - 10;
        var secondPart = remaining * 80;
        taka = firstPart + secondPart;
    } else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = rent - 20;
        var thirdPart = remaining * 50;
        taka = firstPart + secondPart + thirdPart;
    }
    return taka;
}


function megaFriend(array){
    var bigestWord = " " ;
    array.forEach(function (word){
        if (word.length > bigestWord.length){
            bigestWord = word;
        }
    })
    return bigestWord;
}
var word = megaFriend ["shanta", "rohim", " kohili", "somoya", "saha"]



