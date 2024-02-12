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
var userData = '{"name": "Farid", "age": "26", "birthDay": "12/07/1997"}';
function safeParse(str) {
    return JSON.parse(str);
}
var data = safeParse(userData);
function transferData(d) {
    if (typeof d === 'string') {
        console.log(d.toLocaleLowerCase());
    }
    else if (typeof d === 'object' && d) {
        console.log(d);
    }
    else {
        console.log('Error');
    }
}
transferData(data);
var Singleton = /** @class */ (function () {
    function Singleton() {
        if (!Singleton.instance) {
            // Логика инициализации экземпляра
            this.name = "Экземпляр синглтона";
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
    return Singleton;
}());
// Использование синглтона
var singletonInstance1 = new Singleton();
var singletonInstance2 = new Singleton();
console.log(singletonInstance1 === singletonInstance2); // Выводит true
