// What ways of binding in Angular do you know?
// - Q1: What ways of binding data exist in Angular?
// - Q2: Write examples

// One-way 

export class AppComponent {
    initialValue="This is initial value"

    changeValue(event: Event): void {
        console.log(event);
        this.initialValue = (event.target as HTMLInputElement).value;
    }
}

<input type="text" [value]="initialValue" (keyup)="changeValue($event) />

// two-way binding, we must import FormsModule 

<input [(ngModel)]="initialValue">


