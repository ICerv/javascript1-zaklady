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

const start = 15;
const delka = 11;
const konec = (start + delka) % 24;
document.body.innerHTML += '<h3>Zavod pro naseho bezce skonci v ' + konec + ' hodin.</h3>'

