// 불변성 : 메모리에 있는 값을 변경할 수 없는것

let number = 1;
let secondNumber = 1;

number = 2;

// console.log(number);
// console.log(secondNumber);

console.log(number === secondNumber);

// 원시데이터가 아닌 배열, 객체, 함수...
let obj1 = {
    name: 'kim',
};
obj1.name = 'park';

console.log(obj1);

let obj2 = {
    name: 'kim',
};
console.log(obj2);
console.log(obj1 === obj2);
