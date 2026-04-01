#!/usr/bin/env node
import { getDate } from "@bensincs/hello-world-util";

const command = process.argv[2];

if (command === "hello") {
  console.log("Hello, world!");
  console.log(`(Today's date is: ${getDate().toDateString()})`);
} else {
  console.log("Usage: hello-world hello");
  console.log("");
  console.log("Commands:");
  console.log("  hello   Print a hello world greeting");
}
