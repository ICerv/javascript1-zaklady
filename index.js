/*****ZADÁNÍ 1.*****/
/*
Výplata

a.Spočítejte svůj měsíční příjem víte-li, že pracujete 7 hodin denně se mzdou 265 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
b.Pokud pracujete na živnostenský list, můžete si odečíst 60 % příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
*/

//a.
// const vyplata = 7 * 265 * 21;
// document.body.innerHTML += `
// <h2> Výplata </h2>
// <p> Tvá měsiční výplata číni: ${vyplata} Kč.</p>
// `

//b.
// const vyplata = 7 * 265 * 21;
// const dan = Math.floor(vyplata * 0.4 * 0.15);  //Math.floor(21 * 7 * 265 * (1 - 0.6) * 0.15);
// document.body.innerHTML += `
// <h2> Daň z výplaty</h2>
//  <p> Zaplať daň z výplaty: ${dan} Kč.</p>
// `

/*****ZADÁNÍ 2.*****/
/*
Délka filmu

V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu Pán prstenů: Dvě věže trvá 223 minut. My bychom ovšem délku filmu raději věděli v hodinách a minutách. Za použití funkcí a operátorů z této lekce spočítejte, kolik hodin a minut trvá film Pán prstenů: Dvě věže.
*/

// const delkaFilmuVMinutach = 223;
// const delkaFilmuVHodinach = Math.floor(delkaFilmuVMinutach / 60);
// const delkaZbyvajicichMinut = delkaFilmuVMinutach % 60;
// document.body.innerHTML += `
// <h2>Délka filmu</h2>
// <p>Film <em>Pán prstenů: Dvě věže</em> trvá ${delkaFilmuVHodinach}h ${delkaZbyvajicichMinut}min. </p>
// `

/*****ZADÁNÍ 3.*****/
/*
E-mail
Vytvořte řetězec obsahující vaši e-mailovou adresu.
Sestavte e-mailovou adresu tak, že sečtete dohromady vaše křestní jméno, znak tečka, vaše příjmení a koncovku @mujmail.com.
*/

// const email = 'inna.cervenkova@gmail.com';
// document.body.innerHTML = '<h2>E-mail:</h2>' + ' inna' + '.' + 'cervenkova' + '@gmail.com' + '.'


/*****ZADÁNÍ 4.*****/
/*
Náhodná čísla

Založte si JavaScriptový program a pomocí document.body.innerHTML a funkce Math.random zobrazte na stránce náhodné číslo. Zkuste stránku několikrát po sobě obnovit a ověřte si, že pokaždé obdržíte jiné číslo.
*/

// document.body.innerHTML += Math.random();


/*****ZADÁNÍ 5.*****/
/*
Převod měny

a. Dejme tomu, že si jako programátoři vyděláváte 20 euro na hodinu. Uložte tuto hodnotu do proměnné wageInEur.
b. Spočítejte, kolik je vaše hodinová mzda v českých korunách, jestliže kurz eura je 26.58 Kč. Výsledek zaokrouhlete na celé koruny a uložte do proměnné wageInCzk.
c. Vypište obsah proměnné wageInCzk do webové stránky tak, aby na stránce byl nadpis h1 s obsahem:
Mzda v korunách: 532 Kč
*/

// const wageInEur = 20;
// const rate = 26.58;
// const wageInCzk = Math.ceil(wageInEur * rate);
// document.body.innerHTML += '<h1>Mzda v korunách: ' + wageInCzk + ' Kč</h1>'


/*****ZADÁNÍ 6.*****/
/*
Ultramaraton

Představme si, že jste pořadatelé ultramaratonského závodu. Závod začíná ve tři hodiny odpoledne, což ve 24-hodinovém formátu zapíšeme jako 15. Nejlepší běžec zvládne vaši brutální trasu za 10 hodin. Doběhne tedy v jednu hodinu ráno, v našem formátu zapsáno jako 1.

Založte si JavaScriptový program a uložte čas startu závodu do proměnné start. Do proměnné delka uložte délku závodu pro nějakého běžce. Klidně může být pomalejší než náš šampion. Do proměnné konec spočítejte, v kolik hodin závod pro našeho běžce skončí a vypište její obsah do stránky. Vyzkoušejte různé délky a ověřte, že váš postup funguje.
*/

// const start = 15;
// const delka = 11;
// const konec = (start + delka) % 24;
// document.body.innerHTML += '<h3>Zavod pro naseho bezce skonci v ' + konec + ' hodin.</h3>'

/*****ZADÁNÍ 7.*****/
/*
Příjem divadla

a. Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem.
b. Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti?
*/

// const vstupne = 12;
// const pocetNavstevniku = 174;
// const pocetPredstaveni = 15;
// const prijem = vstupne * pocetNavstevniku * pocetPredstaveni;
// document.body.innerHTML += '<p>Příjem divadla: ' + prijem + ' Kč</p>';

// const studentskeVstupne = vstupne * 0.65;
// const navstevaStudentu = 0.4;
// const novyPrijem = (vstupne * (1 - navstevaStudentu) + studentskeVstupne * navstevaStudentu) * pocetNavstevniku * pocetPredstaveni;    
// document.body.innerHTML += '<p>Prijem divadla se slevou pro studenty: ' + novyPrijem + ' Kc</p>';



/*****ZADÁNÍ 8.*****/
/*
Schopnější zaokrouhlování

Mějme v proměnné x uloženo nějaké desetinné číslo. Pomocí funkce Math.round jej můžeme zaokrouhlit na celá čísla takto.

> Math.round(x)
Co kdybychom však chtěli zaokrouhlit na desetiny, setiny nebo třeba celé stovky? Napište program, který pomocí funkce Math.round

a. zaokrouhlí číslo x s přesností na desetiny,
b. zaokrouhlí číslo x s přesností na setiny,
c. zaokrouhlí číslo x s přesností na celé stovky.
*/

// const x = 2564.46471;
// const naDesetiny = Math.round(x * 10) / 10;
// const naSetiny = Math.round(x * 100) / 100;
// const naCeleStovky = Math.round(x * 100) * 100;

// document.body.innerHTML += '<p>Zaokrouhleni na desetiny: ' + naDesetiny + ',' + ' na setiny: ' + naSetiny + ',' + ' na cele stovky: ' + naCeleStovky + '</p>';


/*****ZADÁNÍ 9.*****/
/*
Házení kostkou

Vymyslete jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.

Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou pravděpodobností. Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže.
*/

// const hodKostkou = Math.floor(Math.random() * 6 + 1);

// document.body.innerHTML += '<p>Hod kostkou je: ' + hodKostkou


/*****ZADÁNÍ 10.*****/
/*
Očkování

Představte si, že vyrábíte registrační systém na očkování proti COVID-19. U každého registrovaného chceme evidovat jméno a věk.

Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk. Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
Poté, co uživatel zadá všechny údaje, vypište do stránky výstup ve tvaru
Květoslav Voňavý, věk: 67
*/

const fullName = prompt('Zadej sve jmeno a prijmeni:');
const age = Number(prompt('Zadej svuj vek:'));
document.body.innerHTML += '<p>' + fullName + ',' + ' vek: ' + age + '</p>'
