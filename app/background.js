
function send_post(url, artist, img, title) {
    var xhr = new XMLHttpRequest();
    xhr.open("post", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        artist: artist,
        img: img,
        title: title,
    }));
}

var last_title = "";
function check_update_audio() {
    if (last_title != document.getElementsByClassName("audio_page_player_title_link")[0].text) {
        last_title = document.getElementsByClassName("audio_page_player_title_link")[0].text;

        console.log("update");
        console.log(last_title);
        console.log(document.getElementsByClassName("audio_page_player_title")[0].getElementsByClassName("artist_link")[0].text);

        var artits = document.getElementsByClassName("audio_page_player_title")[0].getElementsByClassName("artist_link")[0].text;

        var img = document.getElementsByClassName("audio_page_player__cover _audio_page_player__cover")[0],
            style = img.currentStyle || window.getComputedStyle(img, false),
            bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");

        console.log('Image URL: ' + bi);
        send_post("http://127.0.0.1:1221/", artits, bi, last_title);
    }
}


setInterval(check_update_audio, 100);