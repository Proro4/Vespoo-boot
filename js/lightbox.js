$(document).ready(function(){     
var bodyWidth = $('body').width();
var lightbox = $('.lgbox-rubric-block').width();
var categoryWidth =$('.lgbox-rubric-subcat').width();
	var leftLightbox = (bodyWidth - lightbox) / 2;
	var leftCategory = (bodyWidth - categoryWidth) / 2;
	$('.lgbox-rubric-block').css('left',leftLightbox);
	$('.lgbox-rubric-subcat').css('left',leftLightbox);
	$('.empty-rubric').on('click',function(){
		$('.header > .container,.body-branding .service-1,.body-branding .service-2,.body-branding .banner-1').css('z-index','3');
		setTimeout(function(){
			$('.lightbox-rubric').css('display','block');
		},300);
	})
	$('.lgbox-title').on('click',function(){
		$('.lightbox-rubric').css('display','none');
		$('.header > .container').css('z-index','1000');
		$('.body-branding .service-1,.body-branding .service-2,.body-branding .banner-1').css('z-index','1100');
	})
	$('.lgbox-rubric-block li a').on('click',function(){
		$('.lg-rubric-cat li').removeClass('active-cat')

		$(this).addClass('active-cat')
		 var textrubric = $(this).find('p').html();
		   var clickId = this.id;
		   $('.lg-rubric-cat li').each(function(){
		   	if($(this).find('p').html() == textrubric){
		   		$(this).addClass('active-cat')
		   	}
		   })
		   	
		   
		$('li[lgname="subcat"]').html(textrubric);
		$('.lgbox-rubric-block').css('display','none');
		$('.lgbox-rubric-subcat').css('display','block');
		$('.lg-rubric-subcat').css('display','none');
		$('.lg-rubric-subcat[subcat="'+clickId+'"]').css('display','inline-block');
 	    $('.lg-name').html(clickId);
	})
	$('.lg-rubric-cat li').on('click',function(){
		$('.lg-rubric-cat li').removeClass('active-cat')
		$(this).addClass('active-cat')
		var textrubric = $(this).html();
	    var clickId = this.id;
 	    $('li[lgname="subcat"]').html(textrubric);
 	    $('.block-in-rubric').html(textrubric);
		$('.lgbox-rubric-block').css('display','none');
		$('.lgbox-rubric-subcat').css('display','block');
		$('.lg-rubric-subcat').css('display','none');
		$('.lg-rubric-subcat[subcat="'+clickId+'"]').css('display','inline-block');
 	    $('.lg-name').html(clickId);

	})
	$('.lg-rubric-subcat li').on('click',function(){
		$('.lg-rubric-subcat li').removeClass('active-cat')
		$(this).addClass('active-cat')
	    var clickIdSub = this.id;
		$('.lg-rubric-subname').css('display','none');
		$('.lg-rubric-subname[subcat="'+clickIdSub+'"]').css('display','inline-block');
 	    $('.lg-subcat').html(clickIdSub);
	})
	$('.lg-rubric-subname li').on('click',function(){
		$('.lightbox-rubric').css('display','none');
		$('.header > .container').css('z-index','1000');
		$('.body-branding .service-1,.body-branding .service-2,.body-branding .banner-1').css('z-index','1100');
		var setСategory = $(this).find('p').html();
		$('.rubric-tov').val(setСategory);
	    var clickIdSub = this.id;
 	    $('.lg-subname').html(clickIdSub);
 	    $('.lg-all').html($('.lg-name').html()+ " : "+ $('.lg-subcat').html() + " : " + $('.lg-subname').html() );
 	    console.log($('.lg-all').html())

	})
})


// altertanive unload file

$(document).ready(function(){
	$('.alternativ-but span').on('click',function(){
		$('.photoload-el').css('display','none');
		$('.photoload-in input[type="file"]').css('display','block');
		$('.photoload-in').css({'float':'none'})
		$(this).parent().css('display','none');

	})
})


//DnD

$(document).ready(function(){
	setInterval(function(){
		$(".dz-image img").attr('draggable','true');
	},3000)
  
  $(".dz-image").on("dragover",function(e){
  	console.log('1');
    e.preventDefault();
  });
  
  $(".dz-image img").on("dragstart",function(e){
    e.originalEvent.dataTransfer.setData("Text",e.target.id);
  });
  
  
  $(".photoload-in").on("drop",function(e){
  	alert('1');
  	console.log('2');
    e.preventDefault();
    var data=e.originalEvent.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data));
  });
  

  
});
