import React from 'react'

export default function MainAreaHeader() {
  return (
    <header className='main-content-header'>
      <div className='filter-group artists'>
        <div className='filter-item'>
          <img className='item-img' src="https://picsum.photos/200" alt="" />
          <p className='item-name'>Alex Mark</p>
        </div>
        <div className='filter-item'>
          <img className='item-img' src="https://picsum.photos/200" alt="" />
          <p className='item-name'>Alex Mark</p>
        </div>
        <div className='filter-item'>
          <img className='item-img' src="https://picsum.photos/200" alt="" />
          <p className='item-name'>Alex Mark</p>
        </div>
        <div className='filter-item'>
          <img className='item-img' src="https://picsum.photos/200" alt="" />
          <p className='item-name'>Alex Mark</p>
        </div>
      </div>
      <div className='filter-group categories'>
        <div className='filter-item'>
          <img className='item-img' src="https://picsum.photos/200" alt="" />
          <p className='item-name'>Alex Paul</p>
        </div>
        <div className='filter-item'>
          <img className='item-img' src="https://picsum.photos/200" alt="" />
          <p className='item-name'>Alex Mark</p>
        </div>
        <div className='filter-item'>
          <img className='item-img' src="https://picsum.photos/200" alt="" />
          <p className='item-name'>Alex Mark</p>
        </div>
        <div className='filter-item'>
          <img className='item-img' src="https://picsum.photos/200" alt="" />
          <p className='item-name'>Alex Mark</p>
        </div>
      </div>
      <div className='filter-toggler'>
        <button className="btn outlined-light filter-toggle pd-sm">t</button>
      </div>
    </header>
  )
}
