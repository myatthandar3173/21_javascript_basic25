// 1オブジェクトで色を用意
// 3 4色制作して、配列にする
const settingColors = [
    { r: 255, g: 0, b: 0 }, //赤
    { r: 0, g: 255, b: 0 }, //緑
    { r: 0, g: 0, b: 255 }, //青
    { r: 255, g: 255, b: 0 } //黄色
];
const fullHeight = document.documentElement.scrollHeight;
console.log(fullHeight);


// 2オブジェクトの色をbodyの背景色にする
const bodyEml = document.body;
// document.querySelector('body');
console.log(bodyEml);
bodyEml.style.backgroundColor = 'rgb(' +
    settingColors[0].r +
    ',' +
    settingColors[0].g +
    ',' +
    settingColors[0].b +
    ')';



// 4スクロールするたびにイベント
window.addEventListener('scroll', function () {
    console.log('スクロール')




    // 5documentの縦の長さ取得

    const scrollY = window.scrollY;
    console.log(scrollY);
    if (scrollY < scrollable / 4) {

        colorChange(0);
    } else if (scrollY < scrollable / 2) {

        colorChange(1);
    } else if (scrollY < (scrollable * 3) / 4) {

        colorChange(2);
    } else {
        colorChange(3);
    }
})

// 8スクロール量を計算
const viewHeight = document.documentElement.clientHeight;

// スクロールできる合計の長さを計算
const scrollable = fullHeight - viewHeight;

// 10関数の定義
function colorChange(num) {
    document.body.style.backgroundColor =
        'rgb(' +
        settingColors[num].r +
        ',' +
        settingColors[num].g +
        ',' +
        settingColors[num].b +
        ')';
}

// 6 1 / 4進んだら色が変わるようにする
// 7スクロールを4分割
// 9変数scrollableを4分割
// 11関数の呼び出し（実行）の実引数
const button = this.document.querySelector('.moveTotop');
window.addEventListener('scroll', function () {

    if (window.scrollY >= 1200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
})

button.addEventListener('click', function () {
    window.scrollTo({
        top: 0
    });
})
