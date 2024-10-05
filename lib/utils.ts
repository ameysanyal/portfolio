// utility functions

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

//Return Type Predicate: The return type value is string indicates that this function will return true if value is a string and false otherwise. This type predicate helps TypeScript understand that
// if the function returns true, then value can be treated as a string.
// Examples
// const result = validateString("Hello, World!", 20); // returns true
// const result2 = validateString("", 10); // returns false
// const result3 = validateString(123, 10); // returns false

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

// const error1 = new Error("Network Error");
// console.log(getErrorMessage(error1)); // "Network Error"

// const error2 = { message: "Custom error message" };
// console.log(getErrorMessage(error2)); // "Custom error message"

// const error3 = "A string error";
// console.log(getErrorMessage(error3)); // "A string error"

// const error4 = null;
// console.log(getErrorMessage(error4)); // "Something went wrong"

// validateString:
// Validates if a given value is a string and checks its length against a specified maximum.
// getErrorMessage:
// Extracts a human-readable error message from different error formats (Error objects, strings, or objects containing a message) or returns a default message if none are applicable.
