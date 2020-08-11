import React from 'react';


const Film = ({children, url}) => {

  return(
    <div className="film">
      <h4>
        <li>
          <a href={url}>{children}</a>
        </li>
      </h4>
    </div>
  )
}

export default Film;