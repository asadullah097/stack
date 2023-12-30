import { infixToPostfix } from "./infixPostFix";
import { preFixToinfix } from "./preFixToinfix";
let input = "AB+CD-*";

const infixToPost = infixToPostfix(input);
console.log(infixToPost, "infixToPostfix");
//pre to infix
const preToinfix = preFixToinfix(infixToPost);
console.log(preToinfix, "preToinfix");
//infix to post fix
