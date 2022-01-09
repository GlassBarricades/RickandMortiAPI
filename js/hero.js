window.addEventListener('DOMContentLoaded', () => {

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }

        return await res.json();
    };

    const arrSlice = (start, count, data) => {
        let arr = data.slice(start, count);
        return arr;
    };

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
            getResource('https://rickandmortyapi.com/api/character/?page=24'),
            getResource('https://rickandmortyapi.com/api/character/?page=25'),
            getResource('https://rickandmortyapi.com/api/character/?page=26'),
            getResource('https://rickandmortyapi.com/api/character/?page=27'),
            getResource('https://rickandmortyapi.com/api/character/?page=28'),
            getResource('https://rickandmortyapi.com/api/character/?page=29'),
            getResource('https://rickandmortyapi.com/api/character/?page=30'),
            getResource('https://rickandmortyapi.com/api/character/?page=31'),
            getResource('https://rickandmortyapi.com/api/character/?page=32'),
            getResource('https://rickandmortyapi.com/api/character/?page=33'),
            getResource('https://rickandmortyapi.com/api/character/?page=34'),
            getResource('https://rickandmortyapi.com/api/character/?page=35'),
            getResource('https://rickandmortyapi.com/api/character/?page=36'),
            getResource('https://rickandmortyapi.com/api/character/?page=37'),
            getResource('https://rickandmortyapi.com/api/character/?page=38'),
            getResource('https://rickandmortyapi.com/api/character/?page=39'),
            getResource('https://rickandmortyapi.com/api/character/?page=40'),
            getResource('https://rickandmortyapi.com/api/character/?page=41'),
            getResource('https://rickandmortyapi.com/api/character/?page=42'),

        ])
        .then(data2 => {
            let arr = [];

            data2.forEach((item, i) => {
                arr.push(item.results);
            });
            return arr;
        })
        .then((data3) => {
            let res = data3.reduce((sum, current) => {
                let i = sum.concat(current);
                return i;
            });
            return res;
        })
        .then((data) => createCharacter(data))

    const checkBoxFilter = document.querySelector('.form-select');

    const filterData = function (data) {
        console.log(data);
        checkBoxFilter.addEventListener('input', (data) => {
            if (checkBoxFilter.value === 'Все') {
                console.log('Все')
            } else if (checkBoxFilter.value === 'Люди') {
                console.log(data);
                console.log('Люди')
            } else if (checkBoxFilter.value === 'Мертвые') {
                console.log('Мертвые')
            } else if (checkBoxFilter.value === 'Живые') {
                console.log('Живые')
            }
    })
    }

    function parseCharacter(data) {
        // let dataSlice = data.slice(0, 20);
        // let dataSlice = arrSlice(0, 20, data);
        let data2 = data.filter((item) => {
            if (checkBoxFilter.value === 'Все' && item.status === 'Dead') {
                return true;
            }
        });
        data2.forEach((item, i) => {
            const element = document.createElement('div');
            element.classList.add('col-md-3')
            element.innerHTML = `
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${item.image} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">
                        Статус: ${item.status}<br>
                        Раса: ${item.species}<br>
                        Пол: ${item.gender}<br>
                        </p>
                        <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                </div>
            </div>
        </div>
        `;

            document.querySelector('.app2').append(element);
        });
    }



    function createCharacter(data) {
        parseCharacter(data);
    }

});