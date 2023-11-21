// map은 배열 각각의 요소에 대한 함수 호출 결과를 모아 새 배열을 만들어 반환하는 메서드 입니다.
// arr.map(callback(item,index,array));
// map 매서드는 콜백 함수를 인수로 전달한다. 이 콜백 함수에는 현재 요소 item, 인덱스 index, map 메서드를 호출한 배열 array가 매개변수로 제공된다.

let arr = [1,2,3,4];
let newarr = arr.map((item)=>item*3);

console.log(newarr);
// 콜백 함수는 매개변수로 제공된 배열 요소에 3을 곱해 반환하므로, 새롭게 만든 newArr에는 배열 arr의 모든 요소에 3을 곱한 결과가 저장 됩니다.

// map 메서드로 객체를 저장하는 배열의 형태
let arr1= [
    {name:"황유빈", age:24},
    {name:"전재윤", age:24},
    {name:"정여진", age:23},
    {name:"박수현", age:24},
]

let newarr1= arr1.map((item)=>item.age);

console.log(newarr1);
// map 메서드의 인수로 전달한 콜백 함수는 각 요소의 age프로퍼티 값을 반환한다. 결과적으로 newarr1에는 기존 arr1에 사람 나이만 따로모은 배열이 저장된다.
