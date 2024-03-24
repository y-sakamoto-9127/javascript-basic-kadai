// 変数定義
let num = 0;

// numに値代入
num = 8;

// 条件と値の出力
// num表示
console.log(num);

if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
} else if (num % 5 === 0) {
    console.log('5の倍数です');
} else if (num % 3 === 0) {
    console.log('3の倍数です');
} else {
    console.log(num);
}