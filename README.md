# Bergersen Arkitekter — webbplatsförslag

En statisk webbplats inspirerad av de tillhandahållna Ekenhill-filerna, med Bergersens egen logotyp, fotografier och information. Allt som behövs för webbplatsen ligger i `dist/`. Ingen installation eller byggprocess behövs.

## Innehåll

- 68 projektsidor med bildgallerier, ursprungliga projektfakta och bearbetade beskrivningar.
- 11 medarbetare med fotografier och publicerade yrkeskontakter.
- Kontoret, historia, arkitektur, interiör, arbetsprocess, miljö, kompetens och bygningsvern.
- Nyheter, nyhetsarkiv, kunngjøringer och kontaktuppgifter.
- Mobilmeny, projektsökning, ursprungliga projektkategorier och bildvisning med tangentbordsstöd.

Texterna har kortats och skrivits om för den nya strukturen. Länkar till originalbeskrivningar finns på projekt- och nyhetssidor. Externa pressartiklar sammanfattas och länkas; tidningssidor återpubliceras inte. PDF-dokument är länkade till originalkällan.

## GitHub Pages

Lägg innehållet i `dist/` i roten av ditt webbplatsrepo och aktivera GitHub Pages för den grenen. Behåll alla mappar och filnamn. `index.html` behöver `assets/`, `styles.css`, `fonts.css`, `app.js` och undermapparna med sidorna.

Förslaget är avsiktligt undantaget från sökindexering medan det granskas. Inför offentlig lansering: byt förhandsvisningens domän i canonical-/OG-länkar, sitemap.xml och strukturerad data till den riktiga webbplatsadressen; byt `noindex,follow` till `index,follow` och tillåt indexering i robots.txt. Den befintliga kundwebbplatsen har inte ändrats.

## Underlag och avgränsningar

Offentligt material hämtat från Bergersen Arkitekters egna under- och projektsidor den 1 oktober 2026. Bilder är skalade och WebP-komprimerade utan generativ bearbetning. Fotografkrediter från originalmaterialet följer med där de anges. Bildernas återanvändningsrätt behöver hanteras inom kundens befintliga bildavtal inför offentlig lansering.

Domänens startsida visade avvikande, orelaterat innehåll vid inhämtningen. Det användes inte. Alla källor är dokumenterade i source-notes.json. Kontaktuppgifter, datum och projektstatus återger det publicerade underlaget; granska dem med kunden inför lansering.

Källan för Kongens gate 93 har tre olika PDF-knappar som pekar på samma dokument. Dokumentlänken är därför inte ett verifierat komplett dokumentpaket. Nyhetsarkivets historiska driftsmeddelanden är tydligt beskrivna som historiska.

Personvernsidan beskriver den här versionen, som inte använder egna analysverktyg eller formulär. Kontakt sker via telefon/e-postlänkar.
