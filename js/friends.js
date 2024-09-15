const stranger = document.getElementById("stranger");
const add = document.getElementById("add");
const friends = document.getElementById("friends");
const remove = document.getElementById("remove");

friends.style.display = "none";
remove.style.display = "none";
add.addEventListener("click", () => {
  friends.style.display = "block";
  stranger.style.display = "none";
  add.style.display = "none";
  remove.style.display = "block";
});

remove.addEventListener("click", () => {
  friends.style.display = "none";
  stranger.style.display = "block";
  add.style.display = "block";
  remove.style.display = "none";
});
