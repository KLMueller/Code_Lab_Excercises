// let brotherOne = "John";
// let brotherTwo = "Jimmy";
// let brotherThree = "James";

// const brothers = ["Johnny", "Jimmy", "James"];

const brothers = [{
    firstName: "Johnny",
    weight: 150
},
{   firstName: "Jimmy",
    weight: 160
},
{   firstName: "James",
    weight: 170
}
];

// console.log(`We are three brothers: ${brothers[0]}, ${brothers[1]} and ${brothers[2]}.`);
// returns "We are three brothers: [object,Object], [object,Object], [object,Object]

console.log(`We are three brothers: ${brothers[0].firstName}, ${brothers[1].firstName} and ${brothers[2].firstName}.`);
console.log (`${brothers[0].firstName} weighs ${brothers[0].weight} pounds.`)
console.log (`${brothers[1].firstName} weighs ${brothers[1].weight} pounds.`)
console.log (`${brothers[2].firstName} weighs ${brothers[2].weight} pounds.`)
