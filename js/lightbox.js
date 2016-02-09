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
	// setInterval(function(){
	// 	$(".photoload-in").attr('draggable','true');
	// },3000)
  
  // $(".dz-image").on("dragover",function(e){
  // 	console.log('1');
  //   e.preventDefault();
  // });
  
  // $(".dz-image img").on("dragstart",function(e){
  //   e.originalEvent.dataTransfer.setData("Text",e.target.id);
  // });
  
  
  // $(".photoload-in").on("drop",function(e){
  // 	// alert('1');
  // 	console.log('2');
  //   e.preventDefault();
  //   var data=e.originalEvent.dataTransfer.getData("Text");
  //   e.target.appendChild(document.getElementById(data));
  // });
  

	











  function handleDragOver(e) {
	  if (e.preventDefault) {
	    e.preventDefault(); // Necessary. Allows us to drop.
	  }

	  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

	  return false;
	}

	function handleDragEnter(e) {
	  // this / e.target is the current hover target.
	  this.classList.add('over');
	}

	function handleDragLeave(e) {
	  this.classList.remove('over');  // this / e.target is previous target element.
	}

	var cols = document.querySelectorAll('.photoload .dropzone');
	[].forEach.call(cols, function(col) {
	  col.addEventListener('dragstart', handleDragStart, false);
	  col.addEventListener('dragenter', handleDragEnter, false);
	  col.addEventListener('dragover', handleDragOver, false);
	  col.addEventListener('dragleave', handleDragLeave, false);
	});

	function handleDrop(e) {
	  // this / e.target is current target element.

	  if (e.stopPropagation) {
	    e.stopPropagation(); // Stops some browsers from redirecting.
	  }

	  // Don't do anything if dropping the same column we're dragging.
	  if (dragSrcEl != this) {
	    // Set the source column's HTML to the HTML of the columnwe dropped on.
	    dragSrcEl.innerHTML = this.innerHTML;
	    this.innerHTML = e.dataTransfer.getData('text/html');
	  }

	  return false;
	}

	function handleDragEnd(e) {
	  // this/e.target is the source node.

	  [].forEach.call(cols, function (col) {
	    col.classList.remove('over');
	  });
	}

	var cols = document.querySelectorAll('.photoload .dropzone');
	[].forEach.call(cols, function(col) {
	  col.addEventListener('dragstart', handleDragStart, false);
	  col.addEventListener('dragenter', handleDragEnter, false)
	  col.addEventListener('dragover', handleDragOver, false);
	  col.addEventListener('dragleave', handleDragLeave, false);
	  col.addEventListener('drop', handleDrop, false);
	  col.addEventListener('dragend', handleDragEnd, false);
	});
	var dragSrcEl = null;

	function handleDragStart(e) {
	  dragSrcEl = this;
	  e.dataTransfer.effectAllowed = 'move';
	  e.dataTransfer.setData('text/html', this.innerHTML);
	}

	  	
});

