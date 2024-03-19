import { clock } from './components/clock.js';

const theWidget = document.getElementById('the-widget'); 
const searchBar = document.getElementById('search-bar');
// const shuffleButton = document.getElementById('shuffle-button');
//
//
// shuffleButton.addEventListener('click', shuffle);
//
// Functions
//
// function shuffle () {
//     const trackID = Math.floor(Math.random( ) * 100000000)
//     theWidget.src=`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackID}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
// }
$(document).ready(function () {
    
    setInterval(clock, 1000);
    clock();
});
//
//
//
//
//
//
//https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1795701588&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true









