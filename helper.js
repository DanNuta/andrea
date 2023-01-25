export function getCustomProperty(eleme, props) {
  return parseFloat(getComputedStyle(eleme).getPropertyValue(props));
}

export function setProperty(element, props, value) {
  return element.style.setProperty(props, value);
}
