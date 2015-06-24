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
DOLNO�L�SKIE
Bardo
Bielawa
Bierut�w
Bogatynia
Bogusz�w-Gorce
Boles�awie
Bolk�w
Brzeg Dolny
Bystrzyca K�odzka
Chocian�w
Chojn�w
Duszniki-Zdr�j
Dzier�oni�w
G�og�w
G�uszyca
G�ra
Gryf�w �l�ski
Jawor
Jaworzyna �l�ska
Jedlina-Zdr�j
Jelcz-Laskowice
Jelenia G�ra
Kamienna G�ra
Karpacz
K�ty Wroc�awskie
K�odzko
Kowary
Kudowa-Zdr�j
L�dek-Zdr�j
Legnica
Le�na
Luba�
Lubawka
Lubin
Lubomierz
Lw�wek �l�ski
Mierosz�w
Mi�dzyb�rz
Mi�dzylesie
Milicz
Mirsk
Niemcza
Nowa Ruda
Nowogrodziec
Oborniki �l�skie
Ole�nica
Olszyna
O�awa
Piechowice
Pie�sk
Pieszyce
Pi�awa G�rna
Polanica-Zdr�j
Polkowice
Prochowice
Prusice
Przemk�w
Radk�w
Siechnice
Sob�tka
Stronie �l�skie
Strzegom
Strzelin
Syc�w
Szczawno-Zdr�j
Szczytna
Szklarska Por�ba
�cinawa
�roda �l�ska
�widnica
�wiebodzice
�wierad�w-Zdr�j
�wierzawa
Trzebnica
Twardog�ra
Wa�brzych
W�sosz
W�gliniec
Wi�z�w
Wle�
Wojciesz�w
Wo��w
Wroc�aw
Zawid�w
Z�bkowice �l�skie
Zgorzelec
Zi�bice
Z�otoryja
Z�oty Stok
�ar�w
�migr�d

KUJAWSKO-POMORSKIE
Aleksandr�w Kujawski
Barcin
Brodnica
Brze�� Kujawski
Bydgoszcz
Che�mno
Che�m�a
Chodecz
Ciechocinek
Dobrzy� nad Wis��
Gniewkowo
Golub-Dobrzy�
G�rzno
Grudzi�dz
Inowroc�aw
Izbica Kujawska
Jab�onowo Pomorskie
Janikowo
Janowiec Wielkopolski
Kamie� Kraje�ski
Kcynia
Koronowo
Kowal
Kowalewo Pomorskie
Kruszwica
Lipno
Lubie� Kujawski
Lubraniec
�abiszyn
�asin
Mogilno
Mrocza
Nak�o nad Noteci�
Nieszawa
Nowe
Pako��
Piotrk�w Kujawski
Radziej�w
Radzy� Che�mi�ski
Rypin
S�p�lno Kraje�skie
Sk�pe
Solec Kujawski
Strzelno
Szubin
�wiecie
Toru�
Tuchola
W�brze�no
Wi�cbork
W�oc�awek
�nin

LUBELSKIE
Annopol
Be��yce
Bia�a Podlaska
Bi�goraj
Bychawa
Che�m
D�blin
Frampol
Hrubiesz�w
Jan�w Lubelski
J�zef�w
Kazimierz Dolny
Kock
Krasnobr�d
Krasnystaw
Kra�nik
Lubart�w
Lublin
�aszcz�w
��czna
�uk�w
Mi�dzyrzec Podlaski
Modliborzyce
Na��cz�w
Opole Lubelskie
Ostr�w Lubelski
Parczew
Piaski
Poniatowa
Pu�awy
Radzy� Podlaski
Rejowiec Fabryczny
Ryki
Stoczek �ukowski
Szczebrzeszyn
�widnik
Tarnogr�d
Terespol
Tomasz�w Lubelski
Tyszowce
W�odawa
Zamo��
Zwierzyniec

LUBUSKIE
Babimost
Bytom Odrza�ski
Cybinka
Czerwie�sk
Dobiegniew
Drezdenko
Gorz�w Wielkopolski
Gozdnica
Gubin
I�owa
Jasie�
Kargowa
Kostrzyn nad Odr�
Ko�uch�w
Krosno Odrza�skie
Lubniewice
Lubsko
��knica
Ma�omice
Mi�dzyrzecz
Nowa S�l
Nowe Miasteczko
Nowogr�d Bobrza�ski
O�no Lubuskie
Rzepin
Skwierzyna
S�awa
S�ubice
Strzelce Kraje�skie
Sulech�w
Sul�cin
Szlichtyngowa
Szprotawa
�wiebodzin
Torzym
Trzciel
Witnica
Wschowa
Zb�szynek
Zielona G�ra
�aga�
�ary

��DZKIE
Aleksandr�w ��dzki
Be�chat�w
Bia�a Rawska
B�aszki
Brzeziny
Drzewica
Dzia�oszyn
G�owno
Kamie�sk
Koluszki
Konstantyn�w ��dzki
Kro�niewice
Kutno
�ask
��czyca
�owicz
��d�
Opoczno
Ozork�w
Pabianice
Paj�czno
Piotrk�w Trybunalski
Podd�bice
Przedb�rz
Radomsko
Rawa Mazowiecka
Rzg�w
Sieradz
Skierniewice
Stryk�w
Sulej�w
Szadek
Tomasz�w Mazowiecki
Tuszyn
Uniej�w
Warta
Wielu�
Wierusz�w
Wolb�rz
Zdu�ska Wola
Zel�w
Zgierz
Z�oczew
�ychlin

MA�OPOLSKIE
Alwernia
Andrych�w
Biecz
Bobowa
Bochnia
Brzesko
Brzeszcze
Bukowno
Che�mek
Chrzan�w
Ci�kowice
Czch�w
D�browa Tarnowska
Dobczyce
Gorlice
Gryb�w
Jordan�w
Kalwaria Zebrzydowska
K�ty
Krak�w
Krynica-Zdr�j
Krzeszowice
Libi��
Limanowa
Mak�w Podhala�ski
Miech�w
Mszana Dolna
Muszyna
My�lenice
Niepo�omice
Nowe Brzesko
Nowy S�cz
Nowy Targ
Nowy Wi�nicz
Olkusz
O�wi�cim
Piwniczna-Zdr�j
Proszowice
Rabka-Zdr�j
Rad��w
Ryglice
Ska�a
Skawina
S�omniki
Stary S�cz
Sucha Beskidzka
Su�kowice
Szczawnica
Szczucin
�wi�tniki G�rne
Tarn�w
Trzebinia
Tuch�w
Wadowice
Wieliczka
Wojnicz
Wolbrom
Zakliczyn
Zakopane
Zator
�abno

MAZOWIECKIE
Bia�obrzegi
Bie�u�
B�onie
Brok
Brwin�w
Chorzele
Ciechan�w
Drobin
Garwolin
G�bin
Glinojeck
Gostynin
G�ra Kalwaria
Grodzisk Mazowiecki
Gr�jec
Halin�w
I��a
J�zef�w
Ka�uszyn
Karczew
Koby�ka
Konstancin-Jeziorna
Kos�w Lacki
Kozienice
Legionowo
Lipsko
�askarzew
�och�w
�omianki
�osice
Mak�w Mazowiecki
Marki
Milan�wek
Mi�sk Mazowiecki
M�awa
Mogielnica
Mordy
Mrozy
Mszczon�w
Myszyniec
Nasielsk
Nowe Miasto nad Pilic�
Nowy Dw�r Mazowiecki
Ostro��ka
Ostr�w Mazowiecka
Otwock
O�ar�w Mazowiecki
Piaseczno
Piast�w
Pilawa
Pionki
P�ock
P�o�sk
Podkowa Le�na
Pruszk�w
Przasnysz
Przysucha
Pu�tusk
Raci��
Radom
Radzymin
R�an
Serock
Siedlce
Sierpc
Skaryszew
Sochaczew
Soko��w Podlaski
Sulej�wek
Szyd�owiec
Tarczyn
T�uszcz
Warka
Warszawa
W�gr�w
Wo�omin
Wyszk�w
Wyszogr�d
Wy�mierzyce
Zakroczym
Z�bki
Zielonka
Zwole�
�
�elech�w
�uromin
�yrard�w

OPOLSKIE
Babor�w
Bia�a
Brzeg
Byczyna
Dobrodzie�
G�og�wek
G�ubczyce
G�ucho�azy
Gogolin
Gorz�w �l�ski
Grodk�w
K�dzierzyn-Ko�le
Kietrz
Kluczbork
Kolonowskie
Korfant�w
Krapkowice
Le�nica
Lewin Brzeski
Namys��w
Niemodlin
Nysa
Olesno
Opole
Otmuch�w
Ozimek
Paczk�w
Praszka
Pr�szk�w
Prudnik
Strzelce Opolskie
Ujazd
Wo�czyn
Zawadzkie
Zdzieszowice

PODKARPACKIE
Baran�w Sandomierski
B�a�owa
Boguchwa�a
Brzostek
Brzoz�w
Cieszan�w
D�bica
Dukla
Dyn�w
G�og�w Ma�opolski
Iwonicz-Zdr�j
Jaros�aw
Jas�o
Jedlicze
Ka�czuga
Kolbuszowa
Ko�aczyce
Krosno
Lesko
Le�ajsk
Lubacz�w
�a�cut
Mielec
Narol
Nisko
Nowa D�ba
Nowa Sarzyna
Oleszyce
Pilzno
Pruchnik
Przec�aw
Przemy�l
Przeworsk
Radomy�l Wielki
Radymno
Ropczyce
Rudnik nad Sanem
Ryman�w
Rzesz�w
Sanok
S�dzisz�w Ma�opolski
Sieniawa
Soko��w Ma�opolski
Stalowa Wola
Strzy��w
Tarnobrzeg
Tyczyn
Ulan�w
Ustrzyki Dolne
Zag�rz
Zaklik�w

PODLASKIE
August�w
Bia�ystok
Bielsk Podlaski
Bra�sk
Choroszcz
Ciechanowiec
Czarna Bia�ostocka
Czy�ew
D�browa Bia�ostocka
Drohiczyn
Goni�dz
Grajewo
Hajn�wka
Jedwabne
Kleszczele
Knyszyn
Kolno
Krynki
Lipsk
�apy
�om�a
Micha�owo
Mo�ki
Nowogr�d
Rajgr�d
Sejny
Siemiatycze
Sok�ka
Stawiski
Suchowola
Supra�l
Sura�
Suwa�ki
Szczuczyn
Szepietowo
Tykocin
Wasilk�w
Wysokie Mazowieckie
Zab�ud�w
Zambr�w

POMORSKIE
Brusy
Byt�w
Chojnice
Czarna Woda
Czarne
Czersk
Cz�uch�w
Debrzno
Dzierzgo�
Gda�sk
Gdynia
Gniew
Hel
Jastarnia
Kartuzy
K�pice
Ko�cierzyna
Krynica Morska
Kwidzyn
L�bork
�eba
Malbork
Miastko
Nowy Dw�r Gda�ski
Nowy Staw
Pelplin
Prabuty
Pruszcz Gda�ski
Puck
Reda
Rumia
Skarszewy
Sk�rcz
S�upsk
Sopot
Starogard Gda�ski
Sztum
Tczew
Ustka
Wejherowo
W�adys�awowo
�ukowo

�L�SKIE
B�dzin
Bielsko-Bia�a
Bieru�
Blachownia
Bytom
Chorz�w
Cieszyn
Czechowice-Dziedzice
Czelad�
Czerwionka-Leszczyny
Cz�stochowa
D�browa G�rnicza
Gliwice
Imielin
Jastrz�bie-Zdr�j
Jaworzno
Kalety
Katowice
K�obuck
Knur�w
Koniecpol
Kozieg�owy
Krzanowice
Krzepice
Ku�nia Raciborska
L�dziny
Lubliniec
�aziska G�rne
�azy
Miasteczko �l�skie
Miko��w
Mys�owice
Myszk�w
Ogrodzieniec
Orzesze
Piekary �l�skie
Pilica
Por�ba
Pszczyna
Psz�w
Pyskowice
Racib�rz
Radlin
Radzionk�w
Ruda �l�ska
Rybnik
Rydu�towy
Siemianowice �l�skie
Siewierz
Skocz�w
S�awk�w
Sosnowiec
So�nicowice
Strumie�
Szczekociny
Szczyrk
�wi�toch�owice
Tarnowskie G�ry
Toszek
Tychy
Ustro�
Wilamowice
Wis�a
Wodzis�aw �l�ski
Wojkowice
Wo�niki
Zabrze
Zawiercie
�arki
�ory
�ywiec

�WI�TOKRZYSKIE
Bodzentyn
Busko-Zdr�j
Ch�ciny
Chmielnik
�miel�w
Daleszyce
Dzia�oszyce
J�drzej�w
Kazimierza Wielka
Kielce
Ko�skie
Koprzywnica
Kun�w
Ma�ogoszcz
Opat�w
Osiek (wojew�dztwo �wi�tokrzyskie)
Ostrowiec �wi�tokrzyski
O�ar�w
Pi�cz�w
Po�aniec
Sandomierz
S�dzisz�w
Skalbmierz
Skar�ysko-Kamienna
Starachowice
Stasz�w
St�pork�w
Stopnica
Suchedni�w
W�chock
W�oszczowa
Zawichost

WARMI�SKO-MAZURSKIE
Barczewo
Bartoszyce
Bia�a Piska
Biskupiec
Bisztynek
Braniewo
Dobre Miasto
Dzia�dowo
Elbl�g
E�k
Frombork
Gi�ycko
Go�dap
G�rowo I�aweckie
I�awa
Jeziorany
K�trzyn
Kisielice
Korsze
Lidzbark
Lidzbark Warmi�ski
Lubawa
Miko�ajki
Mi�akowo
Mi�om�yn
M�ynary
Mor�g
Mr�gowo
Nidzica
Nowe Miasto Lubawskie
Olecko
Olsztyn
Olsztynek
Orneta
Orzysz
Ostr�da
Pas��k
Pasym
Pieni�no
Pisz
Reszel
Ruciane-Nida
Ryn
S�popol
Susz
Szczytno
Tolkmicko
W�gorzewo
Zalewo

WIELKOPOLSKIE
Bojanowo
Borek Wielkopolski
Buk
Chocz
Chodzie�
Czarnk�w
Czempi�
Czerniejewo
D�bie
Dobra
Dobrzyca
Dolsk
Gniezno
Golina
Go�a�cz
Gosty�
Grab�w nad Prosn�
Grodzisk Wielkopolski
Jarocin
Jastrowie
Jutrosin
Kalisz
K�pno
Kleczew
K�ecko
K�odawa
Kobylin
Ko�o
Konin
Kostrzyn
Ko�cian
Ko�min Wielkopolski
K�rnik
Krajenka
Krobia
Krotoszyn
Krzywi�
Krzy� Wielkopolski
Ksi�� Wielkopolski
Leszno
Lubo�
Lw�wek
�ob�enica
Margonin
Miejska G�rka
Mi�dzych�d
Mikstat
Mi�os�aw
Mosina
Murowana Go�lina
Nekla
Nowe Skalmierzyce
Nowy Tomy�l
Oborniki
Obrzycko
Odolan�w
Okonek
Opalenica
Osieczna
Ostror�g
Ostr�w Wielkopolski
Ostrzesz�w
Pi�a
Pleszew
Pniewy
Pobiedziska
Pogorzela
Poniec
Pozna�
Przedecz
Puszczykowo
Pyzdry
Rakoniewice
Raszk�w
Rawicz
Rogo�no
Rychwa�
Rydzyna
Sierak�w
Skoki
S�upca
Sompolno
Stawiszyn
St�szew
Sulmierzyce
Swarz�dz
Szamocin
Szamotu�y
�lesin
�migiel
�rem
�roda Wielkopolska
Trzcianka
Trzemeszno
Tuliszk�w
Turek
Uj�cie
W�growiec
Wiele�
Wielichowo
Witkowo
Wolsztyn
Wronki
Wrze�nia
Wyrzysk
Wysoka
Zag�r�w
Zb�szy�
Zduny
Z�ot�w
�erk�w

ZACHODNIOPOMORSKIE
Barlinek
Barwice
Bia�ogard
Bia�y B�r
Bobolice
Borne Sulinowo
Cedynia
Chociwel
Chojna
Choszczno
Czaplinek
Cz�opa
Dar�owo
D�bno
Dobra
Dobrzany
Drawno
Drawsko Pomorskie
Dziwn�w
Golczewo
Goleni�w
Go�cino
Gryfice
Gryfino
I�sko
Kalisz Pomorski
Kamie� Pomorski
Karlino
Ko�obrzeg
Koszalin
Lipiany
�obez
Maszewo
Mieszkowice
Mi�dzyzdroje
Miros�awiec
Mory�
My�lib�rz
Nowe Warpno
Nowogard
Pe�czyce
P�oty
Polan�w
Police
Po�czyn-Zdr�j
Pyrzyce
Recz
Resko
Sian�w
S�awno
Stargard Szczeci�ski
Stepnica
Sucha�
Szczecin
Szczecinek
�widwin
�winouj�cie
Trzci�sko-Zdr�j
Trzebiat�w
Tuczno
Tychowo
Wa�cz
W�gorzyno
Wolin
Z�ocieniec*/
