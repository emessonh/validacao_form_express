function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateTelCode(ddd){
    const dddsValidosBrasil = [
        68, 96, 92, 97, 91, 93, 94, 95, 69, 63,
        82, 71, 73, 74, 75, 77, 85, 88, 98, 99, 83, 81, 87, 86, 89, 84, 79,
        61, 62, 64, 65, 66, 67,27, 28, 31, 32, 33, 34, 35, 37, 38, 21, 22, 
        24, 11, 12, 13, 14, 15, 16, 17, 18, 19,41, 42, 43, 44, 45, 46, 51, 
        53, 54, 55, 47, 48, 49
    ];
    return dddsValidosBrasil.includes(parseInt(ddd, 10))
}

function validateForm(form){
    const { student_name, date, mother_name, father_name, ddd, telephone, ramal, email, tipo_ensino, turno } = form;
    const arrayFields = [student_name, date, mother_name, father_name, ddd, telephone, ramal, email, tipo_ensino, turno]
    for (const field of arrayFields){
        if (!field){
            return false
        }
    }
    return true
}

function validateAtv(form){
    const { atv_informatica, atv_musica, atv_balet, atv_pintura, atv_judo, atv_futebol } = form
    const arrayAtv = [atv_informatica, atv_musica, atv_balet, atv_pintura, atv_judo, atv_futebol]
    let qtdAtv = 0
    arrayAtv.forEach((atv) => {
        if (atv){
            qtdAtv += 1
        }
    });
    if (qtdAtv <= 3){
        return true
    }
    return false
}

module.exports = {
    validateEmail, validateTelCode, validateForm, validateAtv
};