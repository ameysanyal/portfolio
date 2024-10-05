//This TypeScript code defines a type SectionName based on the name property of each item in the links array
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

//This is a TypeScript construct that takes the type of the links array. It gives us access to the type of the array as it's declared in the imported file.

//This part means we're indexing into the links array, and number here refers to any index (i.e., any item in the array).
// Essentially, this gives us the type of a single item in the array, as if we were saying links[0] or links[1].

// ["name"]:

// After getting the type of a single item in the array, ["name"] accesses the type of the name property for that item.
// So, this part extracts the type of the name field from each link object in the links array.

//This approach is useful when you want to define a type dynamically based on the contents of an array, ensuring type safety and consistency without manually hardcoding values.
// If you later add or modify links in the links array, TypeScript will automatically update the SectionName type without requiring manual changes to the type definition.
