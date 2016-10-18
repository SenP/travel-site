import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new MobileMenu();

new RevealOnScroll(".feature-item", "85%");
new RevealOnScroll(".testimonial", "65%");

new StickyHeader();