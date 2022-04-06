//

function compareStrictValues(m){
    if (m!=55){
    return "Equal";
    }
    return "Not equal";
}
console.log(compareStrictValues(55));
console.log(compareStrictValues("55"));
console.log(compareStrictValues("21"));
console.log(compareStrictValues(12));
console.log(compareStrictValues("Doe"));
//
module.exports = compareStrictValues;