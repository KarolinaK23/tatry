import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const li = this.el.nativeElement;
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/task-completed.png)');
   }

}
