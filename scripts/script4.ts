let some: unknown;

//some = 'Hello'

// let data: string[] = some
// data.find(e => e)

let someVal: unknown = 10

function fetchData(data: unknown): void {
    if(typeof data === 'string'){
        console.log(data.toUpperCase());
        
    }
    else if(typeof data === 'number'){
        console.log(+data.toFixed())
    }

}

fetchData('farid')