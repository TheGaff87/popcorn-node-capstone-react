// let player;
// let time;
// var done = false;

// // Load IFrame Player API async
// function loadIFramePlayer() {
//   const $script = $("<script>", { src: "https://www.youtube.com/iframe_api" });
//   const $firstScriptTag = $("script").eq(0);
//   $firstScriptTag.before($script);
//   console.log("1. loadIFramePlayer ran!");
// }


// // all i have to do is use the loadIFramePlayer function and then inject video id
// // from api call in videoId"

// // Create <iframe> YouTube player after the API code downloads.
// function onYouTubeIframeAPIReady() {
//   console.log("2. createIFrame ran!");
//   player = new YT.Player("player", {
//     videoId: "URZ-758xm-M",
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange
//     }
//   });
// }

// // The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   console.log("3. onPlayerReady ran!");
//   // event.target.playVideo();
// }


// function onPlayerStateChange(event) {
//     console.log('4. onPlayerStateChange ran!');
//     console.log("event.data", event, event.data);
//     console.log("PlayerState.PLAYING", YT.PlayerState);
// //   if (event.data == YT.PlayerState.PLAYING && !done) {
// //     setTimeout(stopVideo, 6000);
// //     done = true;
// //   }
//     // event.getCurrentTime
// }

// $('#pause').on('click', function () {
//     player.pauseVideo();
//     time = player.getCurrentTime();
//     console.log(`video paused at: ${time}`);
// });

// $('#catch').on('click', function () {
//     player.seekTo();
//     console.log(player.seekTo(time));
//     console.log(`Cathing up to: ${time}`);
// });

// function stopVideo() {
//   console.log("stopVideo ran!");
//   player.stopVideo();
// }

// function main() {
//   console.log("Ready!");
//   loadIFramePlayer();
// }

// $(main);
