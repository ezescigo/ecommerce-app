import React, {useEffect} from 'react';

import DirectoryContainer from '../../components/directory/directory.container';
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
      <DirectoryContainer />
    </div>
  )};

export default HomePage;