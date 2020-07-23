import { Injectable } from '@angular/core';

@Injectable()
export class MovieRecomendationsService {
  constructor() { }

  getRecomendations() {
    return RECOMENDATIONS;
  }
}

const RECOMENDATIONS = {
  "page": 1,
  "results": [
    {
      "id": 359724,
      "video": false,
      "vote_count": 2420,
      "vote_average": 7.9,
      "title": "Ford v Ferrari",
      "release_date": "2019-11-13",
      "original_language": "en",
      "original_title": "Ford v Ferrari",
      "genre_ids": [
        28,
        18
      ],
      "backdrop_path": "/n3UanIvmnBlH531pykuzNs4LbH6.jpg",
      "adult": false,
      "overview": "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
      "poster_path": "/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",
      "popularity": 49.612
    },
    {
      "id": 546554,
      "video": false,
      "vote_count": 3621,
      "vote_average": 7.8,
      "title": "Knives Out",
      "release_date": "2019-11-27",
      "original_language": "en",
      "original_title": "Knives Out",
      "genre_ids": [
        35,
        80,
        18,
        9648,
        53
      ],
      "backdrop_path": "/AbRYlvwAKHs0YuyNO6NX9ofq4l6.jpg",
      "adult": false,
      "overview": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
      "poster_path": "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
      "popularity": 64.947
    },
    {
      "id": 466272,
      "video": false,
      "vote_count": 5785,
      "vote_average": 7.5,
      "title": "Once Upon a Time… in Hollywood",
      "release_date": "2019-07-25",
      "original_language": "en",
      "original_title": "Once Upon a Time… in Hollywood",
      "genre_ids": [
        35,
        18,
        53
      ],
      "backdrop_path": "/er1S5nJyDSkmy7i2KkPMBjbwK8x.jpg",
      "adult": false,
      "overview": "Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…",
      "poster_path": "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
      "popularity": 62.922
    },
    {
      "id": 453405,
      "video": false,
      "vote_count": 1935,
      "vote_average": 6.2,
      "title": "Gemini Man",
      "release_date": "2019-10-02",
      "original_language": "en",
      "original_title": "Gemini Man",
      "genre_ids": [
        28,
        53
      ],
      "backdrop_path": "/sfW7GcOuwZFuCxVoU5ULlkiDJ7Q.jpg",
      "adult": false,
      "overview": "Aging assassin Henry Brogen is about to retire but finds himself fighting his own clone who is 25 years younger and at the peak of his abilities.",
      "poster_path": "/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
      "popularity": 33.195
    },
    {
      "adult": false,
      "backdrop_path": "/jrudoaXcoLyHRPdolyOGemXgPEs.jpg",
      "genre_ids": [
        36,
        18
      ],
      "id": 369972,
      "original_language": "en",
      "original_title": "First Man",
      "overview": "A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.",
      "poster_path": "/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg",
      "release_date": "2018-10-11",
      "title": "First Man",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 3247,
      "popularity": 18.131
    },
    {
      "adult": false,
      "backdrop_path": "/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 181812,
      "original_language": "en",
      "original_title": "Star Wars: The Rise of Skywalker",
      "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
      "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      "release_date": "2019-12-18",
      "title": "Star Wars: The Rise of Skywalker",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 4107,
      "popularity": 174.345
    },
    {
      "id": 530915,
      "video": false,
      "vote_count": 4371,
      "vote_average": 7.9,
      "title": "1917",
      "release_date": "2019-12-25",
      "original_language": "en",
      "original_title": "1917",
      "genre_ids": [
        28,
        18,
        53,
        10752
      ],
      "backdrop_path": "/2WgieNR1tGHlpJUsolbVzbUbE1O.jpg",
      "adult": false,
      "overview": "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
      "poster_path": "/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",
      "popularity": 84.849
    },
    {
      "id": 290859,
      "video": false,
      "vote_count": 2078,
      "vote_average": 6.4,
      "title": "Terminator: Dark Fate",
      "release_date": "2019-10-23",
      "original_language": "en",
      "original_title": "Terminator: Dark Fate",
      "genre_ids": [
        28,
        12,
        878
      ],
      "backdrop_path": "/riTANvQ8GKmQbgtC1ps3OfkU43A.jpg",
      "adult": false,
      "overview": "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
      "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
      "popularity": 42.623
    },
    {
      "adult": false,
      "backdrop_path": "/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg",
      "genre_ids": [
        80,
        18,
        36
      ],
      "id": 398978,
      "original_language": "en",
      "original_title": "The Irishman",
      "overview": "Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.",
      "poster_path": "/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
      "release_date": "2019-11-01",
      "title": "The Irishman",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 3266,
      "popularity": 36.75
    },
    {
      "id": 530385,
      "video": false,
      "vote_count": 2144,
      "vote_average": 7.1,
      "title": "Midsommar",
      "release_date": "2019-07-03",
      "original_language": "en",
      "original_title": "Midsommar",
      "genre_ids": [
        18,
        27,
        9648
      ],
      "backdrop_path": "/g6GtOfXtzDpY73ef7wludoorTti.jpg",
      "adult": false,
      "overview": "Several friends travel to Sweden to study as anthropologists a summer festival that is held every ninety years in the remote hometown of one of them. What begins as a dream vacation in a place where the sun never sets, gradually turns into a dark nightmare as the mysterious inhabitants invite them to participate in their disturbing festive activities.",
      "poster_path": "/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg",
      "popularity": 26.785
    },
    {
      "adult": false,
      "backdrop_path": "/jb6Ju38HmKX0bYHCmAxs8HyNeJ2.jpg",
      "genre_ids": [
        878,
        28
      ],
      "id": 373571,
      "original_language": "en",
      "original_title": "Godzilla: King of the Monsters",
      "overview": "Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species - thought to be mere myths - rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
      "poster_path": "/pU3bnutJU91u3b4IeRPQTOP8jhV.jpg",
      "release_date": "2019-05-29",
      "title": "Godzilla: King of the Monsters",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 2417,
      "popularity": 33.212
    },
    {
      "id": 501170,
      "video": false,
      "vote_count": 1516,
      "vote_average": 7.1,
      "title": "Doctor Sleep",
      "release_date": "2019-10-30",
      "original_language": "en",
      "original_title": "Doctor Sleep",
      "genre_ids": [
        18,
        14,
        27,
        53
      ],
      "backdrop_path": "/A1lvRqwbLz0PIs5QyivFVzCarc6.jpg",
      "adult": false,
      "overview": "Still irrevocably scarred by the trauma he endured as a child at the Overlook, Dan Torrance has fought to find some semblance of peace. But that peace is shattered when he encounters Abra, a courageous teenager with her own powerful extrasensory gift, known as the 'shine'. Instinctively recognising that Dan shares her power, Abra has sought him out, desperate for his help against the merciless Rose the Hat and her followers.",
      "poster_path": "/p69QzIBbN06aTYqRRiCOY1emNBh.jpg",
      "popularity": 35.792
    },
    {
      "id": 503919,
      "video": false,
      "vote_count": 1230,
      "vote_average": 7.6,
      "title": "The Lighthouse",
      "release_date": "2019-10-18",
      "original_language": "en",
      "original_title": "The Lighthouse",
      "genre_ids": [
        18,
        14,
        27,
        9648
      ],
      "backdrop_path": "/r4uBaF8VCdIcEp38jUpdxKP8eLJ.jpg",
      "adult": false,
      "overview": "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
      "poster_path": "/3nk9UoepYmv1G9oP18q6JJCeYwN.jpg",
      "popularity": 37.725
    },
    {
      "id": 458156,
      "video": false,
      "vote_count": 4525,
      "vote_average": 7.2,
      "title": "John Wick: Chapter 3 - Parabellum",
      "release_date": "2019-05-15",
      "original_language": "en",
      "original_title": "John Wick: Chapter 3 - Parabellum",
      "genre_ids": [
        28,
        80,
        53
      ],
      "backdrop_path": "/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg",
      "adult": false,
      "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
      "poster_path": "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      "popularity": 50.966
    },
    {
      "id": 496243,
      "video": false,
      "vote_count": 6547,
      "vote_average": 8.5,
      "title": "Parasite",
      "release_date": "2019-05-30",
      "original_language": "ko",
      "original_title": "기생충",
      "genre_ids": [
        35,
        18,
        53
      ],
      "backdrop_path": "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
      "adult": false,
      "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "popularity": 93.738
    },
    {
      "id": 338967,
      "video": false,
      "vote_count": 2093,
      "vote_average": 7,
      "title": "Zombieland: Double Tap",
      "release_date": "2019-10-09",
      "original_language": "en",
      "original_title": "Zombieland: Double Tap",
      "genre_ids": [
        28,
        35,
        27
      ],
      "backdrop_path": "/3ghImmHdp4RnC3UkL6hpLayclnb.jpg",
      "adult": false,
      "overview": "Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.",
      "poster_path": "/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg",
      "popularity": 29.378
    },
    {
      "id": 522627,
      "video": false,
      "vote_count": 956,
      "vote_average": 7.8,
      "title": "The Gentlemen",
      "release_date": "2020-01-01",
      "original_language": "en",
      "original_title": "The Gentlemen",
      "genre_ids": [
        28,
        35,
        80
      ],
      "backdrop_path": "/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg",
      "adult": false,
      "overview": "American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that he’s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
      "poster_path": "/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg",
      "popularity": 86.374
    },
    {
      "id": 320288,
      "video": false,
      "vote_count": 3270,
      "vote_average": 6,
      "title": "Dark Phoenix",
      "release_date": "2019-06-05",
      "original_language": "en",
      "original_title": "Dark Phoenix",
      "genre_ids": [
        28,
        12,
        878
      ],
      "backdrop_path": "/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg",
      "adult": false,
      "overview": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
      "poster_path": "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
      "popularity": 43.71
    },
    {
      "id": 479455,
      "video": false,
      "vote_count": 2387,
      "vote_average": 5.9,
      "title": "Men in Black: International",
      "release_date": "2019-06-12",
      "original_language": "en",
      "original_title": "Men in Black: International",
      "genre_ids": [
        35,
        878
      ],
      "backdrop_path": "/enNSnMYj78ihLmiWrB4K6ymv9ux.jpg",
      "adult": false,
      "overview": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
      "poster_path": "/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg",
      "popularity": 25.116
    },
    {
      "id": 475557,
      "video": false,
      "vote_count": 11651,
      "vote_average": 8.2,
      "title": "Joker",
      "release_date": "2019-10-02",
      "original_language": "en",
      "original_title": "Joker",
      "genre_ids": [
        80,
        18,
        53
      ],
      "backdrop_path": "/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
      "adult": false,
      "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "popularity": 103.145
    }
  ],
  "total_pages": 2,
  "total_results": 40
}