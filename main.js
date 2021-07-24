const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

choice1.onclick = function() {
  feedback.textContent =
    "不正解！今は東京に住んでます"
}
choice2.onclick = function() {
  feedback.textContent =
    "正解！家のお風呂は温泉だったよ"
}
choice3.onclick = function() {
  feedback.textContent = "不正解！行ったことないよ！"
}

const feedbacks = [
    "不正解！今は東京に住んでます。",
    "正解！家のお風呂は温泉だったよ",
    "不正解！行ったことないよ！",
  ]
  
  // 正解を判定する
  const choose = function(choiceNumber) {
    feedback.textContent = feedbacks[choiceNumber]
  }
  
  choice1.onclick = function() {
    // 0 番目の選択肢を選択
    choose(0)
  }
  choice2.onclick = function() {
    // 1 番目の選択肢を選択
    choose(1)
  }
  choice3.onclick = function() {
    // 2 番目の選択肢を選択
    choose(2)
  }


  const img_src = ["003.jpg", "007.jpg", "005.jpg"];
  let num = -1;

  function slide_time() {
    if (num === 2) {
      num = 0;
    } else {
      num++;
    }
    document.getElementById("slide_img").src = img_src[num];
  }

  setInterval(slide_time, 1300);