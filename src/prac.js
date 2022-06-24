// console.log("hello reitu")

// var answer = "nene"
// var arrQ = []


// let ask1 = {
//     question : "Who said bye ashy?",
//     answers: {
//         kenya: false,
//         kandi: false,
//         porsha: true
//     }
// }


// let ask2 = {
//     question : "Who said close your legs?",
//     answers: {
//         kenya: false,
//         porsha: false,
//         porsha: true
//     }
// }


// let ask3 = {
//     question : "Who said called peter patricia?",
//     answers : {
//         marlo: false,
//         cynthia: false,
//         nene: true
//     }
// }

// //do i need to store their answers?

// //arrQ.push(ask1)
// //arrQ.push(ask2)
// arrQ.push(ask3)

// console.log(ask3)

// console.log(ask3.answers)


// ///xconsole.log(ask1)


// let keys = Object.keys(ask3.answers);
// let vals = Object.values(ask3.answers)
// console.log(keys)


// console.log(Object.keys(arrQ[0].answers))
// console.log(Object.values(arrQ[0].answers))


// console.log("here")
// //console.log(Object.entries(arrQ[0].answers)[1])




// function checkTruth(){
//     if (!keys.includes(answer)) return 
//     else 
//     {
//         const index = keys.findIndex(el => el === answer);
//         console.log("yes", index)
//         if (vals[index] === true) {
//             return true
//         } else return false
//     }

//         //const result = arrQ.find( (item) => item.answers === answer );
//        //// console.log(result)
// }

// console.log(checkTruth())

//check if the entries in include answer, and if so then check if the key equals the answers value else return


//schema is 

// {   
//     userID: "",
//     userName: "",
//     userEmail: "",
//     joinedDate: "", 
//     userResults = ""
// }

// item, index) in quizzes" :key="index" :item="item


var count = 60, timer = setInterval(function() {
    $("#counter").html(count--);
    if(count == 1) clearInterval(timer);
}, 1000);