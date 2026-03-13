// promise1.js

let myPromise = new Promise(function(resolve, reject) {

    console.log("Promise started...");

    let success = true;

    if (success) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed!");
    }

});

myPromise.then(function(result){
    console.log("SUCCESS:", result);
});

myPromise.catch(function(error){
    console.log("ERROR:", error);
});

// promise2.js

let foodOrder = new Promise(function(resolve, reject){

    console.log("Ordering food...");

    setTimeout(function(){

        let restaurantOpen = true;

        if(restaurantOpen){
            resolve("Food delivered 🍕");
        }else{
            reject("Restaurant closed ❌");
        }

    },3000);

});

foodOrder.then(function(result){
    console.log(result);
});

foodOrder.catch(function(error){
    console.log(error);
});


// 3 simple promise pracetive

function studyPromise(){

    return new Promise(function(resolve,reject){

        console.log("Studying JS...");

        setTimeout(function(){

            let understand = true;

            if(understand){
                resolve("You understand Promises 🎉");
            }else{
                reject("Study again 😅");
            }

        },2000);

    });

}

studyPromise()
.then(function(msg){
    console.log(msg);
})
.catch(function(err){
    console.log(err);
});