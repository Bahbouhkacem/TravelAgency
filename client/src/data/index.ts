// Destinations data for the homepage
export const destinations = [
  {
    title: "Turkya",
    description: "Explorez Istanbul et ses trésors ottomans",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    linkUrl: "/voyage-turkya"
  },
  {
    title: "Armenia",
    description: "Découvrez l'histoire millénaire arménienne",
    imageUrl: "/src/public/images/a2.jpg",
    linkUrl: "/voyage-armenia"
  },
  {
    title: "Sri Lanka",
    description: "Plages paradisiaques et patrimoine culturel",
    imageUrl: "/src/public/images/a1.jpg",
    linkUrl: "/voyage-srilanka"
  },
  {
    title: "Umrah",
    description: "Voyages spirituels avec nos forfaits exclusifs",
    imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    linkUrl: "/umrah"
  }
];

// Tour packages for Turkya
export const turkyaPackages = [
  {
    title: "Découverte d'Istanbul",
    price: 800,
    duration: "5 jours / 4 nuits",
    description: "Explorez la ville d'Istanbul, à cheval entre l'Europe et l'Asie. Visitez la Mosquée Bleue, Sainte-Sophie, le Palais de Topkapi et profitez d'une croisière sur le Bosphore.",
    features: [
      "Hôtel 4★ en centre-ville",
      "Demi-pension",
      "Guide francophone"
    ],
    imageUrl: "https://images.unsplash.com/photo-1636201948348-2ec57e9940dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    title: "Magie de la Cappadoce",
    price: 1200,
    duration: "7 jours / 6 nuits",
    description: "Un circuit complet incluant Istanbul et la Cappadoce. Admirez les paysages lunaires et les cheminées de fée, avec une option vol en montgolfière pour contempler le lever du soleil.",
    features: [
      "Hôtels 4★ et 5★",
      "Pension complète",
      "Vols intérieurs inclus"
    ],
    imageUrl: "https://images.unsplash.com/photo-1664216022985-8ea77f9574d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  }
];

// Tour packages for Armenia
export const armeniaPackages = [
  {
    title: "Découverte de Yerevan",
    price: 750,
    duration: "4 jours / 3 nuits",
    description: "Explorez la capitale arménienne, visitez le Matenadaran, le Musée d'Histoire, la Cascade et dégustez les vins et cognacs arméniens. Excursion incluse au lac Sevan.",
    features: [
      "Hôtel 4★ au centre de Yerevan",
      "Petit-déjeuner inclus",
      "Guide francophone"
    ],
    imageUrl: "https://images.unsplash.com/photo-1593766821434-bd1f95a5492d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    title: "Arménie Complète",
    price: 1400,
    duration: "8 jours / 7 nuits",
    description: "Un circuit complet pour découvrir les trésors de l'Arménie: Yerevan, les monastères de Geghard et Khor Virap, le lac Sevan, Dilijan et la vue spectaculaire du mont Ararat.",
    features: [
      "Hôtels 4★",
      "Demi-pension",
      "Transport privé"
    ],
    imageUrl: "https://images.unsplash.com/photo-1589525468261-91268e6cc69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  }
];

// Tour packages for Sri Lanka
export const sriLankaPackages = [
  {
    title: "Plages et Culture du Sri Lanka",
    price: 950,
    duration: "6 jours / 5 nuits",
    description: "Découvrez la beauté naturelle du Sri Lanka, avec ses plages paradisiaques, son patrimoine culturel et sa cuisine délicieuse. Visite de Colombo et temps libre à Negombo Beach.",
    features: [
      "Hôtels 4★ et bungalows en bord de mer",
      "Demi-pension",
      "Guide anglophone"
    ],
    imageUrl: "https://images.unsplash.com/photo-1586958611585-fd2ec99bbe25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    title: "Sri Lanka Authentique",
    price: 1350,
    duration: "10 jours / 9 nuits",
    description: "Un circuit complet à travers l'île, incluant les sites du patrimoine mondial comme Sigiriya et Kandy, les plantations de thé de Nuwara Eliya et la réserve naturelle de Yala.",
    features: [
      "Hôtels 4★",
      "Demi-pension",
      "Safari dans le parc national de Yala",
      "Visite d'une plantation de thé"
    ],
    imageUrl: "https://images.unsplash.com/photo-1586868538229-b684f4190b59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  }
];

// Umrah packages
export const umrahPackages = [
  {
    title: "Forfait Économique",
    price: 1200,
    duration: "10 jours / 9 nuits",
    hotelInfo: "Hôtels 3★",
    kaabaDistance: "900m de la Kaaba (La Mecque)",
    features: [
      "Vol avec escale",
      "Petit-déjeuner inclus",
      "Transferts aéroport-hôtel",
      "Guide spirituel francophone"
    ],
    isPopular: false
  },
  {
    title: "Forfait Standard",
    price: 1800,
    duration: "12 jours / 11 nuits",
    hotelInfo: "Hôtels 4★",
    kaabaDistance: "500m de la Kaaba (La Mecque)",
    features: [
      "Vol direct",
      "Demi-pension",
      "Transferts privés",
      "Guide spirituel et assistance 24/7",
      "Visite guidée de Médine"
    ],
    isPopular: true
  },
  {
    title: "Forfait Premium",
    price: 2800,
    duration: "15 jours / 14 nuits",
    hotelInfo: "Hôtels 5★",
    kaabaDistance: "Vue sur la Kaaba",
    features: [
      "Vol direct en classe affaires",
      "Pension complète",
      "Transferts en limousine privée",
      "Accompagnement VIP personnalisé",
      "Visites supplémentaires incluses"
    ],
    isPopular: false
  }
];

// Hotels data in Tunisia
export const hotels = [
  {
    name: "Steigenberger Marhaba Hammamet",
    location: "Tunisie",
    description: "Hôtel de luxe en bord de mer avec plage privée, offrant une expérience balnéaire exceptionnelle à Hammamet.",
    price: 120,
    stars: 5,
    address: "Zone Touristique, Hammamet",
    amenities: ["Plage privée", "Spa", "Wi-Fi gratuit", "Piscines", "Restaurant gastronomique"],
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    name: "Movenpick Resort & Marine Spa Sousse",
    location: "Tunisie",
    description: "Complexe hôtelier de luxe à Sousse avec vue panoramique sur la Méditerranée et accès direct à la plage.",
    price: 145,
    stars: 5,
    address: "Boulevard du 14 Janvier, Sousse",
    amenities: ["Spa marin", "Restaurants multiples", "Piscines", "Centre de fitness", "Activités nautiques"],
    imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    name: "Royal Thalassa Monastir",
    location: "Tunisie",
    description: "Hôtel thalasso & spa 5 étoiles situé au coeur de Monastir, avec son centre de thalassothérapie renommé.",
    price: 135,
    stars: 5,
    address: "Zone Touristique Skanes, Monastir",
    amenities: ["Centre de thalassothérapie", "Piscines intérieure et extérieure", "Restaurants gourmet", "Tennis", "Golf à proximité"],
    imageUrl: "https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  },
  {
    name: "Radisson Blu Palace Resort & Thalasso Djerba",
    location: "Tunisie",
    description: "Élégant hôtel de luxe sur l'île de Djerba, avec un centre de thalassothérapie d'exception et une plage privée.",
    price: 160,
    stars: 5,
    address: "Zone Touristique, Djerba",
    amenities: ["Centre de thalasso", "Plage privée", "Cuisine internationale", "Piscines", "Kids Club"],
    imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80"
  }
];

// Our Partners data
export const partners = [
  {
  
  name: "Turkish Airlines",
  logo: "https://cp13.tn.oxa.host:2083/cpsess5829041803/frontend/jupiter/filemanager/showfile.html?file=a1.jpg&fileop=&dir=%2Fhome2%2Frdeuuyus%2Fpublic_html%2Fimages&dirop=&charset=&file_charset=&baseurl=&basedir=",

  description: "Compagnie aérienne nationale de la Turquie"
  },
  {
    name: "Royal Air Maroc",
    logo: "/src/public/images/RA.png",
    description: "Compagnie aérienne nationale du Maroc"
  },
  {
    name: "Tunisair",
    logo: "/src/public/images/tun.png",
    description: "Compagnie aérienne nationale de la Tunisie"
  },
  {
    name: "Accor Hotels",
    logo: "/src/public/images/acor.png",
    description: "Groupe hôtelier multinational français"
  },
  {
    name: "Marriott International",
    logo: "/src/public/images/mar.png",
    description: "Groupe hôtelier américain"
  },
  {
    name: "Saudia",
    logo: "/src/public/images/sau.png",
    description: "Compagnie aérienne nationale de l'Arabie Saoudite"
  }
];

// Hero slider images
export const heroSlides = [
  {
    title: "Découvrez le Monde avec Élégance",
    subtitle: "Voyages sur mesure et expériences inoubliables avec TravelAgency",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080&q=80"
  },
  {
    title: "Explorez la Tunisie",
    subtitle: "Des plages paradisiaques aux médinas authentiques",
    imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080&q=80"
  },
  {
    title: "Sri Lanka: L'Île aux Mille Merveilles",
    subtitle: "Des plages idylliques aux plantations de thé en altitude",
    imageUrl: "https://images.unsplash.com/photo-1578128178799-ffac2a1d3f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080&q=80"
  },
  {
    title: "Vivez l'Expérience Umrah",
    subtitle: "Un voyage spirituel avec un service d'excellence",
    imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080&q=80"
  }
];