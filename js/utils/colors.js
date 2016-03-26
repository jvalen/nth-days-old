export function addHexColor(c1, c2) {
  let hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) { hexStr = `0${hexStr}`; } // Zero pad.
  return hexStr;
}
