import React, { useState } from 'react'

export default function Categories({ categories, filterItems }) {

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    filterItems(category);
  };

  return (
    <div className='btn-container'>

      {
        categories.map((category, index) => {
          return (
            <button key={index}
              type='button'
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          )
        })
      }
    </div>

  )
}
