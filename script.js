"use strict";

// select all the buttons
const accordionBtn = document.querySelectorAll(".accordion__button");

// loop through the buttons to be able to add event listener to each button
for (let i = 0; i < accordionBtn.length; i++) {
  const button = accordionBtn[i];
  console.log(button);

  button.addEventListener("click", function () {
    const isAriaExpanded = button.getAttribute("aria-expanded") === "true";
    console.log(isAriaExpanded); // isAriaExpanded is false
    button.setAttribute("aria-expanded", !isAriaExpanded);

    // to get the id of each content. i gave them different id's, so the only way to select them all is by selecting the aria-controls attribute of the buttons
    const accordionContentId = button.getAttribute("aria-controls");
    console.log(accordionContentId); //should give the id of each accordion content div

    // can now select the accordion content with the id, to change the aria-hidden attribute; if the button hhas aria-expanded of true, the content should have aria hidden of false and vice versa. The div's contents have been styled such that, if aria hidden is true, the content should not be visible -- see styles in the html file(tailwind css)
    const accordionContent = document.getElementById(accordionContentId);
    console.log(accordionContent);
    accordionContent.setAttribute("aria-hidden", isAriaExpanded);
  });
}
