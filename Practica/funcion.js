window.addEventListener("load",function(event) {

var arrayId =[]

var provincia = document.getElementById("Provincia")
var arreglodeprovincia = [
    {
        "id": 350,
        "nombre": "Arica",
        "provincia": "Arica",
        "region_id": 15
    },
    {
        "id": 351,
        "nombre": "Comuna",
        "provincia": "Arica",
        "region_id": 1
    },
    {
        "id": 352,
        "nombre": "Putre",
        "provincia": "Parinacota",
        "region_id": 15
    },
    {
        "id": 353,
        "nombre": "General Lagos",
        "provincia": "Parinacota",
        "region_id": 15
    },
    {
        "id": 354,
        "nombre": "Iquique",
        "provincia": "Iquique",
        "region_id": 1
    },
    {
        "id": 355,
        "nombre": "Alto Hospicio",
        "provincia": "Iquique",
        "region_id": 1
    },
    {
        "id": 356,
        "nombre": "Pozo Almonte",
        "provincia": "Tamarugal",
        "region_id": 1
    },
    {
        "id": 357,
        "nombre": "Camiña",
        "provincia": "Tamarugal",
        "region_id": 1
    },
    {
        "id": 358,
        "nombre": "Colchane",
        "provincia": "Tamarugal",
        "region_id": 1
    },
    {
        "id": 359,
        "nombre": "Huara",
        "provincia": "Tamarugal",
        "region_id": 1
    },
    {
        "id": 360,
        "nombre": "Pica",
        "provincia": "Tamarugal",
        "region_id": 1
    },
    {
        "id": 361,
        "nombre": 2,
        "provincia": 2,
        "region_id": 2
    },
    {
        "id": 362,
        "nombre": "Mejillones",
        "provincia": 2,
        "region_id": 2
    },
    {
        "id": 363,
        "nombre": "Sierra Gorda",
        "provincia": 2,
        "region_id": 2
    },
    {
        "id": 364,
        "nombre": "Taltal",
        "provincia": 2,
        "region_id": 2
    },
    {
        "id": 365,
        "nombre": "Calama",
        "provincia": "El Loa",
        "region_id": 2
    },
    {
        "id": 366,
        "nombre": "Ollagüe",
        "provincia": "El Loa",
        "region_id": 2
    },
    {
        "id": 367,
        "nombre": "San Pedro de Atacama",
        "provincia": "El Loa",
        "region_id": 2
    },
    {
        "id": 368,
        "nombre": "Tocopilla",
        "provincia": "Tocopilla",
        "region_id": 2
    },
    {
        "id": 369,
        "nombre": "María Elena",
        "provincia": "Tocopilla",
        "region_id": 2
    },
    {
        "id": 370,
        "nombre": "Copiapó",
        "provincia": "Copiapó",
        "region_id": 3
    },
    {
        "id": 371,
        "nombre": "Caldera",
        "provincia": "Copiapó",
        "region_id": 3
    },
    {
        "id": 372,
        "nombre": "Tierra Amarilla",
        "provincia": "Copiapó",
        "region_id": 3
    },
    {
        "id": 373,
        "nombre": "Chañaral",
        "provincia": "Chañaral",
        "region_id": 3
    },
    {
        "id": 374,
        "nombre": "Diego de Almagro",
        "provincia": "Chañaral",
        "region_id": 3
    },
    {
        "id": 375,
        "nombre": "Vallenar",
        "provincia": "Huasco",
        "region_id": 3
    },
    {
        "id": 376,
        "nombre": "Alto del Carmen",
        "provincia": "Huasco",
        "region_id": 3
    },
    {
        "id": 377,
        "nombre": "Freirina",
        "provincia": "Huasco",
        "region_id": 3
    },
    {
        "id": 378,
        "nombre": "Huasco",
        "provincia": "Huasco",
        "region_id": 3
    },
    {
        "id": 379,
        "nombre": "La Serena",
        "provincia": "Elqui",
        "region_id": 4
    },
    {
        "id": 380,
        "nombre": 4,
        "provincia": "Elqui",
        "region_id": 4
    },
    {
        "id": 381,
        "nombre": "Andacollo",
        "provincia": "Elqui",
        "region_id": 4
    },
    {
        "id": 382,
        "nombre": "La Higuera",
        "provincia": "Elqui",
        "region_id": 4
    },
    {
        "id": 383,
        "nombre": "Paihuano",
        "provincia": "Elqui",
        "region_id": 4
    },
    {
        "id": 384,
        "nombre": "Vicuña",
        "provincia": "Elqui",
        "region_id": 4
    },
    {
        "id": 385,
        "nombre": "Illapel",
        "provincia": "Choapa",
        "region_id": 4
    },
    {
        "id": 386,
        "nombre": "Canela",
        "provincia": "Choapa",
        "region_id": 4
    },
    {
        "id": 387,
        "nombre": "Los Vilos",
        "provincia": "Choapa",
        "region_id": 4
    },
    {
        "id": 388,
        "nombre": "Salamanca",
        "provincia": "Choapa",
        "region_id": 4
    },
    {
        "id": 389,
        "nombre": "Ovalle",
        "provincia": "Limarí",
        "region_id": 4
    },
    {
        "id": 390,
        "nombre": "Combarbalá",
        "provincia": "Limarí",
        "region_id": 4
    },
    {
        "id": 391,
        "nombre": "Monte Patria",
        "provincia": "Limarí",
        "region_id": 4
    },
    {
        "id": 392,
        "nombre": "Punitaqui",
        "provincia": "Limarí",
        "region_id": 4
    },
    {
        "id": 393,
        "nombre": "Río Hurtado",
        "provincia": "Limarí",
        "region_id": 4
    },
    {
        "id": 394,
        "nombre": 5,
        "provincia": 5,
        "region_id": 5
    },
    {
        "id": 395,
        "nombre": "Casablanca",
        "provincia": 5,
        "region_id": 5
    },
    {
        "id": 396,
        "nombre": "Concón",
        "provincia": 5,
        "region_id": 5
    },
    {
        "id": 397,
        "nombre": "Juan Fernández",
        "provincia": 5,
        "region_id": 5
    },
    {
        "id": 398,
        "nombre": "Puchuncaví",
        "provincia": 5,
        "region_id": 5
    },
    {
        "id": 399,
        "nombre": "Quintero",
        "provincia": 5,
        "region_id": 5
    },
    {
        "id": 400,
        "nombre": "Viña del Mar",
        "provincia": 5,
        "region_id": 5
    },
    {
        "id": 401,
        "nombre": "Isla de Pascua",
        "provincia": "Isla de Pascua",
        "region_id": 5
    },
    {
        "id": 402,
        "nombre": "Los Andes",
        "provincia": "Los Andes",
        "region_id": 5
    },
    {
        "id": 403,
        "nombre": "Calle Larga",
        "provincia": "Los Andes",
        "region_id": 5
    },
    {
        "id": 404,
        "nombre": "Rinconada",
        "provincia": "Los Andes",
        "region_id": 5
    },
    {
        "id": 405,
        "nombre": "San Esteban",
        "provincia": "Los Andes",
        "region_id": 5
    },
    {
        "id": 406,
        "nombre": "La Ligua",
        "provincia": "Petorca",
        "region_id": 5
    },
    {
        "id": 407,
        "nombre": "Cabildo",
        "provincia": "Petorca",
        "region_id": 5
    },
    {
        "id": 408,
        "nombre": "Papudo",
        "provincia": "Petorca",
        "region_id": 5
    },
    {
        "id": 409,
        "nombre": "Petorca",
        "provincia": "Petorca",
        "region_id": 5
    },
    {
        "id": 410,
        "nombre": "Zapallar",
        "provincia": "Petorca",
        "region_id": 5
    },
    {
        "id": 411,
        "nombre": "Quillota",
        "provincia": "Quillota",
        "region_id": 5
    },
    {
        "id": 412,
        "nombre": "La Calera",
        "provincia": "Quillota",
        "region_id": 5
    },
    {
        "id": 413,
        "nombre": "Hijuelas",
        "provincia": "Quillota",
        "region_id": 5
    },
    {
        "id": 414,
        "nombre": "La Cruz",
        "provincia": "Quillota",
        "region_id": 5
    },
    {
        "id": 415,
        "nombre": "Nogales",
        "provincia": "Quillota",
        "region_id": 5
    },
    {
        "id": 416,
        "nombre": "San Antonio",
        "provincia": "San Antonio",
        "region_id": 5
    },
    {
        "id": 417,
        "nombre": "Algarrobo",
        "provincia": "San Antonio",
        "region_id": 5
    },
    {
        "id": 418,
        "nombre": "Cartagena",
        "provincia": "San Antonio",
        "region_id": 5
    },
    {
        "id": 419,
        "nombre": "El Quisco",
        "provincia": "San Antonio",
        "region_id": 5
    },
    {
        "id": 420,
        "nombre": "El Tabo",
        "provincia": "San Antonio",
        "region_id": 5
    },
    {
        "id": 421,
        "nombre": "Santo Domingo",
        "provincia": "San Antonio",
        "region_id": 5
    },
    {
        "id": 422,
        "nombre": "San Felipe",
        "provincia": "San Felipe de Aconcagua",
        "region_id": 5
    },
    {
        "id": 423,
        "nombre": "Catemu",
        "provincia": "San Felipe de Aconcagua",
        "region_id": 5
    },
    {
        "id": 424,
        "nombre": "Llay-Llay",
        "provincia": "San Felipe de Aconcagua",
        "region_id": 5
    },
    {
        "id": 425,
        "nombre": "Panquehue",
        "provincia": "San Felipe de Aconcagua",
        "region_id": 5
    },
    {
        "id": 426,
        "nombre": "Putaendo",
        "provincia": "San Felipe de Aconcagua",
        "region_id": 5
    },
    {
        "id": 427,
        "nombre": "Santa María",
        "provincia": "San Felipe de Aconcagua",
        "region_id": 5
    },
    {
        "id": 428,
        "nombre": "Quilpué",
        "provincia": "Marga Marga",
        "region_id": 5
    },
    {
        "id": 429,
        "nombre": "Limache",
        "provincia": "Marga Marga",
        "region_id": 5
    },
    {
        "id": 430,
        "nombre": "Olmué",
        "provincia": "Marga Marga",
        "region_id": 5
    },
    {
        "id": 431,
        "nombre": "Villa Alemana",
        "provincia": "Marga Marga",
        "region_id": 5
    },
    {
        "id": 432,
        "nombre": "Rancagua",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 433,
        "nombre": "Codegua",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 434,
        "nombre": "Coinco",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 435,
        "nombre": "Coltauco",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 436,
        "nombre": "Doñihue",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 437,
        "nombre": "Graneros",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 438,
        "nombre": "Las Cabras",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 439,
        "nombre": "Machalí",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 440,
        "nombre": "Malloa",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 441,
        "nombre": "Mostazal",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 442,
        "nombre": "Olivar",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 443,
        "nombre": "Peumo",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 444,
        "nombre": "Pichidegua",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 445,
        "nombre": "Quinta de Tilcoco",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 446,
        "nombre": "Rengo",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 447,
        "nombre": "Requínoa",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 448,
        "nombre": "San Vicente",
        "provincia": "Cachapoal",
        "region_id": 6
    },
    {
        "id": 449,
        "nombre": "Pichilemu",
        "provincia": "Cardenal Caro",
        "region_id": 6
    },
    {
        "id": 450,
        "nombre": "La Estrella",
        "provincia": "Cardenal Caro",
        "region_id": 6
    },
    {
        "id": 451,
        "nombre": "Litueche",
        "provincia": "Cardenal Caro",
        "region_id": 6
    },
    {
        "id": 452,
        "nombre": "Marchihue",
        "provincia": "Cardenal Caro",
        "region_id": 6
    },
    {
        "id": 453,
        "nombre": "Navidad",
        "provincia": "Cardenal Caro",
        "region_id": 6
    },
    {
        "id": 454,
        "nombre": "Paredones",
        "provincia": "Cardenal Caro",
        "region_id": 6
    },
    {
        "id": 455,
        "nombre": "San Fernando",
        "provincia": "Colchagua",
        "region_id": 6
    },
    {
        "id": 456,
        "nombre": "Chépica",
        "provincia": "Colchagua",
        "region_id": 6
    },
    {
        "id": 457,
        "nombre": "Chimbarongo",
        "provincia": "Colchagua",
        "region_id": 6
    },
    {
        "id": 458,
        "nombre": "Lolol",
        "provincia": "Colchagua",
        "region_id": 6
    },
    {
        "id": 459,
        "nombre": "Nancagua",
        "provincia": "Colchagua",
        "region_id": 6
    },
    {
        "id": 460,
        "nombre": "Palmilla",
        "provincia": "Colchagua",
        "region_id": 6
    },
    {
        "id": 461,
        "nombre": "Peralillo",
        "provincia": "Colchagua",
        "region_id": 6
    },
    {
        "id": 462,
        "nombre": "Placilla",
        "provincia": "Colchagua",
        "region_id": 6
    },
    {
        "id": 463,
        "nombre": "Pumanque",
        "provincia": "Colchagua",
        "region_id": 6
    },
    {
        "id": 464,
        "nombre": "Santa Cruz",
        "provincia": "Colchagua",
        "region_id": 6
    },
    {
        "id": 465,
        "nombre": "Talca",
        "provincia": "Talca",
        "region_id": 7
    },
    {
        "id": 466,
        "nombre": "Constitución",
        "provincia": "Talca",
        "region_id": 7
    },
    {
        "id": 467,
        "nombre": "Curepto",
        "provincia": "Talca",
        "region_id": 7
    },
    {
        "id": 468,
        "nombre": "Empedrado",
        "provincia": "Talca",
        "region_id": 7
    },
    {
        "id": 469,
        "nombre": 7,
        "provincia": "Talca",
        "region_id": 7
    },
    {
        "id": 470,
        "nombre": "Pelarco",
        "provincia": "Talca",
        "region_id": 7
    },
    {
        "id": 471,
        "nombre": "Pencahue",
        "provincia": "Talca",
        "region_id": 7
    },
    {
        "id": 472,
        "nombre": "Río Claro",
        "provincia": "Talca",
        "region_id": 7
    },
    {
        "id": 473,
        "nombre": "San Clemente",
        "provincia": "Talca",
        "region_id": 7
    },
    {
        "id": 474,
        "nombre": "San Rafael",
        "provincia": "Talca",
        "region_id": 7
    },
    {
        "id": 475,
        "nombre": "Cauquenes",
        "provincia": "Cauquenes",
        "region_id": 7
    },
    {
        "id": 476,
        "nombre": "Chanco",
        "provincia": "Cauquenes",
        "region_id": 7
    },
    {
        "id": 477,
        "nombre": "Pelluhue",
        "provincia": "Cauquenes",
        "region_id": 7
    },
    {
        "id": 478,
        "nombre": "Curicó",
        "provincia": "Curicó",
        "region_id": 7
    },
    {
        "id": 479,
        "nombre": "Hualañé",
        "provincia": "Curicó",
        "region_id": 7
    },
    {
        "id": 480,
        "nombre": "Licantén",
        "provincia": "Curicó",
        "region_id": 7
    },
    {
        "id": 481,
        "nombre": "Molina",
        "provincia": "Curicó",
        "region_id": 7
    },
    {
        "id": 482,
        "nombre": "Rauco",
        "provincia": "Curicó",
        "region_id": 7
    },
    {
        "id": 483,
        "nombre": "Romeral",
        "provincia": "Curicó",
        "region_id": 7
    },
    {
        "id": 484,
        "nombre": "Sagrada Familia",
        "provincia": "Curicó",
        "region_id": 7
    },
    {
        "id": 485,
        "nombre": "Teno",
        "provincia": "Curicó",
        "region_id": 7
    },
    {
        "id": 486,
        "nombre": "Vichuquén",
        "provincia": "Curicó",
        "region_id": 7
    },
    {
        "id": 487,
        "nombre": "Linares",
        "provincia": "Linares",
        "region_id": 7
    },
    {
        "id": 488,
        "nombre": "Colbún",
        "provincia": "Linares",
        "region_id": 7
    },
    {
        "id": 489,
        "nombre": "Longaví",
        "provincia": "Linares",
        "region_id": 7
    },
    {
        "id": 490,
        "nombre": "Parral",
        "provincia": "Linares",
        "region_id": 7
    },
    {
        "id": 491,
        "nombre": "Retiro",
        "provincia": "Linares",
        "region_id": 7
    },
    {
        "id": 492,
        "nombre": "San Javier",
        "provincia": "Linares",
        "region_id": 7
    },
    {
        "id": 493,
        "nombre": "Villa Alegre",
        "provincia": "Linares",
        "region_id": 7
    },
    {
        "id": 494,
        "nombre": "Yerbas Buenas",
        "provincia": "Linares",
        "region_id": 7
    },
    {
        "id": 495,
        "nombre": "Chillán",
        "provincia": "Diguillín",
        "region_id": 16
    },
    {
        "id": 496,
        "nombre": "Bulnes",
        "provincia": "Diguillín",
        "region_id": 16
    },
    {
        "id": 497,
        "nombre": "Chillán Viejo",
        "provincia": "Diguillín",
        "region_id": 16
    },
    {
        "id": 498,
        "nombre": "El Carmen",
        "provincia": "Diguillín",
        "region_id": 16
    },
    {
        "id": 499,
        "nombre": "Pemuco",
        "provincia": "Diguillín",
        "region_id": 16
    },
    {
        "id": 500,
        "nombre": "Pinto",
        "provincia": "Diguillín",
        "region_id": 16
    },
    {
        "id": 501,
        "nombre": "Quillón",
        "provincia": "Diguillín",
        "region_id": 16
    },
    {
        "id": 502,
        "nombre": "San Ignacio",
        "provincia": "Diguillín",
        "region_id": 16
    },
    {
        "id": 503,
        "nombre": "Yungay",
        "provincia": "Diguillín",
        "region_id": 16
    },
    {
        "id": 504,
        "nombre": "Quirihue",
        "provincia": "Itata",
        "region_id": 16
    },
    {
        "id": 505,
        "nombre": "Cobquecura",
        "provincia": "Itata",
        "region_id": 16
    },
    {
        "id": 506,
        "nombre": "Coelemu",
        "provincia": "Itata",
        "region_id": 16
    },
    {
        "id": 507,
        "nombre": "Ninhue",
        "provincia": "Itata",
        "region_id": 16
    },
    {
        "id": 508,
        "nombre": "Portezuelo",
        "provincia": "Itata",
        "region_id": 16
    },
    {
        "id": 509,
        "nombre": "Ránquil",
        "provincia": "Itata",
        "region_id": 16
    },
    {
        "id": 510,
        "nombre": "Treguaco",
        "provincia": "Itata",
        "region_id": 16
    },
    {
        "id": 511,
        "nombre": "San Carlos",
        "provincia": "Punilla",
        "region_id": 16
    },
    {
        "id": 512,
        "nombre": "Coihueco",
        "provincia": "Punilla",
        "region_id": 16
    },
    {
        "id": 513,
        "nombre": "Ñiquén",
        "provincia": "Punilla",
        "region_id": 16
    },
    {
        "id": 514,
        "nombre": "San Fabián",
        "provincia": "Punilla",
        "region_id": 16
    },
    {
        "id": 515,
        "nombre": "San Nicolás",
        "provincia": "Punilla",
        "region_id": 16
    },
    {
        "id": 516,
        "nombre": "Concepción",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 517,
        "nombre": "Coronel",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 518,
        "nombre": "Chiguayante",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 519,
        "nombre": "Florida",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 520,
        "nombre": "Hualqui",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 521,
        "nombre": "Lota",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 522,
        "nombre": "Penco",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 523,
        "nombre": "San Pedro de La Paz",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 524,
        "nombre": "Santa Juana",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 525,
        "nombre": "Talcahuano",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 526,
        "nombre": "Tomé",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 527,
        "nombre": "Hualpén",
        "provincia": "Concepción",
        "region_id": 8
    },
    {
        "id": 528,
        "nombre": "Lebu",
        "provincia": "Arauco",
        "region_id": 8
    },
    {
        "id": 529,
        "nombre": "Arauco",
        "provincia": "Arauco",
        "region_id": 8
    },
    {
        "id": 530,
        "nombre": "Cañete",
        "provincia": "Arauco",
        "region_id": 8
    },
    {
        "id": 531,
        "nombre": "Contulmo",
        "provincia": "Arauco",
        "region_id": 8
    },
    {
        "id": 532,
        "nombre": "Curanilahue",
        "provincia": "Arauco",
        "region_id": 8
    },
    {
        "id": 533,
        "nombre": "Los Álamos",
        "provincia": "Arauco",
        "region_id": 8
    },
    {
        "id": 534,
        "nombre": "Tirúa",
        "provincia": "Arauco",
        "region_id": 8
    },
    {
        "id": 535,
        "nombre": "Los Ángeles",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 536,
        "nombre": "Antuco",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 537,
        "nombre": "Cabrero",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 538,
        "nombre": "Laja",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 539,
        "nombre": "Mulchén",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 540,
        "nombre": "Nacimiento",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 541,
        "nombre": "Negrete",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 542,
        "nombre": "Quilaco",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 543,
        "nombre": "Quilleco",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 544,
        "nombre": "San Rosendo",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 545,
        "nombre": "Santa Bárbara",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 546,
        "nombre": "Tucapel",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 547,
        "nombre": "Yumbel",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 548,
        "nombre": "Alto Biobío",
        "provincia": 8,
        "region_id": 8
    },
    {
        "id": 549,
        "nombre": "Temuco",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 550,
        "nombre": "Carahue",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 551,
        "nombre": "Cunco",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 552,
        "nombre": "Curarrehue",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 553,
        "nombre": "Freire",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 554,
        "nombre": "Galvarino",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 555,
        "nombre": "Gorbea",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 556,
        "nombre": "Lautaro",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 557,
        "nombre": "Loncoche",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 558,
        "nombre": "Melipeuco",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 559,
        "nombre": "Nueva Imperial",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 560,
        "nombre": "Padre Las Casas",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 561,
        "nombre": "Perquenco",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 562,
        "nombre": "Pitrufquén",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 563,
        "nombre": "Pucón",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 564,
        "nombre": "Saavedra",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 565,
        "nombre": "Teodoro Schmidt",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 566,
        "nombre": "Toltén",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 567,
        "nombre": "Vilcún",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 568,
        "nombre": "Villarrica",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 569,
        "nombre": "Cholchol",
        "provincia": "Cautín",
        "region_id": 9
    },
    {
        "id": 570,
        "nombre": "Angol",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 571,
        "nombre": "Collipulli",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 572,
        "nombre": "Curacautín",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 573,
        "nombre": "Ercilla",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 574,
        "nombre": "Lonquimay",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 575,
        "nombre": "Los Sauces",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 576,
        "nombre": "Lumaco",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 577,
        "nombre": "Purén",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 578,
        "nombre": "Renaico",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 579,
        "nombre": "Traiguén",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 580,
        "nombre": "Victoria",
        "provincia": "Malleco",
        "region_id": 9
    },
    {
        "id": 581,
        "nombre": "Valdivia",
        "provincia": "Valdivia",
        "region_id": 14
    },
    {
        "id": 582,
        "nombre": "Corral",
        "provincia": "Valdivia",
        "region_id": 14
    },
    {
        "id": 583,
        "nombre": "Lanco",
        "provincia": "Valdivia",
        "region_id": 14
    },
    {
        "id": 584,
        "nombre": 10,
        "provincia": "Valdivia",
        "region_id": 14
    },
    {
        "id": 585,
        "nombre": "Máfil",
        "provincia": "Valdivia",
        "region_id": 14
    },
    {
        "id": 586,
        "nombre": "Mariquina",
        "provincia": "Valdivia",
        "region_id": 14
    },
    {
        "id": 587,
        "nombre": "Paillaco",
        "provincia": "Valdivia",
        "region_id": 14
    },
    {
        "id": 588,
        "nombre": "Panguipulli",
        "provincia": "Valdivia",
        "region_id": 14
    },
    {
        "id": 589,
        "nombre": "La Unión",
        "provincia": "Ranco",
        "region_id": 14
    },
    {
        "id": 590,
        "nombre": "Futrono",
        "provincia": "Ranco",
        "region_id": 14
    },
    {
        "id": 591,
        "nombre": "Lago Ranco",
        "provincia": "Ranco",
        "region_id": 14
    },
    {
        "id": 592,
        "nombre": "Río Bueno",
        "provincia": "Ranco",
        "region_id": 14
    },
    {
        "id": 593,
        "nombre": "Puerto Montt",
        "provincia": "Llanquihue",
        "region_id": 10
    },
    {
        "id": 594,
        "nombre": "Calbuco",
        "provincia": "Llanquihue",
        "region_id": 10
    },
    {
        "id": 595,
        "nombre": "Cochamó",
        "provincia": "Llanquihue",
        "region_id": 10
    },
    {
        "id": 596,
        "nombre": "Fresia",
        "provincia": "Llanquihue",
        "region_id": 10
    },
    {
        "id": 597,
        "nombre": "Frutillar",
        "provincia": "Llanquihue",
        "region_id": 10
    },
    {
        "id": 598,
        "nombre": "Los Muermos",
        "provincia": "Llanquihue",
        "region_id": 10
    },
    {
        "id": 599,
        "nombre": "Llanquihue",
        "provincia": "Llanquihue",
        "region_id": 10
    },
    {
        "id": 600,
        "nombre": "Maullín",
        "provincia": "Llanquihue",
        "region_id": 10
    },
    {
        "id": 601,
        "nombre": "Puerto Varas",
        "provincia": "Llanquihue",
        "region_id": 10
    },
    {
        "id": 602,
        "nombre": "Castro",
        "provincia": "Chiloé",
        "region_id": 10
    },
    {
        "id": 603,
        "nombre": "Ancud",
        "provincia": "Chiloé",
        "region_id": 10
    },
    {
        "id": 604,
        "nombre": "Chonchi",
        "provincia": "Chiloé",
        "region_id": 10
    },
    {
        "id": 605,
        "nombre": "Curaco de Vélez",
        "provincia": "Chiloé",
        "region_id": 10
    },
    {
        "id": 606,
        "nombre": "Dalcahue",
        "provincia": "Chiloé",
        "region_id": 10
    },
    {
        "id": 607,
        "nombre": "Puqueldón",
        "provincia": "Chiloé",
        "region_id": 10
    },
    {
        "id": 608,
        "nombre": "Queilén",
        "provincia": "Chiloé",
        "region_id": 10
    },
    {
        "id": 609,
        "nombre": "Quellón",
        "provincia": "Chiloé",
        "region_id": 10
    },
    {
        "id": 610,
        "nombre": "Quemchi",
        "provincia": "Chiloé",
        "region_id": 10
    },
    {
        "id": 611,
        "nombre": "Quinchao",
        "provincia": "Chiloé",
        "region_id": 10
    },
    {
        "id": 612,
        "nombre": "Osorno",
        "provincia": "Osorno",
        "region_id": 10
    },
    {
        "id": 613,
        "nombre": "Puerto Octay",
        "provincia": "Osorno",
        "region_id": 10
    },
    {
        "id": 614,
        "nombre": "Purranque",
        "provincia": "Osorno",
        "region_id": 10
    },
    {
        "id": 615,
        "nombre": "Puyehue",
        "provincia": "Osorno",
        "region_id": 10
    },
    {
        "id": 616,
        "nombre": "Río Negro",
        "provincia": "Osorno",
        "region_id": 10
    },
    {
        "id": 617,
        "nombre": "San Juan de la Costa",
        "provincia": "Osorno",
        "region_id": 10
    },
    {
        "id": 618,
        "nombre": "San Pablo",
        "provincia": "Osorno",
        "region_id": 10
    },
    {
        "id": 619,
        "nombre": "Chaitén",
        "provincia": "Palena",
        "region_id": 10
    },
    {
        "id": 620,
        "nombre": "Futaleufú",
        "provincia": "Palena",
        "region_id": 10
    },
    {
        "id": 621,
        "nombre": "Hualaihué",
        "provincia": "Palena",
        "region_id": 10
    },
    {
        "id": 622,
        "nombre": "Palena",
        "provincia": "Palena",
        "region_id": 10
    },
    {
        "id": 623,
        "nombre": "Coyhaique",
        "provincia": "Coyhaique",
        "region_id": 11
    },
    {
        "id": 624,
        "nombre": "Lago Verde",
        "provincia": "Coyhaique",
        "region_id": 11
    },
    {
        "id": 625,
        "nombre": "Aysén",
        "provincia": "Aysén",
        "region_id": 11
    },
    {
        "id": 626,
        "nombre": "Cisnes",
        "provincia": "Aysén",
        "region_id": 11
    },
    {
        "id": 627,
        "nombre": "Guaitecas",
        "provincia": "Aysén",
        "region_id": 11
    },
    {
        "id": 628,
        "nombre": "Cochrane",
        "provincia": "Capitán Prat",
        "region_id": 11
    },
    {
        "id": 629,
        "nombre": "O'Higgins",
        "provincia": "Capitán Prat",
        "region_id": 11
    },
    {
        "id": 630,
        "nombre": "Tortel",
        "provincia": "Capitán Prat",
        "region_id": 11
    },
    {
        "id": 631,
        "nombre": "Chile Chico",
        "provincia": "General Carrera",
        "region_id": 11
    },
    {
        "id": 632,
        "nombre": "Río Ibáñez",
        "provincia": "General Carrera",
        "region_id": 11
    },
    {
        "id": 633,
        "nombre": "Punta Arenas",
        "provincia": "Magallanes",
        "region_id": 12
    },
    {
        "id": 634,
        "nombre": "Laguna Blanca",
        "provincia": "Magallanes",
        "region_id": 12
    },
    {
        "id": 635,
        "nombre": "Río Verde",
        "provincia": "Magallanes",
        "region_id": 12
    },
    {
        "id": 636,
        "nombre": "San Gregorio",
        "provincia": "Magallanes",
        "region_id": 12
    },
    {
        "id": 637,
        "nombre": "Cabo de Hornos",
        "provincia": "Antártica Chilena",
        "region_id": 12
    },
    {
        "id": 638,
        "nombre": "Antártica",
        "provincia": "Antártica Chilena",
        "region_id": 12
    },
    {
        "id": 639,
        "nombre": "Porvenir",
        "provincia": "Tierra del Fuego",
        "region_id": 12
    },
    {
        "id": 640,
        "nombre": "Primavera",
        "provincia": "Tierra del Fuego",
        "region_id": 12
    },
    {
        "id": 641,
        "nombre": "Timaukel",
        "provincia": "Tierra del Fuego",
        "region_id": 12
    },
    {
        "id": 642,
        "nombre": "Natales",
        "provincia": "Última Esperanza",
        "region_id": 12
    },
    {
        "id": 643,
        "nombre": "Torres del Paine",
        "provincia": "Última Esperanza",
        "region_id": 12
    },
    {
        "id": 644,
        "nombre": "Santiago",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 645,
        "nombre": "Cerrillos",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 646,
        "nombre": "Cerro Navia",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 647,
        "nombre": "Conchalí",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 648,
        "nombre": "El Bosque",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 649,
        "nombre": "Estación Central",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 650,
        "nombre": "Huechuraba",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 651,
        "nombre": "Independencia",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 652,
        "nombre": "La Cisterna",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 653,
        "nombre": "La Florida",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 654,
        "nombre": "La Granja",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 655,
        "nombre": "La Pintana",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 656,
        "nombre": "La Reina",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 657,
        "nombre": "Las Condes",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 658,
        "nombre": "Lo Barnechea",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 659,
        "nombre": "Lo Espejo",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 660,
        "nombre": "Lo Prado",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 661,
        "nombre": "Macul",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 662,
        "nombre": "Maipú",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 663,
        "nombre": "Ñuñoa",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 664,
        "nombre": "Pedro Aguirre Cerda",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 665,
        "nombre": "Peñalolén",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 666,
        "nombre": "Providencia",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 667,
        "nombre": "Pudahuel",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 668,
        "nombre": "Quilicura",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 669,
        "nombre": "Quinta Normal",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 670,
        "nombre": "Recoleta",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 671,
        "nombre": "Renca",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 672,
        "nombre": "San Joaquín",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 673,
        "nombre": "San Miguel",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 674,
        "nombre": "San Ramón",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 675,
        "nombre": "Vitacura",
        "provincia": "Santiago",
        "region_id": 13
    },
    {
        "id": 676,
        "nombre": "Puente Alto",
        "provincia": "Cordillera",
        "region_id": 13
    },
    {
        "id": 677,
        "nombre": "Pirque",
        "provincia": "Cordillera",
        "region_id": 13
    },
    {
        "id": 678,
        "nombre": "San José de Maipo",
        "provincia": "Cordillera",
        "region_id": 13
    },
    {
        "id": 679,
        "nombre": "Colina",
        "provincia": "Chacabuco",
        "region_id": 13
    },
    {
        "id": 680,
        "nombre": "Lampa",
        "provincia": "Chacabuco",
        "region_id": 13
    },
    {
        "id": 681,
        "nombre": "Til Til",
        "provincia": "Chacabuco",
        "region_id": 13
    },
    {
        "id": 682,
        "nombre": "San Bernardo",
        "provincia": "Maipo",
        "region_id": 13
    },
    {
        "id": 683,
        "nombre": "Buin",
        "provincia": "Maipo",
        "region_id": 13
    },
    {
        "id": 684,
        "nombre": "Calera de Tango",
        "provincia": "Maipo",
        "region_id": 13
    },
    {
        "id": 685,
        "nombre": "Paine",
        "provincia": "Maipo",
        "region_id": 13
    },
    {
        "id": 686,
        "nombre": "Melipilla",
        "provincia": "Melipilla",
        "region_id": 13
    },
    {
        "id": 687,
        "nombre": "Alhué",
        "provincia": "Melipilla",
        "region_id": 13
    },
    {
        "id": 688,
        "nombre": "Curacaví",
        "provincia": "Melipilla",
        "region_id": 13
    },
    {
        "id": 689,
        "nombre": "María Pinto",
        "provincia": "Melipilla",
        "region_id": 13
    },
    {
        "id": 690,
        "nombre": "San Pedro",
        "provincia": "Melipilla",
        "region_id": 13
    },
    {
        "id": 691,
        "nombre": "Talagante",
        "provincia": "Talagante",
        "region_id": 13
    },
    {
        "id": 692,
        "nombre": "El Monte",
        "provincia": "Talagante",
        "region_id": 13
    },
    {
        "id": 693,
        "nombre": "Isla de Maipo",
        "provincia": "Talagante",
        "region_id": 13
    },
    {
        "id": 694,
        "nombre": "Padre Hurtado",
        "provincia": "Talagante",
        "region_id": 13
    },
    {
        "id": 695,
        "nombre": "Peñaflor",
        "provincia": "Talagante",
        "region_id": 13
    }
];

var region = document.getElementById("Region")
var arregloderegion= [
 	{
 		id: "1",
 		nombre: "Región de Tarapacá"
 	},
	{
		id: "2",
		nombre: "Región de Antofagasta"
	},
	{
		id: "3",
		nombre: "Región de Atacama"
	},
	{
		id: "4",
		nombre: "Región de Coquimbo"
	},
	{
		id: "5",
		nombre: "Región de Valparaíso"
	},
	{
		id: "6",
		nombre: "Región del Libertador General Bernardo O’Higgins"
	},
	{
		id: "7",
		nombre: "Región del Maule"
	},
	{
		id: "8",
		nombre: "Región del Biobío"
	},
	{
		id: "9",
		nombre: "Región de La Araucanía"
	},
	{
		id: "10",
		nombre: "Región de Los Lagos"
	},
	{
		id: "11",
		nombre: "Región Aysén del General Carlos Ibáñez del Campo"
	},
	{
		id: "12",
		nombre: "Región de Magallanes y Antártica Chilena"
	},
	{
		id: "13",
		nombre: "Región Metropolitana de Santiago"
	},
	{
		id: "14",
		nombre: "Región de Los Ríos"
	},
	{
		id: "15",
		nombre: "Región de Arica y Parinacota"
	},
	{
		id: "16",
		nombre: "Región de Ñuble"
	}
];

var option=""
option += `<option value="0" disabled selected > Seleccione una opción </option>`
for(var index in arregloderegion) 

	{ 

	 option += `<option value="${arregloderegion[index].id}"> ${arregloderegion[index].nombre}</option>`
	}

Region.innerHTML= option

function selprovincia () {
}

var onlyprovincia = []


document.getElementById("Region").addEventListener("change",function(){

onlyprovincia= []

document.getElementById("Comuna").innerHTML=""

var provincia = document.getElementById("Provincia")
	
for(var index in arreglodeprovincia) { 

	 var regionval= document.getElementById("Region").value
		if (regionval == arreglodeprovincia[index].region_id) {
			if (onlyprovincia.includes(arreglodeprovincia[index].provincia)== false){
				onlyprovincia.push(arreglodeprovincia[index].provincia)

			}
		}

	}

	var optionp=""
	optionp += `<option value="0"> Seleccione una opción </option>`
	for(var index in onlyprovincia){
		optionp += `<option value="${onlyprovincia[index]}"> ${onlyprovincia[index]}</option>`
	}


Provincia.innerHTML= optionp
})






document.getElementById("Provincia").addEventListener("change",function(){


var comuna = document.getElementById("Comuna")
var optionc=""	
optionc += `<option value="0" disabled selected > Seleccione una opción </option>`
for(var index in arreglodeprovincia) { 

	 var provinciaval= document.getElementById("Provincia").value
		if (provinciaval == arreglodeprovincia[index].provincia) {
			optionc += `<option value="${arreglodeprovincia[index].id}"> ${arreglodeprovincia[index].nombre}</option>`
				
		}

	}

	Comuna.innerHTML= optionc
})

	



function validar(){
        
		var nombre, apellidopaterno, apellidomaterno, direccion;
		nombre = document.getElementById("nombre").value;
		apellidopaterno = document.getElementById("apellidopaterno").value;
		apellidomaterno = document.getElementById("apellidomaterno").value;
		direccion = document.getElementById("direccion").value;
		region = document.getElementById("Region").value;
		provincia = document.getElementById("Provincia").value;
		comuna = document.getElementById("Comuna").value;

	if (nombre=="" || apellidopaterno=="" || apellidomaterno=="" || direccion=="" || comuna==0 || region==0 || provincia==0) {
	alert("Es obligatorio llenar todos los campos");
	return false;
    }



	var nombre = document.getElementById("nombre").value;
	var apellidopaterno = document.getElementById("apellidopaterno").value;
	var apellidomaterno = document.getElementById("apellidomaterno").value;
	var direccion = document.getElementById("direccion").value;
	var comuna = document.getElementById("Comuna").options[document.getElementById("Comuna").selectedIndex].text;

    if(document.querySelector("#addRow").getAttribute("name") != "")
    {document.querySelector('input[name="radiobox"]:checked').closest('tr').remove()}
    console.log(document.querySelector("#addRow").getAttribute("name"))

	var table = document.getElementById("Tdatos") [0];
    arrayId.push((arrayId.length)+1);

	var newRow = Tdatos.insertRow(1);
	var cel6 = newRow.insertCell(0);
    var cel1 = newRow.insertCell(1);
    var cel2 = newRow.insertCell(2);
    var cel3 = newRow.insertCell(3);
    var cel4 = newRow.insertCell(4);
    var cel5 = newRow.insertCell(5);

	cel1.innerHTML = `<p id="nombre${arrayId.length}">${nombre}</p>`;
	cel2.innerHTML = `<p id="apellidopaterno${arrayId.length}">${apellidopaterno}</p>`;
	cel3.innerHTML = `<p id="apellidomaterno${arrayId.length}">${apellidomaterno}</p>`;
	cel4.innerHTML = `<p id="direccion${arrayId.length}">${direccion}</p>`;
	cel5.innerHTML = `<p id="comuna${arrayId.length}">${comuna}</p>`;
    cel6.innerHTML = `<input type='radio' onclick='pasar_datos(${arrayId.length})' name='radiobox' id='${arrayId.length}'>`;

    document.querySelector("#addRow").setAttribute("name","")

 	 document.getElementById("nombre").value = ""
 	 document.getElementById("apellidopaterno").value  = ""
	 document.getElementById("apellidomaterno").value = ""
	 document.getElementById("direccion").value = ""
	 document.getElementById("Region").value = 0
	 document.getElementById("Provincia").value = 0
	 document.getElementById("Comuna").value = 0
} 



document.getElementById("addRow").addEventListener("click", function(){ 
	validar()
})

pasar_datos=function(arrayId){
     document.getElementById("nombre").value = document.getElementById(`nombre${arrayId}`).innerHTML;
     document.getElementById("apellidopaterno").value = document.getElementById(`apellidopaterno${arrayId}`).innerHTML
     document.getElementById("apellidomaterno").value = document.getElementById(`apellidomaterno${arrayId}`).innerHTML
     document.getElementById("direccion").value = document.getElementById(`direccion${arrayId}`).innerHTML
     document.getElementById("Region").value = 0;
     document.getElementById("Provincia").value = 0;
     document.getElementById("Comuna").value = 0;

     document.querySelector("#addRow").setAttribute("name",arrayId)


}



    document.getElementById("Eliminar").addEventListener("click", function(event){ 
            

            document.querySelector('input[name="radiobox"]:checked').closest('tr').remove();
            
             document.getElementById("nombre").value = ""
             document.getElementById("apellidopaterno").value  = ""
             document.getElementById("apellidomaterno").value = ""
             document.getElementById("direccion").value = ""
             document.getElementById("Region").value = 0
             document.getElementById("Provincia").value = 0
             document.getElementById("Comuna").value = 0    
        
            document.getElementById("nombre").focus();
            document.getElementById("nombre").select();
    })








})

