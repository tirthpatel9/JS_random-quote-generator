function FetchQuote(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      DisplayQuote(data);
    })
    .catch((err) => console.warn("something went wrong!", err));
}

function DisplayQuote(data) {
  let rng = Math.floor(Math.random() * data.length + 1);
  const quote = data[rng];
  const quoteDisplay = document.querySelector(".quote-display");
  const authorDisplay = document.createElement("div");
  authorDisplay.setAttribute("class", "author-display");

  quoteDisplay.innerHTML = `"${quote.text}"`;
  authorDisplay.innerHTML = `-${quote.author}`;
  if (quote.author == null) {
    authorDisplay.innerHTML = "-Unknown Author";
  }
  quoteDisplay.appendChild(authorDisplay);
  
}

window.addEventListener("load", () => {
  let newQuote = document.querySelector(".newQuote-btn");

  newQuote.addEventListener("click", ()=> FetchQuote("https://type.fit/api/quotes"));
  setInterval(()=> FetchQuote("https://type.fit/api/quotes"), 30000);
});
