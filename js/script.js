window.addEventListener('DOMContentLoaded', () => {

    const getResource = async(url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }

        return await res.json();
    };

    // getResource('https://rickandmortyapi.com/api/character/')
    //     .then(data => createCharacter(data));
    
    Promise.all([
        getResource('https://rickandmortyapi.com/api/episode'),
        getResource('https://rickandmortyapi.com/api/episode/?page=2'),
        getResource('https://rickandmortyapi.com/api/episode/?page=3')
    ])
    .then(data3 => {
        let arr1 = data3[0].results;
        let arr2 = data3[1].results;
        let arr3 = data3[2].results;
        let arr4 = arr1.concat(arr2);
        let arr5 = arr4.concat(arr3);
        return arr5
    })
    .then((data) => createEpisode(data));

    function parseEpisode(data) {
        data.forEach((item, i) => {
            const elem = document.createElement('div');
            elem.innerHTML = `
            <div class="accordion-item">
                  <h2 class="accordion-header d-inline-flex justify-content-between" id="heading${i}">
                    <button class="accordion-button collapsed d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-controls="collapse${i}">
                    ${item.episode}: ${item.name} - ${item.air_date}
                    </button>
                  </h2>
                  <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#accordionEp">
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
            `;

            document.querySelector('.accordion').append(elem);
        });

    };

    function parseCharacter(data) {
        data.forEach((item, i) => {
            const element = document.createElement('p');
            element.innerHTML = `
            <p><img src=${item.image} alt="">Герой: ${item.name}, Статус: ${item.status}, Пол: ${item.gender}</p>
        `;

            document.querySelector('.app2').append(element);
        });
    }

    function createEpisode(data) {
        parseEpisode(data);
    }
});