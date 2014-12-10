( function ( $ ) {
	'use strict';
 
	var gothicQwertyKbd = {
		id: 'gothic-qwerty',
		name: 'Gothic QWERTY',
		description: 'QWERTY-based Gothic keyboard',
		date: '2014-12-09',
		author: 'implementation by Roel (Gothicspeaker)',
		version: '1.0',
		patterns: [ 
                        [ 'q', '𐌵' ],
			[ 'w', '𐍅' ],
			[ 'e', '𐌴'],
			[ 'r', '𐍂' ],
			[ 't', '𐍄' ],
			[ 'y', '𐌹' ],
                        ['1', '·𐌰·'],
                        ['2', '·𐌱·' ],
                        ['3', '·𐌲·' ],
                        ['4', '·𐌳·' ],
                        ['5', '·𐌴·'],
                        ['6', '·𐌵·'],
                        ['7', '·𐌶·' ],
                        ['8', '·𐌷·' ],
                        ['9', '·𐌸·' ],
                        ['10', '·𐌹·' ],
                        ['20', '·𐌺·' ],
                        ['30', '·𐌻·' ],
                        ['40', '·𐌼·' ],
                        ['50', '·𐌽·' ],
                        ['60', '·𐌾·' ],
                        ['70', '·𐌿·' ],
                        ['80', '·𐍀·' ],
                        [ '90', '𐍁' ],
                        ['100', '·𐍂·' ],
                        ['200', '·𐍃·' ],
                        ['300', '·𐍄·' ],
                        ['400', '·𐍄·' ],
                        ['500', '·𐍆·' ],
                        ['600', '·𐍇·' ],
                        ['700', '·𐍈·' ],
                        ['800', '·𐍉·' ],
                        [ '900', '·𐍊·' ],
			[ 'u', '𐌿'],
			[ 'i', '𐌹'],
			[ 'o', '𐍉'],
			[ 'p', '𐍀' ],
 
			[ 'a', '𐌰' ],
			[ 's', '𐍃' ],
			[ 'd', '𐌳' ],
			[ 'f', '𐍆'],
			[ 'g', '𐌲' ],
			[ 'h', '𐌷' ],
                        [ 'hv', '𐍈' ],
                        [ 'hw', '𐍈' ],
			[ 'j', '𐌾' ],
			[ 'k', '𐌺' ],
			[ 'l', '𐌻' ],
 
			[ 'z', '𐌶' ],
			[ 'x', '𐍇' ],
			[ 'c', '𐌺' ],
			[ 'v', '𐌸'],
                        [ 'th', '𐌸'],
			[ 'b', '𐌱' ],
			[ 'n', '𐌽' ],
			[ 'm', '𐌼' ],
 
			[ 'Q', '𐌵' ],
                        [ 'TH', '𐌸'],
			[ 'W', '𐍅'],
			[ 'E', '𐌴' ],
			[ 'R', '𐍂' ],
			[ 'T', '𐍄' ],
			[ 'Y', '𐌹' ],
			[ 'U', '𐌿' ],
			[ 'I', '𐌹' ],
			[ 'O', '𐍉' ],
			[ 'P', '𐍀' ],
 
			[ 'A', '𐌰' ],
			[ 'S', '𐍃' ],
 
			[ 'F', '𐍆' ],
			[ 'G', '𐌲' ],
			[ 'H', '𐌷' ],
			[ 'J', '𐌾' ],
 
			[ 'L', '𐌻' ],
 
			[ 'Z', '𐌶' ],
 
			[ 'B', '𐌱' ],
			[ 'N', '𐌽' ],
			[ 'M', '𐌼' ],
 
			[ '`', '`' ],
			[ '=', '=' ],
			[ '-', '-' ],
			[ '_', '_' ]
]
};
	$.ime.register( gothicQwertyKbd );
}( jQuery ) );
