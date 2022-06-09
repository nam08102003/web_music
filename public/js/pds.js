
const pdsSongs = [
    {
        id: 1,
        singer: 'Mind Broken',
        image: '././assests/image/fa1.png',
    },
    {
        id: 2,
        singer: 'Yellow Wood',
        image: '././assests/image/fa2.png',
    },
    {
        id: 3,
        singer: 'Veere Di Wedding',
        image: '././assests/image/fa3.png',
    },
    {
        id: 4,
        singer: 'Lambiyaan Si',
        image: '././assests/image/td4.png',
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

const pdsSongsItems = document.querySelector('.content-main .pds .pds-items');


function renderPdsSongs () {
    const htmls = pdsSongs.map((song, index) => {
        return `
            <div class="pds-item">
                <img src="${song.image}" alt="">
                <div class="pds-item-overlay"></div>
                <div class="pds-item-option">
                    <div class="pds-item-icon-play">
                        <a href="">
                            <i class="fas fa-play"></i>
                        </a>
                    </div>
                    <div class="pds-item-icon-option">
                        <a href="">
                            <i class="fas fa-ellipsis-v"></i>
                        </a>
                    </div>
                </div>
                <div class="pds-item-singer">
                    <p>
                        <a href="">${song.singer}</a>
                    </p>
                </div>
            </div>
        `
    })

    pdsSongsItems.innerHTML = htmls.join('');

}

renderPdsSongs();