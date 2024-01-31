import React from 'react'
import Button from './Button';
import './item.css';


const Item = ({item}) => {
  const { id, title, desc, backgroundImage, leftBtnText, leftBtnLinks, rightBtnText, rightBtnLinks, twoButtons ,first } = item;

  return (
    <div className='item' style={{backgroundImage: `url(${backgroundImage})`}}>
    <div className='item_container'>
        <div className='item_text'>
            <p>{title}</p>
            <div className='item_textDsc'>
                <p>{desc}</p>
            </div>
        </div>
        <div className='item_lowerthird'>
          
        
        </div>
    </div>
    </div>
 
  )
}

export default Item