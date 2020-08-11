import React from 'react';
import Film from './Film'

const FilmList = ({films}) => {
  const filmNodes = films.map(({id, name, url}) =>
  <Film key={id} url={url}> {name} </Film>
  )


  return(
    <div className="film-list">
      {filmNodes}
      <h2 className="upcoming-releases">
        <button>
          <a href="https://www.imdb.com/calendar/?region=gb">Upcoming releases</a>
        </button>
      </h2>
    </div>
  ) 
}

export default FilmList;