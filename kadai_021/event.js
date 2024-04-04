// text・btnというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');
const btn  = document.getElementById('btn') ;

// HTML要素がクリックされてから2秒後にイベント処理を実行する
btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました'
    },2000);
});