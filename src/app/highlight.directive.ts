import { Directive, HostListener,HostBinding,Input ,OnInit} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
@HostListener('mouseenter') mouseover(){

  this.color = this.HighlightColor;
}
@HostListener('mouseleave') mouseleave(){

  this.color = this.defaultColor;
}
@HostBinding('style.color') get setColor() {

return this.color;
}

@Input() defaultColor = 'black';
@Input() HighlightColor = 'green';


private color: string;

  constructor() { 
  // this.renderer.setElementStyle(this.elementRef.nativeElement,'color', 'red');
  }
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.color = this.defaultColor;
}
}
