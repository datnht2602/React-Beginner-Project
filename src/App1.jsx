import "./App.css";
import Book from "./Components/Book";
import UserProfile from "./Components/UserProfile";
import { booksData } from "./Components/data";
import RandomQuote from "./Components/quotes_app/components/RandomQuote";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import NameForm from "./Components/form";

function App1() {
  const [randomQuote, setRandomQuote] = useState("");
  const [color, setColor] = useState("bg-dark");

  const quotes = [
    {
      author: "Albert Einstein",
      content:
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
      author: "Isaac Newton",
      content:
        "If I have seen further it is by standing on the shoulders of Giants.",
    },
    {
      author: "Marie Curie",
      content: "Be less curious about people and more curious about ideas.",
    },
    {
      author: "Leonardo da Vinci",
      content: "Learning never exhausts the mind.",
    },
    {
      author: "Aristotle",
      content: "The more you know, the more you realize you don't know.",
    },
  ];

  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
    setColor(getRandomColor());
  }

  function getRandomColor() {
    const colors = [
      "bg-primary",
      "bg-secondary",
      "bg-success",
      "bg-danger",
      "bg-warning",
      "bg-info",
      "bg-dark",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="container">
      <NameForm />
      {/* <p>Count: {count}</p>
      <IncrementButton onIncrement={increment} />
      <DecrementButton onDecrement={decrement} /> */}
      {/* <RandomQuote
        quote={randomQuote}
        color={color}
        onChangedQuote={getRandomQuote}
      /> */}
      {/* <UserProfile name = 'Derek Nguyen' email = 'derek.nguyen@gmail.com' bio= 'Software Engineer with a passion for JavaScript and React.' /> */}
      {/* {booksData.items.map((book, index) => (
        <Book 
          key={index}
          title={book.volume.title}
          author={book.volume.authors}
          description={book.volume.description}
          subtitle={book.volume.subtitle}
          image={book.volume.image}
        />
      ))} */}
    </div>
  );
}

export default App1;

function IncrementButton({ onIncrement }) {
  return (
    <div>
      <button className="btn btn-success" onClick={onIncrement}>
        Increment
      </button>
    </div>
  );
}

function DecrementButton({ onDecrement }) {
  return (
    <div>
      <button className="btn btn-danger" onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
}
