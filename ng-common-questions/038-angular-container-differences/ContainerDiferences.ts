// What is the difference in ngContainer, ngTemplate, ngContent, ngTemplateOutlet?
// - Q1: What is ng-container?
// - Q2: What is ng-template?
// - Q3: What is ng-content?
// - Q4: What is ng-template-outlet?

/**
 * Q2: This is an special angular directive, which means that this template will contain
 *     inside a part of the template. But most important thing to remember is that this
 *     template is not just rendered like normal markup. This is just a variable loading 
 *     and it references this entire template and we can use it later.
 * 
 * // Foo or loading... will be rendered depending on article's value.
 * 
 * <h1>Angular interview</h1>
 * <div *ngIf="article; else loading">{{ article.title }}</div>
 * <ng-template #loading>
 *      <div>Loaling...</div>
 * </ng-template>
 * 
 * 
 * export interface ArticleInterface {
 *      id: string;
 *      title: string;
 * }
 * 
 * export class AppComponent {
 *      article: ArticleInterface | null = { id: 1, title: 'Foo' };
 * }
 * 
 * 
 * 
 * Q1: NG-CONTAINER
 * 
 * We may have the following structure. The main problem is that we may need to have
 * our CSS really nested like the following example, but when we are writing Angular
 * markup, we are using things like ngIf and ngFor, and we can really miss correct nesting
 * because we have just some divs just for the use of ngIf and ngFor. This is where 
 * actually there is a better variant which is just for Angular, which actually means
 * we are creating a container which does not exist inside DOM. So we can write
 * it as the second example below.
 * 
 * <div class="parent">
 *  <div></div>
 *  <div class="nested"></div>
 *  <div></div>
 * </div>
 * 
 * // Improved
 * <ng-container *ngIf="numbers">
 *  <ng-container *ngFor="let number of numbers">
 *      {{ number }}
 *  </ng-container>
 * </ng-container>
 * 
 * export class AppComponent {
 *  number = [1, 2, 3];
 * }
 * 
 * // Previous example is going to show 1, 2, 3 in the UI, but when we explore it
 * // in the DevTools, we will see no markups were created (divs, p, or any element). 
 * 
 * 
 * Q3: NG-CONTENT: We will use it just in a single case, when we want to render some 
 *     markup from the parent inside the child. 
 *     What does it mean? AppComponent is my parent, and we have a Child which is
 *     completely empty. What I want to write inside my child is:
 * 
 * 
 * <h1>Angular interview</h1>
 * <child>
 *  <div>Fooo</div>
 * </child>
 * 
 * 
 * // In child: ng-content does nothing. It is just a placeholder where we can inject
 * // some markup from the parent. It will show Fooo
 * 
 * <ng-content></ng-content>
 * 
 * 
 * Q4: NG-TEMPLATE-OUTLET: This is a special directive which allows us to render inside ng-template
 *     This is why here we can provide loading template just like a template inside our container
 *     which actually means this code won't be just rendered on the screen. So if we want to render it, 
 *     we can use ng-template-outlet.
 *     But it is not all, you can also provide parameters inside template outlet. This is why it is
 *     so flexible. So we can create here a template and let's name it for example article template.
 * 
 * <h1>Angular interview</h1>
 * <ng-container *ngTemplateOutlet="articleTemplate; context: {article}"></ng-container>
 * <ng-template #loadingTemplate>
 *  <div>Loading...</div>
 * </ng-template>
 * <ng-template #artitleTemplate let-article="article">
 *  <div>{{ article.title }}</div>
 * </ng-template>
 * 
 * 
 * export interface ArticleInterface {
 *      id: string;
 *      title: string;
 * }
 * 
 * export class AppComponent {
 *      article: ArticleInterface | null = { id: 1, title: 'Foo' };
 * }
 */












