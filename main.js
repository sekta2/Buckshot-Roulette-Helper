var blanks = 0;
var reals = 0;

function get_blanks() {
    var count = document.getElementById("blanks").value;
    blanks = parseInt(count);
}

function get_reals() {
    var count = document.getElementById("reals").value;
    reals = parseInt(count);
}

function set_blanks() {
    document.getElementById("blanks").value = blanks + "";
}

function set_reals() {
    document.getElementById("reals").value = reals + "";
}

function sync() {
    set_blanks();
    set_reals();
}

function skip_blank() {
    blanks--
    sync();
    make_chance();
}

function skip_real() {
    reals--
    sync();
    make_chance();
}

function inverse_bullets() {
    var b = blanks;
    var r = reals;

    blanks = r;
    reals = b;

    sync();
    make_chance();
}

function get_chance(is_real) {
    var all = blanks + reals;

    if (is_real) {
        return reals / all
    }else{
        return blanks / all
    }
}

function make_chance() {
    var bcha = get_chance(false);
    var rcha = get_chance(true);

    var bigger = bcha > rcha ? ">": "<"

    document.getElementById("result").innerText = "Chances: B = " + Math.round(bcha * 100) + "% " + bigger + " R = " + Math.round(rcha * 100) + "%"
}

function start_game() {
    get_blanks();
    get_reals();

    make_chance();
}
