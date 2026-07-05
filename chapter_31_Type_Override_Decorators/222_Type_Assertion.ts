//Type-assertion is a way to tell the TypeScript compiler about the type of a variable when you have more information about the variable's type than TypeScript can infer. It allows you to override the inferred type and specify a more specific type for a variable.

let element: unknown = {
    tagName: "Button",
    textContext: "submit",
    id: "submit-button",
    disabled: false
}

interface elementUI {
    tagName: string;
    textContext: string;
    id: string;
    disabled: boolean;
}

let button = element as elementUI;

console.log("Tag:", button.tagName);
console.log("Text:", button.textContext);
console.log("ID:", button.id);
console.log("Disabled:", button.disabled);
