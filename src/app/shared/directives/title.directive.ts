import { Directive, ElementRef, OnInit, Input } from '@angular/core';
// just for exemple

@Directive({
    selector: '[appTitle]'
})
export class TitleDirective implements OnInit {

    @Input('appTitle') appTitle: string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.el.nativeElement.textContent = this.el.nativeElement.textContent + this.appTitle + "✌️";
    }
}