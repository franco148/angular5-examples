// Null in async pipe - what is the problem here?
// - Q1: How to fix this error in the code? (see video)

/**
 * We may see the following error in our angular code:
 * 
 * error TS2322: Type 'number | null' is not assignable to type 'number'
 * Type 'null' is not assignable to type 'number'
 * <child [currentPage]="currentPage$ | async"></child>
 * 
 * A solution would be write here a container and we can write the following:
 * 
 * <ng-container *ngIf="currentPage$ | async as currentPage">
 *  <child [currentPage]="currentPage"></child>
 * </ng-container>
 * 
 * This because in ngIf it will create a local property currentPage which will
 * not be an observable.
 */























