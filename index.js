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
// <p> Zaplať daň z výplaty: ${dan} Kč.</p>
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

/*****ZADÁNÍ 2.*****/
/*
E-mail
Vytvořte řetězec obsahující vaši e-mailovou adresu.
Sestavte e-mailovou adresu tak, že sečtete dohromady vaše křestní jméno, znak tečka, vaše příjmení a koncovku @mujmail.com.
*/

const email = 'inna.cervenkova@gmail.com';
document.body.innerHTML = '<h2>E-mail:</h2>' + ' inna' + '.' + 'cervenkova' + '@gmail.com' + '.'


