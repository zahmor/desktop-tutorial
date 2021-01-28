//Tzach Mordechai. 
//ex4
//Recommend on a good restaurant
//Input: Number of people coming, Whether it should be Kosher or not, Whether it should be Mehadrine or not. 
//Output: A relevant restaurants
////Fix: disable cancel option so that the user won't be able to get the message: "Ok, undefined is a good choice. Bon Appetit!" 30.12.2020

function CheckIsNumber(IsParamNumber) {
    if(isNaN(IsParamNumber) || isNaN(parseFloat(IsParamNumber))){   // Added parseFloat to make sure it not whitespace or enter or boolean Ver2.
        throw "stop execution";
    }    
}
function CheckIsYesOrNo(IsYesOrNo) {
    if(IsYesOrNo!=='y' && IsYesOrNo!=='n'){
        throw "stop execution";
    }
}

try{
    let readlineSync = require('readline-sync');
    let NumOfPeople = readlineSync.question('Number of people you are going with: ');
    CheckIsNumber(NumOfPeople);
    let IsKosher = readlineSync.question('Should it be Kosher? (y/n) ');
    CheckIsYesOrNo(IsKosher);
    let IsKashrutLemehadrin='';
    if (IsKosher=='y'){
        IsKashrutLemehadrin = readlineSync.question('Should it be Kashrut Lemehadrin? (y/n) ');
        CheckIsYesOrNo(IsKashrutLemehadrin);
    }
    FoodType = ['Vegan', 'Fast Food', 'Chinese', 'Steakhouse', 'Italian'];
    let  FoodTypeIndex = readlineSync.keyInSelect(FoodType, 'What kind of food do you want? ',{cancel:false});  //Fix: disable cancel option so that the user won't be able to get the message: "Ok, undefined is a good choice. Bon Appetit!"
    let  MapResturantsKosher = { 'Vegan':'Mezze', 'Fast Food':'Derbi\'s', 'Chinese':'Asia', 'Steakhouse':'Steak Wood', 'Italian':'Cielo' }
    let  MapResturantsKashrutLemehadrin = { 'Vegan':'Umm Kulthum', 'Fast Food':'Henri\'s', 'Chinese':'Hai-Phong', 'Steakhouse':'Arale', 'Italian':'Karma' }
    let  MapResturantsNonKosher = { 'Vegan':'Yuli\'s Lunch Box', 'Fast Food':'Domino\'s Pizza', 'Chinese':'Tin Tin', 'Steakhouse':'Tzidkiyaho', 'Italian':'Terasa' }
    let  ChosenFoodType = FoodType[FoodTypeIndex]; //Whether its Vegan, Fast food etc. 
    let  ChosenRestaurant = (IsKashrutLemehadrin=='y') ? MapResturantsKashrutLemehadrin[ChosenFoodType] :
                             (IsKosher=='y') ? MapResturantsKosher[ChosenFoodType] : MapResturantsNonKosher[ChosenFoodType];
    console.log('\n\nOk, ' + ChosenRestaurant + ' is a good choice. Bon Appetit!\n\n');  
}

catch (e) {
    console.error(e);
  }
