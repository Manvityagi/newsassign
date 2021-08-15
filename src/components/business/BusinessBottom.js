import React from 'react';
import BusinessBottomItem from './BusinessBottomItem';

const BusinessBottom = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' ,backgroundColor:"white"}}>
      <BusinessBottomItem />
      <BusinessBottomItem />
      <BusinessBottomItem />
    </div>
  );
};

export default BusinessBottom;
