import React, { useState, useEffect } from 'react';

function Proj4() {
  const [quote, setQuote] = useState({ text: '', author: '' });

  const fetchQuote = () => {
    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setQuote({ text: data.quote || data.content, author: data.author || 'Unknown' });
      })
      .catch(err => console.error('Error fetching quote:', err));
  };

  useEffect(() => {
    fetchQuote();

    const intervalId = setInterval(() => {
      fetchQuote();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="quote-container">
      <h2>Mini Project 4: Random Quote Generator
</h2>
      <blockquote className="quote-text">"{quote.text}"</blockquote>
      <p className="quote-author">- {quote.author}</p>
    </div>
  );
}

export default Proj4;
