import crypto from "crypto";

export default function gravatar(string) {
  const lowerCaseString = string.trim().toLowerCase();
  console.log(lowerCaseString)
  const md5 = crypto.createHash("md5");
  const digest = md5.update(lowerCaseString, "binary").digest("hex");

  return `https:www.gravatar.com/avatar/${digest}/?d=monsterid`;
}
