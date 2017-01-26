import $ from 'jquery';

//import Redirect from './redirect';
//import Elements from './elements';

import OS from './lib/os'; // Determine Device/OS
import Redirect from './lib/redirect';


$(document).one('ready', function() {

	// We access our Instances from our 
	var device = OS.getInstance();
	console.log( device );
	window.device = OS.getInstance();

	//console.log(Singleton.constructor.OS);

	//new Redirect;
	//new Elements;

});







