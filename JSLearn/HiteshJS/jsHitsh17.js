
//--------------------------------------------------------------
///object destructuring

// const Life = {human: "fuckedUp",
//         animals: "atPeace",
//         trees: "windy",
//         kutti: true};

// const {human, animals: ani, trees, kutti } = Life;

// console.log(trees);
// console.log(ani);

//--------------------------------------------------------------


//going from down to up...now 18th tut



// 17th ended
//--------------------------------------------------------------
///IMP for further projects
// const tinderUser = {};

// tinderUser.id =  "abhishekbro";
// tinderUser.email = "abhi@gmail.com";
// tinderUser.age = 21;
// tinderUser.study = false;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// // console.log(tinderUser.hasOwnProperty("id"));  //true
// console.log(tinderUser.hasOwnProperty("isd"));   //false
//--------------------------------------------------------------





//--------------------------------------------------------------
///IMP concept, users value aayegi tab array mei aayegi.
///...thats why Array of objects

const users =[
    {
        namee : "abhi",
        from : "pune"
    },
    {
        namee : "yash",
        from : "aurangabad"
    },
    {
        namee : "vivek",
        from : "indapur"
    }
]

console.log(users[0]);
console.log(users[0].namee);
console.log(users[0].from);
//--------------------------------------------------------------




//--------------------------------------------------------------
///objects ko merge karna seekho
// console.log("Hi");

// const obj1 = {1:"a",2:"b",3:"r"};
// const obj2 = {4:"a",5:"b",6:"r"};
// const obj4 = {7:"a",8:"b",9:"r"};

// const obj3 = Object.assign({},obj1,obj2,obj4);   //(target,source)
// const obj7 = {...obj1,...obj2,...obj4}   //this is easy

// console.log(obj3);
// console.log(obj7);
//--------------------------------------------------------------
