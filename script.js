const artists = document.querySelectorAll(".artist");
const artistsContainer = document.querySelector(".artists");
const playlist = document.getElementById("playlistContainer");
const playlistTitle = document.getElementById("playlistTitle");
const songList = document.getElementById("songList");
const audioPlayer = document.getElementById("audioPlayer");
const currentSongName = document.getElementById("currentSongName");
const songs = {
    karan: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],

    parmish: [
        "Gaal_Ni_Kadni.mp3", "shada.mp3", "sab fade jange.mp3", "chal oye.mp3",
        "klolan.mp3", "rubicon drill.mp3", "ja ve ja.mp3", "Aam_Jahe_Munde_1.mp3",
        "paradox.mp3", "teriyaan deedaan.mp3", "farming.mp3", "car culture.mp3"
    ],

    ap: [
        "with you.mp3","Excuses.mp3","Brown Munde.mp3","Insane.mp3",
        "thodi si daru.mp3","Dil_Nu.mp3","desires.mp3","sadda pyaar.mp3","STFU.mp3"
    ],

    diljit: [
        "5_Taara_1.mp3","Born_to_Shine_1.mp3","Proper Patola.mp3","Do You Know.mp3",
        "Lemonade.mp3","raat di gedi.mp3","clash.mp3","Case.mp3","putt jatt da.mp3",
        "High end.mp3","mittran da junction.mp3","farar.mp3","love ya.mp3","G_O_A_T.mp3","vibe.mp3"
    ],

    jassie: [
        "nikle current.mp3","lamborghini.mp3","Guitar Sikhda.mp3",
        "nikka zaildar.mp3","ehna chauni aa.mp3","tere naal.mp3","kalla chann.mp3"
    ],

    sidhu: [
        "295.mp3","The Last Ride.mp3","So High.mp3","Old Skool.mp3","Levels.mp3",
        "Just Listen.mp3","Legend.mp3","Bambiha Bole.mp3","Calaboose.mp3","Never Fold.mp3",
        "IDGAF.mp3","Tibbeyan Da Putt.mp3","Devil.mp3","Famous.mp3"
    ],

    hindi: [
        "dil meri na sune.mp3","tera ban jaunga.mp3","raabta.mp3",
        "jeena jeena.mp3","pachtaoge.mp3","channa mereya.mp3","gulabi.mp3"
    ],
    mankirt: [
        "Badnam_1.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    gurnaam: [
        "Pagal_1.mp3", "Waake.mp3", "Pent_Straight_1.mp3", "Phone_Maar_Di_1.mp3",
        "Maye_Ni_Guddiyan_Patole_1.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    guri: [
        "Nira Ishq Guri 128 Kbps.mp3", "Billian Billian Guri 128 Kbps.mp3", "Pyar Karda Jass Manak 128 Kbps.mp3", "Don't Look.mp3",
        "Yaae_Beli_1.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    akhil: [
        "Rukh.mp3", "Pasandida_Aurat_1.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    brar: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    mix: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    amritmaan: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    atifaslam: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    harvisandhu: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    baanisandhu: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    sunandasharma: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    jassadhillon: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    gursiddhu: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    cheemay: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    premdhillon: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    amrinder: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    khanbaini: [
        "Hair.mp3", "NA NA NA.mp3", "Let 'em play.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],
    dilpreetdhillon: [
        "Taur.mp3", "Shareef.mp3", "Red Shade.mp3", "Don't Look.mp3",
        "Bachke Bachke.mp3", "On Top.mp3", "52 Bars.mp3", "MF GABHRU.mp3",
        "HINT.mp3", "Chithiyaan.mp3", "RIM vs JHANJAR.mp3", "Chitta kurta.mp3",
        "BOYFRIEND.mp3", "For A Reason.mp3"
    ],

};


function openPlaylist(artistName) {

    playlistTitle.textContent = artistName.toUpperCase() + " Songs";
    playlist.classList.add("showPlaylist");

    artistsContainer.classList.add("shrinkArtists");

    artists.forEach(a => a.classList.add("shrink"));

    
    loadSongs(artistName);
}


function loadSongs(name) {
    songList.innerHTML = "";

    songs[name].forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;

        li.onclick = () => {
            currentSongName.textContent = song;
            audioPlayer.src = song;
              audioPlayer.play();
        };

        songList.appendChild(li);
    });
}
function filterSingers() {
    const searchValue = document.getElementById("searchBar").value.toLowerCase();

    artists.forEach(artist => {
        let name = artist.querySelector("p").textContent.toLowerCase();

        if (name.includes(searchValue)) {
            artist.style.display = "block";
        } else {
            artist.style.display = "none";
        }
    });
}

