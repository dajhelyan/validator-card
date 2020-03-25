import { components } from "../ui/components.js";

export const changeView = (route) => {
  const root = document.getElementById("root");
  root.innerHTML = '';

  switch (route) {
    case '':
    case '#':
    case '#/':
    case '#/home':
      { return root.appendChild(components.home()) };
    case '#/validator':
      { return root.appendChild(components.validator()) };


    default:
      break;
  }
}