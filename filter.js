// filter 메서드는 배열에서 조건을 만족하는 요소만 모아 새로운 배열로 반환하는 메서드 입니다.
// arr.filter(callback(item,index,arr))

let arr=[
    { name: "이종원", hobby: "축구" },
    { name: "이정환", hobby: "영화" },
    { name: "신다민", hobby: "축구" },
    { name: "김효빈", hobby: "노래" }  
]

let filterarr = arr.filter((item)=>item.hobby==="축구")

console.log(filterarr);