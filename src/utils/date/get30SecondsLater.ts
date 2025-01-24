export default function get30SecondsLater() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 30);
  return time;
}
