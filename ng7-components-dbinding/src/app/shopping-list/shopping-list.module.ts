import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { SharedModule } from 'app/shared/shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        FormsModule,
        // CommonModule, // replaced by SharedModule
        // ShoppingListRoutingModule // replaced by SharedModule
        // Or instead of having a separate RoutingModule here we can have
        // RouterModule.forChild([{pat: 'shopping-list', component: ShoppingListComponent}])
        SharedModule,
        ShoppingListRoutingModule
    ]
})
export class ShoppingListModule {}