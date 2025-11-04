// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;
  enemyArea.classList.add('hit');
}

// 状態（HP）
let hp = MAX_HP;

// モンスター
const enemy = document.querySelector('.enemyImg');


// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpBar = document.querySelector('.hpBar');


// 攻撃処理
const attackButton = document.querySelector('.attackBtn');

//効果音
const seHit = document.querySelector('#se-hit');
console.log(seHit);

const seDefeat = document.querySelector('#se-defeat');
console.log(seDefeat);


// ランダムダメージの実装
attackButton.addEventListener('click', function () {
  const damage = Math.floor(Math.random(DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  hp = hp - damage;  //100-10
  hpText.textContent = hp;  //テキストを書き換えた

  // HP表示の更新ロジック修正（マイナス値の防止）
  if (hp <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;
    // 撃破時のエフェクト適用（enemy--fly または enemy--squash）
    enemy.classList.add('enemy--fly');
    // 撃破後のボタン無効化処理
    attackButton.disabled = true;
    document.querySelector('.log').textContent = 'モンスターを倒した！';
    seDefeat.play();
  } else {
    hpText.textContent = hp;
    hpBar.value = hp;
    shakeEnemy();
    seHit.currentTime = 0;
    seHit.play();
  }
})





// 撃破メッセージの表示
// 攻撃時の効果を追加
// 効果音の追加（オプション）
// リスタート機能の実装（オプション）