


const deepFlattenObj = (input, prefix) => {
    let obj = {};
    
    for(let key in input) {
        let newPrefix = prefix === '' ? key : prefix + '.' + key;
        let value = input[key];
        
        if(value !== null && typeof value === 'object') {
            let subAnswer = deepFlattenObj(value, newPrefix);
            obj = {...obj, ...subAnswer};
        }
        else {
            obj[newPrefix] = value;
        }
    }
    
    return obj;
}

let input = {
    "a" : "1",
    "b" : '2',
    "c" : {
        "d" : "3",
        "e" : "4",
        "f" : {
            "g" : "5",
            "h" : "6"
        }
    }
}

let input2 = {
    "a" : "1",
    "b" : {
        "c" : "2"
    }
}

console.log(deepFlattenObj(input, ''));
