import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
    <SubHeading title="Chef's Word" />
    <h1 className=' headtext__cormorant'>What We Believe In </h1>
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt="quote" />
        <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. penatibus aliquam amet tellus</p>
        </div>
        <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>

      </div>
    <div className='app__chef-sign'>
      <p>Kimos Sfa9si</p>
      <p className='p__opensans'> Chef & Maidenless</p>
      <img src={images.sign} alt="sign" />
    </div>

    </div>
  </div>
);

export default Chef;
