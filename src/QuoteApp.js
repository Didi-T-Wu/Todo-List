import React, { useState, useEffect } from 'react';
import Quote from './Quote';


/** App for handling generation of a quote.
 *
 * State:
 * - quote : {'text': string, 'author': string}
 *
 * App -> QuoteApp -> { Quote }
 */
const API_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteApp() {

  const [quote, setQuote] = useState(null);


  useEffect(() => {
    // Fetch a quote when the component mounts
    generateQuote();
  }
  , []);


  /** Generate a new quote */
  function generateQuote() {

    fetch(API_URL).then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    }).then(data => {
      setQuote(data.quote);
    }).catch(err => {
      console.error("Error fetching quote:", err);
    });
  }

  return (
    <div className="QuoteApp container-fluid py-3 bg-primary-subtle text-end" >
        <div>{quote && <Quote quote={quote} />}</div>
        <button
            onClick={generateQuote}
            className="btn btn-outline-dark">
            New Quote
        </button>
    </div>
  );
}



export default QuoteApp;