// $(function () {

// 	var filterList = {

// 		init: function () {

// 			// https://mixitup.kunkalabs.com/
// 			$('#gallery').mixItUp({
// 				selectors: {
//   			  target: '.gallery-item',
//   			  filter: '.filter'	
//   		  },
//   		  load: {
//     		  filter: '.print, .strategy, .logo, .web' // show all items on page load.
//     		}     
// 			});								

// 		}

// 	};

// 	// Filter ALL the things
// 	filterList.init();

// });

function onselectdrop(e) {
	console.log(e.target)
	console.log(e.target.value);
	var arr = { plain: 4, wax: 9 };

	var len = arr[e.target.value];
	console.log(len);


	var arr = '';
	for (let i = 0; i <= len; i++) {
		var test = `<div class="gallery-item">
                                <div class="">
                                    <div class="inside">
                                        <div class="details">
                                            <div class="text">
                                                <h2>Red lava</h2>
                                                <p>Logo</p>
                                            </div>
                                        </div>
                                        <div class="overlay"></div>
                                        <img id=${e.target.value + '_' + i + 1} src="./assets/images/10.5_${e.target.value}/10.5${e.target.value}_${i + 1}.jpg" height="300px"
                                            width="100%" alt="" />

                                    </div>
                                    <div class="enquire shadow-lg">
                                        <h4>Red Lava</h4>
                                        <p>Description about the Red Lava</p>
                                        <a
                                            href="whatsapp://send?text=Need to know about this product https://raneesarees.netlify.app/assets/images/10.5_${e.target.value}/10.5${e.target.value}_${i + 1}.jpg&phone=+916379473471"
                                            class="btn enquire-btn">Enquire Now<i class="px-3 bi bi-whatsapp"></i></a>
                                    </div>
                                </div>
                            </div>`;
		arr += test;

	}
	document.getElementById('test').innerHTML = arr;

}

// (function onselectdrop(e) {
//     console.log(e)
// })();

$(function () {

	var filterList = {

		init: function () {

			// https://mixitup.kunkalabs.com/
			$('#gallery').mixItUp({
				selectors: {
					target: '.gallery-item',
					filter: '.filter'
				},
				load: {
					filter: '.10plain, .10wax, .10screen, .10block, .10tiedye,.10bhatik, .10waxscreen, .10waxblock, .10artborder, .10cdesign, .10artscreenborder' // show all items on page load.
				}
			});

		}

	};

	// Filter ALL the things
	filterList.init();

});