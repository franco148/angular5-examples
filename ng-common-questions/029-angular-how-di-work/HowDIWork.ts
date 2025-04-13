// How does dependency injection work?
// - Q1: What is dependency injection in Angular?
// - Q2: How does it work?

/**
 * Actually other frameworks or in plain JavaScript don't have dependency ijection.
 * We simply have imports and exports form ECMAScript six, but we don't have dependency
 * injections.
 * 
 * This is where inside Frontend world it is just related to Angular framework.
 * 
 * So, we are defining what dependencies we have inside our module, what is isolated 
 * inside and what we can use outside.
 * 
 * For example in app.module.ts we are defining all our components that we are using or 
 * all our other modules that we want to use or additionally, we are registering our 
 * services also inside a module, which actually means we can define a module and
 * define what belongs to this module.
 * 
 * And then different modules can import one another and use different things from 
 * different modules.
 * 
 * So what DI does for us, it lets us to isolate and define what we can use outside.
 * 
 * EXPORTS: this property is to let angular know which services, classes, etc can
 * be used outside.
 * 
 * DECLARATIONS: We use this property for registering the services, classes, etc 
 * that we will use inside.
 */

