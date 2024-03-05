//
// // Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
//
// // Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
//
// // Описание интерфейса, в котором:
// // name - строка
// // type - один из перечисления выше
// // format = один из перечисления выше
// // subtitles - необязательное поле типа строка
// // marks - необязательное поле неизвестного типа
//
//
// enum TypesOfMedia  {
//     video = "video",
//     audio = "audio"
// }
//
// enum FormatsOfMedia {
//     mp4 = ".mp4",
//     mov = ".mov",
//     mkv = ".mkv",
//     flv = ".flv",
//     webM = ".webM"
// }
//
// interface IPlayMedia {
//     name: string,
//     type: TypesOfMedia,
//     format: FormatsOfMedia,
//     subtitles?: string,
//     marks?: unknown
// }
//
// function playMedia(
// 	{ name, type, format, subtitles, marks }: IPlayMedia = {
// 		name: "example",
// 		type: TypesOfMedia.audio,
// 		format: FormatsOfMedia.mp4,
// 	}
// ): string {
// 	let marksLog: string = '';
//
//     // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
//     // Если это строка, то просто поместить её в marksLog
//     // Если что-то другое - то marksLog = "Unsupported type of marks"
//     // Не допускайте any!
//
//     if(Array.isArray(marks)){
//         marksLog = marks.join(" ")
//     }
//     else if(typeof marks === 'string'){
//         marksLog = marks
//     }
//     else {
//         marksLog = 'Unsupported type of marks'
//     }
//
// 	console.log(`Media ${name}${format} is ${type}
//     Marks: ${marksLog}
//     Subtitles: ${subtitles ?? "none"}`);
//     // помните что это за оператор ??
//
// 	return "Media started";
// }
//
// // playMedia({
// // 	name: "WoW",
// // 	format: FormatsOfMedia.mp4,
// // 	type: TypesOfMedia.audio,
// // 	subtitles: "hmhmhm hmhmhm doh",
// // 	marks: ["4:30", "5:40"],
// // });
//
//
//
//
// const loadData = (url: string, method: "GET" | "POST"): void => {
//     console.log('Fetched!');
//
// }
//
// const requestOption = {
//     url: 'https://someurl.com',
//     method: 'GET'
// } as const
//
// loadData('qqq', 'GET')
// loadData(requestOption.url, requestOption.method)
//
// // loadData(requestOption.url, <"GET">requestOption.method)
//
//
// const box = document.querySelector('.box') as HTMLElement
// box.style.cssText = 'background: skyblue; margin: 10px 0px'
//
// const input = document.querySelector('input') as HTMLInputElement
//
// const someNumber: number = parseInt(input.value)


// let num: Number = new Number(10);
// let num2 = 10
//
// num = num2
//

type MatchType =
    boolean
    | number
    | string
    | object
    | null
    | undefined
    | bigint
    | symbol
    | HTMLElement
function is(entity: unknown, matchType: MatchType): entity is MatchType{
    return typeof entity === matchType
}
function isNumber(n: number | string[] | boolean): n is number {
    return  typeof n === "number"
}

interface Car {
    engine: string
    wheels: string
}

interface Ship {
    engine: string
    sail: string
}

function repairVehicle(vehicle: Car | Ship){
    if(isCar(vehicle)){
        console.log(vehicle.wheels)
    }
    else if(isShip(vehicle)) {
        console.log(vehicle.sail)
    }
    else {
        vehicle
    }
}

repairVehicle({wheels: '3', engine: 'db900'})

function isCar(vehicle: Car | Ship): vehicle is Car{
    return 'wheels' in vehicle
}

function isShip(vehicle: Car | Ship): vehicle is Ship{
    return 'sail' in vehicle
}
