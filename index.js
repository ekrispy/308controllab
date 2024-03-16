 const radius = 5; //meters
 const PI = 3.1415;
 const area = PI * radius * radius;
 const minSpace = 0.8;
 const plantCount = 20;
 //plants double in number every week
///maximumPlants

let numWeeks = 10;
let firstTerm = 40;
let commonRatio = 2;


const plantsinNthweek = firstTerm  * (commonRatio ** (numWeeks - 1))
console.log(plantsinNthweek)

let MaxPlants = area / minSpace;

 let weeks = 3;
let weeks2 = 40;
let week3 = 80;


//  console.log(area);
 let plantPerWeek1 = plantCount * 2 ** 1;
 let plantPerWeeke = plantCount * 2 ** 2;
 let plantPerWeek3 = plantCount * 2 ** 3;



 if (plantPerWeek1 > 0.8 * MaxPlants) {
        console.log("pruned");
     } else if (plantPerWeek1 >= 0.5 * MaxPlants && weeks <= 0.8 * MaxPlants) {
        console.log("monitored");
     } else if (plantPerWeek1 < 0.5 * MaxPlants) {
        console.log("Planted")
     }
 
     // part 2

    //  newplantCount = 100;
     week10 = 10;

let plantPerWeek10 = plantsinNthweek
let spaceforIntialPlantCount = plantPerWeek1 * minSpace
let finalSpaceAfter10Weeks = plantsinNthweek * minSpace
// radius = additionalSpace
let NewArea = ( 100 * minSpace)
let circle = math.sqrt( NewArea / PI)
console.log('new area' + circle);
console.log(plantPerWeek10)
console.log(spaceforIntialPlantCount)
console.log(finalSpaceAfter10Weeks)