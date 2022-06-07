(() => {

    class Accordion {
        //初期化
        constructor (obj) {
            let index = 0;
            const $nav = document.getElementsByClassName("list-a");
            const navLen = $nav.length - 1;
            

            while(index < navLen) {
                $nav[index].addEventListener('click',(e) => {
                    this.clickHandler(e);
                })
                index++;
            }

        }
        //クリックしたら実行される処理
        clickHandler(e){
            e.preventDefault();
            const $target = e.currentTarget;
            const targetContent = $target.textContent;
            let $client;

            if(targetContent == "About"){
                $client = document.getElementById("js-aboutTitle");
            }else if (targetContent == "Works"){
                $client = document.getElementById("js-worksTitle");
            }else if(targetContent == "News") {
                $client = document.getElementById("js-newsTitle");
            }else if(targetContent == "Contact"){
                $client = document.getElementById("js-contactTitle");
            }
            const clientRect = $client.getBoundingClientRect();
            const clientY = clientRect.top;
            window.scrollTo(0,clientY);

        }



    }

    const fuckingAccordion = new Accordion({
        
    });


})();