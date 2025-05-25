import React from 'react';


/** App for handling generation of a quote.
 *
 * Props:
 * - quote : {'text': string, 'author': string}
 *
 * App -> QuoteApp -> { QuoteDisplay }
 */

function DisplayQuote({quote}) {

  const { text, author } = quote;

  return (
      <div className="container">
        {quote && (
          <div className="quote-display">
            <p className="quote-text">{text}</p>
            <p className="quote-author">{author}</p>
          </div>
        )}
      </div>
  );
}

export default DisplayQuote;