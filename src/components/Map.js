import React from 'react';
import { Image } from 'semantic-ui-react';

class Map extends React.Component {
  render(){
    return(
      <div>
        <iframe className="carto-map" width="50%" height="520" frameborder="60" src="https://savi.carto.com/u/nhunter1001/builder/95bf5e3a-6996-4b40-9441-e69cb2ea951f/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

        <Image src="https://annabelle.imgix.net/sites/default/files/stories/1811/coworking-zuerich-wespace-raum-karriere.jpg?auto=compress%2Cenhance%2Cformat&ch=Save-Data&dpr=1&fit=max&w=1214&s=bfd8ea9985c4e29f4b584cbdc552c867" class="ui fluid image" />

      </div>
    )
  }
};

export default Map;
