$(document).ready(function(){

	// Active zone
			$('.form-input.nav-input.mask-input').each(function(){
				if($(this).val() != ''){
					var textVal = $(this).val();
					$(this).parent().find('.nav-menu').append('<li><a class="active-cat" href="javascript:void(0);"><span>'+textVal+'</span></a></li>');
					
					$(this).parent().find('.active-ct').trigger( "click" );
				}
			})
			$(".city-list li.active-ct").trigger( "click" );
			setTimeout(function(){
				$('.active-cat').trigger( "click" );
				$('.active-ct').trigger( "click" );
			},500)
			$('.nav-input').keydown(function(){
				if (event.which == 13){
					$(this).trigger("focusout");
				}
			})


			//For load foto

		setInterval(function() {
			$('.file-preview-thumbnails').each(function(){
				if($(this).find('.file-preview-frame').length > 1){
					$(this).find('.file-preview-frame').first().remove();
				}
			})
	}, 1000);
// Active zone


	setInterval(function(){	
		

		if($('.ad-is-date .icheckbox_square-orange').hasClass('checked')){
			$('.ad-is-data .icheckbox_square-orange').addClass('checked');
		}
		else{
			$('.ad-is-data .icheckbox_square-orange').removeClass('checked');

		}
	},1000)


	$('.ad-is-date.order .iCheck-helper').css('left','100px');
	$('.ad-is .ad-is-data .icheckbox_square-orange, .ad-is-date.order .icheckbox_square-orange').removeClass();
	$('.refill .paytype-choose .icheckbox_square-orange').css('right','50px');

	setTimeout(function() {
	$('.refill .paytype-choose .icheckbox_square-orange .icheckbox_square-orange').css('left','50px');
	},200)

	var heightFormAll = $('.area-form-all .area-form').height();
	heightFormAll = heightFormAll -25;
	var lengthFormAll = $('.area-form-all .area-form').length;
	$('.dop-option .label-form').css('height',heightFormAll*lengthFormAll);

	$('.ad-is-block').each(function(){
		var textPol = $(this).find('.ad-is-name').html();
		var beginTextPol = textPol.substring(0, 50);
		$(this).find('.ad-is-name').html(beginTextPol+'...');
	})
	$('.post-list li').each(function(){
		var textPol = $(this).find('.post-list-in p').html();
		var beginTextPol = textPol.substring(0, 30);
		$(this).find('.post-list-in p:eq(0)').html(beginTextPol+'...');
	})

	
	


	//For load foto end

	setTimeout(function() {

		$('.dz-default.dz-message>span').text(' ')
	}, 100);
	$('#l1').css({'display':'block'});

	$('.nav-help>li>a').click(function(){
		$('.nav-help>li').removeClass('is-active');
		$(this).parent().addClass('is-active');
		var listNumb = $(this).parent().attr('list');
		$('.help-list').css('display','none');
		$('#'+listNumb+'').css('display','block');
	})
	$('.nav-help>li>ul>li>a').click(function(){
		$('.nav-help>li').removeClass('is-active');
		$(this).parent().parent().parent().addClass('is-active');
		var listNumb = $(this).parent().parent().parent().attr('list');
		$('.help-list').css('display','none');
		$('#'+listNumb+'').css('display','block');
		var nameText = $(this).attr('name');
		$('.help-list > li + li,.help-list > li').removeClass('is-active');
		$('.help-list > li + li .help-content,.help-list > li .help-content').css('display','none');
		$('#'+nameText).addClass('is-active');
		$('#'+nameText+' .help-content').css('display','block');
	})

 	//HOVER 'wear you" block
	 $('#cityCurrent').hover(function(){
 		if($('#icCurrent').val() == ''){
	 		$('.search-city').css('display','block');
 		}
	 })

	$('.exit-location-wrap').click(function(){
		$('.location-wrap').css('display','none');
	})
	$('.search-city .take-searchForm').focus(function(){
		$('.location-wrap').css('display','block');
		$('.search-city').css('display','none');
	})
	$('.take-city').click(function(){
		var cityCount = $(this).text();
		$('.form-search .location input').val(cityCount);
		$('.search-city').css('display','none');
	})
	$('.region-hover').mouseover(function(){
		$('.location-title-this-region').css('color','inherit');
	})
	$('.region-hover').mouseleave(function(){
		$('.location-title-this-region').css('color','#FF9543');
	})
	$('.search-city i').click(function(){
		$('.search-city').css('display','none');
	})
//check-price arrow transform
$('.check-price .field').click(function(){
})


jQuery.fn.extend({
    toggleText: function (a, b){
        var isClicked = false;
        var that = this;
        this.click(function (){
            if (isClicked) { that.text(a); isClicked = false; }
            else { that.text(b); isClicked = true; }
        });
        return this;
    }
});

// notice's filters
if ($('.multifilters-wrap').length) {

	// multifilters info
	var infoTextDefault = 'пустая подсказка';
	$('.multifilters-in').each(function(){
		$(this).children('.multifilters-info-wrap').find('span').text();
	});
	
	$('.multifilters-info').hover(function(){
		var _infoText = $(this).text();
		$(this).parents('.multifilters-in').children('.multifilters-info-wrap').show().find('span').text(_infoText);
	}, function(){
		$(this).parents('.multifilters-in').children('.multifilters-info-wrap').hide().find('span').text(infoTextDefault);
	});

	function checkOutfiltersHeight() {
		if ($('.outfilters-wrap').css('display') == 'none') {
			// holder
		} else {
			if (170 < $('.outfilters').outerHeight()) {
				$('.all-filter-btn').fadeIn();
			} else {
				$('.all-filter-btn').fadeOut();
			}
		}
	}

	var defaultValues = [];
	var defaultValuesIndex = 0;
	var textIndex = 0;
	// fill array
	$('.nav-btn').each(function(){
		defaultValues[defaultValuesIndex] = $(this).children('span').text();
		defaultValuesIndex++;
	});

	// fill data-mask-text nav-menu
	$('.multifilters-input .nav-menu li').each(function(){
		if ( ($(this).parents('.nav-menu').siblings('.nav-btn').attr('data-mask-text') !== undefined) && ($(this).parents('.nav-menu').siblings('.nav-btn').attr('data-mask-text') !== false) ) {
			if ($(this).index() != 0) {
				$(this).find('span').before($(this).parents('.nav-menu').siblings('.nav-btn').attr('data-mask-text') + ' ');
			}
		}
	});

	// fill select
		$('.multifilters-select .nav-menu li:first-child').addClass('is-active');

	// fill checkbox
		$('.multifilters-checkbox .nav-menu li:first-child input').on('ifCreated', function(){
			$(this).iCheck('check');
		});

	// click button - show nav
	$('.nav-btn').on('click', function(){
		defaultValuesIndex = $(this).parents('.multifilters-in').index();
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active').siblings('.nav-menu').hide();
		} else {
			$(this).addClass('is-active').siblings('.nav-menu').show();
			$(this).parents('.multifilters-in').siblings('li').children('.nav-btn').removeClass('is-active').siblings('.nav-menu').hide();
		}
	});

	// click input - show nav
	$('.multifilters-input .nav-btn').on('click', function(){
		var _this = $(this).siblings('.nav-input');
		var _indMask = false;
		_this.show().focus();
		_this.siblings('.nav-btn').hide();
		if (_this.hasClass('mask-input')) {
			if (_this.attr('data-mask-character') == 'number') {
				_this.keydown(function(e) {
					{
						if( !(event.keyCode == 8                                // backspace
						|| (event.keyCode >= 48 && event.keyCode <= 57)     // numbers on keyboard
						|| (event.keyCode >= 96 && event.keyCode <= 105))   // number on keypad
						) {
							event.preventDefault();     // Prevent character input
						}
					}
				});
				_this.keyup(function(e) {
					if (_this.val().length) {
						_this.parents('.multifilters-in').addClass('is-active');
						_this.siblings('.clear-filter-btn').show();
					} else {
						_this.parents('.multifilters-in').removeClass('is-active');
						_this.siblings('.clear-filter-btn').hide();
					}
				});
			}
		}
		defaultValuesIndex = _this.parents('.multifilters-in').index();
		_this.siblings('.nav-menu').show();
		_this.parents('.multifilters-in').siblings('li').children('.nav-btn').removeClass('is-active').siblings('.nav-menu').hide();
	});

	// input focusOut
	$('.multifilters-input .nav-input').focusout(function(event){
		var _indCategory = false;
		var _indOutfilters = $('.outfilters-in').length;
		var _this = $(this);
		if (_this.val().length) {
			if ( (_this.siblings('.nav-btn').attr('data-mask-text') !== undefined) && (_this.siblings('.nav-btn').attr('data-mask-text') !== false) ) {
				_indMask = true;
				_this.siblings('.nav-btn').children('span').text(_this.siblings('.nav-btn').attr('data-mask-text') + ' ' + _this.val());
				_this.siblings('.clear-filter-btn').show();
			} else {
				_this.siblings('.nav-btn').children('span').text(_this.val());
			}
			// check both
			if (_this.parents('.multifilters-in').hasClass('multifilters-both')) {
				if (_this.parents('.multifilters-in').prev().hasClass('is-active')) {
					if (parseInt(_this.val()) < parseInt(_this.parents('.multifilters-in').prev().find('input').val())) {
						_this.val('');
						_this.siblings('.nav-menu').hide().siblings('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
						_this.siblings('.nav-menu').siblings('.clear-filter-btn').hide();
						_this.parents('.multifilters-in').removeClass('is-active');
						_this.siblings('.nav-menu').find('li').removeClass('is-active');
						_this.siblings('.nav-menu').find('li:first-child').addClass('is-active');
						_this.siblings('.nav-btn').show();
						_this.hide();
						$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
						checkOutfiltersHeight();
						return;
					}
				}
			}
			// check both
			if (_this.parents('.multifilters-in').next().hasClass('multifilters-both')) {
				if (_this.parents('.multifilters-in').next().hasClass('is-active')) {
					if (parseInt(_this.val()) > parseInt(_this.parents('.multifilters-in').next().find('input').val())) {
						_this.val('');
						_this.siblings('.nav-menu').hide().siblings('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
						_this.siblings('.nav-menu').siblings('.clear-filter-btn').hide();
						_this.parents('.multifilters-in').removeClass('is-active');
						_this.siblings('.nav-menu').find('li').removeClass('is-active');
						_this.siblings('.nav-menu').find('li:first-child').addClass('is-active');
						_this.siblings('.nav-btn').show();
						_this.hide();
						$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
						checkOutfiltersHeight();
						return;
					}
				}
			}
			// outfilters
			if ($('.outfilters-wrap').css('display') == 'none') {
				$('.outfilters-wrap').slideDown();
			}
			$('.outfilters-in').each(function(){
				if ($(this).attr('data-category-index') == defaultValuesIndex) {
					_indCategory = true;
				}
			});
			if (_indCategory) {
				// holder
				$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
					.children('.outfilters-list')
					.children('li')
					.attr('data-text-index', textIndex)
					.find('span')
					.text(_this.val());
				if (_indMask) {
					$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"] li span').prepend(_this.siblings('.nav-btn').attr('data-mask-text') + ' ');
				}
			} else {
				var _position = false;
				if (_indOutfilters) {
					$('.outfilters-in').each(function(){
						if (defaultValuesIndex > $(this).attr('data-category-index')) {
							_position = $(this).attr('data-category-index');
						}
					});
					if (_position) {
						$('.outfilters')
							.find('.outfilters-in[data-category-index="'+_position+'"]')
							.after('<li class="outfilters-in" data-category-index="'+defaultValuesIndex+'"></li>')
							.siblings('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
							.append('<p class="outfilters-title"></p>')
							.children('.outfilters-title')
							.text(defaultValues[defaultValuesIndex])
							.after('<ul class="outfilters-list"></ul>')
							.siblings('.outfilters-list')
							.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
							.children('li')
							.attr('data-text-index', textIndex)
							.find('span')
							.text(_this.val());
						if (_indMask) {
							$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"] li span').prepend(_this.siblings('.nav-btn').attr('data-mask-text') + ' ');
						}
					} else {
						$('.outfilters')
							.children('.outfilters-in:first-child')
							.before('<li class="outfilters-in" data-category-index="'+defaultValuesIndex+'"></li>')
							.siblings('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
							.append('<p class="outfilters-title"></p>')
							.children('.outfilters-title')
							.text(defaultValues[defaultValuesIndex])
							.after('<ul class="outfilters-list"></ul>')
							.siblings('.outfilters-list')
							.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
							.children('li')
							.attr('data-text-index', textIndex)
							.find('span')
							.text(_this.val());
						if (_indMask) {
							$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"] li span').prepend(_this.siblings('.nav-btn').attr('data-mask-text') + ' ');
						}
					}
				} else {
					$('.outfilters')
						.append('<li class="outfilters-in"></li>')
						.children('.outfilters-in')
						.attr('data-category-index', defaultValuesIndex)
						.append('<p class="outfilters-title"></p>')
						.children('.outfilters-title')
						.text(defaultValues[defaultValuesIndex])
						.after('<ul class="outfilters-list"></ul>')
						.siblings('.outfilters-list')
						.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
						.children('li')
						.attr('data-text-index', textIndex)
						.find('span')
						.text(_this.val());
					if (_indMask) {
						$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"] li span').prepend(_this.siblings('.nav-btn').attr('data-mask-text') + ' ');
					}
				}
			}
		} else {
			_this.siblings('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
			// outfilters
			$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
				_indOutfilters = $('.outfilters-in').length;
				if (!_indOutfilters) {
					$('.outfilters-wrap').slideUp();
			}
		}
		_this.siblings('.nav-btn').show();
		_this.hide();
		checkOutfiltersHeight();
	});
	
	// category
	$('.multifilters-category .nav-menu li a').on('click', function(){
		defaultValuesIndex = $(this).parents('.multifilters-in').index();
		var _indexOption = $(this).parents('.nav-menu > li').index();
		var _chosenValue = $(this).find('span').text();
		if (_indexOption != 0) {
			$(this).parents('.nav-menu').hide().siblings('.nav-btn').children('span').text(_chosenValue);
			$(this).parents('.nav-menu').siblings('.nav-input').val(_chosenValue);
			$(this).parents('.multifilters-in').addClass('is-active');
		} else {
			$(this).parents('.nav-menu').hide().siblings('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
			$(this).parents('.nav-menu').siblings('.nav-input').val('');
			$(this).parents('.multifilters-in').removeClass('is-active');
		}
		$(this).parents('.multifilters-in').find('li').removeClass('is-active');
		$(this).parentsUntil($('.nav-menu'), 'li').addClass('is-active');
		$('.nav-btn').removeClass('is-active');
	});

	// select
	$('.multifilters-select .nav-menu li a').on('click', function(){
		var _indOutfilters = $('.outfilters-in').length;
		var _indCategory = false;
		defaultValuesIndex = $(this).parents('.multifilters-in').index();
		textIndex = $(this).parent('li').index();
		var _indexOption = $(this).parents('.nav-menu > li').index();
		var _chosenValue = $(this).find('span').text();
		if (_indexOption != 0) {
			$(this).parents('.nav-menu').hide().siblings('.nav-btn').children('span').text(_chosenValue);
			$(this).parents('.nav-menu').siblings('.nav-input').val(_chosenValue);
			$(this).parents('.nav-menu').siblings('.clear-filter-btn').show();
			$(this).parents('.multifilters-in').addClass('is-active');
			// outfilters
			if ($('.outfilters-wrap').css('display') == 'none') {
				$('.outfilters-wrap').slideDown();
			}
			$('.outfilters-in').each(function(){
				if ($(this).attr('data-category-index') == defaultValuesIndex) {
					_indCategory = true;
				}
			});
			if(_indCategory) {
				$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
					.children('.outfilters-list')
					.children('li')
					.attr('data-text-index', textIndex)
					.find('span')
					.text(_chosenValue);
			} else {
				var _position = false;
				if (_indOutfilters) {
					$('.outfilters-in').each(function(){
						if (defaultValuesIndex > $(this).attr('data-category-index')) {
							_position = $(this).attr('data-category-index');
						}
					});
					if (_position) {
						$('.outfilters')
							.find('.outfilters-in[data-category-index="'+_position+'"]')
							.after('<li class="outfilters-in" data-category-index="'+defaultValuesIndex+'"></li>')
							.siblings('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
							.append('<p class="outfilters-title"></p>')
							.children('.outfilters-title')
							.text(defaultValues[defaultValuesIndex])
							.after('<ul class="outfilters-list"></ul>')
							.siblings('.outfilters-list')
							.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
							.children('li')
							.attr('data-text-index', textIndex)
							.find('span')
							.text(_chosenValue);
					} else {
						$('.outfilters')
							.children('.outfilters-in:first-child')
							.before('<li class="outfilters-in" data-category-index="'+defaultValuesIndex+'"></li>')
							.siblings('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
							.append('<p class="outfilters-title"></p>')
							.children('.outfilters-title')
							.text(defaultValues[defaultValuesIndex])
							.after('<ul class="outfilters-list"></ul>')
							.siblings('.outfilters-list')
							.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
							.children('li')
							.attr('data-text-index', textIndex)
							.find('span')
							.text(_chosenValue);
					}
				} else {
					$('.outfilters')
						.append('<li class="outfilters-in"></li>')
						.children('.outfilters-in')
						.attr('data-category-index', defaultValuesIndex)
						.append('<p class="outfilters-title"></p>')
						.children('.outfilters-title')
						.text(defaultValues[defaultValuesIndex])
						.after('<ul class="outfilters-list"></ul>')
						.siblings('.outfilters-list')
						.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
						.children('li')
						.attr('data-text-index', textIndex)
						.find('span')
						.text(_chosenValue);
				}
			}
		} else {
			$(this).parents('.nav-menu').hide().siblings('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
			$(this).parents('.nav-menu').siblings('.nav-input').val('');
			$(this).parents('.nav-menu').siblings('.clear-filter-btn').hide();
			$(this).parents('.multifilters-in').removeClass('is-active');
			// outfilters
			$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
			_indOutfilters = $('.outfilters-in').length;
			if (!_indOutfilters) {
				$('.outfilters-wrap').slideUp();
			}
		}
		$(this).parents('.multifilters-in').find('li').removeClass('is-active');
		$(this).parentsUntil($('.nav-menu'), 'li').addClass('is-active');
		$('.nav-btn').removeClass('is-active');
		checkOutfiltersHeight();
	});
	
	// outfilters cancel buttons
	$('.outfilters').on('click', '.outfilters-cancel', function(){
		var _indOutfilters = true;
		defaultValuesIndex = $(this).parents('.outfilters-in').attr('data-category-index');
		textIndex = $(this).parent('li').attr('data-text-index');
		$(this).parent('li').remove();
		var _indCategoryOut = true;
		_indCategoryOut = $('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').find('li').length;
		if (!_indCategoryOut) {
			$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
		}
		_indOutfilters = $('.outfilters-in').length;
		if (!_indOutfilters) {
			$('.outfilters-wrap').slideUp();
		}
		if ($('.multifilters-in').eq(defaultValuesIndex).hasClass('multifilters-select')) {
			$('.multifilters-in').eq(defaultValuesIndex).children('.nav-input').val('');
			$('.multifilters-in').eq(defaultValuesIndex).children('.clear-filter-btn').hide();
			$('.multifilters-in').eq(defaultValuesIndex).children('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
			$('.multifilters-in').eq(defaultValuesIndex).children('.nav-menu').children('li').removeClass('is-active').eq(0).addClass('is-active');
			$('.multifilters-in').eq(defaultValuesIndex).removeClass('is-active');
		}
		if ($('.multifilters-in').eq(defaultValuesIndex).hasClass('multifilters-checkbox')) {
			$('.multifilters-in').eq(defaultValuesIndex).find('.nav-menu > li').eq(textIndex).find('input').iCheck('uncheck');
		}
		if ($('.multifilters-in').eq(defaultValuesIndex).hasClass('multifilters-input')) {
			$('.multifilters-in').eq(defaultValuesIndex).children('.nav-input').val('');
			$('.multifilters-in').eq(defaultValuesIndex).children('.clear-filter-btn').hide();
			$('.multifilters-in').eq(defaultValuesIndex).children('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
			$('.multifilters-in').eq(defaultValuesIndex).children('.nav-menu').children('li').removeClass('is-active').eq(0).addClass('is-active');
			$('.multifilters-in').eq(defaultValuesIndex).removeClass('is-active');
		}
		checkOutfiltersHeight();
	});

	// checkbox
	$('.multifilters-checkbox .nav-menu li label').on('click', function(){
		$(this).find('input').iCheck('uncheck');
		$(this).parent('li').siblings('li').find('input').iCheck('uncheck');
		$($(this)).parents('.nav-menu').hide();
		$('.nav-btn').removeClass('is-active');
	});

	// checkbox checked
	$('.multifilters-checkbox .nav-menu li input').on('ifChecked', function(){
		var _indOutfilters = $('.outfilters-in').length;
		var _indCategory = false;
		defaultValuesIndex = $(this).parents('.multifilters-in').index();
		textIndex = $(this).parents('.nav-menu > li').index();
		var _chosenValue = $(this).parent().siblings('span').text();
		var _parent = $(this).parentsUntil($('.nav-menu'), 'li');
		if (_parent.index() == 0) {
			_parent.siblings('li').find('input').iCheck('uncheck');
			$(this).parents('.nav-menu').siblings('.clear-filter-btn').hide();
			$(this).parents('.multifilters-in').removeClass('is-active');

		} else {
			$(this).parents('.nav-menu').find('li').eq(0).iCheck('uncheck');
			textIndex = $(this).parents('.nav-menu > li').index();
			$(this).parents('.nav-menu').siblings('.clear-filter-btn').show();
			$(this).parents('.multifilters-in').addClass('is-active');
			// outfilters
			if ($('.outfilters-wrap').css('display') == 'none') {
				$('.outfilters-wrap').slideDown();
			}
			$('.outfilters-in').each(function(){
				if ($(this).attr('data-category-index') == defaultValuesIndex) {
					_indCategory = true;
				}
			});
			if(_indCategory) {
				var _positionCheckbox = false;
				$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"] li').each(function(){
					if (textIndex > $(this).attr('data-text-index')) {
						_positionCheckbox = $(this).attr('data-text-index');
					}
				});
				if (_positionCheckbox) {
					$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
						.children('.outfilters-list')
						.find('li[data-text-index="'+_positionCheckbox+'"]')
						.after('<li data-text-index="'+textIndex+'"><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
						.siblings('li[data-text-index="'+textIndex+'"]')
						.find('span')
						.text(_chosenValue);
				} else {
					$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
						.children('.outfilters-list')
						.find('li:first-child')
						.before('<li data-text-index="'+textIndex+'"><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
						.siblings('li[data-text-index="'+textIndex+'"]')
						.find('span')
						.text(_chosenValue);
				}
			} else {
				if (_indOutfilters) {
					var _position = false;
					$('.outfilters-in').each(function(){
						if (defaultValuesIndex > $(this).attr('data-category-index')) {
							_position = $(this).attr('data-category-index');
						}
					});
					if (_position) {
						$('.outfilters')
							.find('.outfilters-in[data-category-index="'+_position+'"]')
							.after('<li class="outfilters-in" data-category-index="'+defaultValuesIndex+'"></li>')
							.siblings('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
							.append('<p class="outfilters-title"></p>')
							.children('.outfilters-title')
							.text(defaultValues[defaultValuesIndex])
							.after('<ul class="outfilters-list"></ul>')
							.siblings('.outfilters-list')
							.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
							.children('li')
							.attr('data-text-index', textIndex)
							.find('span')
							.text(_chosenValue);
					} else {
						$('.outfilters')
							.children('.outfilters-in:first-child')
							.before('<li class="outfilters-in" data-category-index="'+defaultValuesIndex+'"></li>')
							.siblings('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
							.append('<p class="outfilters-title"></p>')
							.children('.outfilters-title')
							.text(defaultValues[defaultValuesIndex])
							.after('<ul class="outfilters-list"></ul>')
							.siblings('.outfilters-list')
							.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
							.children('li')
							.attr('data-text-index', textIndex)
							.find('span')
							.text(_chosenValue);
					}
				} else {
					$('.outfilters')
						.append('<li class="outfilters-in"></li>')
						.children('.outfilters-in')
						.attr('data-category-index', defaultValuesIndex)
						.append('<p class="outfilters-title"></p>')
						.children('.outfilters-title')
						.text(defaultValues[defaultValuesIndex])
						.after('<ul class="outfilters-list"></ul>')
						.siblings('.outfilters-list')
						.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
						.children('li')
						.attr('data-text-index', textIndex)
						.find('span')
						.text(_chosenValue);
				}
			}
		}
		checkOutfiltersHeight();
	});
		
	// disable checkbox uncheck
	$('.multifilters-checkbox .nav-menu li:first-child input').on('ifClicked', function(){
		defaultValuesIndex = $(this).parents('.multifilters-in').index();
		setTimeout(function(){
			$('.multifilters-in').eq(defaultValuesIndex).find('.nav-menu li:first-child input').iCheck('check');
		},1);
	});

	// checkbox unchecked
	$('.multifilters-checkbox .nav-menu li input').on('ifUnchecked', function(){
		var _indCheck = false;
		var _indOutfilters = true;
		textIndex = $(this).parents('.nav-menu > li').index();
		defaultValuesIndex = $(this).parents('.multifilters-in').index();
		$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"] li[data-text-index="'+textIndex+'"]').remove();
		setTimeout(function(){
			$('.multifilters-in').eq(defaultValuesIndex).find('label > div').each(function(){
				if ($(this).hasClass('checked')) {
					_indCheck = true;
				}
			});
			if (!_indCheck) {
				$('.multifilters-in').eq(defaultValuesIndex).find('.nav-menu li:first-child input').iCheck('check');
			}
		},1);
		_indCategoryOut = $('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').find('li').length;
		if (!_indCategoryOut) {
			$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
		}
		setTimeout(function(){
		_indOutfilters = $('.outfilters-in').length;
			if (!_indOutfilters) {
				$('.outfilters-wrap').slideUp();
			}
		},1);
		checkOutfiltersHeight();
	});
	
	// input-select
	$('.multifilters-input .nav-menu li a').on('click', function(){
		var _indOutfilters = $('.outfilters-in').length;
		var _indCategory = false;
		defaultValuesIndex = $(this).parents('.multifilters-in').index();
		textIndex = $(this).parent('li').index();
		var _indexOption = $(this).parents('.nav-menu > li').index();
		var _chosenValue = $(this).find('span').text();
		var _indMask = false;
		if (_indexOption != 0) {
			if ( ($(this).parents('.nav-menu').siblings('.nav-btn').attr('data-mask-text') !== undefined) && ($(this).parents('.nav-menu').siblings('.nav-btn').attr('data-mask-text') !== false) ) {
				_indMask = true;
				$(this).parents('.nav-menu').hide().siblings('.nav-btn').children('span').text($(this).parents('.nav-menu').hide().siblings('.nav-btn').attr('data-mask-text') + ' ' + _chosenValue);
			} else {
				$(this).parents('.nav-menu').hide().siblings('.nav-btn').children('span').text(_chosenValue);
			}
			$(this).parents('.nav-menu').siblings('.nav-input').val(_chosenValue);
			$(this).parents('.nav-menu').siblings('.clear-filter-btn').show();
			$(this).parents('.multifilters-in').addClass('is-active');
			// check both
			if ($(this).parents('.multifilters-in').hasClass('multifilters-both')) {
				if ($(this).parents('.multifilters-in').prev().hasClass('is-active')) {
					if (parseInt(_chosenValue) < parseInt($(this).parents('.multifilters-in').prev().find('input').val())) {
						$(this).parents('.nav-menu').siblings('.nav-input').val('');
						$(this).parents('.nav-menu').hide().siblings('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
						$(this).parents('.nav-menu').siblings('.clear-filter-btn').hide();
						$(this).parents('.multifilters-in').removeClass('is-active');
						$(this).parents('.nav-menu').find('li').removeClass('is-active');
						$(this).parents('.nav-menu').find('li:first-child').addClass('is-active');
						$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
						checkOutfiltersHeight();
						return;
					}
				}
			}
			// check both
			if ($(this).parents('.multifilters-in').next().hasClass('multifilters-both')) {
				if ($(this).parents('.multifilters-in').next().hasClass('is-active')) {
					if (parseInt(_chosenValue) > parseInt($(this).parents('.multifilters-in').next().find('input').val())) {
						$(this).parents('.nav-menu').siblings('.nav-input').val('');
						$(this).parents('.nav-menu').hide().siblings('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
						$(this).parents('.nav-menu').siblings('.clear-filter-btn').hide();
						$(this).parents('.multifilters-in').removeClass('is-active');
						$(this).parents('.nav-menu').find('li').removeClass('is-active');
						$(this).parents('.nav-menu').find('li:first-child').addClass('is-active');
						$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
						checkOutfiltersHeight();
						return;
					}
				}
			}
			// outfilters
			if ($('.outfilters-wrap').css('display') == 'none') {
				$('.outfilters-wrap').slideDown();
			}
			$('.outfilters-in').each(function(){
				if ($(this).attr('data-category-index') == defaultValuesIndex) {
					_indCategory = true;
				}
			});
			if(_indCategory) {
				$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
					.children('.outfilters-list')
					.children('li')
					.attr('data-text-index', textIndex)
					.find('span')
					.text(_chosenValue);
				if (_indMask) {
					$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"] li span').prepend($(this).parents('.nav-menu').siblings('.nav-btn').attr('data-mask-text') + ' ');
				}
			} else {
				var _position = false;
				if (_indOutfilters) {
					$('.outfilters-in').each(function(){
						if (defaultValuesIndex > $(this).attr('data-category-index')) {
							_position = $(this).attr('data-category-index');
						}
					});
					if (_position) {
						$('.outfilters')
							.find('.outfilters-in[data-category-index="'+_position+'"]')
							.after('<li class="outfilters-in" data-category-index="'+defaultValuesIndex+'"></li>')
							.siblings('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
							.append('<p class="outfilters-title"></p>')
							.children('.outfilters-title')
							.text(defaultValues[defaultValuesIndex])
							.after('<ul class="outfilters-list"></ul>')
							.siblings('.outfilters-list')
							.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
							.children('li')
							.attr('data-text-index', textIndex)
							.find('span')
							.text(_chosenValue);
						if (_indMask) {
							$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"] li span').prepend($(this).parents('.nav-menu').siblings('.nav-btn').attr('data-mask-text') + ' ');
						}
					} else {
						$('.outfilters')
							.children('.outfilters-in:first-child')
							.before('<li class="outfilters-in" data-category-index="'+defaultValuesIndex+'"></li>')
							.siblings('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]')
							.append('<p class="outfilters-title"></p>')
							.children('.outfilters-title')
							.text(defaultValues[defaultValuesIndex])
							.after('<ul class="outfilters-list"></ul>')
							.siblings('.outfilters-list')
							.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
							.children('li')
							.attr('data-text-index', textIndex)
							.find('span')
							.text(_chosenValue);
						if (_indMask) {
							$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"] li span').prepend($(this).parents('.nav-menu').siblings('.nav-btn').attr('data-mask-text') + ' ');
						}
					}
				} else {
					$('.outfilters')
						.append('<li class="outfilters-in"></li>')
						.children('.outfilters-in')
						.attr('data-category-index', defaultValuesIndex)
						.append('<p class="outfilters-title"></p>')
						.children('.outfilters-title')
						.text(defaultValues[defaultValuesIndex])
						.after('<ul class="outfilters-list"></ul>')
						.siblings('.outfilters-list')
						.append('<li><button class="outfilters-cancel"><i class="icon-all-check-cancel"></i></button><span></span></li>')
						.children('li')
						.attr('data-text-index', textIndex)
						.find('span')
						.text(_chosenValue);
					if (_indMask) {
						$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"] li span').prepend($(this).parents('.nav-menu').siblings('.nav-btn').attr('data-mask-text') + ' ');
					}
				}
			}
		} else {
			$(this).parents('.nav-menu').hide().siblings('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
			$(this).parents('.nav-menu').siblings('.nav-input').val('');
			$(this).parents('.nav-menu').siblings('.clear-filter-btn').hide();
			$(this).parents('.multifilters-in').removeClass('is-active');
			// outfilters
			$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
				_indOutfilters = $('.outfilters-in').length;
				if (!_indOutfilters) {
					$('.outfilters-wrap').slideUp();
			}
		}
		$(this).parents('.multifilters-in').find('li').removeClass('is-active');
		$(this).parentsUntil($('.nav-menu'), 'li').addClass('is-active');
		$('.nav-btn').removeClass('is-active');
		checkOutfiltersHeight();
	});

	// hide location-wrap on outer click
	if ($('.nav-menu').length) {
		$(document).click(function(e) {
			if ( $(e.target).closest('.nav-menu, .nav-btn, .nav-input').length === 0) {
				$('.nav-menu').hide().siblings('.nav-btn').removeClass('is-active');
			}
		});
	}

	// clear select
	$('.multifilters-select .clear-filter-btn').on('click', function(){
		var _indOutfilters = true;
		$(this).hide();
		defaultValuesIndex = $(this).parents('.multifilters-in').index();
		$(this).siblings('.nav-input').val('');
		$(this).siblings('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
		$(this).siblings('.nav-menu').children('li').removeClass('is-active').eq(0).addClass('is-active');
		$(this).parent().removeClass('is-active');
		// outfilters
		$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
		_indOutfilters = $('.outfilters-in').length;
		if (!_indOutfilters) {
			$('.outfilters-wrap').slideUp();
		}
		checkOutfiltersHeight();
	});

	// clear checkbox
	$('.multifilters-checkbox .clear-filter-btn').on('click', function(){
		var _indOutfilters = true;
		$(this).hide();
		defaultValuesIndex = $(this).parents('.multifilters-in').index();
		$(this).siblings('.nav-menu').find('input').iCheck('uncheck');
		$(this).siblings('.nav-menu').find('li:first-child').find('input').iCheck('check');
		// outfilters
		$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
		_indOutfilters = $('.outfilters-in').length;
		if (!_indOutfilters) {
			$('.outfilters-wrap').slideUp();
		}
		checkOutfiltersHeight();
	});

	// clear input
	$('.multifilters-input .clear-filter-btn').on('click', function(){
		$(this).hide();
		defaultValuesIndex = $(this).parents('.multifilters-in').index();
		$(this).siblings('.nav-input').val('');
		$(this).siblings('.nav-btn').children('span').text(defaultValues[defaultValuesIndex]);
		$(this).siblings('.nav-menu').children('li').removeClass('is-active').eq(0).addClass('is-active');
		$(this).parent().removeClass('is-active');
		// outfilters
		$('.outfilters-in[data-category-index="'+defaultValuesIndex+'"]').remove();
			_indOutfilters = $('.outfilters-in').length;
			if (!_indOutfilters) {
				$('.outfilters-wrap').slideUp();
		}
		checkOutfiltersHeight();
	});

	// outfilters main clear button
	$('.outfilters-wrap .cancel-btn').on('click', function(){
		$(this).parent().siblings('.outfilters-container').find('.outfilters-in').remove();
		$('.outfilters-wrap').slideUp();
		$('.multifilters-in').removeClass('is-active');
		$('.multifilters-in').find('.nav-input').val('');
		defaultValuesIndex = 0;
		$('.multifilters-in .nav-btn').each(function(){
			if ($(this).parent().index() != 0) {
				$(this).removeClass('is-active').children('span').text(defaultValues[defaultValuesIndex]);
				$(this).siblings('.clear-filter-btn').hide();
				$(this).siblings('.nav-menu').find('input[type="checkbox"]').iCheck('uncheck');
				$('.multifilters-checkbox .nav-menu li:first-child input').iCheck('check');
			}
			defaultValuesIndex++;
		});
		$('.multifilters-select, .multifilters-input').each(function(){
			$(this).children('.nav-menu').children('li').removeClass('is-active').eq(0).addClass('is-active');
		});
		$('.all-filter-btn').hide();
	});

	// show all filter
	$('.all-filter-btn').on('click', function(){
		if ($(this).hasClass('is-active')) {
			$(this).siblings('.outfilters-container').css('height', '162px');
			$(this).removeClass('is-active');
			$(this).children('span').text('показать весь фильтр');
		} else {
			$(this).siblings('.outfilters-container').css('height', 'auto');
			$(this).addClass('is-active');
			$(this).children('span').text('свернуть фильтр');
		}
	});

} // end multifilters

// Validation
	$.validate({
		validateOnBlur : true,
		scrollToTopOnError : false,
		validateOnEvent: true,
		modules: 'security'
	});

// settings accordion
	$('.settings-title').on('click', function(){
		if ($(this).parent().hasClass('is-active')) {
			$(this).parent().removeClass('is-active').find('.settings-in').slideUp();
		} else {
			$('.settings-title').parent().removeClass('is-active').find('.settings-in').slideUp();
			$(this).parent().addClass('is-active').find('.settings-in').slideDown();
		}
	});

// jQuery tabs
	$('.profile').tabs();

// custom checkbox
	$('input').iCheck({
		checkboxClass: 'icheckbox_square-orange',
		radioClass: 'iradio_square-orange',
		increaseArea: '20%' // optional
	});

// Clear placeholder
	(function() {
		$('input,textarea').focus(function(){
			if (!$(this).hasClass('nav-input')) {;
				$(this).data('placeholder',$(this).attr('placeholder'))
				$(this).attr('placeholder','');
			}
		});
		$('input,textarea').blur(function(){
			if (!$(this).hasClass('nav-input')) {;
				$(this).attr('placeholder',$(this).data('placeholder'));
			}
		});
	}());

// fix adblock
	$(window).load(function(){
		$('.banner-top').each(function(){
			if ($(this).css('display') == 'none') {
				$('.header').css('top', '0');
				if ($('.notice-el').length) {
					noticeStart = $('.notice-el').offset().top - 60;
					noticeStop = $('.notice-wrap').height() + noticeStart - $('.notice-el').height() + $('.notice-el-map').outerHeight();
				}
			}
		});
	});

// form search
	// hide location-wrap on outer click
	if ($('.location-wrap').length) {
		$(document).click(function(e) {
			if ( ($(e.target).closest('.location-wrap').length === 0) && ($(e.target).closest('#cityCurrent').length === 0) ) {
				$('.location-wrap').hide();
			}
		});
	}
	// show/hide location-wrap
	$('#cityCurrent').on('focus', function(){
		$('.location-wrap').toggle();
	});
	$('.header input').blur(function(){
		if ($(this).val()) {
			$(this).siblings('.clear-input').css('display', 'block');
		}
	});

	// clear-input button
	$('.clear-input').on('click', function(){
		$(this).siblings('input').val('');
		$(this).hide();
	});

	// location-all button
	$('.location-title-all').on('click', function(){
		$('#cityCurrent').val($(this).text()).siblings('.clear-input').css('display', 'block');
		$('.location-wrap').hide();
		$('.location-wrap input').val('');
		$('.location-wrap .clear-input').hide();
		$('.city-wrap').hide();
		$('.region-wrap').show();
		$('.location-title-region').hide();
		$('.location-title-this-region').hide();
		$('.location-title-back').hide();
	});

	// location-title-back button
	$('.location-title-back').on('click', function(){
		$('.city-wrap').hide();
		$('.region-wrap').show();
		$('.location-title-region').hide();
		$(".location-title-this-region").hide();
		$(this).hide();
	});

	// location-title-region
	$('.location-title-region').on('click', function(){
		$("#cityCurrent").val($(this).text()).siblings('.clear-input').css('display', 'block');
		$('.location-wrap').hide();
		$('.location-wrap input').val('');
		$('.location-wrap .clear-input').hide();
		$('.city-wrap').hide();
		$('.region-wrap').show();
		$('.location-title-region').hide();
		$('.location-title-this-region').hide();
		$('.location-title-back').hide();
	});

// region list
	var regionArr = [];
	var regionMark;

	   
		$('.region-list li').on('click', function(){
			$('.region-wrap').hide();
			var redId = $(this).attr('id');
			$('.city-wrap#'+redId+'').show();
			$('.location-title-region').show().text(regionMark);
			var textRegion = $('.location-title-region').html();
			$('.location-title-this-region').show();
			$('.location-title-this-region').html(''+textRegion+'');
			$('.location-title-back').show();
			$('input[type="hidden"]').text(redId);
			console.log($('input[type="hidden"]').text());

		});
		 $('.city-list li').on('click', function(){
				$('#cityBox').val($(this).text()).siblings('.clear-input').css('display', 'block');
				$('#cityCurrent').val($('#cityBox').val()).siblings('.clear-input').css('display', 'block');
				$('.location-wrap').hide();
				$('.location-wrap input').val('');
				$('.location-wrap .clear-input').hide();
				$('.city-wrap').hide();				
				$('.region-wrap').show();
				$('.location-title-region').hide();
				$('.location-title-this-region').hide();
				$('.location-title-back').hide();
				var redId = $(this).attr('id');
				$('input[type="hidden"]').text(redId);
			console.log($('input[type="hidden"]').text());
			});
	


// Show phone number
	$('.show-phone').on('click', function(){
		var authorPhone = $(this).find('.author-phone').attr('data-phone');
		$(this).find('.author-phone').text(authorPhone);
	});

// Main Slider
	$('.slider-main').slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots: true
	});

// noticeisement Slider

	// FIX fancybox clones
	var indexMax = 0,
		indexCurrent,
		indexMark;
	$('.notice-slider').on('init', function(event, slick){

		$('.notice-slider .slick-slide').each(function(){
			indexCurrent = parseInt($(this).attr('data-slick-index'));
			if (indexCurrent > indexMax) {
				indexMax = indexCurrent;
			}
		});
		indexMax -= 5;

		$('.notice-slider .slick-slide.slick-active').each(function(){
			$(this).find('.notice-fancybox').attr('data-fancybox-group', 'notice-gallery');
		});

		$('.notice-slider .slick-slide').each(function(){
			if (($(this).attr('data-slick-index') >= 0) && ($(this).attr('data-slick-index') <= indexMax)) {
				$(this).find('.notice-fancybox').attr('data-fancybox-group', 'notice-gallery');
			}
		});
	});
	$('.notice-slider').on('afterChange', function(event, slick, currentSlider){
		$('.notice-slider .slick-active').each(function(){
			$(this).find('.notice-fancybox').attr('data-fancybox-group', 'notice-gallery');
		});
		$('.notice-slider .slick-cloned.slick-active').each(function(){
			$(this).find('.notice-fancybox').attr('data-fancybox-group', 'notice-gallery');
			indexMark = parseInt($(this).attr('data-slick-index'));
			indexMark -= indexMax + 1;
			$('.notice-slider .slick-slide').each(function(){
				if (parseInt($(this).attr('data-slick-index')) == indexMark) {
					$(this).find('.notice-fancybox').attr('data-fancybox-group', '');
				}
			});
		});
	});

	// slider
	$('.notice-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slideToScroll: 1
	});

// Main Nav
	$(window).load(function(){
		var mainInnerHeight = $('.section-main-in').height();
		$('.nav-main-sub').css('min-height', mainInnerHeight);
	});
	var sectionMainHeight = $('.section-main').height(); // section-main height
	var subNavHeight;
	$('.nav-main > li > span').on('click', function(){
		if ($(this).parent().hasClass('is-active')) {
			$(this).parent().removeClass('is-active');
			$(this).parent().find('.nav-main-sub').hide();	
			$('.section-top').css('margin-top', '30px');		
		} else{
			$('.nav-main > li').removeClass('is-active');
			$('.nav-main-sub').hide();
			$(this).parent().addClass('is-active');
			$(this).parent().find('.nav-main-sub').toggle();
			subNavHeight = $(this).parent().find('.nav-main-sub').outerHeight();
			if (subNavHeight > sectionMainHeight) {
				$('.section-top').css('margin-top', subNavHeight - sectionMainHeight + 30);
			} else {
				$('.section-top').css('margin-top', '30px');
			}
		}
	});
	// nav close button
	$('.nav-close-btn').on('click', function(){
		$(this).parent().parent().hide().parent().removeClass('is-active');
		$('.section-top').css('margin-top', '30px');
	});

// banner
	function bannerHide() {
		if ($(window).width() < 1342) {
			$('.banner-1, .service-1, .service-2').hide();
		} else {
			$('.banner-1, .service-1, .service-2').show();
		}
	}
	bannerHide();
	$(window).resize(function(){
		bannerHide();
	});
	$('.close-banner').on('click', function(){
		if($(this).parent().find('a,div,span,img').css('display') != 'none'){
			$(this).parent().find('a,div,span,img').hide();
			$(this).css('left','0px');
		}
		else{
			$(this).parent().find('a,div,span,img').show();
			$(this).css('left','');
		}
	});

	var noticeStart;
	var noticeStop;
	$('.close-banner-fix').on('click', function(){
		$(this).parent().hide();
		$('.header').css('top', '0');
		if ($('.notice-el').length) {
			noticeStart = $('.notice-el').offset().top - 60;
			noticeStop = $('.notice-wrap').height() + noticeStart - $('.notice-el').height() + $('.notice-el-map').outerHeight();
		}
	});

// notice fancybox
	$('.notice-fancybox').fancybox({
		maxHeight: '70%',
		theme: 'light',
		padding: 5,
		openEffect	: 'drop',
		closeEffect	: 'drop',
		prevEffect: 'none',
		nextEffect: 'none',
		caption : {
			type : 'outside'
		},
		helpers: {
			thumbs: true
		},
		locked: true,
		locale: 'ru',
		locales: {
			'ru': {
				CLOSE: 'закрыть',
				NEXT: 'вперед',
				PREV: 'назад',
				EXPAND: 'показать в полном размере'
			}
		},
		beforeShow: function(){
			wh = $(window).height()/this.height;
			ww = $(window).width()/this.width;
			if (wh<ww) {
				this.height = this.height*wh;
				this.width = this.width*wh;
			} else {
				this.height = this.height*ww;
				this.width = this.width*ww;
			}
		}
	});

// author question fancybox
	$('.author-q-popup').fancybox({
		theme: 'light',
		padding: 5,
		openEffect	: 'drop',
		closeEffect	: 'drop',
		prevEffect: 'none',
		nextEffect: 'none',
		locked: true,
		locale: 'ru',
		locales: {
			'ru': {
				CLOSE: 'закрыть',
				NEXT: 'вперед',
				PREV: 'назад',
				EXPAND: 'показать в полном размере'
			}
		}
	});

// fixed notice aside
	$(window).load(function(){
		if ($('.notice-el').length) {
			noticeStart = $('.notice-el').offset().top - 60;
			noticeStop = $('.notice-wrap').height() + noticeStart - $('.notice-el').height() + $('.notice-el-map').outerHeight();
			$(window).scroll(function(){
				if ((jQuery(document).scrollTop() >= noticeStart) && (jQuery(document).scrollTop() < noticeStop)) {
					$('.notice-el').addClass('is-fixed');
				} else {
					$('.notice-el').removeClass('is-fixed');
				}
				if (jQuery(document).scrollTop() >= noticeStart) {
					$('.notice-el-map').slideUp();
				} else {
					$('.notice-el-map').slideDown();
				}
				if (jQuery(document).scrollTop() >= noticeStop) {
					$('.notice-el').css({
						'top': 'auto',
						'bottom': '50px',
						'right': '0'
					}).addClass('is-active');
				} else {
					$('.notice-el').css({
						'top': '0',
						'bottom': 'auto',
						'right': 'auto'
					}).removeClass('is-active');
					$('.notice-el.is-fixed').css('top', '60px');
				}
			});
		}
	});

// Payment checkbox
	$('.payment-list input').on('ifChanged', function(){
		$(this).parents('.payment-list > li').toggleClass('is-active');
		setTimeout(function(){
			if ($('.paytype-list > li.is-active').length && $('.payment-list > li.is-active').length) {
				$('.paytype-container button[type="submit"]').show();
				$('.paytype-total i').css('display', 'inline-block');
			} else {
				$('.paytype-container button[type="submit"]').hide();
				$('.paytype-total i').css('display', 'none');
			}
		},1);
	});

	// calculator
	$('.payment-list input').on('ifChecked', function(){
		var _totalPrice = 0;
		if ($('.paytype-list > li.is-active').length) {
			$('.paytype-container button[type="submit"]').show();
			$('.paytype-total i').css('display', 'inline-block');
		}
		$(this).parents('.payment-list').children('li.is-active').each(function(){
			_totalPrice += parseInt($(this).find('.field-price').find('span').text());
		});
		$('.paytype-total .total-number').text(_totalPrice);
	});
	$('.payment-list input').on('ifUnchecked', function(){
		var _totalPrice = 0;
		$(this).parents('.payment-list').children('li.is-active').each(function(){
			_totalPrice += parseInt($(this).find('.field-price').find('span').text());
		});
		$('.paytype-total .total-number').text(_totalPrice);
	});

	$('.paytype-list input').on('ifChecked', function(){
		$(this).parents('.paytype-list > li').siblings('li').find('input').iCheck('uncheck');
		$(this).parents('.paytype-list > li').addClass('is-active');
	});
	$('.paytype-list input').on('ifUnchecked', function(){
		$(this).parents('.paytype-list > li').removeClass('is-active');
	});
	$('.paytype-list input').on('ifChanged', function(){
		setTimeout(function(){
			if ($('.paytype-list > li.is-active').length && $('.payment-list > li.is-active').length) {
				$('.paytype-container button[type="submit"]').show();
				$('.paytype-total i').css('display', 'inline-block');
			} else {
				$('.paytype-container button[type="submit"]').hide();
				$('.paytype-total i').css('display', 'none');
			}
		},1);
	});

	// reset
	$('.paytype-container .reset').on('click', function(){
		$('.payment-list input').each(function(){
			$(this).iCheck('uncheck');
		});
		$('.paytype-list > li.is-active input').iCheck('uncheck');
	});

// Button scroll top
	(function() {
		$('.to-top-btn').on("click", function() {
			$('body,html').animate({scrollTop:0},800);
		});
	}());

// show/hide regions map button
	if ($('.regions').length) {
		$('.regions-title button').on('click', function(){
			$(this).parents('.regions-list > li').siblings('li').children('.regions-sublist').removeClass('is-active');
			$(this).parents('.regions-list > li').siblings('li').children('.regions-title').children('button').removeClass('is-active').text("показать все").append('<i class="icon-all-more-top-viollet"></i>');
			$(this).parents('.regions-title').siblings('.regions-sublist').toggleClass('is-active');
			if ($(this).hasClass('is-active')) {
				$(this).removeClass('is-active').text("показать все").append('<i class="icon-all-more-top-viollet"></i>');
			} else {
				$(this).addClass('is-active').text("скрыть").append('<i class="icon-all-more-top-viollet"></i>');
			}
		});
	}

// nav-help
	if ($('.nav-help-sub li.is-active').length) {
		$('.nav-help-sub li.is-active').parents('.nav-help > li').addClass('is-active');
	}


});

// help accordion
	$('.help-list > li > p').on('click', function(){
		$(this).siblings('.help-content').slideToggle().parent().toggleClass('is-active').siblings('li').removeClass('is-active').children('.help-content').slideUp();
	});

// Window Scroll
$(window).scroll(function () {
	'use strict';
	var bodyHeight = $('.wrapper').height();
	var foot = $('.footer').height();
	var WindowHeight = $(window).height();
	var heightTop = jQuery(document).scrollTop();
	if (heightTop >= 220) {
		// $('.banner-standart-text,.chaked-search').css('display','none');
	    $('.header').addClass('is-fixed');
		$('.location-wrap').css('margin-top','10px');
		$('.location-wrap').css('padding-top','10px');
		$('.search-city').css('display','none');
		$('.btn.btn-default.field.submit').css('background-color','#583d8b');
	} else {
	    $('.header').removeClass('is-fixed');
		$('.location-wrap').css('margin-top','-1px');
		$('.location-wrap').css('padding-top','0px');
		// $('.banner-standart-text,.chaked-search').css('display','block');
		$('.btn.btn-default.field.submit').css('background-color','#9785b7');
	}
	if(heightTop >= 470){
		$('.body-branding .banner-1').css('position','fixed');
		$('.body-branding .banner-1').css('top','45px');
	}
	else{
		$('.body-branding .banner-1').css('position','absolute');
		$('.body-branding .banner-1').css('top','519px');
	}
	if(heightTop > bodyHeight-foot*2.3){
		$('.body-branding .banner-1').css('position','absolute');
		$('.body-branding .banner-1').css('top','auto');
		$('.body-branding .banner-1').css('bottom',foot+30);

		$('.service-1').css({'position':'absolute','top':'auto','bottom':foot+380});
		$('.service-2').css({'position':'absolute','top':'auto','bottom':foot+30});

	}else{

		$('.service-1').css({'position':'fixed',bottom:'auto','top': '50px'});
		$('.service-2').css({'position':'fixed',bottom:'auto','top': '400px'});
	}

	if(heightTop > 600){
		$('.arrow-top').css('display','block');
	}
	else{
		$('.arrow-top').css('display','none');
	}
});
$(function() {
	$('#top').click(function() {
		$('html, body').animate({scrollTop: 0},500);
		return false;
	})
	
		$('.userbox').on('click',function(){
		if($('.header-top .userbox-pop-up').css('display') == 'none'){
			$('.header-top .userbox-pop-up').fadeIn(200);
		}
		else{
			$('.header-top .userbox-pop-up').fadeOut(200);
		}

		})	

})
 


$(document).ready(function(){
		$('a.active-cat').trigger( "click" );
		$('.multifilters .multifilters-in.multifilters-checkbox .nav-menu li label.active-cat').trigger('click');

// Selectric
	$('.selecters').selectric();


		$('.msg-status li a').on('click',function(){
			$('.msg-status li').removeClass('is-active');
			$(this).parent().addClass('is-active');
			var clickStatus = $(this).attr('ad-in');
			$('.ad-is').css('display',"none");
			$('#'+clickStatus+'').css('display','block');
		})

		//del first slide

		$('.slick-track .notice-slider-in:eq(0)').remove();
	})
	
		//first-felp-fix
		$('.nav-help>li').removeClass('is-active');
		$('.nav-help>li:eq(0)').addClass('is-active');

//city-search hiiden
$('.form-group').on('click',function(){
	$('.search-city').css('display',"none");
})
$('.location-wrap').hover(function(){
	$('.search-city').css('display',"none");
})
