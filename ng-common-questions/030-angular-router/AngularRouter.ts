// How to use a router in Angular?
// - Q1: How to add routing to the application?
// - Q2: When global routing can be bad?
// - Q3: What is router-outlet?
// - Q4: How to create router link?


/**
 * Q1: HOW TO ADD ROUTING TO THE APPLICATION?
 * 
 * const routes: Routes = [
 *     {
 *          path: '',
 *          component: UsersComponent
 *     }
 * ];
 * @NgModule({
 *      imports: [RouterModule.forRoot(routes)],
 *      exports: [RouterModule]
 * })
 * export class AppRoutingModule {}
 * 
 * In this case we have forRoot because this is for the whole application, and because it
 * is in the GlobalModule.
 * 
 * So we have to have this Module registered in the app.module.ts in imports property
 * 
 * 
 * Q2: WHEN GLOBAL ROUTING CAN BE BAD?
 * 
 * Actually it is not bad always, but you must consider if you really want global routing and
 * tipically you don't. Why is that? Because essentially inside our app routing we will write
 * components from different modules ad you could have here like 20 or 30 different components 
 * and your accessing components which are lying in different modules just directly inside your 
 * app routing, which essentially means if we want to remove one module, then we also need 
 * additionally to jump to routing and clean it, because essentially we are defining our 
 * routing outside of our module and this is not the best approach.
 * 
 * Much better approach would be to keep global routing empty and then we don't need this input.
 * 
 * What we can do instead inside our child mocules, we can define our routes. So here I can
 * say that we have routes and this is our routes just for this module. RouterModule.forChild(routes)
 * 
 * 
 * Q3: WHAT IS router-outlet?
 * This is an special component from router which helps us to render the components inside
 * router based on the routes.
 * 
 * Q4: HOW TO CREATE ROUTER LINK?
 * <a routerLink="/">Home</a>
 * <a [routerLink]="['/', 'foo', 'bar']">Home</a>
 */








