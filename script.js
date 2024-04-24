// 要素取得
const inch = document.getElementById("screen-size");
const re_w = document.getElementById("cm_w");
const re_h = document.getElementById("cm_h");
const con_aspect_w = document.getElementById("aspect_w");
const con_aspect_h = document.getElementById("aspect_h");

// 画面サイズから縦横の大きさを計算
function calculate() {
    // アスペクト比を設定
    const aspect_w = con_aspect_w.value;
    const aspect_h = con_aspect_h.value;
    const aspect_d = Math.sqrt(aspect_w ** 2 + aspect_h ** 2);

    // 計算
    const cm_d = 2.54 * inch.value;
    const cm_w = cm_d * (aspect_w / aspect_d);
    const cm_h = cm_d * (aspect_h / aspect_d);

    // 小数点以下2桁で表示
    re_w.textContent = cm_w.toFixed(2);
    re_h.textContent = cm_h.toFixed(2);
}

function setAspect() {

}