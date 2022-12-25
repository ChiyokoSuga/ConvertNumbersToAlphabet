import "./styles.css";
import main from "./conversion";

// 十億の整数のみ変換可能とする

// 画面描画
// document.getElementById("app").innerHTML = ` `;

// クリックイベントの設定
const button = document.getElementById("button");
button.addEventListener("click", () => {
  const number = document.getElementById("number").value;
  const result = main(number);

  document.getElementById("result").innerHTML = `
    <span>${result}</span>
  `;
});
