# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

[Screenshot of splitter on desktop.](..images/splitter-desktop.jpg)
[Screenshot of splitter on mobile.](..images/splitter-mobile.jpg)

### Links

- Live Site URL: [tip-calculator-app-main-inky.vercel.app](https://tip-calculator-app-main-inky.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS/SASS
- Vanilla JavaScript
- ChatGPT
- Figma

### What I learned

```js
function handleRadioButtonClick(index) {
  tipButtons.forEach((tipButton, buttonIndex) => {
    if (buttonIndex !== index) {
      tipButton.classList.remove('checked');
    }
  });
  tipButtons[index].classList.add('checked');
}
```

I did work with this concept, adding active classes to handle events, within Webflow to sort and filter dyanmic lists. It was something that threw me back when I first did it, so getting practice working with active classes was and still is beneficial.

### Continued development

I'd like to work with React and Tailwind in the future. I also would like to become more organized with my code-- Using SCSS partials effectively.

## Author

Frontend Mentor - [@MeltedGreenVelvet] https://www.frontendmentor.io/profile/MeltedGreenVelvet