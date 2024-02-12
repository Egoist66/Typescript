"use strict";
// type User = {
//     technologies: UserTechnologies[]
// }
//
// type UserTechnologies = {
//     id: string,
//     name: string
// }
//
// let user: User = {
//     technologies: [
//         {name: 'React', id: crypto.randomUUID()},
//         {name: 'Next JS', id: crypto.randomUUID()},
//     ]
// }
//
// const res = user.technologies.reduce((accum, current): any => [current, ...accum], [])
//
// //console.log(res)
//
// const printReadings = (a: number | string, b: number | boolean) => {
//     if(a === b){
//         console.log(a)
//     }
// }
//
// const checkReadings = (reading: {system: number} | {user: number}): void => {
//     if('system' in reading){
//         console.log(reading.system)
//     }
//     else {
//         console.log(reading.user)
//     }
// }
//
// checkReadings({system: 2})
//
// const logValue = (x: string | Date) => {
//     if(x instanceof Date){
//         console.log(x.toLocaleTimeString())
//     }
//     else {
//
//         console.log(x.toUpperCase())
//     }
// }
//
// logValue('parviz')
function get_type(arg) {
    let argType = typeof arg;
    return (obj) => {
        return {
            isNumber: () => {
                return Number.isInteger(obj);
            },
            isArray: () => {
                return Array.isArray(obj);
            },
            isString: () => {
                return argType === 'string';
            },
            isBoolean: () => {
                return argType === 'boolean';
            },
            isObject: () => {
                return argType === 'object';
            },
            isSymbol: () => {
                return argType === 'symbol';
            },
            isUndefined: () => {
                return argType === 'undefined';
            },
            isFunction: () => {
                return argType === 'function';
            },
            isNull: () => {
                return argType === null;
            },
            isBigInt: () => {
                return argType === 'bigint';
            },
            isInstance: (descandant) => {
                return descandant instanceof obj;
            }
        };
    };
}
const number = get_type();
console.log(number(1).isNumber());
function startServer(protocol, port) {
    return `Server started`;
}
function createAnimation({ id, animationName, timingFunction = 'ease', duration, iterationCount }) {
    const elem = document.querySelector(`#${id}`);
    const styleElement = document.createElement('style');
    const animationKeyframes = `@keyframes ${animationName} {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}`;
    styleElement.appendChild(document.createTextNode(animationKeyframes));
    document.head.append(styleElement);
    const css = `
       animation: ${animationName}, ${duration},${timingFunction}, ${iterationCount}
    
    `.trim();
    if (elem) {
        elem.style.cssText = css;
    }
}
