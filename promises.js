function getData(dataID, getNexttData){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data",dataID)
            resolve("Success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}

//promises are generally returned from apis
//.then() and .catch()