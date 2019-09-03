import { NgModule } from '@angular/core';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

@NgModule({
    declarations: [
        RecipeDetailComponent,
        RecipeListComponent,
        RecipesComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent
    ],
    exports: [
        RecipeDetailComponent,
        RecipeListComponent,
        RecipesComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent
    ]
})
export class RecipesModule {}