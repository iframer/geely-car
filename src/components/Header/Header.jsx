import { useState } from 'react';
import './Header.css'


const Header = () => {

  return(
    <div className="mainHeader">
      <ul>
        <li><img src="https://optim.tildacdn.pro/tild6437-6130-4365-b835-386165643632/-/resize/340x/-/format/webp/logo1.png" alt="" className='geelyLogo'/></li>
        <li><img src="https://static.tildacdn.pro/tild3937-6531-4133-a638-336666333933/logo_orbis_auto.svg" alt="" className='orbisLogo'/></li>
        <li>
          <a href=""><img src="https://static.tildacdn.pro/tild3036-6462-4766-b461-336635646362/bi_geo-alt-fill.svg" alt="" />г. Астана, пр. Туран 78B</a>
          </li>
        <li style={{display : 'flex'}}>
          <img src="https://static.tildacdn.pro/tild6362-6332-4437-b630-633737656533/fluent_call-28-fille.svg" alt="" className="phoneLogo"/>
          <div>
            <p>+7 (701) 006-37-90 - Отдел продаж</p>
            <p>+7 (778) 018-97-36 - Отдел сервиса</p>
          </div>
        </li>
        <li>
          <button>Заказать звонок</button>
          </li>
        <li>
          <p><a href="">RU</a></p>
          <p><a href="">KZ</a></p>
        </li>
      </ul>
    </div>    
  )
}

export default Header;

