const idBox = document.getElementById("idField");
const styleBox = document.getElementById("styleField");
let card = "";

let id = "";
let style = "";

idBox.addEventListener("keyup", (event) => {
  id = event.target.value.toLowerCase();
});

styleBox.addEventListener("keyup", (event) => {
  style = event.target.value.toLowerCase();
});

const setCard = () => {
  card = document.getElementById(id);
  console.log(id);
  console.log(style);
  card.style.color = style;
};

// const
