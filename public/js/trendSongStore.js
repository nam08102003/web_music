
const trendSongs = [
    {
        id: 1,
        image: '././assests/image/td1.png',
    },
    {
        id: 2,
        image: '././assests/image/td2.png',
    },
    {
        id: 3,
        image: '././assests/image/td3.png',
    },
    {
        id: 4,
        image: '././assests/image/td4.png',
    },
    {
        id: 5,
        image: '././assests/image/td5.png',
    },
    {
        id: 6,
        image: '././assests/image/td6.png',
    },
];

const trendSongsItems = document.querySelector('.content-main .trending-songs .trend-songs-items');


function renderTrendSongs () {
    const htmls = trendSongs.map((song, index) => {
        return `
            <div class="song-item">
                <img src="${song.image}" alt="">
                <div class="song-item-overlay"></div>
                <div class="song-item-option">
                    <div class="song-item-icon-play">
                        <a href="">
                            <i class="fas fa-play"></i>
                        </a>
                    </div>
                    <div class="song-item-icon-option">
                        <a href="">
                            <i class="fas fa-ellipsis-v"></i>
                        </a>
                    </div>
                </div>
            </div>
        `
    })

    trendSongsItems.innerHTML = htmls.join('');

}

renderTrendSongs();