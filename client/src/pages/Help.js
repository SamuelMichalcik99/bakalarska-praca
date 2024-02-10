/************************************************************
*                          HELP                             *
*                                                           *
*    The Help page serves as a guide to the correct use of  * 
*    filtering and computer comparison.It explains how to   *
*    select the ideal computer based on the parameters and  *
*    how to determine these parameters according to your    *
*    own requirements.It does not provide technical         *
*    literature, the aim is to simplify and make more       *
*    detailed information about computers clearer for       *
*    people with no knowledge of IT hardware.               *
*                                                           *
************************************************************/

import "./Help.css"
import Slider from "../components/Slider";

export default function Help() {
  return (
    <div id="page-body-help" className="page-body">
      <div className="help-container">
        <h1 className="help-title">Ako vybrať správny počítač?</h1>
        <h2 className="help-subtitle">Zopár slov na úvod</h2>
        <p className="help-content">
          Na základe praxe a skúseností vieme, že výber správneho počítača nie je jednoduchý. Nie každý používateľ má znalosti
          o hardvéri počítača a komponentoch, z ktorých je zložený. Dokonca aj v prípade, keď používateľ tieto znalosti má,
          nezaručuje to aktuálny prehľad a správny výber toho najvhodnejšieho počítaču. Trh s počítačovými komponentami sa vyvíja veľmi rýchlo,
          pravidelne pribúdajú na trhu novšie a novšie technológie, produkty s meniacími sa parametrami a častokrát mätúca 
          vzájomná kompatibilita komponentov. V neposlednom rade je dôležité špecifikovať si vlastné požiadavky, napríklad, 
          na čo bude počítač najviac využívaný, pre koho je určený, čo daný používateľ očakáva, aká je jeho náročnosť a v konečnom 
          dôsledku aj finančné rozpätie, od ktorého sa nákup počítaču odvíja.
        </p>
        <h2 className="help-subtitle">Čo vás naučíme</h2>
        <p className="help-content">
          Tento návod, by vám mal dať rýchly prehľad o najdôležitejších komponentoch a parametroch, ktoré by ste mali sledovať podľa 
          jednotlivých požiadaviek. Návod je postavený na základe skúseností, všeobecných znalostí a rôznych testoch
          &#40;tzv. "benchmarkoch"&#41;, ktoré sme za obdobie nášho pôsobenia vykonali my, naši zákazníci alebo sú zverejnené na 
          internete. Návod neslúži ako odborná literatúra, ktorá by riešila problematiku hardvéru, práve naopak - má uľahčiť výber 
          počítača, pre bežného používateľa, ktorý nemá žiadne alebo len minimálne znalosti z tejto oblasti.
        </p>
        <h2 className="help-subtitle">Treba mať na pamäti</h2>
        <p className="help-content">
          Upozorňujeme, že neexistuje všeobecné pravidlo, ktoré by potvrdzovalo alebo vyvrátilo, že nejaký počítačový komponent, je 
          na určité využitie najlepší. Ako obrazný príklad môže poslúžiť situácia, kedy môžeme vo všeobecnosti povedať, že 
          procesor "A" je lepší na editáciu fotiek ako procesor "B", avšak môže existovať určitý program, v ktorom editáciu 
          fotiek zvládne lepšie konkurenčný procesor "B". Vždy záleží aj na optimalizácii programov vzhľadom k použitému komponentu.
        </p>  
        <Slider />
      </div>
    </div>
  )
}
