import $ from 'jquery';

class MobileMenu {
    constructor(){
        this.siteHeader = $('.site-header');
        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent = $('.site-header__menu-content');
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu(){
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
    }
}

export default MobileMenu;