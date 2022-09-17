export class DoList {
    arrDoing = []
    addDoing = (doing) => {
        this.arrDoing.push(doing)
    }

    setLocalStroge() {
        localStorage.setItem('doing', JSON.stringify(this.arrDoing))
    }
    getLocalStroge() {
        if (localStorage.getItem('doing')) {
            this.arrDoing = JSON.parse(localStorage.getItem('doing'))
        }
    }

    renderDoingList = (selector) => {
        let abc='';
        let abd='';
        const arrOder = this.arrDoing.sort((next,now)=>{
            let nameNext=next.name;
            let nameNow=now.name;
            if(nameNext<nameNow){
                return -1;
            }
            return 1;
        });
        let innerHTML = arrOder.reduce((html, doing) => {
            if(doing.check){
                abc +=
            `
                <li>${doing.name}
                    <div class="buttons">
                        <button class="fa fa-trash remove" onclick="DeleteItem('${doing.name}')"></button>
                        <button style="${doing.check ? "background:#25b99a;" : ""}" class="fa fa-check complete " onclick="UpdateItem('${doing.name}')"></button>
                    </div>
                </li>
        `
            }
            else{
                abd +=
                `
                <li>${doing.name}
                    <div class="buttons">
                        <button class="fa fa-trash remove" onclick="DeleteItem('${doing.name}')"></button>
                        <button style="${doing.check ? "background:#25b99a;" : ""}" class="fa fa-check complete " onclick="UpdateItem('${doing.name}')"></button>
                    </div>
                </li>
        `
            }
        //     abc +=
        //     `
        //         <li style="${doing.check ? "" :"display:none"}">${doing.name}
        //             <div class="buttons">
        //                 <button class="fa fa-trash remove" onclick="DeleteItem('${doing.name}')"></button>
        //                 <button style="${doing.check ? "background:#25b99a;" : ""}" class="fa fa-check complete " onclick="UpdateItem('${doing.name}')"></button>
        //             </div>
        //         </li>
        // `
            // return (
            //     html +
            //     `
            //         <li style="${doing.check ? "display:none" :""}">${doing.name}
            //             <div class="buttons">
            //                 <button class="fa fa-trash remove" onclick="DeleteItem('${doing.name}')"></button>
            //                 <button style="${doing.check ? "background:#25b99a;" : ""}" class="fa fa-check complete " onclick="UpdateItem('${doing.name}')"></button>
            //             </div>
            //         </li>
            // `
            // )
        }, '')
        document.querySelector(selector).innerHTML = abd;
        document.querySelector("#completed").innerHTML = abc;
    }

    delete(name) {
        this.arrDoing = this.arrDoing.filter(doing => doing.name !== name)
    }

    update(name) {
        let item = this.arrDoing.find(doing => doing.name === name)
        item.check=true;
        return item;
    }
}
