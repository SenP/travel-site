import $ from 'jquery';

class MobileMenu {
    constructor(){
        this.openModalBtn = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalBtn = $('.modal__close');
        this.events();
    }

    events() {
        // openModal
        this.openModalBtn.click(this.openModal.bind(this));
        //closeModal
        this.closeModalBtn.click(this.closeModal.bind(this));
        //presses any key
        $(document).keyup(this.keypressHandler.bind(this));
    }

    keypressHandler(e){
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }
    openModal(){
        this.modal.addClass('modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('modal--is-visible');
    }
}

export default MobileMenu;