// 要素取得
const ss = document.getElementById("screen-size");
const result = document.getElementById("result");

function calculate() {
    var num = ss.value;
    result.textContent = 2 * num;
}