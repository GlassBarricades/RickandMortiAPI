window.addEventListener('DOMContentLoaded', () => {

    const getResource = async(url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }

        return await res.json();
    };

    getResource('https://rickandmortyapi.com/api/episode')
        .then(data => createEpisode(data));

    getResource('https://rickandmortyapi.com/api/character')
        .then(data => createCharacter(data));

    function parseEpisode(data) {

        data.forEach((item, i) => {
            const elem = document.createElement('li');
            elem.innerHTML = `
        <li>id: ${i+1}, Эпизод: ${item.episode} Серия: ${item.name}, Дата выхода: ${item.air_date}</li>
        `;

            document.querySelector('.app').append(elem);
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
        parseEpisode(data.results);
    }

    function createCharacter(data) {
        parseCharacter(data.results);
    }

});