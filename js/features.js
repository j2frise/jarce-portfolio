const $container = document.querySelector(".content");
const $grid = document.querySelector(".grid");
var list =  [
    {
        "img": "pierre.png",
        "title": "Portfolio Pierre Koumba",
        "year": 2020,
        "desc": "Portfolio de Pierre Koumba un technicien en support informatique.<br> Constitué principalement de 3 pages avec un formulaire de contact, j'ai eu à reprendre des design sur Pinterest pour monter la maquette",
        "link": "https://pierre-koumba.netlify.app",
        "tech":["sk-html.png","sk-css.png","sk-js.png","sk-sql.png","sk-php.png","fetchApi.jpg"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            }
        ],
        "screen":["pierre-bg.png"]
    },
    {
        "img": "laviesurmars.png",
        "title": "Webdoc la vie sur mars",
        "year": 2020,
        "desc": "Projet de fin d'année Web 1. Le projet consistait à créer un web documentaire avec du contenu dynamique. Ceci est le frontoffice du webdoc",
        "link": "https://laviesurmars.netlify.app",
        "tech":["vujs.png","sk-sql.png","sk-php.png","sk-css.png","sk-js.png","fetchApi.jpg","sk-sass.png","sk-figma.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Alex Peinnot",
                "img": "alex.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/alex-painnot/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Alx-dev7580"
                    }
                ],
                "poste": "UX/UI Designer, développeur Front-End"
            },
            {
                "name": "Hakim Cheboub",
                "img": "hakim.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/hakim-cheboub/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Hakim75"
                    }
                ],
                "poste": "Développeur Front-End"
            },
            {
                "name": "Oliwia Chêne",
                "img": "oliwia.jpg",
                "link": [
                    {
                        "name":"globe",
                        "link": "https://oliwiachene.netlify.app"
                    },
                    {
                        "name":"dribbble",
                        "link": "https://dribbble.com/oliwka_pl"
                    },
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/oliwia-ch%C3%AAne/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/oliwkaPL"
                    }
                ],
                "poste": "UX/UI Designer, développeuse Front-End"
            },
            {
                "name": "Sébatien Bezombes",
                "img": "sebastien.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/sebastien-bezombes/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Sebastienbezombes"
                    }
                ],
                "poste": "UX/UI Designer, développeur Front-End"
            },
            {
                "name": "Quentin Huber",
                "img": "quentin.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/quentin-huber/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/QuentinHuber"
                    }
                ],
                "poste": "UX/UI Designer, développeur Front-End"
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
        "tech":["sk-html.png","sk-css.png","sk-js.png","fetchApi.jpg","sk-sql.png","sk-php.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            }
        ],
        "screen":[]
    },
    {
        "img": "sokoda.png",
        "title": "Dashboard sokoda",
        "year": 2020,
        "desc": "Projet scolaire d'une semaine en UX. Le projet consistait à reprendre le cahier de charge du client Sokoda pour faire des parcours utlisateurs d'une plateforme de mise en relation entre des grossites et des restaurants. Les livrables attendus etaient les dashbords du grossite et du restaurateur",
        "link": "#",
        "tech":["illustrator.jpg","sk-figma.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Nastia Ratsimisetra",
                "img": "nastia.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/nastia-ratsimisetra-4310aa1b3/"
                    }
                ],
                "poste": "UX/UI Designer"
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
        "tech":["sk-html.png","sk-css.png","sk-js.png","sk-sql.png","sk-php.png","sk-figma.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Alex Peinnot",
                "img": "alex.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/alex-painnot/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Alx-dev7580"
                    }
                ],
                "poste": "UX/UI Designer, développeur Front-End"
            },
            {
                "name": "Hakim Cheboub",
                "img": "hakim.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/hakim-cheboub/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Hakim75"
                    }
                ],
                "poste": "Développeur Front-End"
            },
            {
                "name": "Cristiana Monteiro",
                "img": "cristiana.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/cristiana-monteiro/"
                    }
                ],
                "poste": "UX/UI Designer, développeuse Front-End"
            },
            {
                "name": "Sébatien Bezombes",
                "img": "sebastien.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/sebastien-bezombes/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Sebastienbezombes"
                    }
                ],
                "poste": "UX/UI Designer, développeur Front-End"
            },
            {
                "name": "Eunji Lee",
                "img": "eunji.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/designer-eunji/"
                    }
                ],
                "poste": "UX/UI Designer, Développeuse Front-End"
            },
            {
                "name": "Ramtin Attar",
                "img": "ramtin.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/ramtin-attar/"
                    }
                ],
                "poste": "UX/UI Designer, développeur Front-End"
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
        "tech":["sk-html.png","sk-css.png","sk-js.png","fetchApi.jpg","sk-sass.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            }
        ],
        "screen":[]
    },
    {
        "img": "axel.png",
        "title": "Portfolio Axel Charel",
        "year": 2020,
        "desc": "Réalisation du portfolio d'Axel Charel",
        "link": "http://axelcharel.com",
        "tech":["sk-html.png","sk-css.png","sk-js.png","sk-sass.png","sk-figma.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Axel Charel",
                "img": "axel.jpg",
                "link": [
                    {
                        "name":"globe",
                        "link": "http://axelcharel.com"
                    },
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/axel-charel/"
                    },
                    {
                        "name":"dribbble",
                        "link": "https://dribbble.com/Axel_Chl"
                    }
                ],
                "poste": "UX/UI Designer, Design graphique"
            },
            {
                "name": "Yoan Bensimhon",
                "img": "yoan.jpg",
                "link": [
                    {
                        "name":"globe",
                        "link": "https://yoanbensimhon.fr"
                    },
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/yoanbensimhon/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/yo-gif12"
                    }
                ],
                "poste": "Développeur Front-End"
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
        "tech":["sk-html.png","sk-css.png","sk-js.png","sk-sass.png","sk-figma.png","sk-ps.png","illustrator.jpg"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Romain Feregotto",
                "img": "romain.jpg",
                "link": [
                    {
                        "name":"globe",
                        "link": "https://romain-feregotto.fr/"
                    },
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/romain-feregotto/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/gravity-zero/"
                    }
                ],
                "poste": "développeur Front-End & Back-End"
            },
            {
                "name": "Quentin Huber",
                "img": "quentin.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/quentin-huber/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/QuentinHuber"
                    }
                ],
                "poste": "UX/UI Designer, développeur Front-End"
            },
            {
                "name": "Hakim Cheboub",
                "img": "hakim.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/hakim-cheboub/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Hakim75"
                    }
                ],
                "poste": "Développeur Front-End"
            },
            {
                "name": "Clément Guidon",
                "img": "clement.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/clement-guidon-76ba5310b/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/clem51"
                    }
                ],
                "poste": "Développeur Front-End, Design graphique"
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
        "tech": ["sk-html.png","sk-css.png","sk-js.png","sk-sass.png","sk-figma.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Constance Pétillot",
                "img": "constance.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/constance-p%C3%A9tillot/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/cpetillot/"
                    }
                ],
                "poste": "developpeuse Front-End"
            },
            {
                "name": "Melvyn Dadure",
                "img": "melvyn.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/melvyn-dadure/"
                    },
                    {
                        "name":"dribbble",
                        "link": "https://dribbble.com/melvyndadure"
                    }
                ],
                "poste": "UX/UI Designer"
            },
            {
                "name": "Anthony Roux",
                "img": "anthony.jpg",
                "link": [
                    {
                        "name":"globe",
                        "link": "https://anthony-roux.netlify.app/"
                    },
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/anthony-roux-2603/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/anthony-roux/"
                    },
                    {
                        "name":"codepen",
                        "link": "https://codepen.io/anthonio_rx"
                    }
                ],
                "poste": "Développeur Front-End"
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
        "tech": ["sk-html.png","sk-css.png","sk-js.png","sk-ps.png","illustrator.jpg"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Nawel Berrichi",
                "img": "nawel.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/nawelberrichi/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/berrichinawel/"
                    }
                ],
                "poste": "Développeuse Front-End & Back-End"
            },
            {
                "name": "Alexanne Brunold",
                "img": "alexanne.jpg",
                "link": [
                    {
                        "name":"globe",
                        "link": "https://alexannebrd.netlify.app/"
                    },
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/alexanne-brunold-7842381a4/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/alexannebrunold"
                    }
                ],
                "poste": "Développeuse Front-End"
            },
            {
                "name": "Hakim Cheboub",
                "img": "hakim.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/hakim-cheboub/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Hakim75"
                    }
                ],
                "poste": "Développeur Front-End"
            },
            {
                "name": "Clément Guidon",
                "img": "clement.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/clement-guidon-76ba5310b/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/clem51"
                    }
                ],
                "poste": "Développeur Front-End, Design graphique"
            },
            {
                "name": "Dubled Rémy",
                "img": "remy.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/remy-dubled/"
                    }
                ],
                "poste": "Développeur Front-End"
            },
            {
                "name": "Ousmane Ndiaye",
                "img": "ousmane.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/ousmane-ndiaye-0395761a0/"
                    }
                ],
                "poste": "Développeur Front-End"
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
        "tech": ["sk-html.png","sk-css.png","sk-js.png","sk-ps.png","illustrator.jpg"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Hakim Cheboub",
                "img": "hakim.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/hakim-cheboub/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Hakim75"
                    }
                ],
                "poste": "Développeur Front-End"
            },
            {
                "name": "Yoan Bensimhon",
                "img": "yoan.jpg",
                "link": [
                    {
                        "name":"globe",
                        "link": "https://yoanbensimhon.fr"
                    },
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/yoanbensimhon/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/yo-gif12"
                    }
                ],
                "poste": "Développeur Front-End"
            },
            {
                "name": "Alex Peinnot",
                "img": "alex.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/alex-painnot/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Alx-dev7580"
                    }
                ],
                "poste": "UX/UI Designer, développeur Front-End"
            },
            {
                "name": "Nastia Ratsimisetra",
                "img": "nastia.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/nastia-ratsimisetra-4310aa1b3/"
                    }
                ],
                "poste": "UX/UI Designer"
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
        "tech":["sk-html.png","sk-css.png","sk-js.png","sk-sql.png","sk-php.png","phpapi.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Céline Aumard",
                "img": "celine.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/c%C3%A9line-aumard-b0118235/"
                    }
                ],
                "poste": "CEO Krabbi"
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
        "tech": ["sk-html.png","sk-css.png","sk-js.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            }
        ],
        "screen":[]
    },
    {
        "img": "nepad.png",
        "title": "Avenir Nepad Congo",
        "year": 2018,
        "desc": "Site vitrine de l'association Avenir Nepad Congo pour mettre en avant leurs activités et actions. Site Principalement conçu en PHP, il est dynamique dans son contenu",
        "link": "http://www.avenirnepadcongo.com/index.php?p=home",
        "tech": ["sk-html.png","sk-css.png","sk-js.png","sk-sql.png","sk-php.png","sk-ps.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Ali Mouebo",
                "img": "ali.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/ali-mouebo-09823a167/"
                    }
                ],
                "poste": "Analyste Programmeur"
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
        "tech": ["sk-codeigniter.png","sk-html.png","sk-css.png","sk-js.png","sk-sql.png","sk-php.png","sk-ps.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Ali Mouebo",
                "img": "ali.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/ali-mouebo-09823a167/"
                    }
                ],
                "poste": "Analyste Programmeur"
            },
            {
                "name": "Merith N'dolo",
                "img": "merith.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/merith-ndolo/"
                    }
                ],
                "poste": "Développeur web et Mobile"
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
        "tech": ["sk-html.png","sk-css.png","sk-js.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            }
        ],
        "screen":[]
    },
    {
        "img": "bo_laviesurmars.png",
        "title": "Back office de la vie sur mars",
        "year": 2020,
        "desc": "Projet de fin d'année Web 1. Le projet consistait à créer un web documentaire avec du contenu dynamique. Ceci est le backoffice du webdoc",
        "link": "https://bo-laviesurmars.netlify.app/",
        "tech":["vujs.png","sk-sql.png","sk-php.png","sk-css.png","sk-js.png","fetchApi.jpg","sk-sass.png","sk-figma.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            }
        ],
        "screen":[]
    },
    {
        "img": "foselev.png",
        "title": "Gestion de stock",
        "year": 2019,
        "desc": "Application des gestion de stock pour la société Foselev travaillant dans le secteur pétrolier",
        "link": "#",
        "tech":["sk-codeigniter.png","sk-html.png","sk-sql.png","sk-php.png","sk-css.png","sk-js.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            }
        ],
        "screen":[]
    },
    {
        "img": "afrimel.png",
        "title": "Gestion des activités et offres",
        "year": 2019,
        "desc": "Application des gestions des activités des offres et contrats pour la société Afrimel travaillant dans le secteur pétrolier",
        "link": "#",
        "tech":["sk-codeigniter.png","sk-html.png","sk-sql.png","sk-php.png","sk-css.png","sk-js.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            }
        ],
        "screen":[]
    },
    {
        "img": "bo__ecine.png",
        "title": "Back office de E-Cine",
        "year": 2020,
        "desc": "Projet scrolaire qui consitait à créer une plateforme de streaming. Ceci est le BackOffice",
        "link": "https://e-cine.xyz/admin",
        "tech":["sk-html.png","sk-sql.png","sk-php.png","sk-css.png","sk-js.png"],
        "team": [
            {
                "name": "Jarce Boukoro",
                "img": "me.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/jarceb/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/j2frise/"
                    }
                ],
                "poste": "Développeur Fullstack"
            },
            {
                "name": "Hakim Cheboub",
                "img": "hakim.jpg",
                "link": [
                    {
                        "name":"linkedin-in",
                        "link": "https://www.linkedin.com/in/hakim-cheboub/"
                    },
                    {
                        "name":"github",
                        "link": "https://github.com/Hakim75"
                    }
                ],
                "poste": "Développeur Front-End"
            }
        ],
        "screen":[]
    }
];

list.forEach((element, i)=>{
    $container.insertAdjacentHTML("beforeend",
      `<div class="content-item">
            <div class="content-item-intro">
                <img class="content-item-img" src="img/realisations/${element.img}" alt="${element.title}" />
                <h2 class="content-item-title"></h2>
            </div>
            <h3 class="content-item-subtitle"></h3>
            <div class="content-item-text">
                <p class="title-content"><a href="${element.link}" target="_blank">${element.title} <i class="fa fa-link" aria-hidden="true"></i></a></p>
                <div class="content-container">
                    <p class="title-section">Description du projet</p>
                    <section class="grid-row">
                        <article class="column-xs-12 column-md-4 year">${element.year}</article>
                        <article class="column-xs-12 column-md-8 article-desc" data-aos="fade-left" data-aos-duration="2000">${element.desc}</article>
                    </section>
                    <p class="title-section">Technologies utilisées</p>
                    <section class="grid-row">
                        <article class="column-xs-12 column-md-4"></article>
                        <article class="column-xs-12 column-md-8 tech" id="tech${i}" data-aos="zoom-in-left" data-aos-duration="2000"></article>
                    </section>
                    <p class="title-section" id="title-section${i}"></p>
                    <section class="grid-row" id="team${i}"></section>
                </div>
            </div>
        </div><!-- /content-item -->
        `
    );

    const $tech = document.querySelector("#tech"+i);
    const $teamSection = document.querySelector("#title-section"+i);
    const $team = document.querySelector("#team"+i);

    element.tech.forEach((item, j)=>{
        $tech.insertAdjacentHTML("beforeend",
            `
                <img src="./img/logo/${item}" alt="${item}">
            `
        )
    });

    if(element.team.length > 0){
        $teamSection.innerHTML = "Equipe";

        element.team.forEach((elm, k)=>{
            var rand = Math.random().toString(36).slice(2); 

            $team.insertAdjacentHTML("beforeend",
                `
                    <article class="column-xs-12 column-md-6">
                        <div class="grid-row team-content">
                            <aside class="column-md-3 team-img">
                                <img src="./img/team/${elm.img}" alt="${elm.name}"/>
                            </aside>
                            <aside class="column-md-9 team-desc">
                                <p class="team-bio">${elm.name} <span>${elm.poste}</span></p>
                                <p class="team-link" id="link${rand}"></p>
                            </aside>
                        </div>
                    </article>
                `
            );

            const $link = document.querySelector("#link"+rand);
            
            elm.link.forEach((lnk, l)=>{
                var fa = lnk.name=="globe"?"fa":"fab";
                $link.insertAdjacentHTML("beforeend",
                    `
                        <a href="${lnk.link}" target="_blank"><i class="${fa} fa-${lnk.name}"></i></a>
                    `
                )
            });
        });
    }

});

$container.insertAdjacentHTML("beforeend",
`<button class="content-close"><i class="fa fa-times"></i></button>`
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