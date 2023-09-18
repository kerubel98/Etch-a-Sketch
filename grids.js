
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
        let news = document.querySelectorAll('.new');
        news.forEach(element =>{element.addEventListener("mouseover", hove)});

        var btn = document.querySelector('.toggle');
        var btnst = true;
        btn.onclick = function() {
            if(btnst == true) {
                document.querySelector('.toggle span').classList.add('toggle');
                document.getElementById('sidebar').classList.add('sidebarshow');
                btnst = false;
            }else if(btnst == false) {
                document.querySelector('.toggle span').classList.remove('toggle');
                document.getElementById('sidebar').classList.remove('sidebarshow');
                btnst = true;
            }
        }

        
    