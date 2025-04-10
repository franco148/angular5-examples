// What is the purpose of tsconfig.json?
// Q1: What is tsconfig.json?
// Q2: What does this options do? target, module, moduleResolution, noImplicitAny.


/**
 * It is used to configure TypeScript compiler, which actually means if you need to configure for example in what ECMScript version 
 * the TypeScript transpiles JavaScript, this is exactly the place to change the configuration.
 * 
 * If we also need to change some settings of typescript, like for example make it stricter or allow different rules. We also need to use tsconfig.json
 */
const options = {
    compilerOptions: {
        target: 'ES5',
        module: 'commonjs',
        moduleResolution: 'node',
        noImplicitAny: true
    }
}

















