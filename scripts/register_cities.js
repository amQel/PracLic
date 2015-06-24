"use strict"

$(document).ready(function(){
    var $registerForm = $("form");
    var $provinceSelection = $registerForm.find('select[name=province]');
    var $citySelection = $registerForm.find('select[name=city]');

    $provinceSelection.on("change", function () {
       console.log($(this).val());
        $citySelection.load('./cities/' + $(this).children(":selected").attr("id") + '.html');
    });
});

/*
DOLNOŒL¥SKIE
Bardo
Bielawa
Bierutów
Bogatynia
Boguszów-Gorce
Boles³awie
Bolków
Brzeg Dolny
Bystrzyca K³odzka
Chocianów
Chojnów
Duszniki-Zdrój
Dzier¿oniów
G³ogów
G³uszyca
Góra
Gryfów Œl¹ski
Jawor
Jaworzyna Œl¹ska
Jedlina-Zdrój
Jelcz-Laskowice
Jelenia Góra
Kamienna Góra
Karpacz
K¹ty Wroc³awskie
K³odzko
Kowary
Kudowa-Zdrój
L¹dek-Zdrój
Legnica
Leœna
Lubañ
Lubawka
Lubin
Lubomierz
Lwówek Œl¹ski
Mieroszów
Miêdzybórz
Miêdzylesie
Milicz
Mirsk
Niemcza
Nowa Ruda
Nowogrodziec
Oborniki Œl¹skie
Oleœnica
Olszyna
O³awa
Piechowice
Pieñsk
Pieszyce
Pi³awa Górna
Polanica-Zdrój
Polkowice
Prochowice
Prusice
Przemków
Radków
Siechnice
Sobótka
Stronie Œl¹skie
Strzegom
Strzelin
Syców
Szczawno-Zdrój
Szczytna
Szklarska Porêba
Œcinawa
Œroda Œl¹ska
Œwidnica
Œwiebodzice
Œwieradów-Zdrój
Œwierzawa
Trzebnica
Twardogóra
Wa³brzych
W¹sosz
Wêgliniec
Wi¹zów
Wleñ
Wojcieszów
Wo³ów
Wroc³aw
Zawidów
Z¹bkowice Œl¹skie
Zgorzelec
Ziêbice
Z³otoryja
Z³oty Stok
¯arów
¯migród

KUJAWSKO-POMORSKIE
Aleksandrów Kujawski
Barcin
Brodnica
Brzeœæ Kujawski
Bydgoszcz
Che³mno
Che³m¿a
Chodecz
Ciechocinek
Dobrzyñ nad Wis³¹
Gniewkowo
Golub-Dobrzyñ
Górzno
Grudzi¹dz
Inowroc³aw
Izbica Kujawska
Jab³onowo Pomorskie
Janikowo
Janowiec Wielkopolski
Kamieñ Krajeñski
Kcynia
Koronowo
Kowal
Kowalewo Pomorskie
Kruszwica
Lipno
Lubieñ Kujawski
Lubraniec
£abiszyn
£asin
Mogilno
Mrocza
Nak³o nad Noteci¹
Nieszawa
Nowe
Pakoœæ
Piotrków Kujawski
Radziejów
Radzyñ Che³miñski
Rypin
Sêpólno Krajeñskie
Skêpe
Solec Kujawski
Strzelno
Szubin
Œwiecie
Toruñ
Tuchola
W¹brzeŸno
Wiêcbork
W³oc³awek
¯nin

LUBELSKIE
Annopol
Be³¿yce
Bia³a Podlaska
Bi³goraj
Bychawa
Che³m
Dêblin
Frampol
Hrubieszów
Janów Lubelski
Józefów
Kazimierz Dolny
Kock
Krasnobród
Krasnystaw
Kraœnik
Lubartów
Lublin
£aszczów
£êczna
£uków
Miêdzyrzec Podlaski
Modliborzyce
Na³êczów
Opole Lubelskie
Ostrów Lubelski
Parczew
Piaski
Poniatowa
Pu³awy
Radzyñ Podlaski
Rejowiec Fabryczny
Ryki
Stoczek £ukowski
Szczebrzeszyn
Œwidnik
Tarnogród
Terespol
Tomaszów Lubelski
Tyszowce
W³odawa
Zamoœæ
Zwierzyniec

LUBUSKIE
Babimost
Bytom Odrzañski
Cybinka
Czerwieñsk
Dobiegniew
Drezdenko
Gorzów Wielkopolski
Gozdnica
Gubin
I³owa
Jasieñ
Kargowa
Kostrzyn nad Odr¹
Ko¿uchów
Krosno Odrzañskie
Lubniewice
Lubsko
£êknica
Ma³omice
Miêdzyrzecz
Nowa Sól
Nowe Miasteczko
Nowogród Bobrzañski
Oœno Lubuskie
Rzepin
Skwierzyna
S³awa
S³ubice
Strzelce Krajeñskie
Sulechów
Sulêcin
Szlichtyngowa
Szprotawa
Œwiebodzin
Torzym
Trzciel
Witnica
Wschowa
Zb¹szynek
Zielona Góra
¯agañ
¯ary

£ÓDZKIE
Aleksandrów £ódzki
Be³chatów
Bia³a Rawska
B³aszki
Brzeziny
Drzewica
Dzia³oszyn
G³owno
Kamieñsk
Koluszki
Konstantynów £ódzki
Kroœniewice
Kutno
£ask
£êczyca
£owicz
£ódŸ
Opoczno
Ozorków
Pabianice
Pajêczno
Piotrków Trybunalski
Poddêbice
Przedbórz
Radomsko
Rawa Mazowiecka
Rzgów
Sieradz
Skierniewice
Stryków
Sulejów
Szadek
Tomaszów Mazowiecki
Tuszyn
Uniejów
Warta
Wieluñ
Wieruszów
Wolbórz
Zduñska Wola
Zelów
Zgierz
Z³oczew
¯ychlin

MA£OPOLSKIE
Alwernia
Andrychów
Biecz
Bobowa
Bochnia
Brzesko
Brzeszcze
Bukowno
Che³mek
Chrzanów
Ciê¿kowice
Czchów
D¹browa Tarnowska
Dobczyce
Gorlice
Grybów
Jordanów
Kalwaria Zebrzydowska
Kêty
Kraków
Krynica-Zdrój
Krzeszowice
Libi¹¿
Limanowa
Maków Podhalañski
Miechów
Mszana Dolna
Muszyna
Myœlenice
Niepo³omice
Nowe Brzesko
Nowy S¹cz
Nowy Targ
Nowy Wiœnicz
Olkusz
Oœwiêcim
Piwniczna-Zdrój
Proszowice
Rabka-Zdrój
Rad³ów
Ryglice
Ska³a
Skawina
S³omniki
Stary S¹cz
Sucha Beskidzka
Su³kowice
Szczawnica
Szczucin
Œwi¹tniki Górne
Tarnów
Trzebinia
Tuchów
Wadowice
Wieliczka
Wojnicz
Wolbrom
Zakliczyn
Zakopane
Zator
¯abno

MAZOWIECKIE
Bia³obrzegi
Bie¿uñ
B³onie
Brok
Brwinów
Chorzele
Ciechanów
Drobin
Garwolin
G¹bin
Glinojeck
Gostynin
Góra Kalwaria
Grodzisk Mazowiecki
Grójec
Halinów
I³¿a
Józefów
Ka³uszyn
Karczew
Koby³ka
Konstancin-Jeziorna
Kosów Lacki
Kozienice
Legionowo
Lipsko
£askarzew
£ochów
£omianki
£osice
Maków Mazowiecki
Marki
Milanówek
Miñsk Mazowiecki
M³awa
Mogielnica
Mordy
Mrozy
Mszczonów
Myszyniec
Nasielsk
Nowe Miasto nad Pilic¹
Nowy Dwór Mazowiecki
Ostro³êka
Ostrów Mazowiecka
Otwock
O¿arów Mazowiecki
Piaseczno
Piastów
Pilawa
Pionki
P³ock
P³oñsk
Podkowa Leœna
Pruszków
Przasnysz
Przysucha
Pu³tusk
Raci¹¿
Radom
Radzymin
Ró¿an
Serock
Siedlce
Sierpc
Skaryszew
Sochaczew
Soko³ów Podlaski
Sulejówek
Szyd³owiec
Tarczyn
T³uszcz
Warka
Warszawa
Wêgrów
Wo³omin
Wyszków
Wyszogród
Wyœmierzyce
Zakroczym
Z¹bki
Zielonka
Zwoleñ
¯
¯elechów
¯uromin
¯yrardów

OPOLSKIE
Baborów
Bia³a
Brzeg
Byczyna
Dobrodzieñ
G³ogówek
G³ubczyce
G³ucho³azy
Gogolin
Gorzów Œl¹ski
Grodków
Kêdzierzyn-KoŸle
Kietrz
Kluczbork
Kolonowskie
Korfantów
Krapkowice
Leœnica
Lewin Brzeski
Namys³ów
Niemodlin
Nysa
Olesno
Opole
Otmuchów
Ozimek
Paczków
Praszka
Prószków
Prudnik
Strzelce Opolskie
Ujazd
Wo³czyn
Zawadzkie
Zdzieszowice

PODKARPACKIE
Baranów Sandomierski
B³a¿owa
Boguchwa³a
Brzostek
Brzozów
Cieszanów
Dêbica
Dukla
Dynów
G³ogów Ma³opolski
Iwonicz-Zdrój
Jaros³aw
Jas³o
Jedlicze
Kañczuga
Kolbuszowa
Ko³aczyce
Krosno
Lesko
Le¿ajsk
Lubaczów
£añcut
Mielec
Narol
Nisko
Nowa Dêba
Nowa Sarzyna
Oleszyce
Pilzno
Pruchnik
Przec³aw
Przemyœl
Przeworsk
Radomyœl Wielki
Radymno
Ropczyce
Rudnik nad Sanem
Rymanów
Rzeszów
Sanok
Sêdziszów Ma³opolski
Sieniawa
Soko³ów Ma³opolski
Stalowa Wola
Strzy¿ów
Tarnobrzeg
Tyczyn
Ulanów
Ustrzyki Dolne
Zagórz
Zaklików

PODLASKIE
Augustów
Bia³ystok
Bielsk Podlaski
Brañsk
Choroszcz
Ciechanowiec
Czarna Bia³ostocka
Czy¿ew
D¹browa Bia³ostocka
Drohiczyn
Goni¹dz
Grajewo
Hajnówka
Jedwabne
Kleszczele
Knyszyn
Kolno
Krynki
Lipsk
£apy
£om¿a
Micha³owo
Moñki
Nowogród
Rajgród
Sejny
Siemiatycze
Sokó³ka
Stawiski
Suchowola
Supraœl
Sura¿
Suwa³ki
Szczuczyn
Szepietowo
Tykocin
Wasilków
Wysokie Mazowieckie
Zab³udów
Zambrów

POMORSKIE
Brusy
Bytów
Chojnice
Czarna Woda
Czarne
Czersk
Cz³uchów
Debrzno
Dzierzgoñ
Gdañsk
Gdynia
Gniew
Hel
Jastarnia
Kartuzy
Kêpice
Koœcierzyna
Krynica Morska
Kwidzyn
Lêbork
£eba
Malbork
Miastko
Nowy Dwór Gdañski
Nowy Staw
Pelplin
Prabuty
Pruszcz Gdañski
Puck
Reda
Rumia
Skarszewy
Skórcz
S³upsk
Sopot
Starogard Gdañski
Sztum
Tczew
Ustka
Wejherowo
W³adys³awowo
¯ukowo

ŒL¥SKIE
Bêdzin
Bielsko-Bia³a
Bieruñ
Blachownia
Bytom
Chorzów
Cieszyn
Czechowice-Dziedzice
CzeladŸ
Czerwionka-Leszczyny
Czêstochowa
D¹browa Górnicza
Gliwice
Imielin
Jastrzêbie-Zdrój
Jaworzno
Kalety
Katowice
K³obuck
Knurów
Koniecpol
Kozieg³owy
Krzanowice
Krzepice
KuŸnia Raciborska
Lêdziny
Lubliniec
£aziska Górne
£azy
Miasteczko Œl¹skie
Miko³ów
Mys³owice
Myszków
Ogrodzieniec
Orzesze
Piekary Œl¹skie
Pilica
Porêba
Pszczyna
Pszów
Pyskowice
Racibórz
Radlin
Radzionków
Ruda Œl¹ska
Rybnik
Rydu³towy
Siemianowice Œl¹skie
Siewierz
Skoczów
S³awków
Sosnowiec
Soœnicowice
Strumieñ
Szczekociny
Szczyrk
Œwiêtoch³owice
Tarnowskie Góry
Toszek
Tychy
Ustroñ
Wilamowice
Wis³a
Wodzis³aw Œl¹ski
Wojkowice
WoŸniki
Zabrze
Zawiercie
¯arki
¯ory
¯ywiec

ŒWIÊTOKRZYSKIE
Bodzentyn
Busko-Zdrój
Chêciny
Chmielnik
Æmielów
Daleszyce
Dzia³oszyce
Jêdrzejów
Kazimierza Wielka
Kielce
Koñskie
Koprzywnica
Kunów
Ma³ogoszcz
Opatów
Osiek (województwo œwiêtokrzyskie)
Ostrowiec Œwiêtokrzyski
O¿arów
Piñczów
Po³aniec
Sandomierz
Sêdziszów
Skalbmierz
Skar¿ysko-Kamienna
Starachowice
Staszów
St¹porków
Stopnica
Suchedniów
W¹chock
W³oszczowa
Zawichost

WARMIÑSKO-MAZURSKIE
Barczewo
Bartoszyce
Bia³a Piska
Biskupiec
Bisztynek
Braniewo
Dobre Miasto
Dzia³dowo
Elbl¹g
E³k
Frombork
Gi¿ycko
Go³dap
Górowo I³aweckie
I³awa
Jeziorany
Kêtrzyn
Kisielice
Korsze
Lidzbark
Lidzbark Warmiñski
Lubawa
Miko³ajki
Mi³akowo
Mi³om³yn
M³ynary
Mor¹g
Mr¹gowo
Nidzica
Nowe Miasto Lubawskie
Olecko
Olsztyn
Olsztynek
Orneta
Orzysz
Ostróda
Pas³êk
Pasym
Pieniê¿no
Pisz
Reszel
Ruciane-Nida
Ryn
Sêpopol
Susz
Szczytno
Tolkmicko
Wêgorzewo
Zalewo

WIELKOPOLSKIE
Bojanowo
Borek Wielkopolski
Buk
Chocz
Chodzie¿
Czarnków
Czempiñ
Czerniejewo
D¹bie
Dobra
Dobrzyca
Dolsk
Gniezno
Golina
Go³añcz
Gostyñ
Grabów nad Prosn¹
Grodzisk Wielkopolski
Jarocin
Jastrowie
Jutrosin
Kalisz
Kêpno
Kleczew
K³ecko
K³odawa
Kobylin
Ko³o
Konin
Kostrzyn
Koœcian
KoŸmin Wielkopolski
Kórnik
Krajenka
Krobia
Krotoszyn
Krzywiñ
Krzy¿ Wielkopolski
Ksi¹¿ Wielkopolski
Leszno
Luboñ
Lwówek
£ob¿enica
Margonin
Miejska Górka
Miêdzychód
Mikstat
Mi³os³aw
Mosina
Murowana Goœlina
Nekla
Nowe Skalmierzyce
Nowy Tomyœl
Oborniki
Obrzycko
Odolanów
Okonek
Opalenica
Osieczna
Ostroróg
Ostrów Wielkopolski
Ostrzeszów
Pi³a
Pleszew
Pniewy
Pobiedziska
Pogorzela
Poniec
Poznañ
Przedecz
Puszczykowo
Pyzdry
Rakoniewice
Raszków
Rawicz
RogoŸno
Rychwa³
Rydzyna
Sieraków
Skoki
S³upca
Sompolno
Stawiszyn
Stêszew
Sulmierzyce
Swarzêdz
Szamocin
Szamotu³y
Œlesin
Œmigiel
Œrem
Œroda Wielkopolska
Trzcianka
Trzemeszno
Tuliszków
Turek
Ujœcie
W¹growiec
Wieleñ
Wielichowo
Witkowo
Wolsztyn
Wronki
Wrzeœnia
Wyrzysk
Wysoka
Zagórów
Zb¹szyñ
Zduny
Z³otów
¯erków

ZACHODNIOPOMORSKIE
Barlinek
Barwice
Bia³ogard
Bia³y Bór
Bobolice
Borne Sulinowo
Cedynia
Chociwel
Chojna
Choszczno
Czaplinek
Cz³opa
Dar³owo
Dêbno
Dobra
Dobrzany
Drawno
Drawsko Pomorskie
Dziwnów
Golczewo
Goleniów
Goœcino
Gryfice
Gryfino
Iñsko
Kalisz Pomorski
Kamieñ Pomorski
Karlino
Ko³obrzeg
Koszalin
Lipiany
£obez
Maszewo
Mieszkowice
Miêdzyzdroje
Miros³awiec
Moryñ
Myœlibórz
Nowe Warpno
Nowogard
Pe³czyce
P³oty
Polanów
Police
Po³czyn-Zdrój
Pyrzyce
Recz
Resko
Sianów
S³awno
Stargard Szczeciñski
Stepnica
Suchañ
Szczecin
Szczecinek
Œwidwin
Œwinoujœcie
Trzciñsko-Zdrój
Trzebiatów
Tuczno
Tychowo
Wa³cz
Wêgorzyno
Wolin
Z³ocieniec*/
