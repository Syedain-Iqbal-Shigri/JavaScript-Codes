// trycatch_professional.js
// Run: node trycatch_professional.js

// ---------- tiny logger to keep output consistent ----------
function log(...args) {
  console.log(...args);
}

// ---------- utility: a safe JSON parser (no exceptions leak) ----------
function safeParseJson(jsonString) {
  try {
    return { value: JSON.parse(jsonString), error: null };
  } catch (err) {
    return { value: null, error: err };
  }
}

// ---------- Example 1: Basic try / catch (very simple) ----------
log("Example 1: Basic try / catch");
try {
  log("Before the error");
  // This would normally throw ReferenceError; avoid using undeclared variables:
  // console.log(notDefinedVariable); // ← do NOT do this in production
  // Instead, always reference variables that exist or check them first:
  if (typeof maybeDefined === "undefined") throw new ReferenceError("maybeDefined is not defined here");
  log("This won't run");
} catch (err) {
  log("Caught an error:", err.name + ":", err.message);
}
log("---");

// ---------- Example 2: Throwing and handling a custom validation error ----------
log("Example 2: Throw custom error and handle it");
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new ValidationError("Both arguments must be numbers");
  }
  if (b === 0) {
    throw new ValidationError("Cannot divide by zero");
  }
  return a / b;
}

try {
  log("10 / 2 =", divide(10, 2)); // OK
  log("5 / 0 =", divide(5, 0));   // will throw
} catch (err) {
  if (err instanceof ValidationError) {
    log("Handled validation error:", err.message);
  } else {
    // unknown error — rethrow or handle differently
    log("Unexpected error:", err.message);
    // throw err; // uncomment if you want the app to crash so caller/monitoring sees it
  }
}
log("---");

// ---------- Example 3: Handling user / input errors with safe parse ----------
log("Example 3: Safe JSON parsing (no crash)");
const badJson = "{ name: 'Alice' }"; // keys not double-quoted → invalid JSON
const { value, error } = safeParseJson(badJson);
if (error) {
  log("JSON parse failed (handled):", error.message);
  // fallback or default
  // const data = { name: "unknown" };
} else {
  log("Parsed data:", value);
}
log("---");

// ---------- Example 4: Async errors with async/await (use try/catch) ----------
log("Example 4: Async / await error handling");
function wait(shouldFail, ms = 200) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error("Async failure"));
      else resolve("Async success");
    }, ms);
  });
}

(async function demoAsync() {
  try {
    const ok = await wait(false);
    log("Async result (ok):", ok);

    // next line will reject and get caught below
    const fail = await wait(true);
    log("This won't print:", fail);
  } catch (err) {
    log("Caught async error:", err.message);
  } finally {
    log("Async finally - cleanup if needed");
  }
})()
  .catch((topErr) => {
    // If anything escapes the demoAsync try/catch, handle it here.
    log("Top-level async error (should not happen):", topErr.message);
  });

// ---------- Example 5: Returning errors vs throwing (library pattern) ----------
log("---");
log("Example 5: Return-error pattern (preferred in some libs)");
function safeDivide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return { result: null, error: new ValidationError("Both args must be numbers") };
  }
  if (b === 0) {
    return { result: null, error: new ValidationError("Cannot divide by zero") };
  }
  return { result: a / b, error: null };
}

const r1 = safeDivide(9, 3);
if (r1.error) log("safeDivide error:", r1.error.message);
else log("safeDivide result:", r1.result);

const r2 = safeDivide(5, 0);
if (r2.error) log("safeDivide error:", r2.error.message);
else log("safeDivide result:", r2.result);

log("---");
log("All examples finished. Program continues (no crash).");