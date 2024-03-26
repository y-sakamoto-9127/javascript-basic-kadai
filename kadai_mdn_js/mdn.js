// 今日の日付を取得
const date = new Date();
/*const [month,day,year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
]; */

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate(); 

console.log(year + '年' + month + '月' + day + '日');