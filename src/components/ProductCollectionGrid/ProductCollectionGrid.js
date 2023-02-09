import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.png'}
        title={'Football'}
        text={'PLAY NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection2.png'}
        title={'Cricket'}
        text={'PLAY NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection3.png'}
        title={'Badminton'}
        text={'PLAY NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Table Tennis'}
        text={'PLAY NOW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
