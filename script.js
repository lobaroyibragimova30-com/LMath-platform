
function solveMath() {
  const problem = document.getElementById("problem").value;
  const answer = document.getElementById("answer");

  try {
    if (!/^[0-9+\-*/().\s]+$/.test(problem)) {
      answer.textContent = "Faqat matematik ifodalarni kiriting!";
      return;
    }

    const result = Function(
      '"use strict"; return (' + problem + ')'
    )();

    if (!Number.isFinite(result)) {
      answer.textContent = "Bu misolni hisoblab bo‘lmadi.";
      return;
    }

    answer.textContent = "Javob: " + result;
  } catch {
    answer.textContent = "Misolni tekshirib qayta kiriting.";
  }
}
