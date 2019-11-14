window.onload = () => {
    //console.log("chargement");

    //création classe
    class Slideshow {
        constructor(slideshowId) {
            // images du slideshow
            this.images = [
                {"src": "img/img1.jpg"},
                {"src": "img/img2.jpg"},
                {"src": "img/img3.jpg"}
            ];
            //élément parent du slideshow
            
            //slideShow en action ?
            this.isRunning = false;

            //création des images
            this.createImages(); 
            
            
            //Ajout des événements
            this.addEvents();
        }
        
        createImages() {
            //parcours du tableau
            for (let i = 0; i < this.images.length; i++) {
                //créatiion d'un élément image dans le DOM
                const img = document.createElement("img");
                //ajour de l'attribut src
                img.setAttribute("src", this.images[i].src);
                //positionnement dans le dom
                this.slideShowContainer.appendChild(img)
            }
        }
        
                
        //Ajout des événements
        addEvents () {
            //ajout de l'événement onclick au container
            //si isRunning est faux, on le passe à true et on relance this.slide()
            //si isRunnig est vrai, on le passe à false
            this.slideShowContainer.onclick = () => {
                console.log('click container');
                if (this.isRunning){
                    this.isRunning = false;
                } else{
                    this.isRunning = true;                                    
                    this.slide();
                }
   
            }
        }
        
        
        //on fait tourner les images
        slide() {
            if (this.isRunning) {
                setTimeout(() => {
                    //récupération de la première image
                    const firstImg = document.querySelector("#slideshow > img");
                    //placement de la première image comme dernier fils de slideShow container
                    this.slideShowContainer.appendChild(firstImg);
                    //Appel récursif
                    this.slide();
                }, 2000);
            }
        }
        
    //instanciation du slideshow
    const slideShow1 = new Slideshow("slideshow");
    slideShow1.createImages();
}

