// ==UserScript==
// @name         T-Square Auto click login
// @namespace    http://kingraham.me/
// @version      1.01
// @require        http://cdn.staticfile.org/jquery/2.1.1-beta1/jquery.min.js
// @description  Auto clicks the login button on t-square
// @author       Karl Ingraham
// @include     *://*61.19.25.207/f43_quality/dashboard.php?login*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

$( "input[name$='username']" ).val( "test" );
    $( "input[name$='password']" ).val( "09564" );
$("#Login").trigger( "click" );

})();
