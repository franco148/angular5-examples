// What are life cycle hooks in Angular?
// - Q1: What are life cycle hooks?
// - Q2: When are they called?

/**
 * Actually inside Angular, every single component has a lifecycle. These are different phases
 * of existing of our component between creation and destroying. And angular provides for us
 * some lifecycle hooks so we can write our own code when this phases are happening.
 * 
 * There are a lot of different lifecycle hooks, but these are four that you need mostly:
 * 
 * ngOnInit: Tipically used when initializing the component, and we tipically implement OnInit, 
 * but it is not mandatory.
 * 
 * ngOnChanges: When the props/inputs were changed inside component
 * 
 * ngOnDestroy: When a component is destroyed. When for example there is a subscription,
 *              we need to unsubscribe in ngOnDestroy.
 * 
 * ngAfterViewInit: When the component and all its children are being rendered. For example
 *              you have some DOM element and you want to access it, but it was not rendered
 *              yet, it will happen if you will write your code inside the init because at 
 *              this moment your DOM is not finished.
 * 
 */



