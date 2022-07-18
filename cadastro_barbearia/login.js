

const senha_cad = document.getElementById("senha_cad");
const senha_cad2 = document.getElementById("senha_cad2");

function validate (item) {
    item.setcustomvalidity('');
    item.checkvalidity();

    if (item == senha_cad2) {
        if (item.value === senha_cad.value) item.setcustomvalidity('');
        else item.setcustomvalidity("As senhas não estão iguais" );
    }
}