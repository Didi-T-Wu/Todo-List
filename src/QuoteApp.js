import React, { useState } from 'react';
import DisplayQuote from './DisplayQuote';


/** App for handling generation of a quote.
 *
 * State:
 * - quote : {'text': string, 'author': string}
 *
 * App -> QuoteApp -> { QuoteDisplay }
 */
const API_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteApp() {

  const [quote, setQuote] = useState(null);
  const [buttonText , setButtonText] = useState("Generate Quote");

  /** Generate a new quote */
  function generateQuote() {

    fetch(API_URL).then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    }).then(data => {
      setQuote(data.quote);
      setButtonText("New Quote");
    }).catch(err => {
      console.error("Error fetching quote:", err);
    });
  }

  return (
    <main className="QuoteApp">
      <div className="container">
        {quote && <DisplayQuote quote={quote} />}
        <button onClick={generateQuote} className="btn btn-primary">{buttonText}</button>
      </div>
    </main>
  );
}



export default QuoteApp;