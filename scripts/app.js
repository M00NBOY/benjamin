// var data;

// function ajax(){
//     fetch("scripts/story.json")
//     .then(function(res){
//         return res.json()
//     }).then(function(story){
//         data = story
//     })
// }

const data = {
  "intro": {
      "step":[{
          "text":"benjamin se réveille. De fins faisceaux de lumière s'écrasent sur une porte entrouverte, et viennent éclairer un mur éclaboussé de sang. benjamin est pris d'un mal de crâne inexplicable. \"Et puis qu'est ce que je fais là pour commencer ?\" se demande-t-il, avant de réaliser que, mis à part son prénom, il ne se souvient de rien. Rien. Nada. Walou. C'est le trou noir."
      }, {
          "text":" \"Bon. Pour commencer je vais sortir d'ici, puis je vais retrouver la raison de ma présence ici, ma mémoire va sûrement revenir !\" annonce-t-il à voix haute tout en se dirigeant vers la seule porte des lieux. D'un grand geste benjamin appuie sur la poignée et pousse la porte, mais rien ne se passe..."
      }, {
          "text": "La porte s'ouvre dans l'autre sens. Il effectue donc le mouvement inverse et parvient à sortir de la pièce. Le torrent de lumière qui l'assaille l'oblige à fermer les yeux. Après quelques instants, sa vision s'accomode et il comprend très vite qu'il se trouve dans une banque, en pleine journée. \"Mais qu'est ce que je fais ici bon sang ?\" chuchotte benjamin. Son apparation n'a visiblement alerté personne. Deux choix s'offrent alors à lui :"
      }],
      "choices": [{
          "text": "Se faire discret et écouter les conversations des gens présent dans la BANQUE",
          "target": "good1A"
      }, {
          "text": "Parler à la seule personne qui a l'air de travailler ici : la BANQUIERE.",
          "target": "bad1A"
      }],
      "image" : "./assets/img/background_room.png",
      "music" : "./assets/sounds/23sept.mp3"
  },

  "good1A": {
      "step":[{
          "text":"benjamin s'asseoit de la manière la plus naturelle qu'il soit. \"Mdr ça rime\" pense-t-il alors. Haha, et en effet, il n'a pas tord. Non content d'avoir abattu le 4ème mur comme un Bulldozer D3K2 TIER 4 FINAL™, benjamin décide d'espionner les conversations (comme l'a décidé le lecteur qui a l'air d'être un sacré sociopathe)."
      }, {
          "text":" Une vieille dame chuchotte à sa voisine \"Je ne rêve pas, elle n'était pas là cette banque hier ? Elle n'a pas pu pousser pendant la nuit tout de même ?\". \"Mais qu'est-ce qu'elle raconte ?\" pense benjamin \"Sénile à son âge ?\". benjamin commence à trouver cet endroit de plus en plus louche, il a cependant le choix entre :"
      }],
      "choices": [{
          "text": "Sortir de la BANQUE",
          "target": "good2A"
          }, {
          "text": "Parler à la seule personne qui a l'air de travailler ici : la BANQUIERE.",
          "target": "bad1A"
      }],
      "image" : "./assets/img/background_bank.png",
      "music" : "./assets/sounds/bubu.mp3"
  },

  "good2A": {
      "step":[{
          "text":"Une fois dehors, benjamin se demande quel endroit serait le plus enclin à lui permettre de retrouver sa mémoire perdue. Après avoir laissé traîné son regard aux alentours, deux batîments attirent son attention : un cinéma et une piscine municipale."
      }, {
          "text":"Il y a bien un bar, mais avec sa mémoire défaillante, il n'avait plus aucun souvenir du fameux cliché du barman qui distille des informations au héros. benjamin n'a de toute manière pas soif.. Pendant que vous, lecteur, lisiez, un gentilhomme passe par là. benjamin pourrait s'adresser à ce passant"
      }],
      "choices": [{
          "text": "Aller au CINÉMA",
          "target": "good2B"
          },
          {
          "text": "Aller à la PISCINE MUNICIPALE",
          "target": "good2C"
          }, {
          "text": "Parler au PASSANT",
          "target": "good3A"
      }],
      "image" : "./assets/img/background_outside01.png",
      "music" : "./assets/sounds/bubu.mp3"
  },

  "good3A": {
      "step":[{
          "text":"benjamin peine à parler \"gnnngh...\". Passant : \"mdrrrr il t'arrive quoi ?\". benjamin : \"Haha j'avais l'air complétement idiot à l'instant\". Passant : \" Yes mec on dirait même que tu viens juste de perdre la mémoire\". benjamin : \"Comment tu sais ça ??\". Passant : \"Ok je disais ça au pif c'est un peu flippant... Je sais où aller si tu veux retrouver la mémoire ! Suis-moi !\". "
      }, {
          "text":"benjamin et son nouveau compagnon se dirigent vers le bar. Le passant s'adresse à notre héros amnésique : \"Je m'appelle Tony au fait, enfin \"au fait\" c'est pas mon nom de famille hein, moi c'est Tony Sosa\". benjamin : \"Moi c'est benjamin, mais attention, ça se prononce benjamin !!!\". Tony : \"Le bar c'est l'endroit idéal pour trouver des informations, j'ai vu ça dans des films\""
      }],
      "choices": [{
          "text": "Aller au BAR avec Tony Sosa",
          "target": "good4A"
      }],
      "image" : "./assets/img/background_outside04.png",
      "music" : "./assets/sounds/bubu.mp3"
  },

  "good4A": {
      "step":[{
          "text":"Notre héros, maintenant accompagné de son compère Tony, fonce en direction du bar pour parler au barman. benjamin s'adresse à l'employé pour lui demander des informations. Le barman reste muet. benjamin insiste. Le barman gromelle."
      }],
      "choices": [{
          "text": "Commander à boire pour réfléchir",
          "target": "good5A"
          }, {
          "text": "Insister",
          "target": "good5B"
      }],
      "image" : "./assets/img/background_bar.png",
      "music" : "./assets/sounds/amisdisco.mp3"
  },

  "good5A": {
      "step":[{
          "text":"benjamin : \"Barman.. un p'tit lait siouplé\". Barman : \"Aaah... En voilà un homme de goût ! Ok j'accepte de vous en dire plus\". benjamin : \"Sérieux ?!\". Barman : \"Ouaip, tu devrais aller voir l'effaceur de capacité Pokémon™... il s'est reconverti dans l'étude de la mémoire humaine. Dites lui que vous venez de la part de Bar Manne.\". benjamin et Tony ont désormais les informations pour lesquelles ils étaient venu, ils décidents de"
      }],
      "choices": [{
          "text": "Sortir du bar",
          "target": "good6A"
      }],
      "image" : "./assets/img/background_bar.png",
      "music" : "./assets/sounds/amisdisco.mp3"
  },

  "good6A": {
      "step":[{
          "text": "benjamin et Tony Sosa sortent du bar avec leur nouvelle destination en tête. (l'effaceur de capacité pokémon qui s'est reconverti dans le recouvrage de mémoire humaine) Pour y aller, ils peuvent y aller à pied ou alors monter à bord de cette splendide Toyota® rouge papillon haut de gamme avec un triple moteur XS ultraviolet ULTIME."
      }],
      "choices": [{
          "text": "Y aller à PIEDS",
          "target": "good7A"
          }, {
          "text": "Y aller en VOITURE",
          "target": "bad7"
      }],
      "image" : "./assets/img/background_outside02.png",
      "music" : "./assets/sounds/bubu.mp3"
  },

  "good7A": {
      "step":[{
          "text": "C'est à 5 minutes à pied, juste à côté de la banque. benjamin et Tony Sosa s'y rendent donc très vite et sans encombres. benjamin toque à la porte. Un vieux monsieur leur ouvre : \"Vous ête qui ??\" Ce à quoi benjamin répond : \"Monsieur Bar Manne nous a dit que vous pourriez nous aider\" \"Ok, entrez\""
      }],
      "choices": [{
          "text": "Entrer",
          "target": "good8A"
      }],
      "image" : "./assets/img/background_outside02.png",
      "music" : "./assets/sounds/bubu.mp3"
  },

  "good8A": {
      "step":[{
          "text": "Alors en fait là il y a un ÉNORME plot twist, on apprend que la banquière est pas gentille, mais alors pas du tout !!! benjamin retrouve la mémoire c'est la fête tout le monde est content sauf la banquière qui est en prison voili voiloù :)"
      }],
      "choices": [{
          "text": "Recommencer",
          "target": "intro"
      }],
      "image" : "./assets/img/background_outside02.png",
      "music" : "./assets/sounds/bubu.mp3"
  },

  "bad1A": {
      "step":[{
          "text": "benjamin explique sa situation et la banquière lui répond avec un sourire bienveillant. Elle lui demande de la suivre."
      }],
      "choices": [{
          "text": "La suivre",
          "target": "bad2A"
      }],
      "image" : "./assets/img/background_bank.png",
      "music" : "./assets/sounds/23sept.mp3"
  },

  "bad2A": {
      "step":[{
          "text": "La banquière enferme benjamin dans la salle d'où il venait de sortir.. Et \"enfermer\" est le terme exact car il n'y a aucun autre moyen de sortir que par la porte... Les dev on manqué de temps pour implémenter la fouille dans le décors pas de chance :/"
      }],
      "choices": [{
          "text": "Tenter d'enfoncer la porte",
          "target": "bad3A"
      }],
      "image" : "./assets/img/background_room02.png",
      "music" : "./assets/sounds/angoisse.mp3"
  },

  "bad3A": {
      "step":[{
          "text": "\"AÏE ça va pas ou quoi ???!\" s'écrie la pauvre porte qui n'avait rien demandé, avant de cracher un gaz toxique qui TUE benjamin... GAME OVER chapeau l'artiste."
      }],
      "choices": [{
          "text": "Recommencer",
          "target": "intro"
      }],
      "image" : "./assets/img/background_room02.png",
      "music" : "./assets/sounds/angoisse.mp3"
  },

  "good2C": {
      "step":[{
          "text":"benjamin n'a que son slip de pas-bain sur lui. il se fait donc prêter un slip de bain rouge et un joli petit bonnet de bain qu'il ne met pas de peur d'abîmer sa coiffure."
      }, {
          "text":"Il rencontre une jolie fille, le courant passe, c'est le coup de foudre !! \"Aïe\" s'écrient benjamin et la jolie fille en coeur. benjamin n'a toujours pas recouvrer sa mémoire.. mais il pourrait rester ici.. près d'elle"
      }],
      "choices": [{
          "text": "Rester à discuter",
          "target": "happy"
          },
          {
          "text": "Revenir à la vraie intrigue",
          "target": "good3C"
      }],
      "image" : "./assets/img/background_pool.png",
      "music" : "./assets/sounds/anniversaire.mp3"
  },

  "happy": {
      "step":[{
          "text": "Blablabla mariage, fin heureuse, tout le monde est content, yes super !!!! (restez pour la musique svp elle est super bien)"
      }],
      "choices": [{
          "text": "Recommencer",
          "target": "intro"
      }],
      "image" : "./assets/img/background_pool.png",
      "music" : "./assets/sounds/todaywasagoodday.mp3"
  },

  "good2B": {
      "step":[{
          "text": "Vous regardez un super film qui raconte l'histoire d'un mec qui s'appellait brandon et qui avait perdu la mémoire."
      }],
      "choices": [{
          "text": "Revenir à la vraie intrigue",
          "target": "good3B"
      }],
      "image" : "./assets/img/background_cinema.png",
      "music" : "./assets/sounds/lyon2.mp3"
  },

  "good3B": {
      "step":[{
          "text": "Pas mal ce film ! benjamin se demande si il connaissait ce réalisateur, un certain \"yoonns\", avant de perdre la mémoire. Que faire maintenant ? Le passant de tout à l'heure est toujours là, c'est plus un restant qu'un passant finalement."
      }],
      "choices": [{
          "text": "Aller à la piscine municipale",
          "target": "good2C"
          }, {
          "text": "Parler au passant",
          "target": "good3A"
      }],
      "image" : "./assets/img/background_outside04.png",
      "music" : "./assets/sounds/bubu.mp3"
  },

  "good3C": {
      "step":[{
          "text": "Belle trempette ! benjamin n'oubliera jamais cette fille... Que faire maintenant ? Le passant de tout à l'heure est toujours là, c'est plus un restant qu'un passant finalement. La piscine vous a épuisé vous ne vous sentez plus trop de regarder un film.."
      }],
      "choices": [{
          "text": "Parler au passant",
          "target": "good3A"
      }],
      "image" : "./assets/img/background_outside04.png",
      "music" : "./assets/sounds/bubu.mp3"
  },

  "bad7": {
      "step":[{
          "text":"benjamin entre dans la voiture, une alarme retentit et Tony Sosa le regarde d'un air un peu confus mais monte avec lui. Après quelques mètres, benjamin réalise qu'il ne sait pas conduire, fonce dans un arbre et démolit la voiture. "
      }, {
          "text":"\"Merde ta voiture est atomisée mec, a-to-mi-sée !!!\". \"Attends Tony, comment ça \"ma voiture\" s'étonna notre héros. benjamin avait oublié l'existance du droit de propriété et pensait que tout appartenait à tout le monde... la tuile !! Un monsieur super mega musclé se pointe en colère, la voiture est sûrement à lui..."
      }],
      "choices": [{
          "text": "FUIR !!!!",
          "target": "bad8"
      }],
      "image" : "./assets/img/background_outside03.png",
      "music" : "./assets/sounds/toyota.mp3"
  },

  "bad8": {
      "step":[{
          "text": "Les deux compères doivent vite trouver un plan pour rembourser le monsieur en colère. Tony Sosa propose alors un plan de braquage de banque qu'il a très astucieusement baptisé \"Ocean's Eleven à 2\""
      }],
      "choices": [{
          "text": "Accepter le plan",
          "target": "bad9A"
          }, {
          "text": "Se rendre à la police car vous êtes un lâche",
          "target": "bad9B"
      }],
      "image" : "./assets/img/background_outside03.png",
      "music" : "./assets/sounds/tumefaispeur.mp3"
  },

  "bad9A": {
      "step":[{
          "text":"Direction la banque, vite !! plus de temps à perdre, benjamin enfile un masque transparent pour mieux y voir et entre dans la banque, armé du GROS pistolet que Tony vous à confié (c'est un GROS pistolet en plastique pour pas qu'il y ait d'accident faut pas abuser non plus). "
      }, {
          "text":"La banquière appelle son collègue pour remplir les sacs : \"BENJAMIN REMPLIT VITE LE SAC D'ARGENT !!\". Fou de rage, benjamin s'exclame \"AAAAAH ÇA SE PRONONCE PAS COMME ÇA C'EST PAS DIFFICILE À COMPRENDRE BON SANG B.E.N BAN.. BANJAMIN \". La banquière : \"Attendez mais... c'est VOUS ???! \" "
      }, {
          "text": "benjamin est démasqué, pris de panique il cligne des yeux. Pendant cette fraction de seconde la banquière qui était en fait la grande méchante sort son revolver, un Taurus Raging Bull™️, qui ne possède que cinq chambres (en calibre .454 Casull) : \" PAN \" crie-t-elle. benjamin sursaute avant de réagir : \" Doucement !! Ça m'a fait très peur !!!\". Elle tire. benjamin est mort. Tchao pantin. (mauvaise) FIN"
      }],
      "choices": [{
          "text": "Recommencer",
          "target": "intro"
      }],
      "image" : "./assets/img/background_bank.png",
      "music" : "./assets/sounds/dossier.mp3"
  },

  "bad9B": {
      "step":[{
          "text": "La police arrête benjamin mais pas Tony Sosa car il est trop cool pour être en prison. La sentence est tombée, dix mille ans de prison. benjamin passera le restant de sa vie derrière les barreaux, sans jamais trouver de réponses à ses questions, dommage :) (gros looser)"
      }],
      "choices": [{
          "text": "Recommencer",
          "target": "intro"
      }],
      "image" : "./assets/img/background_outside03.png",
      "music" : "./assets/sounds/ggvklase.mp3"
  }
}


var body = document.querySelector('.body');
var choices = document.querySelector('.choice');
var text = document.querySelector('.text');
var textContainer = document.querySelector('.textContainer');
var img = document.querySelector('.image');
var music = document.querySelector('.music');
var btn = document.querySelector('.choice_btn');
var mute = document.querySelector('.mute');
var restart = document.querySelector('.restart');
var musicMemory = "";
// ajax();

var progression="intro";
var step=0;

var homeUi = {
  startScreen : document.querySelector(".startStory"),
  startBtn : document.querySelector('.startBtn')
};

function chosenRoute(target){
    textContainer.classList.add("textContainerNext");
    step=-1;
    progression=target;
    showStory();
}

function showStory(){
    text.innerHTML = data[progression].step[step].text;
    img.src = data[progression].image;
    if (musicMemory !== data[progression].music) {
        musicMemory = data[progression].music;
        music.src = data[progression].music;
        music.play();
    }
    choices.innerHTML="";
}

function displayChoices(){
    data[progression].choices.forEach(function(element){
        var newBtn = document.createElement('button');
        newBtn.classList.add("choice_btn");
        newBtn.textContent = element.text;
        newBtn.addEventListener('click', function(){
            chosenRoute(element.target);
        })
        choices.appendChild(newBtn);
    });
}

function nextStep(){
    if (step >= data[progression].step.length - 1) {
        textContainer.classList.remove("textContainerNext");
        showStory();
        displayChoices();
    }
    if(step < data[progression].step.length - 1) {
        step++;
        showStory();
    }
}


textContainer.addEventListener('click', function(){
    nextStep();
});




homeUi.startBtn.addEventListener('click', function() {
  homeUi.startScreen.classList.add('animated','bounceOut');
  showStory();
});

mute.addEventListener('click', function() {
    if (music.muted===false) {
        music.muted = true;
        mute.innerHTML = "unmute"
    } else {
        music.muted = false;
        mute.innerHTML = "mute"
    }
});

restart.addEventListener('click', function() {
    step=0
    progression = "intro";
    showStory();
})
