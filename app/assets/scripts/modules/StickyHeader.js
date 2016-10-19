import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $('.lazyload');
		// Header 
		this.siteHeader = $('.site-header');
		this.triggerElem = $('.large-hero__title');
		this.createHeaderWaypoint();
		// Sections
		this.sections = $('.page-section');
		this.headerLinks = $('.primary-nav a');
		this.createSectionWaypoints();
		// Add smooth scrolling
		this.headerLinks.smoothScroll({ speed: 2000 });
		// Refresh waypoints
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}

	createHeaderWaypoint() {
		var root = this;
		new Waypoint({
			element: root.triggerElem[0],
			handler: function(direction) {
				if (direction == 'down') {
					root.siteHeader.addClass("site-header--dark");
				} else {
					root.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createSectionWaypoints() {
		var root = this;
		this.sections.each(function() {
			var currentSection = this;
			new Waypoint({
				element: currentSection,
				handler: function(direction) {
					if (direction == 'down') {
						var matchingLink = currentSection.getAttribute('data-matching-link');
						root.headerLinks.removeClass('is-current-link');
						$(matchingLink).addClass('is-current-link');
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentSection,
				handler: function(direction) {
					if (direction == 'up') {
						var matchingLink = currentSection.getAttribute('data-matching-link');
						root.headerLinks.removeClass('is-current-link');
						$(matchingLink).addClass('is-current-link');
					}
				},
				offset: "-35%"
			});

		});
	}
}

export default StickyHeader;