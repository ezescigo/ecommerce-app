import React, {useEffect} from 'react';

import Directory from '../../components/directory/directory.component';
import { useEmblaCarousel } from 'embla-carousel/react'

import { HomePageContainer } from './homepage.styles';

const viewportCss = {
  overflow: 'hidden',
}
const containerCss = {
  display: 'flex',
}
const slideCss = {
  position: 'relative',
  minWidth: '100%',
}

const HomePage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  return (
    <div>
    <Directory />
    </div>
  )};

export default HomePage;