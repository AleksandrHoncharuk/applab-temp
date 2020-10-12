// header

let choiceAppPhone = gsap.timeline().from(".choice-app_content-phone", {
  duration: 2,
  delay: 4.5,
  y: -100,
  opacity: 0
});

let header = gsap
  .timeline()
  .from(".choice-app_content_text-editors", {
    duration: 1,
    delay: 1,
    x: -100,
    opacity: 0
  })
  .from(".choice-app_content_text h3", {
    duration: 1.4,
    y: 5,
    opacity: 0
  })
  .from(".choice-app_content_text span", {
    duration: 1.6,
    y: 5,
    opacity: 0
  })
  .from("  .choice-app_content_text-links", {
    duration: 2,
    y: 5,
    opacity: 0
  });

let circles = gsap.timeline().from(".choice-app-circles-left", {
  duration: 2,
  delay: 3.5,
  opacity: 0
});

let circlesLeftBottom = gsap.timeline().from(".circles-left-bottom", {
  duration: 2,
  delay: 4,
  opacity: 0
});

let circlesTop = gsap.timeline().from(".circles-top", {
  duration: 2,
  delay: 4.5,
  opacity: 0
});

let circlesRightBottom = gsap.timeline().from(".circles-right-bottom", {
  duration: 2,
  delay: 5,
  opacity: 0
});

// feature app section

let featuresAppImages = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".masthead",
      toggleActions: "restart none none reset"
    }
  })
  .from(".features-app__images", {
    duration: 2.2,
    delay: 1.5,
    opacity: 0
  });

let featuresAppContent = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".masthead",
      toggleActions: "restart none none reset"
    }
  })
  .from(".features-app__content_caption", {
    duration: 1,
    delay: 2,
    opacity: 0
  })
  .from(".features-app__content_caption-text", {
    opacity: 0
  })
  .from(".features-app__content_opportunities", {
    duration: 2,
    x: 100,
    opacity: 0
  });

// smart jackpots section

let verticalLine = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".masthead",
      toggleActions: "restart none none reset"
    }
  })
  .from(".smart-jackpots__caption-line", {
    duration: 1,
    delay: 10,
    opacity: 0
  });
