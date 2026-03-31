"use client";

import { useEffect, useState } from "react";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Rejinsha Shahudeen",
      quoteLines: [
        "We tailor the winning business strategies for the",
        "entrepreneurs with our digital marketing",
        "strategies, business automation, product and",
        "services provides you hazzle-free ride all the way",
        "along.",
      ],
    },
    {
      name: "Vaishak Karthikeyan",
      quoteLines: [
        "Our idea is to infuse the concept of",
        "Blockchain,the Metaverse,to deliver an enriched",
        "experience.",
      ],
    },
    {
      name: "Sulthana Shafi",
      quoteLines: [
        "We support businesses wherever they are on their",
        "modernisation journey and give them unmatched",
        "flexibility and choice.",
      ],
    },
  ];

  const visibleTrack = [...testimonials, ...testimonials];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [isPaused, testimonials.length]);

  return (
    <>
      <section className="about-page slider-text-one">
        <div className="slider-text-one__animate-text">
          <span>
            &nbsp;Our fulfilled <span>&amp;</span> engaged workforce.&nbsp;&nbsp;
          </span>
          <span>
            &nbsp;Our fulfilled <span>&amp;</span> engaged workforce.&nbsp;&nbsp;
          </span>
        </div>
      </section>

      <section className="about-page testimonial-three">
        <div className="container">
          <div className="section-title">
            <h5 className="section-title__tagline section-title__tagline--has-dots">
              our Team feedback
            </h5>
            <div className="testimonial-three__heading-row">
              <h2 className="section-title__title">
                Employee perspectives on
                <br /> our workplace
              </h2>
              <div className="testimonial-three__arrows">
                <button
                  type="button"
                  className="testimonial-three__arrow testimonial-nav-btn testimonial-three__arrow--left"
                  onClick={handlePrev}
                  aria-label="Show previous reviews"
                >
                  <span className="icon-left-arrow" />
                </button>
                <button
                  type="button"
                  className="testimonial-three__arrow testimonial-nav-btn testimonial-three__arrow--right"
                  onClick={handleNext}
                  aria-label="Show next reviews"
                >
                  <span className="icon-right-arrow" />
                </button>
              </div>
            </div>
          </div>

          <div className="testimonial-three__marquee">
            <div
              className="testimonial-three__track"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                transform: `translateX(calc(-${activeIndex} * (var(--review-card-width) + var(--review-gap))))`,
              }}
            >
              {visibleTrack.map((item, idx) => (
                <div className="testimonial-three__item" key={`${item.name}-${idx}`}>
                  <div className="testimonial-three__item__border"></div>
                  <div className="testimonial-three__item__top">
                    <h3 className="testimonial-three__item__name">{item.name}</h3>
                    <div className="testimonial-three__item__meta">
                      <div className="testimonial-three__item__meta__ratings">★★★★★</div>
                      <div className="testimonial-three__item__meta__reviews">4.9 Reviews</div>
                    </div>
                  </div>
                  <div className="testimonial-three__item__quote">
                    {item.quoteLines.map((line, lineIndex) => (
                      <span key={`${item.name}-line-${lineIndex}`}>
                        {line}
                        {lineIndex < item.quoteLines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
