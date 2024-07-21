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

(function onload() {
	onselectdrop('ten_y_one_plain');
	// document.getElementById("tenYardsSelect").value = 'plain';
})();

function onselectdrop(e) {
	console.log(e);
	// console.log(e.target.value);
	var arr = { ten_y_one_plain: 4, ten_y_one_wax: 9 };

	var value = e.target ? e.target.value : e;
	var len = arr[value];
	console.log(len);
	console.log(value);
	


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
                                        <img class="product-img" id=${value + '_' + i + 1} src="./assets/images/${value}/${value}_${i + 1}.jpg" height="300px"
                                            width="100%" alt="" />

                                    </div>
                                    <div class="enquire shadow-lg">
                                        <h4>Red Lava</h4>
                                        <p>Description about the Red Lava</p>
                                        <a
                                            href="whatsapp://send?text=Need to know about this product https://raneesarees.netlify.app/assets/images/${value}/${value}_${i + 1}.jpg&phone=+916379473471"
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