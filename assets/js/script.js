document.addEventListener("DOMContentLoaded", () => {
  const $contentCards = document.getElementById("content-vistas");
  [...$contentCards.children].forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.matches("button")) {
        clickButton(card);
      }
      if (event.target.matches(".main-content__return span")) {
        clickReturn(card);
      }
    });
  });

  const setMail = (card) => {
    let email = card.querySelector(".input-mail").value;
    let tipoEmail = card.querySelector(".tipo-mail");
    let index = tipoEmail.selectedIndex;
    let opcionSeleccionada = tipoEmail.options[index].text;
    // let valueSeleccionada = tipoEmail.options[index].value;
    document.querySelectorAll(".main-content__return__mail").forEach((x) => {
      x.textContent = `${email}${opcionSeleccionada}`;
    });
  };

  const clickButton = (card) => {
    if ($contentCards.firstElementChild === card) setMail(card);

    if ($contentCards.lastElementChild === card) {
      //  setMail(card);
      return;
    }
    let anchoCard = getComputedStyle(card).getPropertyValue("width");
    let mLeft = getComputedStyle($contentCards).getPropertyValue("margin-left");

    if (parseInt(mLeft) !== 0) {
      anchoCard = Math.abs(parseInt(mLeft) - parseInt(anchoCard)) + "px";
    }
    $contentCards.style.marginLeft = `-${anchoCard}`;
  };

  const clickReturn = (card) => {
    let anchoCard = getComputedStyle(card).getPropertyValue("width");
    let mLeft = getComputedStyle($contentCards).getPropertyValue("margin-left");
    anchoCard = "-" + Math.abs(parseInt(mLeft) + parseInt(anchoCard)) + "px";
    $contentCards.style.marginLeft = `${anchoCard}`;
  };
});
