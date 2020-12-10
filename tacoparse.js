function tacoparse(int) {
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
