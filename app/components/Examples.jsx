var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <div className="callout primary large" data-closable="slide-out-right">
        <ol >
          <li>
            <Link to='/?location=Raleigh,nc'>
              Raleigh, NC
            </Link>
          </li>
          <li>
            <Link to='/?location=Rio'>
              Rio, Brazil
            </Link>
          </li>
        </ol>
      </div>
    </div>
  )
};

module.exports = Examples;
