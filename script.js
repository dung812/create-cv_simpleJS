const btnCloseModal = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const form = document.querySelector(".form");
const image = document.querySelector("#myimage");
const info = document.querySelector(".info");
const btnSubmit = document.querySelector(".modal-submit");
const btnCancel = document.querySelector(".modal-cancel");
const addSkill = document.querySelector(".add-skill");
const inputSkill = document.querySelector(".input-skill");
let skillList = [];
btnCloseModal.addEventListener("click",function(e){
    modal.classList.remove("is-show");
    document.querySelector(".skill-list").innerHTML = '';
    skillList = [];
});
btnCancel.addEventListener("click",function(e){
    modal.classList.remove("is-show");
    document.querySelector(".skill-list").innerHTML = '';
    skillList = [];
});
let numberSkill = 0;
addSkill.addEventListener("click",function(e){
    e.preventDefault();
    const template = `  <div class="form-group">
                            <label for="image">Tên kĩ năng</label>
                            <input type="text" class="form-control" name="skill">
                        </div>
                        <div class="form-group">
                            <label for="image">Mức độ</label>
                            <input type="range" class="form-control" name="level">
                        </div>`;
    inputSkill.insertAdjacentHTML("beforeend",template);
    numberSkill++;
});

form.addEventListener("submit",function(e){
    e.preventDefault();
    const name = this.elements["name"].value;
    const address = this.elements["address"].value;
    const phone = this.elements["phone"].value;
    const email = this.elements["email"].value;
    const job = this.elements["job"].value;
    if(!name || !address || !phone || !email || !job){
        alert("some field is blank");
        return;
    }
    info.children[0].textContent = name;
    info.children[1].innerHTML = `<i class="fa fa-home"></i>` + address;
    info.children[2].innerHTML = `<i class="fa fa-phone"></i>` + phone;
    info.children[3].innerHTML = `<i class="fa fa-envelope"></i>` + email;
    info.children[4].innerHTML = `<i class="fa fa-briefcase"></i>` + job;

    const skills = [...document.querySelectorAll(`input[name="skill"]`)];
    const level = [...document.querySelectorAll(`input[name="level"]`)];
    for(let i = 0; i < numberSkill; i++){
        const temp = {};
        temp.name = skills[i].value;
        temp.level = level[i].value;
        skillList.push(temp);
    }

    for(let i = 0; i < numberSkill; i++){
        const template = `  <p>${skillList[i].name}</p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${skillList[i].level}%" aria-valuenow="${skillList[i].level}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>`;
        info.lastElementChild.insertAdjacentHTML("beforeend",template);
    }

    if (this.elements["image"].files.length) {
        const src = URL.createObjectURL(this.elements["image"].files[0]);
        image.src = src;
    }

    btnSubmit.addEventListener("click",(e)=>form.submit());
    modal.classList.add("is-show");
});


