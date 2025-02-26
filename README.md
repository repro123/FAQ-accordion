# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./desktop-preview.jpg)
![](./mobile-design.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/accessible-faq-accordion-gQ4oVi7a5M](https://www.frontendmentor.io/solutions/accessible-faq-accordion-gQ4oVi7a5M)
- Live Site URL: [https://github.com/repro123/FAQ-accordion.git](https://github.com/repro123/FAQ-accordion.git)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- [Tailwind CSS](https://tailwindcss.com/)
- Accessibility principles

### What I learned

- I used the `<picture>` element for a fully responsive image on different screen sizes

  ```html
  <picture class="relative w-full col-start-1 col-end-2 row-span-2 row-start-1">
    <source
      media="(min-width: 48rem)"
      srcset="./assets/images/background-pattern-desktop.svg"
    />
    <img
      src="./assets/images/background-pattern-mobile.svg"
      alt=""
      class="object-cover w-full h-full"
    />
  </picture>
  ```

- I was able to style elements based on the state of a parent, sibling, or based on the `aria-` attribute of an element, using the tailwind css syntax of `group`, `group-aria-expanded`

- I wqas able to write the javascripts syntax easily

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [W3.org](https://www.w3.org/)
- [tailwind CSS Documentations](https://www.tailwindcss.com/)
- [Frontend Mentor Discord Page](https://discord.com/channels/824970620529279006)

## Author

- Frontend Mentor - [@repro123](https://www.frontendmentor.io/profile/repro123)
- Twitter - [@Dr_Repro](https://x.com/Dr_Repro)
