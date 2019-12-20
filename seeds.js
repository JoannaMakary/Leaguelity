// Seed the database with initial campgrounds
var mongoose = require("mongoose");
var Champion = require("./models/champion");

var data = [{
        name: "Aatrox",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Aatrox.png",
        description: "the Darkin Blade",
        type: ["Fighter", "Tank"],
        position: ["Top", "Mid"]
    },
    {
        name: "Ahri",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Ahri.png",
        description: "the Nine-Tailed Fox",
        type: ["Mage", "Assassin"],
        position: ["Mid"]
    },
    {
        name: "Akali",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Akali.png",
        description: "the Rogue Assassin",
        type: ["Assassin"],
        position: ["Mid, Top"]
    },
    {
        name: "Alistar",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Alistar.png",
        description: "the Minotaur",
        type: ["Tank", "Support"],
        position: ["Support"]
    },
    {
        name: "Amumu",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Amumu.png",
        description: "the Sad Mummy",
        type: ["Tank", "Mage"],
        position: ["Jungle"]
    },
    {
        name: "Anivia",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Anivia.png",
        description: "the Cryophoenix",
        type: ["Mage", "Support"],
        position: ["Mid", "Support"]
    },
    {
        name: "Annie",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Annie.png",
        description: "the Dark Child",
        type: ["Mage"],
        position: ["Mid", "Support"]
    },
    {
        name: "Aphelios",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Aphelios.png",
        description: "the Weapon of the Faithful",
        type: ["Marksman"],
        position: ["ADC", "Mid"]
    },
    {
        name: "Ashe",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Ashe.png",
        description: "the Frost Archer",
        type: ["Marksman", "Support"],
        position: ["ADC"]
    },
    {
        name: "Aurelion Sol",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/AurelionSol.png",
        description: "the Star Forger",
        type: ["Mage"],
        position: ["Mid"]
    },
    {
        name: "Azir",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Azir.png",
        description: "the Emperor of the Sands",
        type: ["Mage", "Marksman"],
        position: ["Mid"]
    },
    {
        name: "Bard",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Bard.png",
        description: "the Wandering Caretaker",
        type: ["Support", "Mage"],
        position: ["Support"]
    },
    {
        name: "Blitzcrank",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Blitzcrank.png",
        description: "the Great Steam Golem",
        type: ["Tank", "Fighter"],
        position: ["Support"]
    },
    {
        name: "Brand",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Brand.png",
        description: "the Burning Vengeance",
        type: ["Mage"],
        position: ["Support", "Mid"]
    },
    {
        name: "Braum",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Braum.png",
        description: "the Heart of the Freljord",
        type: ["Support", "Tank"],
        position: ["Support"]
    },
    {
        name: "Caitlyn",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Caitlyn.png",
        description: "the Sheriff of Piltover",
        type: ["Marksman"],
        position: ["ADC"]
    },
    {
        name: "Camille",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Camille.png",
        description: "the Steel Shadow",
        type: ["Fighter", "Tank"],
        position: ["Top", "Mid", "Jungle"]
    },
    {
        name: "Cassiopeia",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Cassiopeia.png",
        description: "the Serpent's Embrace",
        type: ["Mage"],
        position: ["Mid", "Top", "ADC"]
    },
    {
        name: "Cho'Gath",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Chogath.png",
        description: "the Terror of the Void",
        type: ["Tank", "Mage"],
        position: ["Top", "Mid", "Jungle"]
    },
    {
        name: "Corki",
        image: "https://ddragon.leagueoflegends.com/cdn/9.24.1/img/champion/Corki.png",
        description: "the Daring Bombardier",
        type: ["Marksman"],
        position: ["Mid", "ADC"]
    }
]

function seedDB() {
    //Remove all champions
    Champion.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("removed champions!");
        //add champions
        data.forEach(function(seed) {
            Champion.create(seed, function(err, champion) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("added a champion");
                }
            });
        });
    });
}

module.exports = seedDB;