document.addEventListener("DOMContentLoaded", () => {
  const $contentCards = document.getElementById("content-vistas");
  [...$contentCards.children].forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.matches("button")) {
        let anchoCard = getComputedStyle(card).getPropertyValue("width");
        let mLeft =
          getComputedStyle($contentCards).getPropertyValue("margin-left");

        if (parseInt(mLeft) !== 0) {
          anchoCard = Math.abs(parseInt(mLeft) - parseInt(anchoCard)) + "px";
        }
        $contentCards.style.marginLeft = `-${anchoCard}`;
        console.log("Magen left actual: ", $contentCards.style.marginLeft);
      }

      if (event.target.matches(".main-content__return span")) {
        let anchoCard = getComputedStyle(card).getPropertyValue("width");
        let mLeft =
          getComputedStyle($contentCards).getPropertyValue("margin-left");

        anchoCard =
          "-" + Math.abs(parseInt(mLeft) + parseInt(anchoCard)) + "px";
        $contentCards.style.marginLeft = `${anchoCard}`;
      }
    });
  });
});
