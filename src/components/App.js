import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Movie Search App</h1>
  </header>
)

const Items = (props) => (
  <div className=' items-con '>
    <div className='items'>

      <div className='movie'>
        <div className='movie-poster'>
          <img src='https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg' alt='' />
        </div>

        <div className='movie-details'>
          <p className='movie-title'>Guardians of the Galaxy</p>
          <div className='movie-details-sub'>
            <p className='movie-date'> 2017 </p>
            <p className='ghost'>|</p>
            <p className='movie-duration'> 2h 15min </p>
            <p className='ghost'>|</p>
            <p className='movie-rating'> 2017</p>
          </div>
          <p className='movie-genre'>Action</p>
        </div>

        <div className='star-meter'>
          <svg width='63' height='59' viewBox='0 0 63 59' >

            <g id='Desktop-HD' transform='translate(-907 -332)'>

              <g id='Group-3' transform='translate(412 268)' fill='#FFF' fillRule='nonzero'
                opacity='0.047'>
                <g id='Group-2' transform='translate(494 64)'>
                  <polygon id='Star' points='32.5 48.75 13.3969793 58.7930523 17.0453316 37.5215262 1.59066322 22.4569477 22.9484897 19.3534738 32.5 0 42.0515103 19.3534738 63.4093368 22.4569477 47.9546684 37.5215262 51.6030207 58.7930523'
                            />
                </g>
              </g>
            </g>

          </svg>
        </div>
      </div>

    </div>
  </div>
)

const Search = (props) => (
  <div className='search-con'>
    <div className='search-wrap'>

      <input type='text' className='search' placeholder='Search' />

      <div className='view'>

        <div className='radioButton'>
          <label className='label'>
            <input className='o1' type='radio' name='option' value='1' />
            <svg className='big' width='17' height='14' viewBox='0 0 17 14' >
              <g transform='translate(-906 -203)'>
                <g id='big' transform='translate(906 203)' fill='#fff' opacity='0.1' fillRule='nonzero'>
                  <rect width='5' height='7' />
                  <rect y='8' width='5' height='7' />
                  <rect id='Rectangle-7-Copy' x='6' width='5' height='7' />
                  <rect x='6' y='8' width='5' height='7' />
                  <rect x='12' width='5' height='7' />
                  <rect x='12' y='8' width='5' height='7' />
                </g>
              </g>
            </svg>
          </label>
        </div>
        <div className='radioButton'>
          <label className='label'>
            <input className='o1' type='radio' name='option' value='1' checked />
            <svg className='list' width='17' height='14' viewBox='0 0 17 14' >
              <g transform='translate(-925 -203)'>
                <g id='list' transform='translate(925 203)' fill='#fff' opacity='0.1' fillRule='nonzero'>
                  <rect width='4' height='4' />
                  <rect y='5' width='4' height='4' />
                  <rect x='5' width='12' height='4' />
                  <rect x='5' y='5' width='12' height='4' />
                  <rect y='10' width='4' height='4' />
                  <rect x='5' y='10' width='12' height='4' />
                </g>
              </g>
            </svg>
          </label>
        </div>

      </div>

    </div>

  </div>
)

class MovieSearchApp extends Component {
  render () {
    return (
      <div className='movie-search-con'>

        <Search />
        <Items />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <MovieSearchApp />

  </div>
)

export default App
