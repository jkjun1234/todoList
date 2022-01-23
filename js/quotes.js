const quotes = [
    {
        quote: "살고자 죽고 죽고자하면 산다.",
        author: "충무공 이순신",        
    },
    {
        quote: "삶이 있는 한 희망은 있다 ",
        author: "키케로",
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "로버트 엘리엇",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
        author: "앙드레 말로",
    },
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const randNumber = Math.floor(Math.random() * quotes.length);   // 배열의 길이내에 해당하는 값을 넣어준다.
const toDayQuote = quotes[randNumber];
// console.log(quotes[randNumber]);
// console.log(randNumber);
// console.log(typeof toDayQuote.quote,typeof toDayQuote.author);
quote.innerText =  toDayQuote.quote;
author.innerText = ` -${toDayQuote.author}`;