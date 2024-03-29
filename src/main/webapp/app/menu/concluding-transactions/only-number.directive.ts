import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[OnlyNumber]'
})
export class OnlyNumberDirective {

    regexStr = '^[0-9]*$';

    constructor(private el: ElementRef) {
    }

    @Input() OnlyNumber: boolean;

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        const e = <KeyboardEvent> event;
        if (this.OnlyNumber) {
            if ([8].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            const ch = String.fromCharCode(e.keyCode);
            const regEx = new RegExp(this.regexStr);
            if (regEx.test(ch)) {
                return;
            }
            e.preventDefault();
        }
    }
}
