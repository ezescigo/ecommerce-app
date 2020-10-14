import React from 'react';
import { Route } from 'react-router';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

import './shop.data.js';
import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
          <div className='shop-page'>
              {
                  collections.map(({id, ...otherCollectionProps}) => (
                      <CollectionPreview key={id} {...otherCollectionProps} />
                  ))
              }
          </div>            
        )
    }
}

export default ShopPage;