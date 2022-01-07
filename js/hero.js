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
        getResource('https://rickandmortyapi.com/api/character/'),
        getResource('https://rickandmortyapi.com/api/character/?page=2'),
        getResource('https://rickandmortyapi.com/api/character/?page=3'),
        getResource('https://rickandmortyapi.com/api/character/?page=4'),
        getResource('https://rickandmortyapi.com/api/character/?page=5'),
        getResource('https://rickandmortyapi.com/api/character/?page=6'),
        getResource('https://rickandmortyapi.com/api/character/?page=7'),
        getResource('https://rickandmortyapi.com/api/character/?page=8'),
        getResource('https://rickandmortyapi.com/api/character/?page=9'),
        getResource('https://rickandmortyapi.com/api/character/?page=10'),
        getResource('https://rickandmortyapi.com/api/character/?page=11'),
        getResource('https://rickandmortyapi.com/api/character/?page=12'),
        getResource('https://rickandmortyapi.com/api/character/?page=13'),
        getResource('https://rickandmortyapi.com/api/character/?page=14'),
        getResource('https://rickandmortyapi.com/api/character/?page=15'),
        getResource('https://rickandmortyapi.com/api/character/?page=16'),
        getResource('https://rickandmortyapi.com/api/character/?page=17'),
        getResource('https://rickandmortyapi.com/api/character/?page=18'),
        getResource('https://rickandmortyapi.com/api/character/?page=19'),
        getResource('https://rickandmortyapi.com/api/character/?page=20'),
        getResource('https://rickandmortyapi.com/api/character/?page=21'),
        getResource('https://rickandmortyapi.com/api/character/?page=22'),
        getResource('https://rickandmortyapi.com/api/character/?page=23'),

    ])
    .then(data2 => {
        // data2.forEach((item, i) => {
        //     let arr = data2[i].results;
        //     let sum = arr.concat(arr[i+1])
        //     console.log(sum);
        // })
         let arr1 = data2[0].results;
         let arr2 = data2[1].results;
         let arr3 = data2[2].results;
         let arr6 = data2[3].results;
         let arr8 = data2[4].results;
         let arr4 = arr1.concat(arr2);
         let arr5 = arr4.concat(arr3);
         let arr7 = arr5.concat(arr6);
         let arr9 = arr7.concat(arr8);
         console.log(arr9);

    })
    .then((data) => createCharacter(data));


    function parseCharacter(data) {
        data.forEach((item, i) => {
            const element = document.createElement('p');
            element.innerHTML = `
            <p>${item.id}) Герой: ${item.name}, Статус: ${item.status}, Пол: ${item.gender}</p>
        `;

            document.querySelector('.app2').append(element);
        });
    }

    function createCharacter(data) {
        parseCharacter(data);
    }

});