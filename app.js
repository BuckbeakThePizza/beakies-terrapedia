const terrapedia = document.getElementById("terrapedia"); //for displaying in tab
const typedex = document.getElementById("typedex");
const random = document.getElementById("random");
const tmonline = document.getElementById("tmonline");
const numMon = 227; //number of terra monsters
var start = 1; //start for display
var end = numMon; //end for display
var step = 1;//step for display
var operator = "<=";//operator for display for loop
var search = "moncard";//default search
console.log(terrapedia);
console.log(typedex);
console.log(random);
console.log(tmonline);
console.log("Hello world");

const fetchOnline = () => { //fetches terra monsters from the tm online folder
  const promises = [];
  for (let i = 1; i<=19; i++) {
    console.log("Fetching dem Terra Mossterrs (TM Online)! #" + i);
    const url = `https://beakies-terrapedia.glitch.me/tmonline/${i}.txt`;
    promises.push(fetch(url).then(res => res.json()));
  }
  Promise.all(promises).then(results => {
    const online = results.map(data => ({
      name: data.name,
      tmwgid: data.tmwgid,
      image: data.image,
      type: data.types.map(type => type.type.name).join(", "),
      maintype: ((data.types.map(type => type.type.name).join(", ")).split(", "))[0],
      evolves: data.evolves.name,
      evolvelevel: data.evolves.level,
      statmax:
        (data.stats.HP +
          data.stats.ATT +
          data.stats.DEF +
          data.stats.RAA +
          data.stats.AGI +
          data.stats.SPE) /
        3,
      hp: data.stats.HP,
      att: data.stats.ATT,
      def: data.stats.DEF,
      raa: data.stats.RAA,
      agility: data.stats.AGI,
      spe: data.stats.SPE,
      notes: data.notes,
    }));
    displayOnline(online);
  });
};

const displayOnline = online => {//displays the fetched terra monsters
  console.log(online);
  const onlineHTMLString = online
    .map(
      mon => `
  <li class="card ${mon.maintype}"><img class = "card-image" src= "${mon.image}" /> <h2 class = "card-title"><span class = "global">${mon.tmwgid}</span>. <span class="name"> ${mon.name}</span></h2><p class = "card-subtitle"><br>Elements: <span class = "type">${mon.type}</type><br>Evolves To: <span class = "evolution">${mon.evolves}</span> at Level <span class = "level">${mon.evolvelevel}</span><br><br>Base Stats: <i>${mon.notes}</i><br></p><p class= "card-stats">HP: <span class="hp">${mon.hp}</span> <br>ATT: <span class="ma">${mon.att}</span><br>DEF: <span class = "md"> ${mon.def}</span><br>RAA: <span class = "ra">${mon.raa}</span><br>SPE: <span class = "s">${mon.spe}</span><br>AGI: <span class = "ag">${mon.agility}</span></p><p class="card-bars"><progress id = "stats" value = "${mon.hp}" max = "${mon.statmax}"></progress><br> <progress id = "stats" value = "${mon.att}" max = "${mon.statmax}"></progress><br><progress id = "stats" value = "${mon.def}" max = "${mon.statmax}"></progress><br> <progress id = "stats" value = "${mon.raa}" max = "${mon.statmax}"></progress><br> <progress id = "stats" value = "${mon.spe}" max = "${mon.statmax}"></progress><br><progress id = "stats" value = "${mon.agility}" max = "${mon.statmax}"></progress></p></li>`
    )
    .join("");
  tmonline.innerHTML = onlineHTMLString;
};

fetchOnline();


const fetchRandom = () => { // fetches a random terra monster from the terrapedia
  const i = Math.round(Math.random() * numMon);
  console.log(i);
  const url = `https://beakies-terrapedia.glitch.me/terrapedia/${i}.txt`;
  fetch(url)
    .then(response => response.json())
    .then(results => {
      const randommon = {
        name: results.name,
        image: results.image,
        tmwgid: results.tmwgid
      };
      displayRandom(randommon);
    });
};

const displayRandom = rand => { //displays the random terra monster
  console.log(rand);
  const randHTMLString = `
  <img class = "card-image" src= "${rand.image}" /> <h2 class = "card-title">${rand.tmwgid}. ${rand.name}</h2>`;
  random.innerHTML = randHTMLString;
};

fetchRandom();

const fetchElements = () => { //fetches the elements from the elements folder
  const typepromises = [];
  for(let t = 1; t <= 7; t++) {
    console.log("fetching dem Elements! #" + t);
    const typeurl = `https://beakies-terrapedia.glitch.me/elements/${t}.txt`
    typepromises.push(fetch(typeurl).then((typeres) => typeres.json()));
  }
  Promise.all(typepromises).then(typeresults => {
    const elements = typeresults.map((data) => ({
      name: data.name,
      image: data.image,
      weakness: data.damage_relations.double_damage_from.map( (weakness) => weakness.name).join(", "),
      resists: data.damage_relations.half_damage_from.map( (resists) => resists.name).join(", "),
      effective: data.damage_relations.double_damage_to.map((effective) => effective.name).join(", "),
      noteffective: data.damage_relations.half_damage_to.map((noteffective) => noteffective.name).join(", "),
    }));
    displayElements(elements);
  });
};

const displayElements = (elements) => { //displays the fetched elements
  console.log(elements);
  const typeHTMLString = elements.map ( type => `
  <li class="card ${type.name}"><img class = "image" src= "${type.image}" /><h2 class = "card-title">${type.name}</h2><p class = "card-subtitle"><b>Weakness:</b> ${type.weakness}<br><b>Resists:</b> ${type.resists}<br><br><b>Effective Against:</b> ${type.effective}<br><b>Weak Against:</b> ${type.noteffective}</p></li>`
  ).join("")
  typedex.innerHTML = typeHTMLString;
};

fetchElements();

const fetchTerraMon = () => { //fetches terra monsters from the terrapedia folder
  const promises = [];
  for (let i = start; eval(i + operator + end); i = i + step) {
    console.log("Fetching dem Terra Mossterrs! #" + i);
    const url = `https://beakies-terrapedia.glitch.me/terrapedia/${i}.txt`;
    promises.push(fetch(url).then(res => res.json()));
  }
  Promise.all(promises).then(results => {
    const terramon = results.map(data => ({
      name: data.name,
      tm1id: data.tm1id,
      tm2id: data.tm2id,
      tm3id: data.tm3id,
      tmwgid: data.tmwgid,
      image: data.image,
      type: data.types.map(type => type.type.name).join(", "),
      maintype: ((data.types.map(type => type.type.name).join(", ")).split(", "))[0],
      evolves: data.evolves.name,
      evolvelevel: data.evolves.level,
      statmax:
        (data.stats.HP +
          data.stats.MEA +
          data.stats.MED +
          data.stats.RAA +
          data.stats.RAD +
          data.stats.SPE) /
        3,
      hp: data.stats.HP,
      mea: data.stats.MEA,
      med: data.stats.MED,
      raa: data.stats.RAA,
      rad: data.stats.RAD,
      spe: data.stats.SPE,
      energy: data.stats.ENE,
      accuracy: data.stats.ACC,
      agility: data.stats.AGI,
      resistance: data.stats.RES,
      notes: data.notes,
      oldimage: data.trivia.image,
      oldname: data.trivia.name,
      othertrivia: data.trivia.other
    }));
    displayTerramon(terramon);
  });
};

const displayTerramon = terramon => { //displays the fetched terra monsters
  console.log(terramon);
  const terramonHTMLString = terramon
    .map(
      mon => `
  <li class="moncard ${mon.maintype}"><img class= "card-image" src= "${mon.oldimage}" /><img class = "card-image" src= "${mon.image}" /> <h2 class = "card-title"><span class = "global">${mon.tmwgid}</span>. <span class="name"><i>${mon.oldname}</i> ${mon.name}</span></h2><p class = "card-subtitle">Terra Monsters 1 #: <span class = "one">${mon.tm1id}</span><br>Terra Monsters 2 #: <span class = "two">${mon.tm2id}</span><br>Terra Monsters 3 #: <span class="three">${mon.tm3id}</span> <br>Elements: <span class = "type">${mon.type}</type><br>Evolves To: <span class = "evolution">${mon.evolves}</span> at Level <span class = "level">${mon.evolvelevel}</span><br><br>Base Stats: <i>${mon.notes}</i><br></p><p class= "card-stats">HP: <span class="hp">${mon.hp}</span> <br>MEA: <span class="ma">${mon.mea}</span><br>MED: <span class = "md"> ${mon.med}</span><br>RAA: <span class = "ra">${mon.raa}</span><br>RAD: <span class = "rd">${mon.rad}</span> <br>SPE: <span class = "s">${mon.spe}</span></p><p class="card-bars"><progress id = "stats" value = "${mon.hp}" max = "${mon.statmax}"></progress><br> <progress id = "stats" value = "${mon.mea}" max = "${mon.statmax}"></progress><br><progress id = "stats" value = "${mon.med}" max = "${mon.statmax}"></progress><br> <progress id = "stats" value = "${mon.raa}" max = "${mon.statmax}"></progress><br><progress id = "stats" value = "${mon.rad}" max = "${mon.statmax}"></progress><br> <progress id = "stats" value = "${mon.spe}" max = "${mon.statmax}"></progress></p><p class=card-subtitle><br>Energy: <span class = "en">${mon.energy}</span>, Accuracy: <span class = "ac">${mon.accuracy}</span><br>Aglility: <span class = "ag">${mon.agility}</span>, Resistance: <span class = "re">${mon.resistance}</span><br><br><i>${mon.othertrivia}</i></p></li>`
    )
    .join("");
  terrapedia.innerHTML = terramonHTMLString;
};

fetchTerraMon();

function acending() { //"sorts" the terra monsters in acending order
  if (start != 1 && end != numMon && step != 1 && operator != "<=") {
    start = 1;
    end = numMon;
    step = 1;
    operator = "<=";
    fetchTerraMon();
    var searchbutton = document.getElementsByClassName("sort");
  for (let i = 0; i < searchbutton.length; i++) {
    searchbutton[i].className = searchbutton[i].className.replace(" active", "");
  }
    event.currentTarget.className += " active";
  }
}

function decending() { //"sorts" the terra monsters in decending order
  if (start != numMon && end != 1 && step != -1 && operator != ">=") {
    start = numMon;
    end=1;
    step=-1;
    operator = ">=";
    fetchTerraMon();
    var searchbutton = document.getElementsByClassName("sort");
    for (let i = 0; i < searchbutton.length; i++) {
    searchbutton[i].className = searchbutton[i].className.replace(" active", "");
  }
    event.currentTarget.className += " active";
  }
}

function searchcriteria(classy) { //code for search bar criteria
  if (search != classy) {
    search = classy;
    console.log(search);
    var searchbutton = document.getElementsByClassName("criteria");
    for (let i = 0; i < searchbutton.length; i++) {
    searchbutton[i].className = searchbutton[i].className.replace(" active", "");
  }
    event.currentTarget.className += " active";
  }
  }


// JavaScript code
function search_terramonster() { //code for searching with the search bar
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();

  let x = document.getElementsByClassName(search);
  let y = document.getElementsByClassName("moncard");
  console.log(x);

  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      y[i].style.display = "none";
      console.log(x[i]);
    } else {
      y[i].style.display = "list-item";
    }
  }
}
