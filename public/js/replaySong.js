
const rePlaySongs = [
    {
        id: 1,
        singer: 'Mind Broken',
        image: '././assests/image/rt1.png',
    },
    {
        id: 2,
        singer: 'Yellow Wood',
        image: '././assests/image/rt2.png',
    },
    {
        id: 3,
        singer: 'Veere Di Wedding',
        image: '././assests/image/td3.png',
    },
    {
        id: 4,
        singer: 'Lambiyaan Si',
        image: '././assests/image/rt4.png',
    },
    {
        id: 5,
        singer: 'Dilla Ther Jaa',
        image: '././assests/image/td5.png',
    },
    {
        id: 6,
        singer: '4 G Ka Jamana',
        image: '././assests/image/td6.png',
    },
];

const rePlaySongsItems = document.querySelector('.content-main .re-playlists .re-playlists-items');


function renderRePlaySongs () {
    const htmls = rePlaySongs.map((song, index) => {
        return `
            <div class="re-playlists-item">
                <img src="${song.image}" alt="">
                <div class="re-playlists-item-overlay"></div>
                <div class="re-playlists-item-option">
                    <div class="re-playlists-item-icon-play">
                        <a href="">
                            <i class="fas fa-play"></i>
                        </a>
                    </div>
                    <div class="re-playlists-item-icon-option">
                        <a href="">
                            <i class="fas fa-ellipsis-v"></i>
                        </a>
                    </div>
                </div>
                <div class="re-playlists-item-singer">
                    <p>
                        <a href="">${song.singer}</a>
                    </p>
                </div>
            </div>
        `
    })

    rePlaySongsItems.innerHTML = htmls.join('');

}

renderRePlaySongs();