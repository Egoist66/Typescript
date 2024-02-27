// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["video"] = "video";
    TypesOfMedia["audio"] = "audio";
})(TypesOfMedia || (TypesOfMedia = {}));
var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["mp4"] = ".mp4";
    FormatsOfMedia["mov"] = ".mov";
    FormatsOfMedia["mkv"] = ".mkv";
    FormatsOfMedia["flv"] = ".flv";
    FormatsOfMedia["webM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia(_a) {
    var _b = _a === void 0 ? {
        name: "example",
        type: TypesOfMedia.audio,
        format: FormatsOfMedia.mp4,
    } : _a, name = _b.name, type = _b.type, format = _b.format, subtitles = _b.subtitles, marks = _b.marks;
    var marksLog = '';
    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
    if (Array.isArray(marks)) {
        marksLog = marks.join(" ");
    }
    else if (typeof marks === 'string') {
        marksLog = marks;
    }
    else {
        marksLog = 'Unsupported type of marks';
    }
    console.log("Media ".concat(name).concat(format, " is ").concat(type, "\n    Marks: ").concat(marksLog, "\n    Subtitles: ").concat(subtitles !== null && subtitles !== void 0 ? subtitles : "none"));
    // помните что это за оператор ??
    return "Media started";
}
// playMedia({
// 	name: "WoW",
// 	format: FormatsOfMedia.mp4,
// 	type: TypesOfMedia.audio,
// 	subtitles: "hmhmhm hmhmhm doh",
// 	marks: ["4:30", "5:40"],
// });
var loadData = function (url, method) {
    console.log('Fetched!');
};
var requestOption = {
    url: 'https://someurl.com',
    method: 'GET'
};
loadData('qqq', 'GET');
loadData(requestOption.url, requestOption.method);
// loadData(requestOption.url, <"GET">requestOption.method)
var box = document.querySelector('.box');
box.style.cssText = 'background: skyblue; margin: 10px 0px';
var input = document.querySelector('input');
var someNumber = parseInt(input.value);
