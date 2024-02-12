// const printMessages = (msg: string | number)  => {
    
//     if(typeof msg === 'string'){
//         return msg.toUpperCase()
//     }
//     return msg.toFixed()
// }


//console.log(printMessages(123.0023200000));




/* 

// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).
*/



export function sum(...nums: Array<number>): number {
    return nums.reduce((accum, next) => accum + next, 0)
}

console.log(sum(1, 2,3,4,5));



// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return ""
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    
    return number + number
}

console.log(getSum(10));


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    const evenSum = arr.filter((item, i) => {
        if(i % 2 === 0){
            return item
        }
    }).reduce((accum, next) => accum + next, 0)

    const oddSum = arr.filter((item, i) => {
        if(i % 2 !== 0){
            return item
        }
    }).reduce((accum, next) => accum + next, 0)

   return evenSum > oddSum
}

console.log(isEvenIndexSumGreater([1, 2, 1, 6]));


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.map(item => item * 2)
}



// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    if(N < 0){
        return 0
    }

    let sum = 0

    for(let i = 0; i <= N; i++){
        sum += i  
    }

    return sum
}

console.log(sumFirstNumbers(2321));

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


function atmWithdraw(amount: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const result = [];
  
    for (let i = 0; i < banknotes.length; i++) {
      const banknote = banknotes[i];
      const count = Math.floor(amount / banknote);
  
      if (count > 0) {
        for (let j = 0; j < count; j++) {
          result.push(banknote);
          amount -= banknote;
        }
      }
  
      if (amount === 0) {
        break;
      }
    }
  
    return result;
  }

console.log('====================================');
console.log(atmWithdraw(1230));
console.log('====================================');