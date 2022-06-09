
const engSongs = [
    {
        id: 1,
        singer: 'Mind Broken',
        image: '././assests/image/jz1.png',
    },
    {
        id: 2,
        singer: 'Yellow Wood',
        image: '././assests/image/jz2.png',
    },
    {
        id: 3,
        singer: 'Veere Di Wedding',
        image: '././assests/image/jz3.png',
    },
    {
        id: 4,
        singer: 'Lambiyaan Si',
        image: '././assests/image/jz4.png',
    },
    {
        id: 5,
        singer: 'Dilla Ther Jaa',
        image: '././assests/image/td5.png',
    },
    {
        id: 6,
        singer: '4 G Ka Jamana',
        image: '././assests/image/jz6.png',
    },
];


const engSongsItems = document.querySelector('.content-main .eng-playlists .eng-playlists-items');


function renderEngSongs () {
    const htmls = engSongs.map((song, index) => {
        return `
            <div class="eng-playlists-item">
                <img src="${song.image}" alt="">
                <div class="eng-playlists-item-overlay"></div>
                <div class="eng-playlists-item-option">
                    <div class="eng-playlists-item-icon-play">
                        <a href="">
                            <i class="fas fa-play"></i>
                        </a>
                    </div>
                    <div class="eng-playlists-item-icon-option">
                        <a href="">
                            <i class="fas fa-ellipsis-v"></i>
                        </a>
                    </div>
                </div>
                <div class="eng-playlists-item-singer">
                    <p>
                        <a href="">${song.singer}</a>
                    </p>
                </div>
            </div>
        `
    })

    engSongsItems.innerHTML = htmls.join('');

}

renderEngSongs();