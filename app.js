let players = [];
let enemies = [];

class Entity {
    constructor(name, max_hp) {
        this.name = name;
        this.max_hp = max_hp;
        this.curr_hp = max_hp;
    }
    get hp() {
        return this.curr_hp;
    }
    damage(n) {
        this.curr_hp -= n;
        return this.curr_hp;
    }
    heal(n) {
        if (this.curr_hp + n > this.max_hp) {
            this.curr_hp = this.max_hp;
        }
        else {
            this.curr_hp += n;
        }
        return this.curr_hp;
    }
}

function add_player() {
    let name = document.getElementById("player_name").value;
    let hp = document.getElementById("player_hp").value;
    let player_container = document.getElementById("players");
    let new_player = new Entity(name, hp);
    let new_player_div = document.createElement("div");

    players.push(new_player);
    new_player_div.innerHTML = `<h3>${new_player.name}<h3><h3 style="color:red;">${new_player.hp}<h3>`;
    player_container.appendChild(new_player_div);
}

function add_enemy() {
    let name = document.getElementById("enemy_name").value;
    let hp = document.getElementById("enemy_hp").value;
    let enemy_container = document.getElementById("enemies");
    let new_enemy = new Entity(name, hp);
    let new_enemy_div = document.createElement("div");
    
    enemies.push(new_enemy);
    new_enemy_div.innerHTML = `<h3>${new_enemy.name}<h3><h3 style="color:red;">${new_enemy.hp}<h3>`;
    enemy_container.appendChild(new_enemy_div);
}

function print_entities() {
    console.log(players);
    console.log(enemies);
}