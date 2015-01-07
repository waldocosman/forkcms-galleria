/*
 * This file is part of Fork CMS.
 *
 * For the full copyright and license information, please view the license
 * file that was distributed with this source code.
 */

/**
 * Interaction for the galleria module
 *
 * @author John Poelman <john.poelman@bloobz.be>
 * @author Waldo Cosman <waldo@comsa.be>
 */
jsFrontend.galleria =
{
	// constructor
	init: function()
	{
        //--Initialize colorbox to the gallery
 	$('.galleria-gallery ul li a').colorbox({
		rel:'group', 
		transition:'elastic', 
		preloading:'true', 
		closebutton:'true', 
		maxHeight: '80%', 
		maxWidth: '80%',
		fixed:'true',
       		scrolling:'false',
       		transition:'fade',
        	onOpen: function(){
      			$("#colorbox").css("opacity", 0);
                },
       		onComplete: function(){
       			$("#cboxOverlay").animate({"opacity": 1});
             		$("#colorbox").animate({"opacity": 1});
        	}
	});

        //--Initialize slidehow
        $('.galleria-slideshow ul li a').cycle();
        
	}
}

$(jsFrontend.galleria.init);
