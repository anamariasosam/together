import React from 'react';
import { Card } from 'native-base';

import HeroImage from './HeroImage';
import HeroDescription from './HeroDescription';

const Hero = () =>  {
  return (
    <Card>
       <HeroImage />
       <HeroDescription months={50}  years={4} />
     </Card>
  );
}

export default Hero;
