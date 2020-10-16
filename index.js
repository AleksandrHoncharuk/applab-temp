// animation
// header
gsap.from(".choice-app_content-phone", {
  duration: 1.5,
  delay: 3.5,
  y: -100,
  opacity: 0
});

let header = gsap
  .timeline()
  .from(".choice-app_content_text-editors", {
    duration: 1,
    x: -100,
    opacity: 0
  })
  .from(".choice-app_content_text h3", {
    duration: 1.2,
    y: 5,
    opacity: 0
  })
  .from(".choice-app_content_text span", {
    y: 5,
    opacity: 0
  })
  .from("  .choice-app_content_text-links", {
    duration: 1,
    y: 5,
    opacity: 0
  });

let circles = gsap
  .timeline()
  .from(".choice-app-circles-left", {
    duration: 1,
    delay: 3,
    opacity: 0
  })
  .from(".circles-left-bottom", {
    duration: 1,
    opacity: 0
  })
  .from(".circles-top", {
    duration: 1,
    opacity: 0
  })
  .from(".circles-right-bottom", {
    duration: 1,
    opacity: 0
  });

// feature app section

let featuresAppImages = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".features-app",
      toggleActions: "restart none none reset",
      start: "top bottom"
    }
  })
  .from(".features-app__images", {
    duration: 2,
    delay: 1,
    opacity: 0
  });

let featuresAppContent = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".features-app",
      start: "top bottom",
      toggleActions: "restart none none reset"
    }
  })
  .from(".features-app__content_caption", {
    duration: 1,
    delay: 1.3,
    opacity: 0
  })
  .from(".features-app__content_caption-text", {
    duration: 0.7,
    opacity: 0
  })
  .from(".features-app__content_opportunities", {
    duration: 0.7,
    x: 100,
    stagger: 0.5,
    opacity: 0
  });

// smart jackpots section

let verticalLine = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".smart-jackpots",
      start: "top bottom",
      toggleActions: "restart none none reset"
    }
  })
  .from(".smart-jackpots__caption-line", {
    duration: 1,
    delay: 0.7,
    opacity: 0
  })
  .addLabel("caption")
  .from(
    ".smart-jackpots__caption-left",
    {
      duration: 1,
      x: -100,
      opacity: 0
    },
    "caption"
  )
  .from(
    ".smart-jackpots__caption-right",
    {
      duration: 1,
      x: 100,
      opacity: 0
    },
    "caption"
  )
  .from(".smart-jackpots__content_opportunities", {
    duration: 0.7,
    y: 20,
    opacity: 0,
    stagger: 0.5
  });

// built-integration section

let img = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".built-integration",
      start: "+=40 bottom",
      toggleActions: "restart none none reset"
    }
  })
  .from(".built-integration__programs", {
    duration: 1.5,
    delay: 2,
    x: -100,
    opacity: 0
  });

// should choose section

let shouldChoose = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".should-choose__caption",
      start: "+=100 bottom",
      toggleActions: "restart none none reset"
    }
  })
  .from(".should-choose__caption", {
    duration: 1,
    delay: 1.5,
    y: 20,
    opacity: 0
  })
  .from(".should-choose__caption-text", {
    duration: 1,
    y: 20,
    opacity: 0
  })
  .from(".opportunities-first-block", {
    duration: 1,
    x: -50,
    opacity: 0
  })
  .from(".opportunities-second-block", {
    duration: 1,
    x: 50,
    opacity: 0
  });

// ultimate features section

let rightPhone = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".ultimate-features",
      start: "top center",
      toggleActions: "restart none none reset"
    }
  })
  .from(".ultimate-features__phones-background", {
    duration: 1,
    delay: 1.5,
    opacity: 0
  })
  .from(".ultimate-features__phones-right", {
    duration: 1.5,
    x: -40,
    rotate: -11,
    opacity: 0
  });

let leftPhone = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".ultimate-features",
      start: "top center",
      toggleActions: "restart none none reset"
    }
  })
  .from(".ultimate-features__phones-left", {
    duration: 1.5,
    delay: 3,
    x: 150,
    rotate: 16,
    translate: 250,
    opacity: 0
  });

// feedback section

let peopleIcon = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".map",
      start: "-=100 bottom",
      toggleActions: "restart none none reset"
    }
  })
  .from(".map", {
    duration: 1,
    delay: 1.4,
    opacity: 0
  })
  .from(".top-right-man", {
    duration: 0.7,
    opacity: 0
  })
  .from(".left-man", {
    duration: 0.7,
    opacity: 0
  })
  .from(".right-man", {
    duration: 0.7,
    opacity: 0
  })
  .from(".top-girl", {
    duration: 0.7,
    opacity: 0
  })
  .from(".center-left-girl", {
    duration: 0.7,
    opacity: 0
  })
  .from(".center-man", {
    duration: 0.7,
    opacity: 0
  })
  .from(".bottom-man", {
    duration: 0.7,
    opacity: 0
  });
