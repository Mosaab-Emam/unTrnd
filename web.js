const feed = document.querySelector('div[data-pagelet="GroupFeed"] div[role="feed"]');
const r = /(A\s*12)|(اختراع)/gi
function unTrnd() {
  const posts = document.querySelectorAll('div[data-ad-comet-preview="message"]');
  for (post of posts) { r.test(post.innerText) && post.closest('div[aria-posinset]').remove(); }
}

unTrnd();
feed.addEventListener("DOMNodeInserted", unTrnd);