const $container = document.querySelector(".content");
const $grid = document.querySelector(".grid");

var list = [
    {
        "img": "pierre.png",
        "title": "Portfolio Pierre Koumba",
        "year": 2020,
        "desc": "Portfolio de Pierre Koumba un technicien en support informatique.<br> Constitué principalement de 3 pages avec un formulaire de contact, j'ai eu à reprendre des design sur Pinterest pour monter la maquette",
        "link": "https://pierre-koumba.netlify.app",
        "poste": "Développeur frontend et backend",
        "tech":["html","css","javascript","sql","php","API avec fetch"],
        "team": [],
        "screen":["pierre-bg.png"]
    },
    {
        "img": "laviesurmars.png",
        "title": "Webdoc la vie sur mars",
        "year": 2020,
        "desc": "Projet de fin d'année Web 1. Le projet consistait à créer un web documentaire avec du contenu dynamique. Ceci est le frontoffice du webdoc",
        "link": "https://laviesurmars.netlify.app",
        "poste": "Développeur frontend et backend",
        "tech":["vuejs","sql","php","css","javascript","API avec fetch","webpack (Yarn & npm)","figma"],
        "team": [
            {
                "name": "Alex Peinnot",
                "link": "https://www.linkedin.com/in/alex-painnot/",
                "poste": "Designer, développeur frontend"
            },
            {
                "name": "Hakim Cheboub",
                "link": "https://www.linkedin.com/in/hakim-cheboub/",
                "poste": "Designer, développeur frontend"
            },
            {
                "name": "Oliwia Chêne",
                "link": "https://oliwiachene.netlify.app",
                "poste": "Designer, développeuse frontend"
            },
            {
                "name": "Sébatien Bezombes",
                "link": "https://www.linkedin.com/in/sebastien-bezombes/",
                "poste": "Designer, développeur frontend"
            },
            {
                "name": "Quentin Huber",
                "link": "https://www.linkedin.com/in/quentin-huber/",
                "poste": "Designer, développeur frontend"
            }
        ],
        "screen":[]
    },
    {
        "img": "cemt.png",
        "title": "C.E. Moucob Tsimbi",
        "year": 2020,
        "desc": "Site vitre du Centre d'Education Moucob Tsimbi situé à dolisie. Ce site permet aussi de prendre contact avec l'administration, mais aussi de prendre des préinscription",
        "link": "cemt.netlify.app",
        "poste": "Développeur frontend et backend",
        "tech":["html","css","javascript","API avec fetch","sql","php"],
        "team": [],
        "screen":[]
    },
    {
        "img": "sokoda.png",
        "title": "Dashboard sokoda",
        "year": 2020,
        "desc": "Projet scolaire d'une semaine en UX. Le projet consistait à reprendre le cahier de charge du client Sokoda pour faire des parcours utlisateurs d'une plateforme de mise en relation entre des grossites et des restaurants. Les livrables attendus etaient les dashbords du grossite et du restaurateur",
        "link": "#",
        "poste": "Designer",
        "tech":["illustrator","figma"],
        "team": [
            {
                "name": "Nastia Ratsimisetra",
                "link": "https://www.linkedin.com/in/nastia-ratsimisetra-4310aa1b3/",
                "poste": "Designer"
            }
        ],
        "screen":[]
    },
    {
        "img": "ecine.png",
        "title": "E-Cine",
        "year": 2020,
        "desc": "Projet scrolaire qui consitait à créer une plateforme de streaming. Ceci est le FontOffice",
        "link": "https://e-cine.xyz",
        "poste": "Développeur frontend et backend",
        "tech":["html","css","javascript","sql","php","figma"],
        "team": [
            {
                "name": "Alex Peinnot",
                "link": "https://www.linkedin.com/in/alex-painnot/",
                "poste": "Designer, développeur frontend"
            },
            {
                "name": "Hakim Cheboub",
                "link": "https://www.linkedin.com/in/hakim-cheboub/",
                "poste": "Designer, développeur backend"
            },
            {
                "name": "Cristiana Monteiro",
                "link": "https://www.linkedin.com/in/cristiana-monteiro/",
                "poste": "Designer, développeuse frontend"
            },
            {
                "name": "Sébatien Bezombes",
                "link": "https://www.linkedin.com/in/sebastien-bezombes/",
                "poste": "Designer, développeur frontend"
            },
            {
                "name": "Eunji Lee",
                "link": "https://www.linkedin.com/in/designer-eunji/",
                "poste": "Designer"
            },
            {
                "name": "Ramtin Attar",
                "link": "https://www.linkedin.com/in/ramtin-attar/",
                "poste": "Designer, développeur frontend"
            }
        ],
        "screen":[]
    },
    {
        "img": "hero-api.png",
        "title": "Super Hero API",
        "year": 2020,
        "desc": "Projet scolaire qui consistait à utiliser les données d'un API avec fetch ou axios",
        "link": "https://hero-api.netlify.app",
        "poste": "Développeur frontend",
        "tech":["html","css","javascript","API avec fetch","Webpack - parcel"],
        "team": [],
        "screen":[]
    },
    {
        "img": "axel.png",
        "title": "Portfolio Axel Charel",
        "year": 2020,
        "desc": "Réalisation du portfolio d'Axel Charel",
        "link": "http://axelcharel.com",
        "poste": "Développeur frontend",
        "tech":["html","css","javascript","Webpack - parcel","figma"],
        "team": [
            {
                "name": "Axel Charel",
                "link": "http://axelcharel.com",
                "poste": "Designer"
            },
            {
                "name": "Yoan Bensimhon",
                "link": "https://yoanbensimhon.fr",
                "poste": "Développeur frontend"
            }
        ],
        "screen":[]
    },
    {
        "img": "boxeen.png",
        "title": "Boxeen",
        "year": 2020,
        "desc": "Projet scolaire qui consistait à faire une homepage d'un nouveau produit personnalisable à la commande",
        "link": "https://boxeen.netlify.app",
        "poste": "Développeur frontend",
        "tech":["html","css","javascript","Webpack - parcel","figma","photoshop","illustrator"],
        "team": [
            {
                "name": "Quentin Huber",
                "link": "https://www.linkedin.com/in/quentin-huber/",
                "poste": "Designer"
            },
            {
                "name": "Hakim Cheboub",
                "link": "https://www.linkedin.com/in/hakim-cheboub/",
                "poste": "développeur frontend"
            },
            {
                "name": "Clément Guidon",
                "link": "https://www.linkedin.com/in/clement-guidon-76ba5310b/",
                "poste": "Designer, développeur frontend"
            },
            {
                "name": "Romain Feregotto",
                "link": "https://romain-feregotto.fr/",
                "poste": "développeur frontend"
            }
        ],
        "screen":[]
    },
    {
        "img": "koala.png",
        "title": "Jeu Koala Rescue",
        "year": 2020,
        "desc": "Projet scolaire qui consistait à créer un jeu vidéo en javascript",
        "link": "https://koala-rescue.netlify.app/",
        "poste": "Développeur frontend",
        "tech": ["html","css","javascript","Webpack - parcel","figma"],
        "team": [
            {
                "name": "Melvyn Dadure",
                "link": "https://www.linkedin.com/in/melvyn-dadure/",
                "poste": "Designer"
            },
            {
                "name": "Constance Pétillot",
                "link": "https://www.linkedin.com/in/constance-p%C3%A9tillot/",
                "poste": "Designer, chef de projet"
            },
            {
                "name": "Anthony Roux",
                "link": "https://anthony-roux.netlify.app/",
                "poste": "développeur frontend"
            }
        ],
        "screen":[]
    },
    {
        "img": "pocket-disney.png",
        "title": "Pocket disney",
        "year": 2019,
        "desc": "Projet scolaire qui consistait à créer un jeu vidéo en javascript",
        "link": "https://pocketdisney.netlify.app/",
        "poste": "Développeur frontend",
        "tech": ["html","css","javascript","photoshop","illustrator"],
        "team": [
            {
                "name": "Hakim Cheboub",
                "link": "https://www.linkedin.com/in/hakim-cheboub/",
                "poste": "Développeur frontend"
            },
            {
                "name": "Clément Guidon",
                "link": "https://www.linkedin.com/in/clement-guidon-76ba5310b/",
                "poste": "Créateur des contenus médias"
            },
            {
                "name": "Dubled Rémy",
                "link": "https://www.linkedin.com/in/remy-dubled/",
                "poste": "Créateur des contenus médias"
            },
            {
                "name": "Ousmane Ndiaye",
                "link": "https://www.linkedin.com/in/ousmane-ndiaye-0395761a0/",
                "poste": "Développeur frontend"
            },
            {
                "name": "Nawel Berrichi",
                "link": "https://www.linkedin.com/in/nawelberrichi/",
                "poste": "Développeuse frontend"
            },
            {
                "name": "Alexanne Brunold",
                "link": "https://alexannebrd.netlify.app/",
                "poste": "Développeuse frontend"
            }
        ],
        "screen":[]
    },
    {
        "img": "jact.png",
        "title": "J'act pour Teame78",
        "year": 2019,
        "desc": "Site pour le compte de l'association Teame 78 avec le projet JACT",
        "link": "https://jact.netlify.app",
        "poste": "Déceloppeur frontend",
        "tech": ["html","css","javascript","photoshop","illustrator"],
        "team": [
            {
                "name": "Hakim Cheboub",
                "link": "https://www.linkedin.com/in/hakim-cheboub/",
                "poste": "Développeur frontend"
            },
            {
                "name": "Yoan Bensimhon",
                "link": "https://yoanbensimhon.fr",
                "poste": "Développeur frontend"
            },
            {
                "name": "Alex Peinnot",
                "link": "https://www.linkedin.com/in/alex-painnot/",
                "poste": "Designer"
            },
            {
                "name": "Nastia Ratsimisetra",
                "link": "https://www.linkedin.com/in/nastia-ratsimisetra-4310aa1b3/",
                "poste": "Designer"
            }

        ],
        "screen":[]
    },
    {
        "img": "krabbi.png",
        "title": "BackOffice ",
        "year": 2017,
        "desc": "Création du backOffice de l'application Krabbi qui est une banque d'image regroupant l'ensemble de tes clouds",
        "link": "http://www.krabbi.fr/",
        "poste": "Développeur Backend",
        "tech":["html","css","javascript","sqp","php","Api PHP"],
        "team": [
            {
                "name": "Céline Aumard",
                "link": "https://www.linkedin.com/in/c%C3%A9line-aumard-b0118235/?originalSubdomain=fr",
                "poste": "Developpeuse frontend et backend"
            }
        ],
        "screen":[]
    },
    {
        "img": "hetic.png",
        "title": "Ce n'est pas le site d'HETIC",
        "year": 2019,
        "desc": "Un projet personnel non responsive qui consistait à relever un défi de faire le site d'HETIC avec des float et des positions absolues",
        "link": "https://jarcehtmlcss1.netlify.app/",
        "poste": "Développeur frontend",
        "tech": ["html","css","javascript"],
        "team": [],
        "screen":[]
    },
    {
        "img": "nepad.png",
        "title": "Avenir Nepad Congo",
        "year": 2018,
        "desc": "Site vitrine de l'association Avenir Nepad Congo pour mettre en avant leurs activités et actions. Site Principalement conçu en PHP, il est dynamique dans son contenu",
        "link": "http://www.avenirnepadcongo.com/index.php?p=home",
        "poste": "Développeur frontend et backend",
        "tech": ["html","css","javascript","sql","php","photoshop"],
        "team": [
            {
                "name": "Ali Mouebo",
                "link": "https://www.linkedin.com/in/ali-mouebo-09823a167/",
                "poste": "Développeur backend"
            }
        ],
        "screen":[]
    },
    {
        "img": "epiphanie.png",
        "title": "Epiphanie gestion hospitalière",
        "year": 2019,
        "desc": "Epiphanie est une Application de gestion hospitalière. Nous avons la gestion complète de tous les service, allons de la consultation à l'orientation des actes médicaux, jusqu'à l'hospitalisation et les résultats des examens depuis l'application. Appartenant à la fondation Medicalis, cette application sera d'ici peu une référence au Congo Brazzaville.",
        "link": "#",
        "poste": "Développeur frontend et backend",
        "tech": ["Codeigniter","html","css","javascript","sql","php","photoshop"],
        "team": [
            {
                "name": "Ali Mouebo",
                "link": "https://www.linkedin.com/in/ali-mouebo-09823a167/",
                "poste": "Développeur backend"
            }
        ],
        "screen":[]
    },
    {
        "img": "romain.png",
        "title": "Covertisseur en chiffre romain",
        "year": 2019,
        "desc": "Ce fut un exercice faisant parti du programme ",
        "link": "https://jarceromain.netlify.app/",
        "poste": "Développeur",
        "tech": ["html","css","javascript"],
        "team": [],
        "screen":[]
    },
    {
        "img": "bo_laviesurmars.png",
        "title": "Back office de la vie sur mars",
        "year": 2020,
        "desc": "Projet de fin d'année Web 1. Le projet consistait à créer un web documentaire avec du contenu dynamique. Ceci est le backoffice du webdoc",
        "link": "https://bo-laviesurmars.netlify.app/",
        "poste": "Développeur frontend et backend",
        "tech":["vuejs","sql","php","css","javascript","API avec fetch","webpack (Yarn & npm)","figma"],
        "team": [],
        "screen":[]
    },
    {
        "img": "foselev.png",
        "title": "Gestion de stock",
        "year": 2019,
        "desc": "Application des gestion de stock pour la société Foselev travaillant dans le secteur pétrolier",
        "link": "#",
        "poste": "Développeur frontend et backend",
        "tech":["Codeigniter","html","sql","php","css","javascript"],
        "team": [],
        "screen":[]
    },
    {
        "img": "afrimel.png",
        "title": "Gestion des activités et offres",
        "year": 2019,
        "desc": "Application des gestions des activités des offres et contrats pour la société Afrimel travaillant dans le secteur pétrolier",
        "link": "#",
        "poste": "Développeur frontend et backend",
        "tech":["Codeigniter","html","sql","php","css","javascript"],
        "team": [],
        "screen":[]
    },
    {
        "img": "bo__ecine.png",
        "title": "Back office de E-Cine",
        "year": 2020,
        "desc": "Projet scrolaire qui consitait à créer une plateforme de streaming. Ceci est le BackOffice",
        "link": "https://e-cine.xyz/admin",
        "poste": "Développeur frontend et backend",
        "tech":["Codeigniter","html","sql","php","css","javascript"],
        "team": [
            {
                "name": "Hakim Cheboub",
                "link": "https://www.linkedin.com/in/hakim-cheboub/",
                "poste": "Développeur backend"
            }
        ],
        "screen":[]
    }
];

list.forEach(element=>{
    $container.insertAdjacentHTML("beforeend",
      `<div class="content-item">
            <div class="content-item-intro">
                <img class="content-item-img" src="img/realisations/${element.img}" alt="${element.title}" />
                <h2 class="content-item-title">${element.title}</h2>
            </div>
            <h3 class="content-item-subtitle"></h3>
            <div class="content-item-text">
               

            </div>
        </div><!-- /content-item -->
        `
    );
});

$container.insertAdjacentHTML("beforeend",
`<button class="content-close"><i class="fa fa-times"></i></button>
    <a href="#" class="content-indicator"><i class="fa fa-angle-down"></i></a>`
);



/** Pagination **/
// basic paging logic to demo the buttons

/*
var nbItem = list.length;
var nbItemPage = 6;
var nbPage = Math.ceil(nbItem / nbItemPage);
var currentPage = 1;
var end = 0;

var pr = document.querySelector( '.paginate.left' );
var pl = document.querySelector( '.paginate.right' );

pr.onclick = slide.bind( this, -1 );
pl.onclick = slide.bind( this, 1 );

var index = 0, total = nbPage;

function slide(offset) {
  index = Math.min( Math.max( index + offset, 0 ), total - 1 );

  document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;
  currentPage = index + 1;

  pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
  pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
  //location.href = "#works";

  display();
 
}

slide(0);
*/
function display(){
    /*var begin = (currentPage * nbItemPage) - nbItemPage;
    end += nbItemPage;
    console.log("debut : "+ begin, "Fin : "+end);


    if(begin === end){
        var myList = list.splice(begin);
    }else {
        var myList = list.splice(begin, end);
    }
    $grid.innerHTML = "";
    console.log(myList);*/
    var path = window.location.pathname;
    var tabPath = path.split("/");
    
    if (tabPath[tabPath.length - 1] === 'index.html' || tabPath[tabPath.length - 1] === '') {
        var limit =  9;
     } else {
        var limit =  list.length;
     }
    
    for(var i = 0; i < limit; i++){
        $grid.insertAdjacentHTML("beforeend",
        `
            <a href="#" class="grid-item">
                <div class="grid-item-bg"></div>
                <div class="grid-item-wrap">
                    <img class="grid-item-img" src="img/realisations/${list[i].img}" alt="${list[i].title}" />
                </div>
                <!--<h3 class="grid-item-title">${list[i].title}</h3>-->
                <h4 class="grid-item-number">${list[i].year}</h4>
            </a>
            `
        );
    }
}
display()