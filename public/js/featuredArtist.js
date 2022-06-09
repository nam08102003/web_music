



const featuredArtists = [
    {
        id: 1,
        singer: 'Rihanna Fenty',
        tracks: '7 Tracks',
        view: '81M+ View',
        image: '././assests/image/fa1.png',
    },
    {
        id: 2,
        singer: 'Beyonce Giselle',
        tracks: '7 Tracks',
        view: '81M+ View',
        image: '././assests/image/fa2.png',
    },
    {
        id: 3,
        singer: 'Taylor Swift',
        tracks: '7 Tracks',
        view: '81M+ View',
        image: '././assests/image/fa3.png',
    }
];

const listsArtists = document.querySelector('.featured-artists-items');

function renderArtists () {
    const htmls = featuredArtists.map((item, index) => {
        return `
            <div class="featured-artist-item">
                <div class="featured-artist-image">
                    <img src="${item.image}" alt="">
                </div>
                <div class="featured-artist-info">
                    <a href="javascript:;" class="featured-artist-name">
                        ${item.singer}
                        <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <p>
                        <a href="javascript:;">${item.tracks}</a>
                        ${item.view}
                    </p>
                    <div class="featured-artist-playnow">
                        <a href="javascript:;">
                            <i class="far fa-play-circle"></i>
                            Play now
                        </a>
                    </div>
                </div>
            </div>
        `
    }) 

    listsArtists.innerHTML = htmls.join('');

}

renderArtists();
