import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./slider-carousel-buttons";
import { useRecursiveTimeout } from "./useRecursiveTimeout";
import { useEmblaCarousel } from "embla-carousel/react";
import "./slider-carousel.styles.scss";
import media1 from '../../assets/chivas-bg.jpg';
import media2 from '../../assets/elenemigo-bg.jpg';
import media3 from '../../assets/heineken-bg.jpg';
import media4 from '../../assets/wines-bg.jpg';

const AUTOPLAY_INTERVAL = 6000;

const EmblaCarousel = ({ slides, sections }) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true });
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  let media = [media1, media2, media3, media4];
  // sections.map(section => media.push(section.imageUrl));
  // console.log(media);
  const mediaByIndex = index => media[index % media.length];

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
    }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  // const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  // const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    // setPrevBtnEnabled(embla.canScrollPrev());
    // setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);


  useEffect(() => {
    play();
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [play, embla, setScrollSnaps, onSelect, stop]);



  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={mediaByIndex(index)}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
        </div>
    </div>
  );
};

export default EmblaCarousel;