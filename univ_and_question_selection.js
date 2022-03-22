//大問の選択肢のリスト
const questionsMenu = {
    "2011": {
        "1A": "01",
        "1B": "02",
        "2A": "03",
        "2B": "04",
        "4A": "06",
        "4B": "07",
        "5": "08" 
    },
    "2041": {
        "1": "01",
        "2": "02"
    }
};

//以下、大学名に応じて大問の選択肢を変更する処理
const setMenuOptions = (selectedUniv) => {
    const selectQuestionName = document.getElementById("question_name");
    const number = document.getElementById("number");
    const add = document.getElementById("add");
    const result = document.getElementById("result");
    selectQuestionName.disabled = false;
    number.disabled = false;

    Object.keys(questionsMenu[selectedUniv]).forEach(function(key){
        const option2 = document.createElement("option");
        option2.value = questionsMenu[selectedUniv][key];
        option2.innerHTML = key;
        selectQuestionName.appendChild(option2);
    });
}

const genreSelect = document.getElementById("univ_name");

genreSelect.addEventListener("change", (e) => {
    const el = document.getElementById("question_name");
    let childnum = el.childElementCount;
    while(childnum > 1) {
        el.removeChild(el.lastChild);
        childnum = el.childElementCount;
    }
    setMenuOptions(e.target.value);
})


questionsMenu[selectedUniv].forEach((univ, index) => {
    const option2 = document.createElement("option");
    option2.value = index;
    option2.innerHTML = univ;
    selectQuestionName.appendChild(option2);
});