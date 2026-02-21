"use client"

import dynamic from "next/dynamic"

const AnimatedTestimoials = dynamic(() => import("@/app/components/animated-testimonials"), {
    ssr:false
})

type Testimonial = {
  title: string;
  description: string;
  imageAlt: string;
  imageUrl: string;
};

const AnimatedTestimoialsWrapper = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  return (
    <AnimatedTestimoials testimonials={testimonials}/>
  )
}

export default AnimatedTestimoialsWrapper