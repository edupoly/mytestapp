export function add(a,b){
    if(isNaN(a)){
        return 'please enter numbers only'
    }
    if(isNaN(b)){
        return 'please enter numbers only'
    }
    return a+b;
}