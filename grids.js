
        const cons = document.querySelector('.cnavas');
        for (let j = 0; j < 30; j++) {
            const element = document.createElement('div');
            element.classList.add('container2');
            cons.appendChild(element);
            for (let i = 0; i < 30; i++) {
                const divs = document.createElement('div');
                divs.classList.add('new');
                element.appendChild(divs);   
            };   
        };
        function hove(e) {
            this.classList.add('newr');
        };
        function addside(e) {
            let dd = document.querySelector('.side_pnal');
            dd.classList.add('side_pnal2');
        };
        let news = document.querySelectorAll('.new');
        news.forEach(element =>{element.addEventListener("mouseover", hove)});

        let link = document.querySelector('a');
        link.addEventListener('click', addside)
    