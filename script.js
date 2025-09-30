// script.js

// 1. メッセージ変更機能
// ボタン要素を取得
const actionButton = document.getElementById("actionButton");
// メッセージ表示要素を取得
const messageElement = document.getElementById("message");

let clickCount = 0;
const messages = [
  "✅ 動作確認、成功です！",
  "✨ JavaScriptが正しく実行されました。",
  "🚀 GitHub Pagesは素晴らしいですね！",
  "もう一度押してみましょう！",
];

// ボタンクリック時の処理
actionButton.addEventListener("click", () => {
  // 表示するメッセージを選択
  const newMessage = messages[clickCount % messages.length];

  // メッセージと色を更新
  messageElement.textContent = newMessage;
  messageElement.classList.add("bg-yellow-100", "text-yellow-700"); // クリック後に色を変更

  clickCount++;
});

// 2. 現在日時表示機能
const timeDisplay = document.getElementById("timeDisplay");

// 日時をフォーマットして表示する関数
function updateTime() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 24時間表示
  };

  // 'ja-JP'で日本式のフォーマットにする
  const formattedTime = now.toLocaleString("ja-JP", options);

  timeDisplay.textContent = formattedTime;
}

// ページロード時と1秒ごとに日時を更新
updateTime();
setInterval(updateTime, 1000);
