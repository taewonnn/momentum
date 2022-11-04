const quotes = [
  {
    quote : "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
    author: "Abigail Adams"
  },
  {
    quote : "Tomorrow hopes we have learned something from yesterday.",
    author: "John Wayne"
  },
  {
    quote : "Luck is the residue of design.",
    author: "Branch Rickey"
  },
  {
    quote : "To follow, without halt, one aim: There's the secret of success.",
    author: "Anna Pavlova"
  },
  {
    quote : "All you need in this life is ignorance and confidence; then success is sure.",
    author: "Mark Twain"
  },
  {
    quote : "The world is full of suffering but it is also full of people overcoming it.",
    author: "Helen Keller"
  },
  {
    quote : "No great man ever complains of want of opportunity.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote : "The future is much like the present, only longer.",
    author: "Dan Quisenberry"
  },
  {
    quote : "We can draw lessons from the past, but we cannot live in it.",
    author: "Lyndon B. Johnson"
  },
  {
    quote : "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett"
  }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;











// Math.내장함수
// Math.random();  // 0부터 1사이 랜덤한 숫자를 제공

// Math.random() * 10;  //0 ~ 10 사이의 숫자

// round() -> 반올림
// Math.round(1.3);  // 1

// ceil()  -> 무조건 높여줌
// Math.ceil(1.2);  // 2

// floor() -> 내려줌
// Math.floor(1.9999);   // 1
