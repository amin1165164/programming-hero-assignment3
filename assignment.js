// https://github.com/amin1165164/programming-hero-assignment3

// 1. convert kilometer to meter.
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return 'You have placed a wrong input. Distance cannot be a negative value.';
    }
    else{
        var meter = kilometer * 1000; // using formula: (1 kilometer = 1000 meter)
        return meter;
    }
}
// var result = kilometerToMeter(5);
// console.log(result);


//2. creating a calculator for budget calculation.
 
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    if(watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0){
        return 'Please input a positive value as quantity for calculation your budget.'
    }
    else{
        var total = ((watchPrice*watchQuantity)+(phonePrice*phoneQuantity)+(laptopPrice*laptopQuantity))
        return total;
    }
}
// var result = budgetCalculator(3,2,4);
// console.log(result);


// 3. calculation of hotel cost.

function hotelCost(day){
    if(day<0){
        return 'you cannot place any negative value as day.';
    }
    else if(day <= 10){
        var stayCost = day * 100;
        return stayCost;
    }
    else if(day <= 20){
        var stayCostFirst10 = 10 * 100;
        var remaining = day - 10;
        var stayCostSecond10 = remaining * 80;
        var totalStayCost = stayCostFirst10 + stayCostSecond10;
        return totalStayCost;
    }
    else{
        var stayCostFirst10 = 10 * 100;
        var stayCostSecond10 = 10 * 80;
        var remaining = day - 20;
        var stayCostLast = remaining * 50;
        var totalStayCost = stayCostFirst10 + stayCostSecond10 + stayCostLast;
        return totalStayCost;
    }
}
// var result = hotelCost(90);
// console.log(result);


// 4. find the largest string from an array.

// var bossomFriend = ["shaon","salman", "rumman", "nahian", "redhoan", "shakhauat"];
function megaFriend(jigriFriends){
    var friend = jigriFriends[0];
    for (var i = 0; i < jigriFriends.length; i++){
        if(jigriFriends[i].length == 0){
            return 'you have given a empty string, you should fill this up first.'
        }
        else if(jigriFriends[i].length > friend.length){
            friend = jigriFriends[i];
        }
    }
    return friend;
}
// var result = megaFriend(bossomFriend);
// console.log(result);
