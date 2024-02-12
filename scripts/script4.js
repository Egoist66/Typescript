var some;
//some = 'Hello'
// let data: string[] = some
// data.find(e => e)
var someVal = 10;
function fetchData(data) {
    if (typeof data === 'string') {
        console.log(data.toUpperCase());
    }
    else if (typeof data === 'number') {
        console.log(+data.toFixed());
    }
}
fetchData('farid');
