
function userDialog() {
  
  let name = prompt("Як вас звати?");
  if (!name || name.trim() === "") {
    alert("Ім'я не введено. Спробуйте ще раз.");
    return;
  }

  let age = parseInt(prompt("Скільки вам років, " + name + "?"));
  if (isNaN(age) || age < 5 || age > 100) {
    alert("Будь ласка, введіть коректний вік.");
    return;
  }

  
  let goal = "";
  let attempts = 0;
  let validGoals = ["схуднути", "набрати масу", "покращити витривалість"];

  while (!validGoals.includes(goal.toLowerCase().trim()) && attempts < 3) {
    goal = prompt(
      name + ", оберіть мету тренувань:\n" +
      "• схуднути\n• набрати масу\n• покращити витривалість\n\nВведіть відповідь:"
    );
    attempts++;
    if (goal === null) {
      alert("Запис скасовано. Чекаємо вас у клубі!");
      return;
    }
  }

  
  let recommendation = "";
  let g = goal ? goal.toLowerCase().trim() : "";

  if (g === "схуднути") {
    recommendation = "Рекомендуємо кардіо-тренування 4×/тиждень + збалансована дієта.";
  } else if (g === "набрати масу") {
    recommendation = "Рекомендуємо силові тренування 3-4×/тиждень + білкове харчування.";
  } else if (g === "покращити витривалість") {
    recommendation = "Рекомендуємо інтервальні тренування та плавання.";
  } else {
    recommendation = "Зверніться до нашого тренера для індивідуального плану.";
  }

  
  let confirmed = confirm(
    "Ваші дані:\n" +
    "Ім'я: " + name + "\n" +
    "Вік: " + age + "\n" +
    "Мета: " + goal + "\n\n" +
    recommendation + "\n\n" +
    "Підтвердити запис на перше тренування?"
  );

  
  let welcomeEl = document.getElementById("welcome-message");
  if (confirmed) {
    let lines = [
      "Вітаємо, " + name + "! Ваш запис підтверджено. ✅",
      "Мета: " + goal + ".",
      recommendation
    ];
    let html = "";
    for (let i = 0; i < lines.length; i++) {
      html += lines[i] + "<br>";
    }
    welcomeEl.innerHTML = html;
    welcomeEl.style.display = "block";
    alert("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
  } else {
    welcomeEl.style.display = "none";
    alert("Добре, " + name + "! Заходьте будь-коли — двері завжди відчинені. 🚪");
  }
}


function showDevInfo(lastName = "Миронов", firstName = "Мирослав", position = "Студент") {
  let footer = document.getElementById("dev-footer");
  if (!footer) return;
  footer.innerHTML =
    "Розробник: <strong>" + firstName + " " + lastName + "</strong> | " +
    "Посада: " + position;
}