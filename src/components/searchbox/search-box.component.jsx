import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, valueChanged}) => (
    <input
      className='search'
      type ='search'
      placeholder={placeholder}      
      onChange={(e) => {valueChanged(e.target.value)}}
      />
)