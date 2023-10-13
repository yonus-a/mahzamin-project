export default function getDirection() {
  if (typeof window !== "undefined") {
    return window.innerWidth >= 1160 ? "vertical" : "horizontal";
  }
}
