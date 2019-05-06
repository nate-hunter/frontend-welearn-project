import React from 'react';

class Map extends React.Component {
  render(){
    return(
      <div>
        <iframe className="carto-map" width="50%" height="520" frameborder="60" src="https://savi.carto.com/u/nhunter1001/builder/95bf5e3a-6996-4b40-9441-e69cb2ea951f/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
      </div>
    )
  }
};

export default Map;
