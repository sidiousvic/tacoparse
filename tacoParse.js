module.exports = function tacoParse(int) {
  let tacos = "";
  for (let i = 0; i < int; i++) {
    tacos += "🌮";
  }
  return tacos;
};
