// What are change detection and onPush in Angular?
// - Q1: What is change detection?
// - Q2: How does onPush work?
// - Q3: Why onPush is important?

/**
 * Sometimes when we are changing an input for example, the whole component and its children will be "re-rendered" 
 * or at least triggered the change.
 * 
 * It'd mean some performance issues, so, when we are just typing something in the input element, it should
 * not trigger changes to the whole component of its children. So we can fix that with changeDetention = OnPush
 * 
 * What this OnPush does, it takes the component out of angular digest cycle, which actually means Angular doesn't check
 * this content anymore. But the question is when it will check this component and it will rerender this component 
 * when our inputs are changed, which actually means in 99% of the cases, you want always to use changeStrategy=OnPush
 * 
 * @Component({
 *      selector: 'ap-todos-todo',
 *      templateUrl: './todo.component.html',
 *      changeDetection: ChangeDetectionStrategy.OnPush
 * })
 * expor class TodoComponent {
 *  
 * }
 */







