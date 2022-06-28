
import { useState } from 'react';
import { data } from './data'

import Clothes from './Clothes';
import Buttons from './Buttons';

function Shop() {

    const [clothes, setClothes] = useState(data);

    const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
      setClothes(newClothes);
    }

    return (
<div>
    <div className='cont'>
      <h2 className='back'>Free Standsrt Shipping</h2>
    </div>
   
      <Buttons filterWord = {chosenClothes} />
      <Clothes  codeword = {clothes} />
</div>
      );
    }

export default Shop;