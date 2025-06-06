import React from 'react';


/** App for handling generation of a quote.
 *
 * Props:
 * - quote : {'text': string, 'author': string}
 *
 * App -> QuoteApp -> { Quote }
 */

function Quote({quote}) {

  const { text, author } = quote;

  return (
      <>
        {quote && (
           <figure className="text-center">
           <blockquote className="blockquote">
                <p>&#12300;&nbsp;{text}&nbsp;&#12301;</p>
           </blockquote>
           <figcaption className="blockquote-footer">
                 <cite title="Source Title">{author}</cite>
          </figcaption>
         </figure>
        )}
      </>
  );
}

export default Quote;