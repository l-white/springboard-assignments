const PI = 3.14;

// Difference between var and let: var can be redeclared and reassigned. let cannot. var is hoisted to the top of the execution context as an undefined vairable when the browser loads, so we can access var prior to declaration, but it will return undefined until it is declared. This is not the case with let. let is blocked scoped. var is not. This means let only exists inside curly braces where it is declared. If we continue down multiple levels, we will have access to the scope or variables in the scope of our parent code block or within a functions. let variables are scoped to a function if they are not inside of a code block. var variables are also scoped to the functions in which they are declared.

// In addition to the differences between var and let, another difference between var and const is that const can neither be reassigned nor redeclared.

// let can be reassigned. const cannot.

// hoisting refers to the process of vairables being hoisted to the top of the scope they are declared in. Function declarations are hoisted and can be invoked before they are defined in a codebase.