# Learning Notes

## NodeJS vs JS

- beware difference between NodeJS (aimming for server use) and JS (aimming for browser use)




### Declaration

- **Purpose:** A declaration introduces a new variable or function to the program. It specifies the variable's name and type, without necessarily assigning it a value. In the case of a function, it specifies the function's name, return type, and parameters.
- **Behavior:** When you declare a variable, the programming language reserves a space in memory for that variable. However, until you assign it a value, it may not have a meaningful value (depending on the language and context).
- **Example:** In C++ or Java, `int x;` declares a variable named `x` of type `int`. This tells the compiler that there will be a variable `x` that will hold integer values.

### Assignment

- **Purpose:** Assignment gives a declared variable a specific value. This can be done at the time of declaration or after the variable has been declared. Assignment can also be used to change the value of a variable throughout the life of a program.
- **Behavior:** When you assign a value to a variable, the program stores that value in the memory location reserved for the variable. You can assign a value to a variable as many times as needed.
- **Example:** Using the previous declaration `int x;`, the statement `x = 5;` assigns the value `5` to `x`. If `x` was already declared, this statement simply changes its value.

### Key Differences

- **Timing:** Declaration must happen before assignment (except in languages that allow declaration and assignment to be combined in a single statement).
- **Function:** Declaration introduces a new identifier and its type, while assignment gives or changes the value of an already declared identifier.
- **Syntax:** Typically, declaration syntax involves specifying a type followed by an identifier name. Assignment syntax usually involves an identifier followed by an assignment operator (`=` in many languages) and a value.

### Combined Declaration and Assignment

Many programming languages allow combining declaration and assignment in a single statement for convenience and readability. For example, in Python, `x = 5` both declares `x` and assigns it the value `5` in a single step. This is also common in languages like JavaScript, C++, and Java, among others, with syntax varying slightly between languages.