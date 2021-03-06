var boxxy, init;

init = function () {

	'use strict';

	var id, colors, randomColor = function () {
		var red, green, blue;

		red = Math.floor( Math.random() * 256 );
		green = Math.floor( Math.random() * 256 );
		blue = Math.floor( Math.random() * 256 );

		return 'rgb(' + [ red, green, blue ].join( ',' ) + ')';
	};

	Boxxy.initCss({
		controlSize: 3,
		controlColor: 'white'
	});

	boxxy = new Boxxy( '#inner', {
		columns: [
			{
				id: "left",
				size: 50,
				min: 100,
				children: [
					'left-top',
					'left-middle',
					[ 'left-bottom-left', 'left-bottom-right' ]
				]
			},
			{
				'id': "right",
				'size': 50,
				'children': [
					'right-top', 'right-bottom'
				]
			}
		]
	});

	colors = {
		'left-top': 'rgb(220,240,220)',
		'right-bottom': 'rgb(230,210,240)'
	};

	for ( id in boxxy.blocks ) {
		if ( boxxy.blocks.hasOwnProperty( id ) ) {
			boxxy.blocks[ id ].style.backgroundColor = colors[ id ] || randomColor();
		}
	}

};

if ( window.addEventListener ) {
	window.addEventListener( 'load', init );
} else {
	window.onload = init;
}
