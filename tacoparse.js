function tacoparse(int) {
  switch (int) {
    case 1:
      return "A ver cabrónx. ¿Veniste a comer, o qué?";
    case 2:
      return "¿Todo bien, amigx? ¿No quieres más?";
    case 3:
      return "Uno más... ¡Ándele, no le raje!";
  }
  if (int <= 0) return ":(";
  if (typeof int !== "number")
    throw new Error(
      "Invalid input. Please use a number. \n 🌮 Tacos are *never* an invalid input."
    );
  let tacos = "";
  for (let i = 0; i < int; i++) {
    tacos += "🌮";
  }
  return tacos;
}

module.exports = { tacoparse };
