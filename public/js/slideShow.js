const listTrendSongItems = document.querySelectorAll('.trending-songs .song-item');
const trendingSongsItems = document.querySelector('.trend-songs-items');
const btnLeftTrend = document.querySelector('.trending-songs .trend-songs-title .arrow-left i');
const btnRightTrend = document.querySelector('.trending-songs .trend-songs-title .arrow-right i');
const trendSongs = document.querySelector('.trending-songs');


const listPdsSongItems = document.querySelectorAll('.pds .pds-item');
const pdsSongsItems = document.querySelector('.pds-items');
const btnLeftPds = document.querySelector('.pds .pds-title .arrow-left i');
const btnRightPds = document.querySelector('.pds .pds-title .arrow-right i');
const pdsSongs = document.querySelector('.pds');


const listReplaylistsSongItems = document.querySelectorAll('.re-playlists .re-playlists-item');
const replaylistsSongsItems = document.querySelector('.re-playlists-items');
const btnLeftReplaylists = document.querySelector('.re-playlists .re-playlists-title .arrow-left i');
const btnRightReplaylists = document.querySelector('.re-playlists .re-playlists-title .arrow-right i');
const replaylistsSongs = document.querySelector('.re-playlists');


const listEngplaylistsSongItems = document.querySelectorAll('.eng-playlists .eng-playlists-item');
const engplaylistsSongsItems = document.querySelector('.eng-playlists-items');
const btnLeftEngplaylists = document.querySelector('.eng-playlists .arrow-left i');
const btnRightEngplaylists = document.querySelector('.eng-playlists .arrow-right i');
const engplaylistsSongs = document.querySelector('.eng-playlists');


const eventsItems = document.querySelectorAll('.music-events .music-event-item');
const listMusicEvents = document.querySelector('.music-events-items');
const btnLeftEvent = document.querySelector('.music-events .music-events-arrow .arrow-left');
const btnRightEvent = document.querySelector('.music-events .music-events-arrow .arrow-right');
const musicEvent = document.querySelector('.music-events');



document.addEventListener('DOMContentLoaded', function () {
  // responsive
  window.addEventListener('resize', function () {
      if (window.innerWidth >= 1366) {
        slideShowTrend(4);
        slideShowPds(4);
        slideShowReplay(4);
        slideShowEngplay(4);
        slideShowEvent(4);
      } else if (window.innerWidth >= 992) {
        slideShowTrend(4);
        slideShowPds(4);
        slideShowReplay(4);
        slideShowEngplay(4);
        slideShowEvent(4);
      } else {
        slideShowTrend(4);
        slideShowPds(4);
        slideShowReplay(4);
        slideShowEngplay(4);
        slideShowEvent(4);
      }
  });

  const media = [
      window.matchMedia('(min-width: 1366px)'),
      window.matchMedia('(min-width: 992px)'),
  ];

  if (media[0].matches) {
    slideShowTrend(4);
    slideShowPds(4);
    slideShowReplay(4);
    slideShowEngplay(4);
    slideShowEvent(4);
  } else if (media[1].matches) {
    slideShowTrend(4);
    slideShowPds(4);
    slideShowReplay(4);
    slideShowEngplay(4);
    slideShowEvent(4);
  } else {
    slideShowTrend(4);
    slideShowPds(4);
    slideShowReplay(4);
    slideShowEngplay(4);
    slideShowEvent(4);
  }
});




function slideShowTrend (countItemAppear) {
    const widthItemAndMargin = trendSongs.offsetWidth / countItemAppear;
    let widthAllBox = widthItemAndMargin * listTrendSongItems.length;

    trendingSongsItems.style.width = `${widthAllBox}px`;

    listTrendSongItems.forEach((trendSongItem) => {
        trendSongItem.style.marginRight = '20px';
        trendSongItem.style.width = `${widthItemAndMargin - 20}px`;
    });

    let count = 0;
    let spacing = widthAllBox - countItemAppear * widthItemAndMargin;

    btnRightTrend.addEventListener('click', function () {
        count += widthItemAndMargin;
        if (count > spacing) {
          count = 0;
        }
        trendingSongsItems.style.transform = `translateX(${-count}px)`;
      });

      btnLeftTrend.addEventListener('click', function () {
        count -= widthItemAndMargin;
        if (count < 0) {
          count = spacing;
        }
        trendingSongsItems.style.transform = `translateX(${-count}px)`;
      });
}




function slideShowPds (countItemAppear) {
    const widthItemAndMargin = pdsSongs.offsetWidth / countItemAppear;
    let widthAllBox = widthItemAndMargin * listPdsSongItems.length;

    pdsSongsItems.style.width = `${widthAllBox}px`;

    listPdsSongItems.forEach((pdsSongItem) => {
        pdsSongItem.style.marginRight = '20px';
        pdsSongItem.style.width = `${widthItemAndMargin - 20}px`;
    });

    let count = 0;
    let spacing = widthAllBox - countItemAppear * widthItemAndMargin;

    btnRightPds.addEventListener('click', function () {
        count += widthItemAndMargin;
        if (count > spacing) {
          count = 0;
        }
        pdsSongsItems.style.transform = `translateX(${-count}px)`;
      });

      btnLeftPds.addEventListener('click', function () {
        count -= widthItemAndMargin;
        if (count < 0) {
          count = spacing;
        }
        pdsSongsItems.style.transform = `translateX(${-count}px)`;
      });
}


function slideShowReplay (countItemAppear) {
    const widthItemAndMargin = replaylistsSongs.offsetWidth / countItemAppear;
    let widthAllBox = widthItemAndMargin * listReplaylistsSongItems.length;

    replaylistsSongsItems.style.width = `${widthAllBox}px`;

    listReplaylistsSongItems.forEach((replaySongItem) => {
        replaySongItem.style.marginRight = '20px';
        replaySongItem.style.width = `${widthItemAndMargin - 20}px`;
    });

    let count = 0;
    let spacing = widthAllBox - countItemAppear * widthItemAndMargin;

    btnRightReplaylists.addEventListener('click', function () {
        count += widthItemAndMargin;
        if (count > spacing) {
          count = 0;
        }
        replaylistsSongsItems.style.transform = `translateX(${-count}px)`;
      });

      btnLeftReplaylists.addEventListener('click', function () {
        count -= widthItemAndMargin;
        if (count < 0) {
          count = spacing;
        }
        replaylistsSongsItems.style.transform = `translateX(${-count}px)`;
      });
}



function slideShowEngplay (countItemAppear) {
    const widthItemAndMargin = engplaylistsSongs.offsetWidth / countItemAppear;
    let widthAllBox = widthItemAndMargin * listEngplaylistsSongItems.length;

    engplaylistsSongsItems.style.width = `${widthAllBox}px`;

    listEngplaylistsSongItems.forEach((engplaySongItem) => {
        engplaySongItem.style.marginRight = '20px';
        engplaySongItem.style.width = `${widthItemAndMargin - 20}px`;
    });

    let count = 0;
    let spacing = widthAllBox - countItemAppear * widthItemAndMargin;

    btnRightEngplaylists.addEventListener('click', function () {
        count += widthItemAndMargin;
        if (count > spacing) {
          count = 0;
        }
        engplaylistsSongsItems.style.transform = `translateX(${-count}px)`;
      });

      btnLeftEngplaylists.addEventListener('click', function () {
        count -= widthItemAndMargin;
        if (count < 0) {
          count = spacing;
        }
        engplaylistsSongsItems.style.transform = `translateX(${-count}px)`;
      });
}


function slideShowEvent (countItemAppear) {
    const widthItemAndMargin = musicEvent.offsetWidth / countItemAppear;
    let widthAllBox = widthItemAndMargin * eventsItems.length;

    listMusicEvents.style.width = `${widthAllBox}px`;

    eventsItems.forEach((eventItem) => {
        eventItem.style.marginRight = '20px';
        eventItem.style.width = `${widthItemAndMargin - 20}px`;
    });

    let count = 0;
    let spacing = widthAllBox - countItemAppear * widthItemAndMargin;

    btnRightEvent.addEventListener('click', function () {
        count += widthItemAndMargin;
        if (count > spacing) {
          count = 0;
        }
        listMusicEvents.style.transform = `translateX(${-count}px)`;
      });

      btnLeftEvent.addEventListener('click', function () {
        count -= widthItemAndMargin;
        if (count < 0) {
          count = spacing;
        }
        listMusicEvents.style.transform = `translateX(${-count}px)`;
      });
}


