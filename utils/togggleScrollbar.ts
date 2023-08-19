export default function toggleScrollbar(value: boolean) {
  if (value) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
}
