import * as readline from "readline";

/**
 * Creates a readline interface for user input
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompts the user for input and returns the result as a Promise
 * @param question The question to ask the user
 * @returns A Promise that resolves with the user's input
 */
export function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

export function closeReadLine() {
  rl.close();
}
