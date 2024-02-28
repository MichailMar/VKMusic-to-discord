
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
    if (last_title != document.getElementsByClassName("top_audio_player_title")[0].innerHTML) {
        last_title = document.getElementsByClassName("top_audio_player_title")[0].innerHTML;

        console.log("update —");
        console.log(last_title);

        let artits = last_title.split("—")[1];  

        if (document.getElementsByClassName("AudioPlayerBlock__root").length == 0) {
            var img = "https://static.tildacdn.com/tild3131-3536-4139-b632-333235346662/Group_2.png";
        } else {
            var img = document.getElementsByClassName("AudioPlayerBlock__root")[0].getElementsByClassName("vkuiImageBase__img")[0].getAttribute("src");
        }

        console.log('Image URL: ' + img);
        send_post("http://127.0.0.1:1221/", artits, img, last_title.split("—")[0]);
    }
}


setInterval(check_update_audio, 100);