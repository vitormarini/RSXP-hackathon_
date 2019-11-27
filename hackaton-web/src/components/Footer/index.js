import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Footer = () => {

  const areas = [
    {
      "itemTitle": "Institucional",
      "items": [
        {
          "name": "Quem Somos",
          "link": "/quem-somos"
        },
        {
          "name": "Políticas",
          "link": "/politicas"
        },
      ]
    },
    {
      "itemTitle": "Institucional",
      "items": [
        {
          "name": "Quem Somos",
          "link": "/quem-somos"
        },
        {
          "name": "Políticas",
          "link": "/politicas"
        },
      ]
    }
  ]

  return (
    <footer className="Footer"> 
      <div className="Footer__wrapper container">
        <div className="Footer__lists">
          {areas.map(block => (
            <div className="Footer__block">
              <span className="Footer__title">{block.itemTitle}</span>
              <ul className="Footer__list">
                {block.items.map(item => (
                  <li className="Footer__item">
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))
                }
              </ul>
            </div>
          ))

          }
        </div>
      </div>
    </footer>
  )
}

export default Footer