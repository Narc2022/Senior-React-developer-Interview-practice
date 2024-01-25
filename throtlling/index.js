let count = 0;
let apiCalled;
const throttle = (fn, time) => {
  if (apiCalled) return;
  apiCalled = true;
  setTimeout(() => {
    fn();
    apiCalled = false;
  }, time);
};

const click = () => {
  throttle(() => {
    console.log("called", count++);
  }, 500);
};
