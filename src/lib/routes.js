import { components } from "../ui/components.js";

export const changeView = (route) => {
  switch (route) {
    case '':
    case '#':
    case '#/':
    case '#/home':
      { return root.appendChild(components.home()) };



    default:
      break;
  }
}