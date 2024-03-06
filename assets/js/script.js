const VideoPlayer = (() => {
    const insertVideo = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute("src", url);
    };
    return {
        showVideo(url, id) {
            insertVideo(url, id);
        }
    };
})();


class Multimedia {
    constructor(url) {
        this._url = url;
    }
    get url() {
        return this._url;
    }
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }
    playMultimedia() {
        VideoPlayer.showVideo(this.url, this.id);
    }
    setInicio(time) {
        const iframe = document.getElementById(this.id);
        const currentUrl = iframe.getAttribute("src");
        const newUrl = `${currentUrl}?start=${time}`;
        iframe.setAttribute("src", newUrl);
    }
}

const urlMusica = "https://www.youtube.com/embed/Sp7CYvh8FwA";
const urlPelicula = "https://www.youtube.com/embed/XfQYHqsiN5g";
const urlSerie = "https://www.youtube.com/embed/8QnMmpfKWvo";

const musicaPlayer = new Reproductor(urlMusica, "musica");
const peliculaPlayer = new Reproductor(urlPelicula, "peliculas");
const seriePlayer = new Reproductor(urlSerie, "series");

musicaPlayer.playMultimedia();
peliculaPlayer.playMultimedia();
seriePlayer.playMultimedia();

musicaPlayer.setInicio(30);
peliculaPlayer.setInicio(30);
seriePlayer.setInicio(30);