// timers.js
// Run: node timers.js

console.log("=== TIMERS: setTimeout, clearTimeout, setInterval, clearInterval ===\n");

// ------------------------
// 1) Basic setTimeout
// ------------------------
console.log("1) Basic setTimeout");
setTimeout(() => {
  console.log("-> setTimeout fired after 1000ms");
}, 1000);
console.log("   (scheduled, continue immediately)\n");

// ------------------------
// 2) clearTimeout (cancel)
// ------------------------
console.log("2) clearTimeout example (we'll cancel it)");
const t = setTimeout(() => {
  console.log("-> This will NOT run (was cancelled)");
}, 2000);

// Cancel the scheduled callback before it runs
clearTimeout(t);
console.log("   (timeout cancelled)\n");

// ------------------------
// 3) setInterval + clearInterval
// ------------------------
console.log("3) setInterval example (prints 3 times then stops)");
let count = 0;
const intervalId = setInterval(() => {
  count += 1;
  console.log("-> interval tick", count);
  if (count >= 3) {
    clearInterval(intervalId);
    console.log("   (interval cleared after 3 ticks)\n");
  }
}, 500); // runs roughly every 500ms

// ------------------------
// 4) setTimeout 0 and the event loop
// ------------------------
console.log("4) setTimeout(..., 0) demonstrates event loop order");
console.log("   start");
setTimeout(() => console.log("-> timeout 0 fired (after current stack)"), 0);
console.log("   end\n");

// Expected order: start, end, timeout 0 fired

// ------------------------
// 5) Sleep helper using Promise + async/await
// ------------------------
console.log("5) sleep(ms) with async/await (nice for sequential delays)");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async function demoSleep() {
  console.log("   before sleep 500ms");
  await sleep(500);
  console.log("   after sleep 500ms");
  console.log("   before sleep 300ms");
  await sleep(300);
  console.log("   after sleep 300ms\n");
})();

// ------------------------
// 6) Good pattern: timeout with fallback (race)
// ------------------------
// Useful when waiting for something async but want a max wait time.
console.log("6) Promise.race for timeout safety");

function doSomethingAsyncSimulated(ms, willResolve = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willResolve) resolve("result after " + ms + "ms");
      else reject(new Error("failed"));
    }, ms);
  });
}

(async function demoRace() {
  // create a timeout promise that rejects after 700ms
  const timeLimit = 700;
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("operation timed out")), timeLimit)
  );

  try {
    // change the first argument to smaller/larger to see both outcomes
    const result = await Promise.race([
      doSomethingAsyncSimulated(600, true), // try 600 or 900
      timeoutPromise,
    ]);
    console.log("   race result:", result);
  } catch (err) {
    console.log("   race error:", err.message);
  }
  console.log("");
})();

// ------------------------
// End note
// ------------------------
console.log("All timers scheduled. Node will keep running until all intervals/timeouts complete or are cleared.\n");