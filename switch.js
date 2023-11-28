// const a=3

// switch (a) {
//     case 3:
//       console.log( '비교하려는 값보다 작습니다.' );
//       break;
//     case 4:
//       console.log( '비교하려는 값과 일치합니다.' );
//       break;
//     case 5:
//       console.log( '비교하려는 값보다 큽니다.' );
//       break;
//     default:
//       console.log( "어떤 값인지 파악이 되지 않습니다." );
//   }
// switch (browser) {
//     case 'Edge':
//       alert( "Edge를 사용하고 계시네요!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
//       break;
  
//     default:
//       alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
//   }

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

let a =+prompt('a','');

switch(a){
     case: 0;
        alert(0);
        break;
     case:1;
     alert(1);
     break;
     case:2
     case:3;
     alert('2,3');
     break;

}

