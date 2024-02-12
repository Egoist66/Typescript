// function f1(a: number, b : number){
//     return a + b
// }
//
// let result = f1(2, 30)
// console.log(result)
//
//
// let username: string = 'Ivan'


// const isBirthday : boolean = true;
// const age : number = 40;
// const userName : string = 'John'
//
// if(isBirthday){
//     console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`)
// }


//
//
// interface Options {
//     name: string,
//     age: number,
//     job: string
// }
//
// function f1({name, age, job} : Options) : object {
//     return  {
//         name,
//         age,
//         job
//     }
// }
//
//
// console.log(f1({
//     name: 'Farid',
//     age: 25,
//     job: 'Programmer'
// }))
//
// const createError = (msg: string) => {
//     throw new Error(msg)
// }
//
// const logBirthDay = (isBirthday : boolean, userName: string, age : number) : object  => {
//     if(isBirthday){
//         return {
//             name: userName,
//             age: age + 1,
//             message: `Congrats, ${userName} - your age is ${age}`
//         }
//     }
//
//     return  createError('Error')
// }
//
// console.log(logBirthDay(true, 'Farid', 25))



// function getRandomData(){
//     if(Math.random() < 0.5){
//         return null
//     }
//     else {
//         return '  Some  '
//     }
// }
//
// const data = getRandomData()
// const trimmedData = data ? data.trim() : null
// console.log(trimmedData)
//
//
// let id: symbol = Symbol('id')
// const data = {
//     [id]: 1
// }
//
// console.log(data[id])
//
//
// const num1: bigint = 1n
// const num2: bigint = 2n
//
// console.log(num1 + num2)
//
//


//
// interface UserDataType {
//     name: string,
//     birthDay: string,
//     year?: number,
//     isMarried: boolean
// }
//
// function logUserData({name, birthDay, year = 26, isMarried} : UserDataType) : string{
//
//     return (
//         `
//           Name: ${name},
//           BirthDay: ${birthDay},
//           Years: ${year},
//           Married: ${isMarried}
//
//         `
//     )
// }
//
// console.log(logUserData({
//     name: 'Farid',
//     birthDay: '12/07/1997',
//     isMarried: true
// }))
//
// const departments : string[] = ['dev', 'design', 'marketing']
// const numbers: number[][] = [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]


// type UserData = {
//     readings?: number,
//     units?: string,
//     mode?: string,

// }

// const electricityUserData : UserData = {
//     readings: 95,
//     units: "kWt",
//     mode: "double",
// };

// const waterUserData : UserData = {
//     readings: 3,
//     units: "m3",

// };


// const elRate : number = 0.45;
// const wRate : number = 2;

// const monthPayments : Array<number> = [0, 0]; // [electricity, water]


// type CalculatePaymentsProps = {
//     elData: UserData,
//     wData: UserData,
//     elRate: number,
//     wRate: number
// }

// const calculatePayments = ({elData, wData, elRate, wRate} : CalculatePaymentsProps) => {
//     if(elData.readings && wData.readings){
//         if (elData.mode === "double" && elData.readings < 50) {
//             monthPayments[0] = elData.readings * elRate * 0.7;
//         } else {
//             monthPayments[0] = elData.readings * elRate;
//         }
    
//         monthPayments[1] = wData.readings * wRate;
        
//     }
// };

// calculatePayments({
//     elData:{
//         readings: 10
//     },
//     wData: {
//         readings: 5
//     },
//     wRate,
//     elRate
// });

// type InvoiceData = {
//     monthPayments : Array<number>,
//     electricityUserData: UserData,
//     waterUserData: UserData


// }

// const sendInvoice = ({monthPayments, electricityUserData, waterUserData}: InvoiceData) => {
//     const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${monthPayments[0]}€
    
//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${monthPayments[1]}€`;

//     return text;
// };


// const data = sendInvoice({
//     monthPayments,
//     electricityUserData,
//     waterUserData

// })

// //console.log(data);


// enum Cars  {
//     Ford = 'Ford',
//     Audi = 'Audi',
//     BMW = 'BMW'
// }

// enum Berrys  {
//     Strawberry = 'strawberry',
//     Raspberry = 'raspberry',
//     Blueberry = 'blueberry',
// }
  
// function isBerryInStory(berry: Berrys): boolean {
//     console.log(berry);
    
//     return true;
// }


// type TupleElems = [
//     boolean, 
//     number, 
//     ...string[]
// ]

// const userDataTuple : TupleElems = [true, 40, 'John', 'Peter']

// console.log(userDataTuple);


