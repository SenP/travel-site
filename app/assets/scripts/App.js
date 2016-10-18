import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

new MobileMenu();

new RevealOnScroll(".feature-item", "85%");
new RevealOnScroll(".testimonial", "65%");

new StickyHeader();

new Modal();