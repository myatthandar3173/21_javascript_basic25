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
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[0].r +
            ',' +
            settingColors[0].g +
            ',' +
            settingColors[0].b +
            ')';
    } else if (scrollY < scrollable / 2) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[1].r +
            ',' +
            settingColors[1].g +
            ',' +
            settingColors[1].b +
            ')';
    } else if (scrollY < (scrollable * 3) / 4) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[2].r +
            ',' +
            settingColors[2].g +
            ',' +
            settingColors[2].b +
            ')';
    } else {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[3].r +
            ',' +
            settingColors[3].g +
            ',' +
            settingColors[3].b +
            ')';
    }
})

// 8スクロール量を計算
const viewHeight = document.documentElement.clientHeight;

// スクロールできる合計の長さを計算
const scrollable = fullHeight - viewHeight;



// 6 1 / 4進んだら色が変わるようにする
// 7スクロールを4分割
// 9変数scrollableを4分割
// 10関数の定義
// 11関数の呼び出し（実行）の実引数