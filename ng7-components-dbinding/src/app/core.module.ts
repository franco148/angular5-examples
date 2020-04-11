import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { RecipeService } from './recipes/recipe.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

// Here we do not need to export the services because services work differently than declarations,
// only declarations and other modules need to be exported, services are automatically injected on
// a root level, you do not need to export them to make this happen
@NgModule({
    providers: [
        // ShoppingListService, 
        // RecipeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ]
})
export class CoreModule {}