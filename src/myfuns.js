export function add(a,b){
    if(isNaN(a)){
        return 'please enter numbers only'
    }
    if(isNaN(b)){
        return 'please enter numbers only'
    }
    return a+b;
}

export function sub(a,b){
    return a-b
}

export function abc(ar,cb){
    for(var i=0;i<=ar.length-1;i++){
        cb(ar[i])
    }
}
