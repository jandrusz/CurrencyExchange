import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConcludingTransactionsModalComponent} from './concluding-transactions.component';

@Injectable()
export class ConcludingTransactionsModalService {
    private isOpen = false;

    constructor(
        private modalService: NgbModal
    ) {
    }

    open(): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        const modalRef = this.modalService.open(ConcludingTransactionsModalComponent, {
            container: 'nav'
        });
        modalRef.result.then((result) => {
            this.isOpen = false;
        }, (reason) => {
            this.isOpen = false;
        });
        return modalRef;
    }
}
