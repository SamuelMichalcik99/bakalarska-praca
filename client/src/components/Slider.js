/************************************************************
*                          SLIDER                           *
*                                                           *
*     Slider component contains more detailed informations  *
*     and instructions how to filter the best suiting       *
*     computer according to user's requirements. It is part *
*     of 'Help' subpage.                                    *
*                                                           *
************************************************************/

import "./Slider.css"
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

// Text data showed as content in slider.
const slides = [
  {
    title: "1. Špecifikácia a rozdelenie",
    text: "Prvým úspešným krokom vpred k výberu vhodného počítaču, je stanoviť si určité požiadavky. Nepochybne k  najhlavnejším špecifikáciám patrí najmä využitie PC a približný rozsah ceny, v ktorej sa chcete pohybovať. Počítače sa pohybujú v cenovej kategórii od zopár stoviek až po niekoľko tisíc eur. Je preto vhodné, stanoviť si približný rozpočet. U nás je ponúkaných približne 150 počítačových zostáv v rôznej konfigurácii. Zoznam sme navrhli tak, aby si väčšina užívateľov, vedela vybrať podľa vlastných preferencií. V prípade záujmu, nie je problém zostavu upraviť na mieru. Na internete možno nájsť niekoľko rôznych rozdelení počítačových zostáv. Na našej stránke, sme sa rozhodli toto rozdelenie zúžiť na 2 kategórie. Prvú kategóriu označujeme ako kancelárske počítače, druhú ako herné/grafické počítače. Po kliknutí na časť \"Počítače\" v navigačnom menu, sa vám zobrazí kompletný zoznam všetkých našich počítačov. Následne môžete počítače podľa požiadaviek filtrovať a zúžiť tak finálny zoznam. Na koniec môžete zostavy medzi sebou navzájom porovnávať. Po kliknutí na porovnávacie tlačidlo pri každom jednotlivom počítači, bude počítač zaradený do porovnania, ktoré možno otvoriť cez položku \"Porovnanie\" v navigačnom menu. Lepšie parametre sú zvýraznené zelenou farbou. V následujúcich podoch sú podrobné informácie pre výber - filtrovanie počítačov."
  },
  {
    title: "2. Kancelárske PC",
    text: "Kancelárske počítače sú počítače, kde ide výhradne o počítače bez dedikovanej grafickej karty, teda fungujú len na integrovanej grafickej karte, ktorú obsahuje procesor. Tieto počítače sú vhodné na kancelárske, pracovné, či školské účely. To zahŕňa prácu s tabuľkovými programami, ako je napríklad Office, respektíve akýmkoľvek programom, ktorý nepotrebuje využívať výkon a možnosti grafickej karty. Kancelársky počítač je vhodný aj na programovanie (nezahrňuje tzv. \"machine learning\", trénovanie neurónových sietí, vývoj hier a podobne...). Samozrejmosťou je využívanie PC aj na bežné účely ako je prehliadanie internetu, filmy, hudba či zábava. V prípade výkonnejších kancelárskych počítačov s novšou generáciou procesorov (viac o procesoroch v ďalšom bode), je počítač schopný zvládnuť aj staršie alebo nenáročné hry na nižších grafických detailoch, alebo základnú editáciu grafiky v nižšom rozsahu na hobby úrovni."
  },
  {
    title: "3. Herné/grafické PC",
    text: "Druhou kategóriou v našom rozdelení sú počítače označené ako herné/grafické. Hlavným využitím týchto počítačov, je práca s grafikou, pod ktorú spadá napríklad editácia a tvorba videí, ich renderovanie, 3D modelovanie a vizualizácie. Počítač je vhodný aj na náročnejšie programovanie, ktoré kancelársky počítač nezahŕňa(viď. predošlý bod) a v neposlednom rade je táto kategória počítačov nevyhnutná na veľmi populárne hry. Treba mať na pamäti, že ak kúpite priemerný kancelársky počítač, neznamená to, že nebudete schopný spracovať video z rodinnej oslavy alebo urobiť jednoduchšiu 3D vizualizáciu na úpravu záhrady. Výsledok môže trvať dlhšie, alebo nebyť tak kvalitný, ale pokiaľ sa nejedná o pravidelnú alebo profesionálnu činnosť, nie je nutné kvôli tomu kupovať drahý herný/grafický počítač. Pri voľbe herného počítaču treba brať do úvahy náročnosť hier, očakávania používateľa a možnosti kupovaného PC. Počítač z nižšej cenovej kategórie nebude schopný zvládnuť napríklad najnovšie moderné a náročné hry na vysokom 4K rozlíšení a vysokých detailoch. Je priepastný rozdiel medzi staršími hrami s použitím FullHD monitoru a medzi najnovšími hrami s použitím vyšších rozlíšení, napríklad 4K - toto sú dva veľmi odlišné scenáre, ktoré si vyžadujú rozličné počítače. Viac o náročnosti bude spomenuté v 4. - 7 . bode."
  },
  {
    title: "4. Procesor",
    text: "Procesor, označovaný aj ako CPU je jednou z nevyhnutných súčiastok v počítači a od jeho výkonu je závislá rýchlosť spracovania informácií, teda všetko, čo počítač vykonáva. Procesory vyrábajú najmä dve svetoznáme firmy - INTEL a AMD. Zjednodušene napísané, by mal každého zákazníka zaujímať najmä počet jadier procesora a frekvencia (jadier) procesora. Vo všeobecnosti platí, čím väčšie číslo, tým lepšie. Keďže je dôležité pokryť všetky cenové kategórie, najslabšie zostavy obsahujú procesory s 4 jadrami, tie najdrahšie až po 24 jadier. Na základnú kancelársku prácu stačí menší počet od 4 jadier, na náročnejšie využitie odporúčame 6 a viac jadrové procesory. Herný priemysel v minulosti si zakladal najmä na vysokej frekvencii a počet jadier nehral až tak dôležitú úlohu, každopádne pri moderných hrách sú oba parametre dôležité a všetko závisí aj od konkrétnej hry či programu. Na staršie a nenáročné hry postačí aj 4-jadrový procesor, na náročnejšie hry odporúčame zvoliť minimálne 6 jadrový procesor. Ak by ste sa náhodou rozhodovali, či je výhodnejšie zobrať viacjadrový procesor s nižšou frekvenciou alebo s menším počtom jadier a vyššou frekvenciou, tak v prípade kancelárskeho/pracovného využitia odporúčame zvoliť väčší počet jadier a klásť menší dôraz na frekvenciu, v prípade herných počítačov je vo väčšine prípadov efektívnejšie siahnuť po vysokej frekvencii na úkor počtu jadier. Samozrejme parametrov, ktoré ovplyvňujú výkon je mnoho, ale úlohou tohoto návodu, je poskytnúť rýchly a stručný prehľad, nie komplikovať túto tému. Kto by mal záujem, môže si dodatočne dohľadať informácie ako výrobná architektúra(veľkosť tranzistorov) udávaná v nanometroch, či veľkosť tzv. cache, ktorú môžeme definovať ako rýchlu operačnú pamäť integrovanú v procesore. Viac o jednotlivých procesoroch nájdete v ďalšom bode."
  },
  {
    title: "5. AMD vs INTEL",
    text: "V tomto bode si vysvetlíme niekoľko značení jednotlivých procesorov. AMD procesory, ktoré v našich zostavách ponúkame, majú slovné označenie Ryzen. Poznáme Ryzen 3/5/7/9, kde dané číslo udáva modelové označenie. Čím je toto číslo väčšie, tým je procesor lepší a jedná sa o vyššiu radu, s väčším počtom jadier a väčšinou aj vyššou frekvenciou. Za týmto číslom nasleduje označenie v tvare XXXX, kde prvé číslo udáva sériu procesora, respektíve sa jedná o generáciu, do ktorej patrí. Napríklad Ryzen 5 3600 je 6-jadrový procesor zo série/generácie s označením 3000, ktorá vyšla v roku 2019. Ryzen 9 7900X je procesor s 12 jadrami, ktorý patrí do najnovšej generácie z roku 2023. INTEL procesory to majú podobne, jednotlivé modely označujeme i3/i5/i7/i9. Dané čísla popisujú modelovú radu rovnako ako pri Ryzenoch. Čím je toto číslo vyššie, tým sa jedná o výkonnejší procesor s vyšším počtom jadier. Nasleduje ďalšie číslo v tvare XXYYY, kde prvé dve čísla udávajú generáciu procesora - čím je číslo väčšie, tým je generácia novšia. Nasledujúce čísla označujú akúsi radu procesora, kde opäť platí, čím je číslo väčšie, tým sa jedná o výkonnejší model. Napríklad i5 10400 je 6-jadrový procesor 10-tej generácie, modelová rada 400. Procesor i7 11700K je 8-jadrový procesor 11-tej generácie, modelový rad 700. Všimnite si pri INTEL procesoroch aj písmená na konci modelového značenia. V prípade, že na konci modelového mena je písmeno K, jedná sa model s možnosťou pretaktovania(manuálneho navýšenia výkonu). Písmeno F znamená, že daný procesor nedisponuje integrovanou grafickou kartou. Napríklad i3 10105 je 4-jadrový procesor 10-generácie bez možnosti pretaktovania, s integrovanou grafickou kartou. Procesor i5 12600KF je 6-jadrový procesor 12-tej generácie s možnosťou pretaktovania, bez integrovanej grafickej karty."
  },
  {
    title: "6. Operačná pamäť",
    text: "Operačná pamäť, označovaná ako RAM, je taktiež nevyhnutná na chod počítaču a výrazne vplýva na jeho výkon. Pri operačnej pamäti sledujeme typ, pamäť, frekvenciu a latenciu(časovanie). Typy, ktoré v našich počítačoch ponúkame sú označené ako DDR4 a DDR5. Na účel správneho výberu pc stačí vedieť, že DDR5 je novší typ RAM, ktorý v najbližších mesiacoch a rokoch nahradí typ DDR4. Aktuálne je na trhu stále veľa procesorov a základných dosiek, ktoré nie sú kompatibilné s modernými DDR5, keďže sa jedná o minuloročnú novinku, ktorú podporujú zväčša len posledné generácie procesorov a základných dosiek, čo znamená aj výrazne vyššie finančné nároky. Pamäť RAM je jednoznačne najdôležitejší parameter pre bežných užívateľov stolových počítačov. Naše zostavy začínajú na 8 GB, ktoré by mali bez problémov vystačiť na bažnú kancelársku prácu, menej náročné programy či programovanie, prácu s menším až stredným množstvom dát a menej až stredne náročné hry. Na renderovanie, 3D vizualizácie, náročnejšie programy, programovanie komplexnejších štruktúr, prácu s väčším množstvom dát a náročnejšie hry odporúčame začínať na 16 GB, prípadne podľa rozpočtu voliť vyššiu pamäť. 16 GB je dostatok na akékoľvek bežné využitie, avšak v určitých náročných situáciách, môže byť RAM využitá v plnej miere a spomaľovať výpočty, prácu, výkon... Ďalšími dvoma parametrami je frekvencia udávaná v MHz a latencia označovaná ako CL. Frekvenciu chceme mať čo najvyššiu a latenciu čo najnižšiu. Je preto dôležité sledovať vzájomnú kombináciu týchto dvoch parametrov, avšak to je už v našich zostavách zahrnuté, takže zákazníkom postačí sledovať frekvenciu - my sme zvolili také RAM, ktoré už k danej frekvencii majú vhodnú latenciu."
  },
  {
    title: "7. Grafická karta",
    text: "Grafická karta, skrátene označovaná ako GPU, je ďalším nenahraditeľným komponentom, ak potrebujeme vysoký grafický výkon. Počítačové grafické karty, respektíve ich čipy, vyrábajú najmä spoločnosti NVIDIA a AMD. Grafická karta má veľké množstvo parametrov, preto sa zameriame len na vysvetlenie názvov, podľa ktorých možno porovnávať jednotlivé modely. Všetky AMD grafické karty v nami ponúkaných počítačoch majú označenie RX, nasledované troj/štvor-číslom, prípadne končiace na písmená XT. Prvé číslo daného trojčíslia alebo štvorčíslia predstavuje sériu(generáciu) danej karty, druhé číslo uvádza akýsi rad alebo model, pri ktorom opäť platí, čím vyššie, tým sa jedná o výkonnejší model danej série. Niektoré modely končia na písmená XT, vtedy sa jedná o výkonnejšiu verziu karty rovnakého modelu, bez tohoto označenia. Napríklad RX 570 je grafická karta série 500 a je o pár percent slabšia ako grafická karta RX 580, keďže druhé číslo, ktoré predstavuje modelové označenie hovorí o nižšej/vyššej verzii. Napríklad grafická karta RX 6600 je grafická karta série 6000 a je o pár percent slabšia ako RX 6600 XT, ale výrazne slabšia oproti najlepšiemu modelu danej série - RX 6950 XT. NVIDIA grafické karty to majú rovnako, ibaže ešte rozlišujeme označenie GTX a označenie RTX. Označenie GTX platí pre staršiu sériu 1000, označenie RTX má séria 2000, 3000 a najnovšia 4000. RTX je skratka pre technológiu nazývanú \"Raytracing\", ktorá zabezpečuje detailnejšie vykresľovanie grafiky. Modelové označenie teda začína GTX/RTX a nasledujú 4 číslice, kde prvá, respektíve prvé dve predstavujú sériu a posledné dve model. Štvorčíslie môže byť nasledované písmenami Ti alebo označením \"super\", čo znázorňuje výkonnejšiu verziu karty, rovnako ako XT v prípade AMD grafických kariet. Napríklad GTX 1060 je grafická karta série 1000 a je slabšia ako grafická karta RTX 2070 super zo série 2000. RTX 3060 je grafická karta série 3000 a je slabšia ako výkonnejší model rovnakej série RTX 3070(TI)."
  },
  {
    title: "8. Náročnosť a kombinácia CPU + GPU",
    text: "V prípade, že vyberáte herný/grafický počítač, je vhodné vybrať efektívnu kombináciu, najmä ak nemáte dostatočný rozpočet na zvolenie oboch komponentov vo vyššej triede. Je vhodné zistiť, či vami využívaný program/hry viac profitujú z výkonu procesora, alebo grafickej karty. Ďalej je vhodné určiť túto kombináciu aj podľa rozlíšenia monitora. Ak je vaše rozlíšenie monitora, respektíve rozlíšenie, na ktorom budete hrať/tvoriť grafiku a videá FullHD prípadne menšie, bude procesor viac namáhaný. Z toho dôvodu nie je dobré vyberať kombináciu slabšieho procesora so silnou grafickou kartou, lebo v rovnakej cene so silnejším procesorom a mierne slabšou grafikou, môže byť výsledok výhodnejší. Naopak, čím je rozlíšenie vyššie, napríklad QuadHD alebo 4K, je záťaž na procesor nižšia a viac výkonu preberá grafická karta. Vyššia pamäť grafickej karty neznamená priamo vyššie FPS v hrách alebo rýchlejšiu prácu v grafických programoch, ale umožňuje ukladať respektíve spracovať vyššie množstvo dát a podať tak grafický výstup vo vyššom rozlíšení v krajších detailoch. Ak plánujete používať viacero monitorov na vyššom rozlíšení, väčšia veľkosť pamäte je určite výhodou. Rovnako je veľkosť pamäte potrebná aj pri náročných 3D vizualizáciách, avšak neznamená to, že lacná a slabšia grafická karta s 12 GB pamäťou bude lepšie, ako výrazne drahšia a výkonnejšia grafická karta s 8 GB pamäťou. Pri kombinácii slabého procesora a výkonnej grafike môže dochádzať k tzv. \"bottlenecku\", kedy ľudovo povedané, nemá procesor dostatok výkonu na to, aby zvládol \"kŕmiť\" výkonnú grafickú kartu. V prípade nami ponúkaných zostáv k tomu nedôjde, alebo len v zanedbateľnej miere, keďže sme túto situáciu ošetrili vhodnou kombináciou týchto dvoch komponentov. "
  },
  {
    title: "9. Úložisko",
    text: "Úložisko(disky) môžeme rozdeliť na dva druhy, označené ako SSD a HDD. V prípade HDD úložiska sa jedná o výrazne pomalšie úložisko, vhodné skôr ako úložisko dát, od ktorých nezávisí rýchlosť programu. Ideálne na \"uskladnenie\" fotiek, filmov, dokumentov, záloh, veľkých súborov s dátami a podobne. Tieto disky sú výrazne lacnejšie ako SSD a ponúkajú skôr rozšírenie úložiska pre používateľov, ktorým nestačí SSD. Naopak SSD disky sú výrazne drahšie, ale jedná sa aj o mnohonásobne rýchlejší typ úložiska. Tieto disky disponujú vysokým výkonom v prípade čítania a zápisu súborov(pamäte). Takéto disky sú vhodné na chod celého systému a programov či hier. Napríklad po stlačení tlačidla na zapnutie počítaču, môže pomalšiemu základnému HDD disku trvať desiatky sekúnd, kým načíta systém pripravený na použitie, kým kvalitnejšiemu a rýchlejšiemu SSD disku to môže trvať len niekoľko sekúnd. To isté platí aj v prípade načítania rôznych programov alebo pri ukladaní či presúvaní súborov."
  },
  {
    title: "10. Dodatočné informácie",
    text: "Na záver zhrnieme niekoľko faktov. Základná doska vplýva na výkon len minimálne, aj to väčšinou len v prípade výkonnejších procesorov. Základná doska poskytuje najmä široké rozhranie a funkcionalitu, ako počet rôznych konektorov a výstupov, počet a typy USB konektorov, pripojenie na WiFi, Bluetooth, maximálna rýchlosť podporovaného sieťového prenosu(internetu), počet a generáciu vnútorných konektorov atď. Základná doska disponuje desiatkami parametrov a náš relatívne prehľadný a stručný popis počítačov, by pre bežných užívateľov tieto údaje zbytočne komplikovali. Pre koncového užívateľa, sme zverejnili, či doska podporuje WiFi pripojenie alebo nie(v takom prípade je potrebné mať pripojenie k internetu cez kábel). Skúsenejší používatelia si môžu na základe mena základnej dosky dohľadať zvyšné informácie. Mnoho z parametrov je potrebné kontrolovať pri výbere ostatných komponentov, kvôli vzájomnej kompatibilite, to sme už ale pri návrhu počítača zabezpečili. V prípade skrinky, je viditeľná fotka, kategória veľkosti skrinky a typ podsvietenia, ktorým disponuje. LED podsvietenie neponúka možnosť zmeniť farbu, RGB podsvietenie je starší typ podsvietenia, ktoré umožňuje meniť farby celého podsvietenia naraz, ARGB podsvietenie umožňuje detailnejšie nastavenie každej konkrétnej LED v počítači, čím môže užívateľ dosiahnuť rôznych svetelných efektov. Pri detailnejšom popise uvádzame aj mieru kvality počítača v hodnote od 1 do 9. Žiadny z ponúkaných počítačov, neobsahuje nekvalitné a výrazne poruchové či chybné komponenty, avšak napriek tomu možno rozlíšiť menej kvalitné komponenty, ktoré sa väčšinou objavujú v nižšej cenovej kategórii a kvalitnejšie komponenty, ktoré prichádzajú aj s vyššou cenou. Kvalitnejší komponent nemusí nutne znamenať vyšší výkon, aj keď tomu tak je vo väčšine prípadov aspoň o pár percent. Napríklad drahšia - kvalitnejšia grafická karta RTX 3070 oproti lacnejšej - menej kvalitnej grafickej karte RTX 3070 sa môže líšiť veľkosťou chladiča a počtu ventilátorov, použitých ložísk vo ventilátore, kvalitou kondenzátorov, ktoré vplývajú na teploty, výkon a životnosť. Nakoniec ešte dodáme, že ak potrebujete akúkoľvek pomoc pri výbere, alebo zmenu komponentov, môžete nás kontaktovať cez kontaktný formulár v navigačnom menu."
  }
];

export default function Slide() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { title, text } = slides[currentSlideIndex];

  function showPrev() {
    setCurrentSlideIndex(currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1);
  }

  function showNext() {
    setCurrentSlideIndex(currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1);
  }

  return (
    <div className="slider">
      <h2 className="slider-title">{title}</h2>
      <p className="slider-text">{text}</p>
      <button className="slider-arrow" id="prev-arrow" onClick={() => showPrev()}><FaArrowLeft size={20}/></button>
      <button className="slider-arrow" id="next-arrow" onClick={() => showNext()}><FaArrowRight size={20}/></button>
    </div>
  );
};
