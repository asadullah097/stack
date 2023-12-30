import { infixToPostfix } from "./infixPostFix";
import { preFixToinfix } from "./preFixToinfix";
let input = "*-A/BC-/AKL";

//pre to infix
// const preToinfix = preFixToinfix(input);
console.log(preFixToinfix(input), "preToinfix");
//infix to post fix
// const infixToPost = infixToPostfix(preToinfix);
// console.log(infixToPost, "infixToPostfix");
