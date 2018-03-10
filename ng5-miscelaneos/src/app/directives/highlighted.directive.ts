import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//HostListener no se importa

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input("appHighlighted") newColor:string;

  constructor(private elRef:ElementRef) {
    console.log('Directive has been called');
    // elRef.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseenter') mouseEntered() {
    this.highligh(this.newColor || 'yellow')
    // this.elRef.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mouseLeft() {
    //this.elRef.nativeElement.style.backgroundColor = null;
    this.highligh(null);
  }

  private highligh(color:string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }

}
