
// Determine type of device and os
var R_ANDROID,
		R_ANDROID_MOBILE,
		R_BLACK_BERRY,
		R_I_PAD,
		R_I_PHONE,
		R_I_POD,
		R_LINUX,
		R_MAC,
		R_WINDOWS,
		R_WINDOWS_PHONE;

// Apple / Mac
R_I_PHONE = /\((iphone).*?os ([\d_]+).*?\)/;
R_I_POD = /\((ipod).*?os ([\d_]+).*?\)/;
R_I_PAD = /\((ipad).*?os ([\d_]+).*?\)/;

// Android
R_ANDROID_MOBILE = /\(.*?(android) ([\d\.]+).*?\).*?(mobile)/;
R_ANDROID = /\(.*?(android) ([\d\.]+).*?\)/;

// Windows
R_WINDOWS_PHONE = /\(.*?(windows phone).*?[OS]? ([\d\.]+).*?\)/;

// Blackberry
R_BLACK_BERRY = /.*?(blackberry).*?version\/([\d\.]+).*?/;

// Operating Systems
R_MAC = /\(.*?(mac) os .*?([\d_\.]+).*?\)/;
R_LINUX = /\(.*?(linux).*\)/;
R_WINDOWS = /\(.*?(windows).*?([\d_\.]+).*?\)/;

var OS;

// Extend and Create new Object to singleton 
import Extend from './extend';
import Singleton from './singleton';


OS = (function OS(superClass) {

	// Give our OS the Properties of Singleton Parent Object
	Extend(OS, superClass);


	/**
	*	os, version, versionNumber, ios, android, mobile, tablet
	**/
	function OS() {

		// Add our `OS` object and its properties to the Singleton
		OS.__super__.constructor.apply(this, arguments);


		var ua = window.navigator.userAgent.toLowerCase(), // user agent string
				ref = R_I_PHONE.exec(ua) || R_I_POD.exec(ua) || R_I_PAD.exec(ua) || R_ANDROID_MOBILE.exec(ua) || R_ANDROID.exec(ua) || R_WINDOWS_PHONE.exec(ua) || R_BLACK_BERRY.exec(ua) || R_MAC.exec(ua) || R_WINDOWS.exec(ua) || R_LINUX.exec(ua) || [],
				//ref[0],					// Name of Browser Shell (Not Important)
				name = ref[1], 		// Name of our Operating System
				version = ref[2], // Version # of Operating System
				mobile = ref[3], 	// Hold if this is mobile (t/f)
				number;						// Operating System #

		if (name) {
			this.os = name; // Get the OS

			// Version Number parsed
			this.version = (version != null ? version.split('_').join('.') : void 0) || '';
			number = parseInt(this.version, 10);
			if (!isNaN(number)) {
				this.versionNumber = number;
			}

			this.ios = name.match(/iphone|ipod|ipad/) ? true : false;
			this.android = name.match(/android/) ? true : false;

			this.mobile = (function() {
				if (name.match(/iphone|ipod|windows phone|blackberry/) || (name.match(/android/) && mobile)) {
					return true;
				} else {
					return false;
				}
			})();

			this.tablet = (function() {
				if (name.match(/ipad/) || (name.match(/android/) && !mobile)) {
					return true;
				} else {
					return false;
				}
			})();

		} // end if(name);
	} // end OS();

	return OS;

})(Singleton);

export default OS;