// import {gsap} from "gsap";
const projects = [
  {
    title: "Git find 🔍",
    link: "https://freniix.github.io/gitfind/",
  },
  {
    title: "Brandium site",
    link: "https://freniix.github.io/brandium.nl/",
  },
  {
    title: "Tic Tac Toe",
    link: "https://freniix.github.io/tictactoe/",
  },
  {
    title: "Sundown",
    link: "https://freniix.github.io/sundown/",
  },
  {
    title: "Quiz",
    link: "https://freniix.github.io/quiz/",
  },
  {
    title: "Bubbles",
    link: "https://freniix.github.io/bubbles/",
  },
  {
    title: "Eyes",
    link: "https://freniix.github.io/eyes/",
  },
  {
    title: "Calculator",
    link: "https://freniix.github.io/calculator/",
  },
  {
    title: "Generate color",
    link: "https://freniix.github.io/randomcolor/",
  },
];
const rightpart = document.querySelector(".rightpart");
projects.forEach((project, index) => {
  const div = document.createElement("div");
  const link = document.createElement("a");
  div.classList.add("card");
  link.textContent = project.title;
  link.href = project.link;
  link.setAttribute("target", "_blank");
  div.appendChild(link);
  const hue = (index * 40) % 360;
  div.style.backgroundColor = `hsl(${hue}, 90%, 50%)`;
  div.style.zIndex = projects.length - index;
  div.classList.add("stay");
  rightpart.appendChild(div);
  
  const placeholder = document.createElement("div")
  placeholder.classList.add(`placeholder${index}`);
  placeholder.classList.add(`scroller`)
  document.querySelector('.container').appendChild(placeholder)

  
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  // document.querySelector(".container").style.height = `${(50 * projects.length)+50}dvh`;

  function rotateCards() {
    let rotate = 0;
    const hasStay = document.querySelectorAll(".stay")
    hasStay.forEach((card) => {
        card.style.transform = `translate(-50%, -50%) rotate(-${rotate}deg)`;
        rotate += 10;
    });
  }

cards.forEach((card, index)=>{
ScrollTrigger.create({
  trigger: `.placeholder${index}`,
  start: "top 30%",
  end: "top 30%",
  scrub: true,
  onEnter: ()=>{
    card.classList.remove("stay");
    rotateCards();
  },
  onEnterBack: ()=>{
    card.classList.add("stay");

    rotateCards();
  }
})
  gsap.to(card, {
    top: `-40%`,
    rotate: 45,
    scrollTrigger: {
      scroller: "body",
      trigger: `.placeholder${index}`,
      scrub:true,
      start: `top 30%`,
      end: `top 30%`,
    }
  })

})
setTimeout(() => {
    rotateCards();
}, 0);
});
