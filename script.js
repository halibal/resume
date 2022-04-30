const education = document.querySelector("#education")
const workHistory = document.querySelector("#workHistory")
const projects = document.querySelector("#projects")
const certifications = document.querySelector("#certifications")
const skills = document.querySelector("#skills")

let divsArray = [education, workHistory, projects, certifications, skills]


function htmlOnClick(num) {

    for (let i=0; i < divsArray.length; i++) {


        if (divsArray[i].classList.contains("buttonIsActive")) {
            divsArray[i].classList.add('d-none');
            divsArray[i].classList.remove('buttonIsActive');
        }

        else if (!num == i && !divsArray[i].classList.contains("d-none")) {
            divsArray[i].classList.add('d-none');
            console.log(i , divsArray[i].classList);
        } else if (num == i) {
            divsArray[num].classList.remove('d-none');
            divsArray[num].classList.add('buttonIsActive');
            console.log(i , divsArray[i].classList);
        } else {
            divsArray[i].classList.add('d-none');
        }
    };
};

