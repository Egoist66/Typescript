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


const userData= '{"name": "Farid", "age": "26", "birthDay": "12/07/1997"}'

function safeParse(str: string): unknown {
    return JSON.parse(str)
}

const data = safeParse(userData)

function transferData(d: unknown): void {
    if(typeof d === 'string'){
        console.log(d.toLocaleLowerCase());
    }
    else if(typeof d === 'object' && d){
        console.log(d);
    }
    else {
        console.log('Error')
    }
}

transferData(data)


class Singleton {
    static instance: Singleton;
    name!: string;

    constructor() {
      if (!Singleton.instance) {
        // Логика инициализации экземпляра
        this.name = "Экземпляр синглтона";
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  }

  
  
  // Использование синглтона
  const singletonInstance1 = new Singleton();
  const singletonInstance2 = new Singleton();
  
  console.log(singletonInstance1 === singletonInstance2); // Выводит true