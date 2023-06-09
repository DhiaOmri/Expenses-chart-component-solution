# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![A GIF of the website](./screen.gif)

### Links

- Solution URL: <https://github.com/DhiaOmri/Expenses-chart-component-solution/>
- Live Site URL: <https://dhiaomri.github.io/Expenses-chart-component-solution//>

## My process

### Built with

- React js
- DOM Manipulation
- JSON
- [Sass (SCSS)](https://styled-components.com/) - CSS extension language

### Continued development

I am still not 100% satisfied with how I create responsive websites. In my future projects, I plan to explore the scaling technique I used, making my code more readable and efficient.

### Useful resources

- [MDN - Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) - I worked with **JSON** before, but I had to remember a few things, and everything I needed was in this article.
- [Stack Overflow - How can I change the thickness of my `<hr>` tag](https://stackoverflow.com/questions/4151743/how-can-i-change-the-thickness-of-my-hr-tag) - The `hr` element has some strange behaviour, and the answers to this question helped me deal with that.
- [MDN - Window: resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event) - When I tried using `transform` to scale my design, I realized I had to use **JavaScript** because the `calc` function cannot divide two lengths. This article helped me use the resize event to get the needed results.
- [MDN - Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - I used data attributes to send the data from the JSON file to the HTML code. It was my first time doing this, and this article helped me develop a simple solution.

## Author

- Website - <https://dhia-omri.tn/>
- Frontend Mentor - [@DhiaOmri](https://www.frontendmentor.io/profile/DhiaOmri)
- LinkedIn - [Dhia OMRI](https://www.linkedin.com/in/dhia-omri-9295a2160/)
