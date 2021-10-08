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

  // Boton cerrar modal
  document
    .getElementById("btn-modal")
    .addEventListener("click", () => resetComponents());

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
      showModal();
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
  const showModal = () => {
    let modal = document.getElementById("modal");
    modal.classList.toggle("modal--show");
    let email = document.querySelector(
      ".main-content__return__mail"
    ).textContent;

    modal.querySelector(
      ".modal__content__text"
    ).innerHTML = `El correo <span class ="modal__content__mail">${email}</span> fue creado correctamente. Inicia sesión para aprovechar las funciones de hotmail.`;
  };
  const resetComponents = (card) => {
    document.getElementById("modal").classList.toggle("modal--show");
    setTimeout(() => ($contentCards.style.marginLeft = "0"), 600);
    document.querySelector(".input-mail").value = "";
  };
});
