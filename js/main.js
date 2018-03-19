var Main = {

	initReviews: function () {
		var owl = $('.reviews_block_container-wrapper .owl-carousel');
		owl.on('changed.owl.carousel', function(e) {
			Main.setOwlPagination(e);
		}).on('initialized.owl.carousel',function(e){
			Main.InitOwlPagination(e);
		});
		owl.owlCarousel({
			margin: 0,
			nav: false,
			dots:false,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	},
	initNews: function () {
		var owl = $('.news_container-content__list');
		owl.on('changed.owl.carousel', function(e) {
			Main.setOwlPagination(e);
		}).on('initialized.owl.carousel',function(e){
			Main.InitOwlPagination(e);
		});
		owl.owlCarousel({
			margin: 0,
			nav: false,
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
					items: 2
				}
			}
		});
	},
	init: function(){
		this.initCatalog();
		this.initReviews();
		this.initNews();


	},

	InitOwlPagination: function(e){
		if (e.item) {
			var index = e.item.index - 1;
			var count = e.item.count;
			if (index > count) {
				index -= count;
			}
			if (index <= 0) {
				index += count;
			}
		}
		$(e.target).parent().find('.owl-custom-pagination').append('<div class="navigation"><img src="images/arrow-left.png" /><img src="images/arrow-right.png" /></div><div class="count"></div>');
		$(e.target).parent().find('.owl-custom-pagination .navigation img:first-child').on('click', function(){
			($(e.target).trigger('prev.owl.carousel'));
		});
		$(e.target).parent().find('.owl-custom-pagination .navigation img:nth-child(2)').on('click', function(){
			($(e.target).trigger('next.owl.carousel'));
		});
		$(e.target).parent().find('.owl-custom-pagination').find('.navigation');
		$(e.target).parent().find('.owl-custom-pagination .count').text(index + '/' + e.item.count)
	},
	setOwlPagination: function(e){

		if (!e.namespace || e.property.name != 'position') return ;

		if (e.item) {
			var index = e.item.index - 1;
			var count = e.item.count;
			if (index > count) {
				index -= count;
			}
			if (index <= 0) {
				index += count;
			}
		}

		$(e.target).parent().find('.owl-custom-pagination .count').text(index + '/' + e.item.count)
	},

	initCatalog: function(){

		//main categories slider
		var owl = $('.catalog_block_container-list');
		owl.children().each( function( index ) {
			$(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
		});


		owl.on('changed.owl.carousel', function(e) {
			Main.setOwlPagination(e);
		}).on('initialized.owl.carousel',function(e){
			Main.InitOwlPagination(e);
		});
		owl.owlCarousel({
			margin: 0,
			nav: false,
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