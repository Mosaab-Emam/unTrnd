let posts = document.querySelectorAll("section article > div");
const blacklist = ["الصورة لفت", "الصوره لفت", "للفت"];

const r = blacklist.reduce((str, w, i) => {
  str += w + "|";
  if (i === blacklist.length - 1) str = new RegExp(str.slice(0, -1), "gi");
  return str;
}, "");

for (post of posts) {
  if (r.test(post.innerText)) post.getElementsByTagName("img")[0].remove();
}
