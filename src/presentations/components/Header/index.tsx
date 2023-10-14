import React from 'react';


const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header__wrapper container'>
        <div className='header__row d-flex'>
          <div className='header-brand section' id='headerSection'>
            <div className='widget Header' data-version='2' id='Header1'>
              <div className='header__content'>
                <a href='https://nextcodepelajar.blogspot.com/'>
                  <img alt='React Native' data-original-height='32' data-original-width='32'
                    src='//3.bp.blogspot.com/-fZp4NYZhvbk/Xc2qoFMfQ8I/AAAAAAAACqk/oTMea6gAkWEfsUoBA1xXxQ2u2gJI-wrMwCK4BGAYYCw/s1600/langitmusik.png' />
                  <h2 className='header__title'>React Native</h2>
                </a>
              </div>
            </div>
          </div>
          <div className='navigation section' id='navigationSection'>
            <div className='widget LinkList' data-version='2' id='LinkList1'>
              <div className='navigation__wrapper'>
                <nav className='navigation__content'>
                  <ul className='navigation__order'>
                    <li className='navigation__list'>
                      <a className='navigation__item' href='#'>
                        FAQ
                      </a>
                    </li>
                    <li className='navigation__list'>
                      <a className='navigation__item' href='#'>
                        Navigation
                      </a>
                    </li>
                    <li className='navigation__list'>
                      <a className='navigation__item' href='#'>
                        Profile
                      </a>
                    </li>
                    <li className='navigation__list'>
                      <a className='navigation__item' href='#'>
                        Home
                      </a>
                    </li>
                    <li className='navigation__list'>
                      <a className='navigation__item' href='#'>
                        About US
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className='search-field section' id='searchFieldSection'>
            <div className='widget BlogSearch' data-version='2' id='BlogSearch1'>
              <form action='https://nextcodepelajar.blogspot.com/search' className='search-field__form' target='_top'>
                <div className='search-field__search-input search-input'>
                  <input aria-label='Cari blog ini' autoComplete='off' className='search-field__input-text' name='q'
                    placeholder='Cari blog ini' value='' />
                  <span className='search-field__icon-search'>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const HeaderMemo = React.memo(Header);

export default HeaderMemo