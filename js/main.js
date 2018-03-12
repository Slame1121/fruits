var Main = {

	init: function(){
		this.initCatalog();
	},

	initCatalog: function(){

		//main categories slider
		var owl = $('.catalog_block_container-list');
		owl.children().each( function( index ) {
			$(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
		});
		owl.owlCarousel({
			margin: 0,
			nav: true,
			dots:false,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

		//init subcategories
		$('.catalog_block_container-list__item-wrapper-text').on('click', 'button', function(){
			var container = $(this).closest('.catalog_block_container-list__item');
			var n = container.data('position');
			owl.trigger('to.owl.carousel', n);
			container.closest('.catalog_block_container').find('.catalog_block_container-subcategories').show();
		});
		$('.catalog_block_container').on('click','.catalog_block_container-subcategories__close',function(e){
			e.stopPropagation();
			e.preventDefault();
			$(this).parent().hide();
		})
	},

	initProductsList: function(){
		var owl = $('#product_banner');
		owl.owlCarousel({
			margin: 0,
			nav: true,
			dots:false,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 4
				}
			}
		});

		$('#product_banner .raty').raty({
			starType: 'i',
			readOnly: true,
			score: 3.5,/*function() {
				return $(this).attr('data-score');
			}*/
		});
	}
};

$(document).ready(function(){


	Main.init();
});