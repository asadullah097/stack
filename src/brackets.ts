
function validateBrackets(str: string): boolean {
    const stack: string[] = [];
    const openingBrackets = new Set(["[", "{", "("]);
    const closingBrackets = new Set(["]", "}", ")"]);

    for (let i = 0; i < str.length; i++) {

        if (openingBrackets.has(str[i])) {
            stack.push(str[i]);
        } else if (closingBrackets.has(str[i])) {
            const openingBracket = stack.pop();
            if (
                (str[i] === "]" && openingBracket !== "[") ||
                (str[i] === "}" && openingBracket !== "{") ||
                (str[i] === ")" && openingBracket !== "(")
            ) {
                console.log("not balanced");
                return false;
            }
        }
    }
    console.log("balanced");
    return stack.length === 0;
}

validateBrackets("[{()[{()}]}]");  //[{()}],{]()} , [{()[{()}]}]
