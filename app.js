
'use strict';
/* ================== DATE ================== */
const AA_MASS = {G:57.05,A:71.08,S:87.08,P:97.12,V:99.13,T:101.10,C:103.14,L:113.16,I:113.16,N:114.10,D:115.09,Q:128.13,K:128.17,E:129.12,M:131.19,H:137.14,F:147.18,R:156.19,Y:163.18,W:186.21};
const AA_NAME = {G:'Glicină',A:'Alanină',S:'Serină',P:'Prolină',V:'Valină',T:'Treonină',C:'Cisteină',L:'Leucină',I:'Izoleucină',N:'Asparagină',D:'Aspartat',Q:'Glutamină',K:'Lizină',E:'Glutamat',M:'Metionină',H:'Histidină',F:'Fenilalanină',R:'Arginină',Y:'Tirozină',W:'Triptofan'};
const AA_LIST = 'ACDEFGHIKLMNPQRSTVWY';

// Ținte: gene, nume în română, UniProt
const T = {
 COL1A1:['Colagen tip I','P02452'], COL2A1:['Colagen tip II','P02458'], ELN:['Elastină','P15502'], ACAN:['Agrecan','P16112'],
 FGF2:['Factor de creștere fibroblastic 2','P09038'], VEGFA:['Factor de creștere vascular','P15692'], IGF1:['IGF-1','P05019'],
 HGF:['Factor de creștere hepatocitar','P14210'], EGF:['Factor de creștere epidermal','P01133'], TGFB1:['TGF-beta 1','P01137'],
 BDNF:['BDNF (neurotrofic)','P23560'], NGF:['Factor de creștere nervoasă','P01138'],
 NRF2:['NRF2','Q16236'], SOD2:['Superoxid dismutaza 2','P04179'], CAT:['Catalază','P04040'], GPX1:['Glutation peroxidaza 1','P07203'],
 HMOX1:['Hem oxigenaza 1','P09601'], GSTP1:['Glutation S-transferaza P','P09211'], NQO1:['NQO1','P15559'],
 IL10:['Interleukina 10','P22301'], IL1RN:['Antagonist receptor IL-1','P18510'], ANXA1:['Anexina A1','P04083'], TNFAIP3:['A20 (TNFAIP3)','P21580'],
 PGC1A:['PGC-1 alfa','Q9UBK2'], SIRT1:['Sirtuina 1','Q96EB6'], SIRT3:['Sirtuina 3','Q9NTG7'], AMPK:['AMPK alfa 1','Q13131'],
 LTF:['Lactoferină','P02788'], LYZ:['Lizozim','P61626'], DEFB1:['Beta-defensina 1','P60022'], CAMP:['Catelicidina (LL-37)','P49913'],
 HBB:['Hemoglobina beta','P68871'], EPO:['Eritropoietină','P01588'], ALB:['Albumină','P02768'], TF:['Transferină','P02787'], HAMP:['Hepcidină','P81172'],
 NOS3:['Oxid nitric sintaza endotelială','P29474'], NPPA:['Peptid natriuretic atrial','P01160'], PLAT:['Activator tisular al plasminogenului','P00750'],
 GABRA1:['Receptor GABA-A alfa 1','P14867'], MTNR1A:['Receptor melatonină 1','P48039'], OXT:['Oxitocină','P01178'],
 BGLAP:['Osteocalcină','P02818'], ACTN3:['Alfa-actinina 3','Q08043'], MYH7:['Miozina cardiacă beta','P12883'], TNMD:['Tenomodulină','Q9H2S6'],
 ESR1:['Receptor estrogenic alfa','P03372'], PGR:['Receptor progesteron','P06401'], AR:['Receptor androgenic','P10275'], AMH:['Hormon anti-Mullerian','P03971'],
 FLG:['Filagrină','P20930'], KRT14:['Keratina 14','P02533'], UMOD:['Uromodulină','P07911'], KL:['Klotho','Q9UEF7'],
 SFTPC:['Surfactant pulmonar C','P11686'], SCGB1A1:['Uteroglobină (CC16)','P11684'], MUC5B:['Mucina 5B','Q9HC84'],
 MUC2:['Mucina 2','Q02817'], TFF3:['Factor trefoil 3','Q07654'], TJP1:['ZO-1 (joncțiuni strânse)','Q07157'],
 INS:['Insulină','P01308'], GCG:['Glucagon / GLP-1','P01275'], TG:['Tiroglobulină','P01266'], TTR:['Transtiretină','P02766'],
 RHO:['Rodopsină','P08100'], CRYAA:['Cristalina alfa A','P02489'], LYVE1:['LYVE-1 (vase limfatice)','Q9Y5Y7'], PROX1:['PROX1 (limfatic)','Q92786'],
 CD4:['CD4 (limfocite T)','P01730'], MS4A1:['CD20 (limfocite B)','P11836'], F13A1:['Factor XIII','P00488'], THBD:['Trombomodulină','P07204'],
 KLK3:['Antigen prostatic (PSA)','P07288'], INHA:['Inhibina alfa','P05111'], PRL:['Prolactină','P01236'], LALBA:['Alfa-lactalbumină','P00709'],
 HTR1A:['Receptor serotonină 1A','P08908'], APOA1:['Apolipoproteina A1','P02647'], CYP1A2:['Citocrom P450 1A2','P05177'],
 ASMT:['Melatonin sintaza (ASMT)','P46597'], PER2:['Period 2 (ceas circadian)','O15055'], TPH1:['Triptofan hidroxilaza 1 (serotonină)','P17752'],
 CHAT:['Colin acetiltransferaza','P28329'], CREB1:['CREB1','P16220'], COMT:['Catecol-O-metiltransferaza','P21964'], NAMPT:['NAMPT (NAD+)','P43490'],
 COL3A1:['Colagen tip III','P02461'], MMP2:['Metaloproteinaza 2','P08253'], CCK:['Colecistochinină','P06307'], GHRL:['Grelină','Q9UBU3'],
 GAST:['Gastrină','P01350'], FOXP3:['FOXP3 (T reglatoare)','Q9BZS1'], POMC:['POMC / Beta-endorfină','P01189'], TH:['Tirozin hidroxilaza','P07101'],
 HCRT:['Orexină (hipocretină)','O43612'],
 KISS1:['Kisspeptină','Q15726'], GNRH1:['GnRH (gonadoliberină)','P01148'], GNRHR:['Receptor GnRH','P30968'], SRD5A2:['5-alfa-reductaza 2','P31213'],
 VIP:['Peptid vasoactiv intestinal','P01282'], PDE5A:['Fosfodiesteraza 5A','O76074'], MC4R:['Receptor melanocortină 4','P32245'], CYP19A1:['Aromatază','P11511'],
 GUCY1A1:['Guanilat ciclaza solubilă','Q02108'], NPY:['Neuropeptid Y','P01303'], TPH2:['Triptofan hidroxilaza 2 (creier)','Q8IWU9'], NR3C1:['Receptor glucocorticoizi (cortizol)','P04150'],
 GH1:['Hormon de creștere','P01241'], RPE65:['RPE65 (ciclul vizual)','Q16518'], AMELX:['Amelogenină (smalț)','Q99217'], ENAM:['Enamelină','Q9NRM1'], DSPP:['Sialofosfoproteina dentinei','Q9NZW4'],
 PENK:['Proenkefalină','P01210'], ADIPOQ:['Adiponectină','Q15848'], ACE2:['ACE2','Q9BYF1'], CALCA:['CGRP (calcitonin-related)','P06881']
};


// Ce este și ce face fiecare proteină (rolul biologic real)
const D = {
 COL1A1:'Lanțul principal al colagenului de tip I, proteina structurală de bază din piele, oase, tendoane și ligamente.',
 COL2A1:'Colagenul de tip II, componenta de bază a cartilajului articular și a discurilor dintre vertebre.',
 COL3A1:'Colagenul de tip III, prezent în piele, vase și organe elastice. Apare devreme în vindecarea rănilor, alături de colagenul I.',
 ELN:'Elastina dă elasticitate pielii, arterelor, plămânilor și ligamentelor, astfel încât să revină la forma inițială după întindere.',
 ACAN:'Agrecanul este un proteoglican din cartilaj care reține apa și face cartilajul rezistent la compresie.',
 FGF2:'Factor de creștere care stimulează înmulțirea fibroblastelor și formarea de vase noi; are rol în vindecarea rănilor.',
 VEGFA:'Principalul semnal pentru formarea de vase de sânge noi (angiogeneză), important când un țesut are nevoie de mai mult oxigen.',
 IGF1:'Hormon produs mai ales de ficat la semnalul hormonului de creștere; susține creșterea și refacerea mușchilor și oaselor.',
 HGF:'Factor de creștere care susține regenerarea ficatului și repararea altor țesuturi.',
 EGF:'Stimulează înmulțirea și refacerea celulelor pielii și ale mucoaselor.',
 TGFB1:'Citokină cu rol dublu: temperează inflamația și stimulează producția de colagen. În exces poate duce la fibroză (cicatrizare excesivă).',
 BDNF:'Factor neurotrofic care susține supraviețuirea neuronilor, plasticitatea conexiunilor și învățarea. Efortul fizic îl crește în mod natural.',
 NGF:'Factor necesar creșterii și menținerii neuronilor senzitivi și a celor care controlează funcțiile automate.',
 NRF2:'Factor de transcripție, un fel de „comutator general” care pornește genele de apărare antioxidantă și detoxifiere ale celulei.',
 SOD2:'Enzimă din mitocondrii care neutralizează superoxidul, un radical liber produs în timpul producerii de energie.',
 CAT:'Catalaza descompune apa oxigenată (peroxid de hidrogen) în apă și oxigen.',
 GPX1:'Enzimă care neutralizează peroxizii folosind glutationul; conține seleniu.',
 HMOX1:'Enzimă care degradează hemul; produsele ei (bilirubină, monoxid de carbon în cantități mici) au efect antioxidant și antiinflamator.',
 GSTP1:'Enzimă de detoxifiere care atașează glutation de compuși toxici, ca să poată fi eliminați.',
 NQO1:'Enzimă care neutralizează chinonele reactive; este pornită de NRF2.',
 IL10:'Citokină antiinflamatoare care temperează răspunsul imun și previne inflamația excesivă.',
 IL1RN:'Blochează receptorul IL-1, frânând unul dintre principalele semnale de inflamație și febră.',
 ANXA1:'Anexina A1 ajută la stingerea inflamației; o parte din efectul corticosteroizilor trece prin ea.',
 TNFAIP3:'Enzimă „frână” care oprește semnalul inflamator NF-κB după ce și-a făcut treaba.',
 PGC1A:'Coactivator care stimulează formarea de mitocondrii noi și metabolismul energetic, mai ales în mușchi, inimă și ficat.',
 SIRT1:'Enzimă dependentă de NAD+ care reglează metabolismul, răspunsul la stres și ritmul circadian.',
 SIRT3:'Sirtuina din mitocondrii; reglează enzimele producției de energie și apărarea antioxidantă.',
 AMPK:'Senzorul energetic al celulei. Se activează când energia scade (efort, post) și pornește arderea grăsimilor și a glucozei.',
 LTF:'Lactoferina leagă fierul și are acțiune antimicrobiană; se găsește în lapte, salivă, lacrimi și secreții.',
 LYZ:'Lizozimul distruge peretele unor bacterii; este prezent în lacrimi, salivă și mucus.',
 DEFB1:'Peptid antimicrobian produs continuu de piele și mucoase, parte din prima linie de apărare.',
 CAMP:'Catelicidina, precursorul peptidului antimicrobian LL-37; producția ei este reglată și de vitamina D.',
 HBB:'Lanțul beta al hemoglobinei, proteina din globulele roșii care transportă oxigenul.',
 EPO:'Eritropoietina, hormon produs de rinichi care stimulează măduva să facă globule roșii.',
 ALB:'Albumina, cea mai abundentă proteină din plasmă; ține apa în vase și transportă hormoni, medicamente și acizi grași.',
 TF:'Transferina transportă fierul prin sânge către măduvă și celule.',
 HAMP:'Hepcidina, hormonul ficatului care reglează cât fier se absoarbe din intestin și cât se eliberează din depozite.',
 NOS3:'Produce oxid nitric în peretele vaselor; acesta relaxează vasele și susține fluxul de sânge.',
 NPPA:'Hormon eliberat de inimă când e suprasolicitată; ajută rinichii să elimine sare și apă și scade tensiunea.',
 PLAT:'Activează plasminogenul, care dizolvă cheagurile de sânge.',
 GABRA1:'Parte a receptorului GABA-A, principalul receptor „de frână” (calmant) din creier.',
 MTNR1A:'Receptor al melatoninei, implicat în adormire și în reglarea ritmului zi-noapte.',
 OXT:'Oxitocina, hormon și neurotransmițător legat de atașament, încredere și calm; are rol și la naștere și alăptare.',
 BGLAP:'Osteocalcina, produsă de celulele care construiesc osul; participă la mineralizarea lui (depinde de vitamina K).',
 ACTN3:'Proteină din fibrele musculare rapide, implicată în contracțiile puternice și explozive.',
 MYH7:'Miozina din mușchiul inimii și din fibrele musculare lente, de anduranță.',
 TNMD:'Tenomodulina, marker al celulelor din tendoane, implicată în maturarea și organizarea lor.',
 ESR1:'Receptorul de estrogen alfa, prin care estrogenul acționează în uter, sân, os și creier.',
 PGR:'Receptorul de progesteron, important pentru ciclul menstrual și sarcină.',
 AR:'Receptorul androgenic, prin care acționează testosteronul și DHT (masă musculară, libido, păr).',
 AMH:'Hormonul anti-Müllerian, folosit ca marker al rezervei ovariene la femei.',
 FLG:'Filagrina, esențială pentru bariera pielii și hidratarea ei; lipsa ei e asociată cu eczema.',
 KRT14:'Keratină din stratul bazal al pielii, care dă rezistență mecanică celulelor.',
 UMOD:'Uromodulina, cea mai abundentă proteină din urină; protejează împotriva infecțiilor urinare și a calculilor.',
 KL:'Klotho, produsă mai ales de rinichi; reglează fosfatul și este studiată în legătură cu îmbătrânirea.',
 SFTPC:'Proteină din surfactantul pulmonar, stratul care împiedică alveolele să se închidă la expirație.',
 SCGB1A1:'Proteina CC16 din căile aeriene, cu rol protector și antiinflamator local.',
 MUC5B:'Mucina principală din mucusul căilor aeriene, esențială pentru curățarea lor de particule și microbi.',
 MUC2:'Mucina principală din intestin; formează stratul protector de mucus dintre bacterii și peretele intestinal.',
 TFF3:'Peptid care ajută la refacerea rapidă a mucoasei intestinale după iritații.',
 TJP1:'ZO-1, proteină a joncțiunilor strânse dintre celule, care menține bariera intestinală etanșă.',
 INS:'Insulina, hormonul pancreasului care permite celulelor să preia glucoza din sânge.',
 GCG:'Precursorul glucagonului (crește glicemia) și al GLP-1 (stimulează insulina și senzația de sațietate).',
 TG:'Tiroglobulina, proteina din care tiroida produce hormonii T3 și T4.',
 TTR:'Transtiretina transportă hormonul tiroidian și vitamina A în sânge.',
 RHO:'Rodopsina, pigmentul din retină care captează lumina, esențial pentru vederea pe întuneric.',
 CRYAA:'Cristalina alfa A menține cristalinul transparent și protejează celelalte proteini de deteriorare.',
 LYVE1:'Receptor de pe vasele limfatice, folosit ca marker al acestora.',
 PROX1:'Factor de transcripție care determină formarea vaselor limfatice.',
 CD4:'Marker al limfocitelor T helper, celulele care coordonează răspunsul imun.',
 MS4A1:'CD20, marker de pe limfocitele B, celulele care produc anticorpi.',
 F13A1:'Factorul XIII stabilizează cheagul de fibrină la finalul coagulării.',
 THBD:'Trombomodulina, de pe peretele vaselor, ajută la frânarea coagulării ca să nu se formeze cheaguri inutile.',
 KLK3:'PSA, enzimă produsă de prostată care fluidizează lichidul seminal.',
 INHA:'Subunitate a inhibinei, hormon care reglează FSH și producția de spermatozoizi sau foliculi.',
 PRL:'Prolactina, hormonul care stimulează producția de lapte.',
 LALBA:'Alfa-lactalbumina, proteină din lapte necesară pentru producerea lactozei.',
 HTR1A:'Receptor de serotonină 1A, implicat în reglarea anxietății și a dispoziției.',
 APOA1:'Proteina principală a HDL („colesterolul bun”), care duce colesterolul înapoi la ficat.',
 CYP1A2:'Enzimă din ficat care metabolizează cafeina și multe medicamente.',
 ASMT:'Enzima care face ultimul pas în producerea melatoninei, în glanda pineală, mai ales noaptea.',
 PER2:'Una dintre proteinele „ceasului” intern care ține ritmul zi-noapte al celulelor; lumina dimineții o resetează.',
 TPH1:'Enzima care produce serotonina în intestin și în glanda pineală (unde serotonina devine melatonină). În creier lucrează varianta TPH2.',
 CHAT:'Enzima care produce acetilcolina, neurotransmițător pentru atenție, memorie și contracție musculară.',
 CREB1:'Factor de transcripție activat de semnalele neuronale; este necesar pentru formarea memoriei pe termen lung.',
 COMT:'Enzimă care degradează dopamina, adrenalina și noradrenalina, mai ales în zona frontală a creierului.',
 NAMPT:'Enzima care controlează reciclarea NAD+, coenzima esențială pentru producerea energiei și pentru sirtuine.',
 MMP2:'Enzimă care descompune colagenul vechi, ca țesutul să fie remodelat și înlocuit cu fibre noi.',
 CCK:'Colecistochinina, hormon intestinal care eliberează bila și enzimele pancreatice și dă senzația de sațietate.',
 GHRL:'Grelina, „hormonul foamei”, produs de stomac; crește înainte de masă.',
 GAST:'Gastrina, hormon care stimulează secreția de acid în stomac.',
 FOXP3:'Factorul care definește limfocitele T reglatoare, celulele care previn reacțiile imune excesive și autoimunitatea.',
 POMC:'Precursor din care se formează beta-endorfina (analgezic natural), ACTH și hormonul de pigmentare MSH.',
 TH:'Tirozin hidroxilaza, primul pas în producția de dopamină, noradrenalină și adrenalină.',
 HCRT:'Orexina, neuropeptid care menține starea de veghe și alerta; lipsa ei produce narcolepsie.',
 KISS1:'Kisspeptina, semnalul din hipotalamus care pornește eliberarea de GnRH; studiată și în legătură cu dorința sexuală.',
 GNRH1:'Hormonul din hipotalamus care comandă hipofizei să elibereze LH și FSH, deci producția de hormoni sexuali.',
 GNRHR:'Receptorul GnRH din hipofiză, prin care se pornește eliberarea de LH și FSH.',
 SRD5A2:'Enzima care transformă testosteronul în DHT, forma lui mai puternică (prostată, piele, păr).',
 VIP:'Peptid care relaxează vasele și mușchiul neted; implicat în fluxul de sânge genital, digestie și secreții.',
 PDE5A:'Enzima care degradează cGMP și încheie relaxarea vaselor produsă de oxidul nitric (ținta sildenafilului).',
 MC4R:'Receptor din creier care reglează apetitul și greutatea; este implicat și în excitația sexuală.',
 CYP19A1:'Aromataza, enzima care transformă testosteronul în estradiol, la femei și la bărbați.',
 GUCY1A1:'Receptorul oxidului nitric: produce cGMP, semnalul care relaxează vasele și crește fluxul de sânge.',
 NPY:'Neuropeptid Y, implicat în reglarea stresului, a apetitului și în reziliența la stres.',
 TPH2:'Enzima care produce serotonina în creier, neurotransmițător legat de dispoziție, somn și apetit.',
 NR3C1:'Receptorul cortizolului; prin el hormonul de stres acționează și tot prin el se închide bucla de stres.',
 PENK:'Proenkefalina, precursorul enkefalinelor, analgezicele naturale ale corpului.',
 ADIPOQ:'Adiponectina, hormon din țesutul gras care crește sensibilitatea la insulină și are efect antiinflamator.',
 ACE2:'Enzimă care transformă angiotensina II în angiotensina 1-7, cu efect vasodilatator; este și poarta de intrare a SARS-CoV-2.',
 GH1:'Hormonul de creștere, produs de hipofiză mai ales în somnul profund; stimulează creșterea prin IGF-1.',
 RPE65:'Enzimă din stratul de sub retină care reface pigmentul vizual după expunerea la lumină.',
 AMELX:'Amelogenina, proteina principală din care se formează smalțul dinților în timpul dezvoltării lor.',
 ENAM:'Enamelina, proteină necesară creșterii cristalelor de smalț.',
 DSPP:'Precursorul proteinelor din dentină, stratul dur de sub smalț.',
 CALCA:'Precursorul CGRP, un peptid vasodilatator puternic implicat în declanșarea migrenei.'
};

// Fragmente ilustrative deterministe (nu sunt secvențele complete din UniProt)
function hashStr(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function seqFor(gene){
  const r=rng(hashStr(gene+'|'+(T[gene]?T[gene][1]:'')));
  const len=28+Math.floor(r()*14); let s='M';
  for(let i=1;i<len;i++) s+=AA_LIST[Math.floor(r()*20)];
  return s;
}

const ACTIONS = {
 regen:{n:'Regenerare',t:['FGF2','IGF1','VEGFA','TGFB1']},
 detox:{n:'Curățare & Detox',t:['NRF2','GSTP1','NQO1','HMOX1']},
 infl:{n:'Echilibru Inflamator',t:['IL10','IL1RN','ANXA1','TNFAIP3']},
 antiox:{n:'Protecție Antioxidantă',t:['SOD2','CAT','GPX1','NRF2']},
 energie:{n:'Energie Celulară',t:['PGC1A','SIRT3','AMPK','SIRT1']},
 imun:{n:'Imunitate',t:['LTF','LYZ','DEFB1','CAMP']},
 relax:{n:'Relaxare & Somn',t:['GABRA1','MTNR1A','OXT','HTR1A']},
 circ:{n:'Circulație',t:['NOS3','VEGFA','THBD','PLAT']},
 mobil:{n:'Mobilitate & Flexibilitate',t:['COL2A1','ACAN','ELN','TNMD']},
 hormon:{n:'Echilibru Hormonal',t:[]},
 oxigen:{n:'Oxigenare',t:['HBB','EPO','TF','HAMP']}
};
const SEX_T = {F:['ESR1','PGR','AMH'], M:['AR','INHA','KLK3'], U:['TG','TTR','NR3C1']};
// Ce se adaugă la stive după sex (hormonii diferă între femei și bărbați)
const SEX_ADD = {F:{1:['PGR'],2:['ESR1'],3:['ESR1']}, M:{2:['AR'],3:['AR']}};

// Părți: [nume, ținte de bază, acțiuni, sex (opțional)]
const PARTS = {
 organe:[
  ['Creier',['BDNF','NGF','GABRA1'],['regen','relax','antiox','energie','infl']],
  ['Inimă',['MYH7','NPPA','NOS3'],['regen','circ','energie','antiox','infl']],
  ['Plămâni',['SFTPC','SCGB1A1','MUC5B'],['regen','imun','infl','detox','antiox']],
  ['Ficat',['HGF','ALB','CYP1A2'],['detox','regen','antiox','infl','energie']],
  ['Rinichi',['UMOD','KL','HMOX1'],['detox','regen','antiox','infl','circ']],
  ['Stomac & Intestin',['MUC2','TFF3','TJP1'],['regen','infl','detox','imun','relax']],
  ['Pancreas',['INS','GCG','APOA1'],['energie','infl','regen','antiox']],
  ['Piele',['COL1A1','FLG','KRT14'],['regen','antiox','infl','detox']],
  ['Tiroidă',['TG','TTR','NRF2'],['hormon','antiox','infl','energie']],
  ['Ochi',['RHO','CRYAA','SOD2'],['antiox','regen','circ','relax']],
  ['Uter & Ovare',['ESR1','PGR','AMH'],['hormon','regen','infl','circ','relax'],'F'],
  ['Sâni',['PRL','LALBA','ESR1'],['hormon','infl','detox','antiox'],'F'],
  ['Prostată',['KLK3','AR','NQO1'],['infl','detox','antiox','hormon'],'M'],
  ['Testicule',['AR','INHA','SOD2'],['hormon','energie','antiox','circ'],'M']
 ],
 sisteme:[
  ['Sistem nervos',['BDNF','NGF','HTR1A'],['relax','regen','energie','antiox','infl']],
  ['Cardiovascular',['NOS3','NPPA','MYH7'],['circ','regen','antiox','infl','energie']],
  ['Respirator',['SFTPC','SCGB1A1','MUC5B'],['imun','infl','regen','detox','oxigen']],
  ['Digestiv',['MUC2','TFF3','TJP1'],['regen','detox','infl','imun','relax']],
  ['Imunitar',['CD4','MS4A1','LTF'],['imun','infl','antiox','energie']],
  ['Endocrin',['INS','TG','TTR'],['hormon','energie','infl','relax']],
  ['Limfatic',['LYVE1','PROX1','VEGFA'],['detox','circ','imun','infl']],
  ['Urinar',['UMOD','KL','DEFB1'],['detox','imun','infl','regen']],
  ['Reproducător',[],['hormon','regen','circ','energie','relax']],
  ['Tegumentar (piele)',['COL1A1','FLG','KRT14'],['regen','antiox','infl','detox']]
 ],
 musculo:[
  ['Mușchi',['ACTN3','IGF1','PGC1A'],['regen','energie','infl','relax','antiox']],
  ['Oase',['BGLAP','COL1A1','TGFB1'],['regen','hormon','infl']],
  ['Articulații',['COL2A1','ACAN','IL1RN'],['mobil','regen','infl','antiox']],
  ['Coloană & Spate',['COL2A1','ACAN','BGLAP'],['mobil','regen','infl','relax']],
  ['Tendoane & Ligamente',['TNMD','COL1A1','ELN'],['regen','mobil','infl']],
  ['Cartilaj',['COL2A1','ACAN','TGFB1'],['regen','mobil','infl','antiox']]
 ],
 sange:[
  ['Globule roșii',['HBB','EPO','TF'],['oxigen','regen','antiox','energie']],
  ['Globule albe',['CD4','MS4A1','LYZ'],['imun','infl','antiox','energie']],
  ['Plasmă & Proteine',['ALB','APOA1','TTR'],['detox','regen','infl']],
  ['Vase & Coagulare',['THBD','PLAT','F13A1'],['circ','infl','antiox','regen']],
  ['Fier & Oxigenare',['TF','HAMP','HBB'],['oxigen','regen','energie']]
 ]
};
const CAT_NAME = {organe:'Organe',sisteme:'Sisteme',musculo:'Musculoscheletic',sange:'Sânge'};

// Căutare după problemă → [cat, parte, acțiune]
const PROBLEMS = [
 ['Imunitate scăzută / răceli dese',['imunitate','racel','raceli','imun','viroze','gripa'],'sisteme','Imunitar','imun'],
 ['Infecții respiratorii / secreții',['infectii respiratorii','bronsit','secreti','tuse','pseudomonas','pneumoni','traheostom','trahe','respirat'],'sisteme','Respirator','imun'],
 ['Astm / respirație grea',['astm','respiratie','dispnee','bpoc'],'organe','Plămâni','infl'],
 ['Ficat gras / steatoză',['ficat gras','steatoz','ficat','hepat','colesterol'],'organe','Ficat','detox'],
 ['Insomnie / somn agitat',['insomni','somn','adorm'],'sisteme','Sistem nervos','relax'],
 ['Stres / anxietate',['stres','anxiet','panica','neliniste','agitat'],'sisteme','Sistem nervos','relax'],
 ['Oboseală cronică',['oboseal','epuizare','lipsa energie','energie','astenie'],'musculo','Mușchi','energie'],
 ['Memorie / concentrare',['memori','concentr','ceata','dementa','cognitiv'],'organe','Creier','regen'],
 ['Migrenă / dureri de cap',['migren','durere de cap','cefalee'],'organe','Creier','infl'],
 ['Artroză / dureri articulare',['artroz','artrit','articulat','genunchi','sold','reumat'],'musculo','Articulații','infl'],
 ['Dureri de spate / lombalgie',['spate','lombalg','hernie','disc','coloana','sciatic'],'musculo','Coloană & Spate','mobil'],
 ['Osteoporoză / oase fragile',['osteopor','oase','fractur','osteopeni'],'musculo','Oase','regen'],
 ['Tendinită / entorsă',['tendin','entors','ligament','luxat'],'musculo','Tendoane & Ligamente','regen'],
 ['Recuperare musculară / febră musculară',['muschi','muscular','febra musculara','sport','crampe'],'musculo','Mușchi','regen'],
 ['Anemie / fier scăzut',['anemi','fier','hemoglobin','feritin'],'sange','Fier & Oxigenare','oxigen'],
 ['Circulație slabă / mâini reci',['circulati','varice','maini reci','picioare reci','vene'],'sange','Vase & Coagulare','circ'],
 ['Tensiune mare',['tensiune','hipertens'],'organe','Inimă','circ'],
 ['Inimă / palpitații',['inima','palpitat','cardiac','aritm'],'organe','Inimă','regen'],
 ['Gastrită / reflux',['gastrit','reflux','arsuri','stomac','ulcer'],'organe','Stomac & Intestin','infl'],
 ['Colon iritabil / balonare',['colon','balon','intestin','constipat','diaree','digesti'],'sisteme','Digestiv','infl'],
 ['Glicemie / diabet',['diabet','glicem','insulin','zahar'],'organe','Pancreas','energie'],
 ['Tiroidă',['tiroid','hashimoto','hipotiroid','hipertiroid'],'organe','Tiroidă','hormon'],
 ['Rinichi / retenție de apă',['rinichi','renal','retenti','edem','umflat'],'organe','Rinichi','detox'],
 ['Infecții urinare',['urinar','cistit','vezica'],'sisteme','Urinar','imun'],
 ['Ochi obosiți / vedere',['ochi','vedere','cataract','retin'],'organe','Ochi','antiox'],
 ['Acnee / eczemă / piele iritată',['acnee','eczem','psoriaz','piele','dermatit','urticar'],'organe','Piele','infl'],
 ['Răni / cicatrizare',['rana','rani','cicatri','arsura','operati','postoperator','chirurg'],'organe','Piele','regen'],
 ['Alergii',['alergi','rinit','polen'],'sisteme','Imunitar','infl'],
 ['Retenție limfatică / umflături',['limf','higrom','ganglion','limfedem'],'sisteme','Limfatic','detox'],
 ['Sindrom premenstrual',['premenstrual','menstr','ciclu'],'organe','Uter & Ovare','hormon','F'],
 ['Menopauză',['menopauz','bufeuri'],'organe','Uter & Ovare','hormon','F'],
 ['Fertilitate',['fertilit','sarcin','ovulat'],'sisteme','Reproducător','hormon'],
 ['Libido scăzut',['libido','erect','potent'],'sisteme','Reproducător','circ'],
 ['Prostată mărită',['prostat'],'organe','Prostată','infl','M'],
 ['Inflamație generală',['inflamati','durere','dureri'],'sisteme','Imunitar','infl'],
 ['Detox / după tratamente',['detox','curatare','toxin','tratament','medicament','chimio'],'organe','Ficat','detox'],
 ['Îmbătrânire / vitalitate',['imbatrani','vitalit','longevit','riduri','varsta'],'organe','Piele','antiox']
];

// Stive predefinite (max 4 cuvinte, culoare proprie). m = ritm potrivit: calm / mediu / alert
const PRESETS = [
 {n:'Regenerare Totală',c:'#22c55e',g:['FGF2','IGF1','VEGFA','COL1A1','HGF'],m:'mediu',syn:'Reunește semnale de creștere (FGF2, IGF1, HGF), formarea de vase noi care aduc oxigen (VEGFA) și materialul de construcție al țesuturilor (colagen I). Tema: refacere și reconstrucție.'},
 {n:'Imunitate & Echilibru',c:'#3b82f6',g:['LTF','LYZ','IL10','DEFB1','SOD2'],m:'mediu',syn:'Combină prima linie de apărare antimicrobiană (lactoferină, lizozim, defensină) cu frâna inflamației (IL10) și protecția antioxidantă (SOD2). Tema: apărare fără exces.'},
 {n:'Detox Celular',c:'#14b8a6',g:['NRF2','GSTP1','NQO1','HMOX1'],m:'mediu',syn:'NRF2 este comutatorul care pornește celelalte trei enzime de detoxifiere și protecție. Tema: curățarea internă a celulei.'},
 {n:'Energie Zilnică',c:'#f59e0b',g:['PGC1A','SIRT3','AMPK','SIRT1'],m:'alert',syn:'AMPK simte lipsa de energie, PGC-1α construiește mitocondrii noi, iar sirtuinele le reglează. Tema: „centralele” celulei.'},
 {n:'Somn Liniștit',c:'#8b5cf6',g:['MTNR1A','GABRA1','OXT'],m:'calm',syn:'Receptorul melatoninei, frâna GABA a creierului și oxitocina calmantă. Tema: trecerea spre somn.'},
 {n:'Respirație Ușoară',c:'#06b6d4',g:['SFTPC','SCGB1A1','IL10','LTF'],m:'calm',syn:'Surfactantul alveolelor, proteina protectoare a căilor aeriene, frâna inflamației și lactoferina antimicrobiană. Tema: plămâni și căi respiratorii.'},
 {n:'Articulații Mobile',c:'#f97316',g:['COL2A1','ACAN','IL1RN','TGFB1'],m:'mediu',syn:'Structura cartilajului (colagen II, agrecan) plus două semnale care temperează inflamația articulară. Tema: mobilitate.'},
 {n:'Inimă & Circulație',c:'#ef4444',g:['NOS3','NPPA','VEGFA','SOD2'],m:'mediu',syn:'Oxidul nitric care relaxează vasele, hormonul inimii care reglează tensiunea, vasele noi și protecția antioxidantă. Tema: flux de sânge.'},
 {n:'Piele Luminoasă',c:'#ec4899',g:['COL1A1','ELN','FLG','CAT'],m:'mediu',syn:'Fermitate (colagen), elasticitate (elastină), barieră și hidratare (filagrină) și protecție antioxidantă. Tema: piele.'},
 {n:'Digestie Calmă',c:'#84cc16',g:['MUC2','TFF3','TJP1','IL10'],m:'calm',syn:'Stratul de mucus, refacerea mucoasei, joncțiunile strânse ale barierei intestinale și echilibrul inflamator. Tema: intestin liniștit.'},
 {n:'Refacere Spate',c:'#a16207',g:['COL2A1','ACAN','TNMD','BGLAP'],m:'mediu',syn:'Discurile (colagen II, agrecan), tendoanele (tenomodulină) și osul (osteocalcină). Tema: coloană și spate.'},
 {n:'Sânge & Oxigen',c:'#dc2626',g:['HBB','EPO','TF','HAMP'],m:'mediu',syn:'Hemoglobina, hormonul care face globule roșii, transportorul de fier și reglatorul fierului. Tema: oxigenare.'},
 {n:'Calm & Concentrare',c:'#6366f1',g:['BDNF','HTR1A','GABRA1'],m:'calm',syn:'Plasticitatea neuronilor, receptorul serotoninei legat de anxietate și frâna GABA. Tema: minte liniștită și atentă.'},
 {n:'Somn Profund Seară',c:'#312e81',g:['ASMT','PER2','OXT','IL10'],m:'calm',syn:'Producția de melatonină (ASMT), ceasul circadian (PER2), oxitocina calmantă și echilibrul inflamator. Tema: rutină de seară, cu tempo mic și timbru cald.'},
 {n:'Anti-Stres & Reset',c:'#7dd3fc',g:['OXT','IL10','NRF2','TPH1'],m:'calm',syn:'Oxitocina (calm social), IL10 (stingerea inflamației), NRF2 (protecție la stres oxidativ) și producția de serotonină. Tema: revenire după o zi grea.'},
 {n:'Focus Profund & Claritate',c:'#10b981',g:['CHAT','CREB1','BDNF','COMT'],m:'alert',syn:'Acetilcolina pentru atenție, CREB și BDNF pentru memorie și învățare, COMT pentru echilibrul dopaminei în zona frontală. Tema: lucru analitic și studiu.'},
 {n:'Refacere Post-Antrenament',c:'#fb923c',g:['IGF1','FGF2','COL1A1','IL10','NAMPT'],m:'mediu',syn:'Semnalele de refacere musculară (IGF1, FGF2), colagenul țesuturilor, temperarea inflamației de după efort și reîncărcarea NAD+. Tema: după antrenament.'},
 {n:'Articulații & Țesut Conjunctiv',c:'#eab308',g:['COL1A1','COL3A1','ELN','MMP2','TGFB1'],m:'mediu',syn:'Colagenul I și III și elastina construiesc, MMP2 îndepărtează fibrele vechi, TGF-β coordonează producția nouă. Tema: tendoane, ligamente, elasticitate.'},
 {n:'Digestie & Gut-Brain',c:'#c2410c',g:['CCK','GCG','GHRL','GAST'],m:'mediu',syn:'Hormonii digestiei care comunică și cu creierul: foamea (grelină), acidul gastric (gastrină), bila și sațietatea (CCK, GLP-1). Tema: ritmul digestiv.'},
 {n:'Echilibru Imun & Scut',c:'#1d4ed8',g:['IL10','FOXP3','NRF2','SOD2'],m:'mediu',syn:'Celulele T reglatoare (FOXP3) și IL10 țin imunitatea în echilibru, NRF2 și SOD2 asigură protecția antioxidantă. Tema: echilibru imun (nu înlocuiește îngrijirea medicală).'},
 {n:'Vitalitate & Bună Dispoziție',c:'#f0abfc',g:['POMC','TPH1','TH','HCRT'],m:'alert',syn:'Beta-endorfina, serotonina, dopamina (prin TH) și orexina care ține starea de veghe. Tema: tonus de zi și optimism.'},
 {n:'Echilibru Feminin',c:'#d946ef',g:['ESR1','PGR','OXT','AMH'],m:'calm',x:'F',syn:'Receptorii estrogenului și progesteronului, oxitocina și marker-ul rezervei ovariene. Tema: ciclu și echilibru hormonal feminin.'},
 {n:'Vitalitate Masculină',c:'#0ea5e9',g:['AR','INHA','PGC1A','NOS3'],m:'alert',x:'M',syn:'Receptorul testosteronului, inhibina, energia mitocondrială și oxidul nitric pentru circulație. Tema: vitalitate masculină.'},
{n:'Libidou Bărbat Intens',c:'#38bdf8',g:['KISS1','GNRH1','GNRHR','SRD5A2','AR','TH','NOS3'],m:'alert',x:'M',k:'libido dorinta sexual erectie potenta',syn:'Semnalizarea centrală a dorinței (kisspeptină, GnRH și receptorul lui), calea androgenică (SRD5A2 face DHT, AR îl primește) și sinteza dopaminei (TH). Am adăugat NOS3 pentru partea de circulație.'},
{n:'Circulație & Climax Bărbat',c:'#0284c7',g:['NOS3','VIP','PDE5A','POMC','OXT','GUCY1A1'],m:'mediu',x:'M',k:'erectie circulatie climax orgasm potenta',syn:'Lanțul oxidului nitric (NOS3 îl produce, guanilat ciclaza îl primește, PDE5A încheie semnalul), VIP pentru relaxarea vaselor, plus beta-endorfina și oxitocina pentru plăcere și apropiere. Am adăugat GUCY1A1, veriga dintre NO și PDE5.'},
{n:'Libidou Femeie Intens',c:'#f472b6',g:['KISS1','MC4R','VIP','NOS3','CYP19A1','PGR','OXT'],m:'mediu',x:'F',k:'libido dorinta sexual excitatie',syn:'Semnalizarea dorinței (kisspeptină, MC4R), circulația și sensibilitatea locală (VIP, NOS3) și echilibrul hormonal feminin (aromataza face estradiol, receptorul de progesteron). Am adăugat oxitocina pentru conexiune.'},
{n:'Climax Femeie Profund',c:'#e11d48',g:['POMC','OXT','VIP','NOS3','TPH1','ESR1'],m:'mediu',x:'F',k:'climax orgasm placere',syn:'Euforie și plăcere (beta-endorfină), conexiune (oxitocină), vasodilatație (VIP, NOS3) și calm (serotonină). Am adăugat receptorul de estrogen pentru sensibilitatea țesuturilor.'},
{n:'Anxietate Liniștită',c:'#a5b4fc',g:['GABRA1','HTR1A','OXT','NPY'],m:'calm',k:'anxietate panica frica neliniste emotional',syn:'Frâna GABA, receptorul serotoninei legat de anxietate, oxitocina și neuropeptidul Y, asociat cu reziliența la stres. Tema: calm interior.'},
{n:'Dispoziție Luminoasă',c:'#fde047',g:['BDNF','TPH2','HTR1A','CREB1'],m:'mediu',k:'depresie tristete dispozitie mood emotional',syn:'Serotonina creierului (TPH2) și receptorul ei, plus BDNF și CREB, studiate în legătură cu plasticitatea și starea de spirit. Tema: dispoziție mai bună. La tristețe persistentă, vorbește cu un specialist.'},
{n:'Refacere după Burnout',c:'#94a3b8',g:['NR3C1','PGC1A','NAMPT','OXT'],m:'calm',k:'burnout epuizare stres cronic oboseala mentala',syn:'Receptorul cortizolului care închide bucla de stres, energia mitocondrială (PGC-1α, NAD+) și oxitocina. Tema: reîncărcare după stres prelungit.'},
{n:'Echilibru Emoțional',c:'#c084fc',g:['OXT','POMC','HTR1A','NPY'],m:'calm',k:'emotional doliu suparare singuratate tristete',syn:'Oxitocina (conexiune), beta-endorfina (consolare), serotonina (echilibru) și NPY (reziliență). Tema: perioade grele emoțional.'},
{n:'Durere Cronică Calmă',c:'#b91c1c',g:['POMC','PENK','IL10','ANXA1'],m:'calm',k:'durere cronica dureri fibromialgie',syn:'Analgezicele naturale ale corpului (endorfine, enkefaline) și două semnale care sting inflamația. Tema: confort în dureri de durată.'},
{n:'Migrenă Calmă',c:'#7c3aed',g:['CALCA','HTR1A','IL10','MTNR1A'],m:'calm',k:'migrena durere de cap cefalee',syn:'CGRP (principalul semnal al migrenei), receptorul serotoninei, IL10 și melatonina. Tema: liniște în timpul crizelor, în cameră întunecată și volum mic.'},
{n:'Glicemie Echilibrată',c:'#65a30d',g:['INS','GCG','AMPK','ADIPOQ'],m:'mediu',k:'diabet glicemie insulina prediabet',syn:'Insulina și GLP-1, senzorul energetic AMPK și adiponectina care crește sensibilitatea la insulină. Tema: metabolismul zahărului.'},
{n:'Tensiune Echilibrată',c:'#be123c',g:['NOS3','NPPA','ACE2','KL'],m:'calm',k:'tensiune hipertensiune presiune',syn:'Oxidul nitric și hormonul inimii relaxează vasele, ACE2 contrabalansează angiotensina II, iar Klotho protejează vasele. Tema: tensiune liniștită.'},
{n:'Scut Respirator',c:'#0891b2',g:['LTF','CAMP','MUC5B','IL10','SCGB1A1'],m:'calm',k:'raceala gripa infectii respiratorii tuse secretii',syn:'Apărarea antimicrobiană a mucoaselor (lactoferină, LL-37), mucusul care curăță căile aeriene și protecția lor locală. Tema: sezonul răcelilor.'},
{n:'Refacere Post-Viral',c:'#059669',g:['IL10','PGC1A','NRF2','SIRT1'],m:'calm',k:'post covid long covid dupa viroza oboseala',syn:'Stingerea inflamației, mitocondrii noi și protecție la stres oxidativ. Tema: revenire după o viroză.'},
{n:'Inflamație Silențioasă',c:'#ea580c',g:['IL10','IL1RN','TNFAIP3','ADIPOQ'],m:'mediu',k:'inflamatie cronica autoimun',syn:'Patru frâne ale inflamației: IL10, blocantul IL-1, enzima A20 și adiponectina. Tema: inflamație de fond.'},
{n:'Ficat Curat',c:'#4d7c0f',g:['HGF','NRF2','GSTP1','CYP1A2'],m:'mediu',k:'ficat steatoza detox hepatic',syn:'Regenerarea ficatului (HGF), comutatorul antioxidant NRF2 și două enzime de procesare a substanțelor. Tema: ficat.'},
{n:'Tiroidă Echilibrată',c:'#0f766e',g:['TG','TTR','GPX1','NRF2'],m:'mediu',k:'tiroida hashimoto hipotiroidie',syn:'Producția și transportul hormonilor tiroidieni, plus enzima cu seleniu care protejează tiroida. Tema: tiroidă.'},
{n:'Greutate & Sațietate',c:'#d97706',g:['GCG','CCK','MC4R','ADIPOQ'],m:'mediu',k:'greutate slabire obezitate pofta apetit',syn:'Semnalele de sațietate (GLP-1, CCK), receptorul care reglează apetitul (MC4R) și adiponectina. Tema: apetit și greutate.'},
{n:'Ochi Odihniți',c:'#2dd4bf',g:['RHO','CRYAA','SOD2','MTNR1A'],m:'calm',k:'ochi obositi ecran vedere',syn:'Pigmentul retinei, transparența cristalinului, protecția antioxidantă și melatonina. Tema: pauză după ecrane.'},
{n:'Menopauză Liniștită',c:'#db2777',g:['ESR1','PGR','BGLAP','HTR1A'],m:'calm',x:'F',k:'menopauza bufeuri',syn:'Receptorii estrogenului și progesteronului, osteocalcina pentru oase și serotonina pentru dispoziție. Tema: tranziția menopauzei.'},
{n:'Prostată Echilibrată',c:'#1e40af',g:['KLK3','AR','NQO1','IL10'],m:'mediu',x:'M',k:'prostata urinare',syn:'PSA și receptorul androgenic, protecție antioxidantă și echilibru inflamator. Tema: prostată.'},
 {n:'Focus Copii',c:'#a7f3d0',g:['CHAT','BDNF','COMT','CREB1'],m:'mediu',grp:7,k:'copil copii kids focus atentie teme scoala',syn:'Acetilcolina pentru atenție, BDNF și CREB pentru învățare, COMT pentru echilibrul dopaminei. Tema: concentrare la teme, la volum mic.'},
 {n:'Creștere Sănătoasă',c:'#bef264',g:['GH1','IGF1','BGLAP','COL1A1'],m:'calm',grp:7,k:'copil copii kids crestere inaltime oase',syn:'Hormonul de creștere (eliberat mai ales în somn), IGF-1 pe care îl declanșează, osteocalcina și colagenul osului. Tema: creștere, de ascultat seara, înainte de somn.'},
 {n:'Vedere Sănătoasă',c:'#67e8f9',g:['RHO','RPE65','CRYAA','SOD2'],m:'calm',grp:7,k:'copil copii kids vedere ochi ecran',syn:'Pigmentul vizual și enzima care îl reface, transparența cristalinului și protecția antioxidantă. Tema: pauză pentru ochi după ecrane.'},
 {n:'Dantură Sănătoasă',c:'#f1f5f9',g:['AMELX','ENAM','DSPP','BGLAP'],m:'mediu',grp:7,k:'copil copii kids dinti dantura smalt carii',syn:'Proteinele din care se formează smalțul (amelogenină, enamelină) și dentina, plus osteocalcina pentru mineralizare. Tema: dinți sănătoși, alături de periaj și dentist.'},
 {n:'Somn Copii',c:'#a78bfa',g:['MTNR1A','ASMT','PER2','OXT'],m:'calm',grp:7,k:'copil copii kids somn dormi adormire seara',syn:'Producția și receptorul melatoninei, ceasul zi-noapte și oxitocina calmantă. Tema: rutină de culcare.'},
 {n:'Imunitate Copii',c:'#93c5fd',g:['LTF','LYZ','DEFB1','CAMP'],m:'calm',grp:7,k:'copil copii kids imunitate raceli gradinita',syn:'Prima linie de apărare a mucoaselor: lactoferină, lizozim, defensină și LL-37. Tema: sezonul răcelilor la grădiniță și școală.'},
 {n:'Calm Emoțional Copii',c:'#fbcfe8',g:['OXT','GABRA1','NPY','HTR1A'],m:'calm',grp:7,k:'copil copii kids calm agitat emotii frica plans',syn:'Oxitocina (siguranță și atașament), frâna GABA, NPY (reziliență) și serotonina. Tema: liniște după o zi agitată.'},
 {n:'Memorie & Învățare Copii',c:'#fcd34d',g:['BDNF','CREB1','NGF','CHAT'],m:'mediu',grp:7,k:'copil copii kids memorie invatare scoala examen',syn:'Factorii care susțin neuronii și formarea memoriei (BDNF, CREB, NGF) și acetilcolina. Tema: învățat și repetat.'},
 {n:'Digestie Copii',c:'#d9f99d',g:['MUC2','TFF3','TJP1','LALBA'],m:'calm',grp:7,k:'copil copii kids burta colici digestie',syn:'Stratul protector al intestinului, refacerea mucoasei, bariera intestinală și o proteină din lapte. Tema: burtică liniștită.'},
 {n:'Respirație Copii',c:'#99f6e4',g:['SFTPC','SCGB1A1','LTF','IL10'],m:'calm',grp:7,k:'copil copii kids respiratie tuse plamani',syn:'Surfactantul plămânilor, proteina protectoare a căilor aeriene, lactoferina și echilibrul inflamator. Tema: respirație liniștită.'}

];
// Presetul potrivit pentru fiecare ritm
const MOOD = {calm:{bpm:60,timbre:'cald',drone:true,n:'Calm'},mediu:{bpm:84,timbre:'flaut',drone:true,n:'Mediu'},alert:{bpm:108,timbre:'clopot',drone:false,n:'Alert'}};

/* ================== STARE ================== */
const S = {dom:'om', sex:null, age:'adult', cat:null, part:null, stack:null, wav:null, notes:[], url:null};
const $ = id => document.getElementById(id);
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
function toast(m){const t=$('toast');t.textContent=m;t.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('show'),2200)}
function store(){try{return window.localStorage}catch(e){return null}}

/* ================== UI: PAȘI ================== */
function setSex(v,scroll){
  S.sex=v==='U'?null:v; S.sexSet=true;
  document.querySelectorAll('[data-sex]').forEach(x=>x.classList.toggle('sel',x.dataset.sex===v));
  document.querySelectorAll('[data-sex2]').forEach(x=>x.classList.toggle('sel',x.dataset.sex2===v));
  $('sec-cat').classList.remove('hidden');
  renderPresets(); if(S.cat){renderParts(); if(S.part&&S.part[3]&&S.sex&&S.part[3]!==S.sex){S.part=null;$('sec-act').classList.add('hidden')}}
}
function setDom(d){
  if(d===S.dom) return; const H=['sec-sex','sec-cat','sec-part','sec-act'];
  if(S.dom==='om') S.omHidden=H.map(id=>$(id).classList.contains('hidden'));
  S.dom=d; document.querySelectorAll('[data-dom]').forEach(x=>x.classList.toggle('sel',x.dataset.dom===d));
  H.forEach((id,i)=>$(id).classList.toggle('hidden',d!=='om'||(S.omHidden?S.omHidden[i]:id!=='sec-sex')));
  $('sex-row2').classList.toggle('hidden',d!=='om');
  $('presets-h').textContent=d==='om'?'Stive predefinite':'Stive pentru '+DOMS[d].n.toLowerCase();
  $('dom-note').textContent=DOMS[d].note||''; curGrp=0; renderGroups(); renderPresets();
}
document.querySelectorAll('[data-dom]').forEach(b=>b.onclick=()=>setDom(b.dataset.dom));
document.querySelectorAll('[data-sex]').forEach(b=>b.onclick=()=>setSex(b.dataset.sex,true));
document.querySelectorAll('[data-sex2]').forEach(b=>b.onclick=()=>setSex(b.dataset.sex2,false));
document.querySelectorAll('[data-age]').forEach(b=>b.onclick=()=>{
  S.age=b.dataset.age;
  document.querySelectorAll('[data-age]').forEach(x=>x.classList.toggle('sel',x===b));
  applyAgeDefaults();
});
function applyAgeDefaults(){
  const m={copil:[72,'flaut',50],adult:[84,'cald',60],senior:[66,'cald',55]}[S.age];
  $('bpm').value=m[0]; $('timbre').value=m[1]; $('vol').value=m[2]; syncLabels();
}
document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{
  S.cat=b.dataset.cat; S.part=null;
  document.querySelectorAll('[data-cat]').forEach(x=>x.classList.toggle('sel',x===b));
  renderParts(); $('sec-act').classList.add('hidden');
});
function partsFor(cat){return PARTS[cat].filter(p=>!p[3]||!S.sex||p[3]===S.sex)}
function renderParts(){
  $('sec-part').classList.remove('hidden');
  $('part-title').textContent=CAT_NAME[S.cat]+': alege';
  const row=$('part-row'); row.innerHTML='';
  partsFor(S.cat).forEach(p=>{
    const b=document.createElement('button'); b.textContent=p[0];
    if(S.part&&S.part[0]===p[0]) b.classList.add('sel');
    b.onclick=()=>{S.part=p; renderParts(); renderActions()};
    row.appendChild(b);
  });
}
function renderActions(){
  const p=S.part; $('sec-act').classList.remove('hidden');
  $('act-crumb').innerHTML=({F:'Femeie',M:'Bărbat'}[S.sex]||'Universal')+' › '+CAT_NAME[S.cat]+' › <b>'+p[0]+'</b>';
  const row=$('act-row'); row.innerHTML='';
  p[2].forEach(a=>{
    const b=document.createElement('button'); b.textContent=ACTIONS[a].n;
    b.onclick=()=>{buildStack(S.cat,p,a); document.querySelectorAll('#act-row button').forEach(x=>x.classList.toggle('sel',x===b))};
    row.appendChild(b);
  });
}

/* ================== GENERATOR STIVĂ ================== */
function buildStack(cat,part,act,label){
  const sex=S.sex||'U'; let list=[];
  const add=g=>{if(T[g]&&!list.includes(g))list.push(g)};
  let base=part[1].length?part[1]:SEX_T[sex];
  base.slice(0,3).forEach(add);
  const at=act==='hormon'?SEX_T[sex]:ACTIONS[act].t;
  at.slice(0,3).forEach(add);
  if(act==='relax'||S.age==='senior') add('OXT');
  if(S.age==='copil') list=list.slice(0,5);
  const name=shortName(ACT_SHORT[act]+' '+part[0]);
  setStack({name, color:'#22d3ee', genes:list, tags:[{F:'Femeie',M:'Bărbat',U:'Universal'}[sex], CAT_NAME[cat], part[0], ACTIONS[act].n, label].filter(Boolean)});
}
const ACT_SHORT={regen:'Regenerare',detox:'Detox',infl:'Echilibru Inflamator',antiox:'Antioxidant',energie:'Energie',imun:'Imunitate',relax:'Relaxare',circ:'Circulație',mobil:'Mobilitate',hormon:'Echilibru Hormonal',oxigen:'Oxigenare'};
function shortName(s){const w=s.split(/\s+/).slice(0,4); while(w.length&&w[w.length-1]==='&') w.pop(); return w.join(' ')}
function setStack(st){
  S.stack=st; $('sec-stack').classList.remove('hidden');
  $('stack-name').textContent=st.name; $('stack-name').style.color=st.color||'var(--text)';
  $('stack-chips').innerHTML=st.tags.map(t=>'<span class="chip">'+esc(t)+'</span>').join('');
  if(!st.mood) st.mood=guessMood(st.genes);
  $('btn-mood').textContent='Preset potrivit: '+MOOD[st.mood].n+' ('+MOOD[st.mood].bpm+' BPM)';
  renderTargets(); $('save-name').value=st.name;
  showBar();
}
function renderTargets(){
  $('stack-targets').innerHTML='';
  S.stack.genes.forEach((g,i)=>{
    const d=document.createElement('div'); d.className='target';
    d.innerHTML='<div><b>'+g+'</b> '+esc(T[g][0])+'<br><small style="color:var(--muted)">'+esc(D[g]||'')+(T[g][1]?' UniProt '+T[g][1]:'')+' • '+seqFor(g).length+' aa</small></div>';
    const rm=document.createElement('button'); rm.className='small ghost rm'; rm.textContent='✕';
    rm.onclick=()=>{if(S.stack.genes.length>1){S.stack.genes.splice(i,1);renderTargets()}else toast('Stiva trebuie să aibă cel puțin o țintă')};
    d.appendChild(rm); $('stack-targets').appendChild(d);
  });
}
function uni(g){return T[g][1]?' <small>UniProt '+T[g][1]+'</small>':' <small>fără ID UniProt verificat</small>'}
function isKid(p){return (p.dom||'om')==='om'&&p.grp===7}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

/* ================== CĂUTARE ================== */
$('search').addEventListener('input',e=>{
  const q=norm(e.target.value.trim()); const out=$('search-res'); out.innerHTML='';
  if(q.length<2) return;
  const hits=[];
  PROBLEMS.forEach(p=>{
    if(p[5]&&S.sex&&p[5]!==S.sex) return;
    if(norm(p[0]).includes(q)||p[1].some(k=>q.includes(k)||k.includes(q))) hits.push({t:p[0],sub:p[3]+' • '+ACTIONS[p[4]].n,go:()=>pick(p[2],p[3],p[4],p[0])});
  });
  PRESETS.forEach(p=>{
if(p.dom!=='om') return; if(p.x&&S.sex&&p.x!==S.sex) return;
if(norm(p.n+' '+(p.k||'')).includes(q)||(p.k||'').split(' ').some(k=>k.length>3&&q.includes(k))) hits.push({t:p.n,sub:'Stivă predefinită • '+p.g.join(' · '),go:()=>{setStack(presetStack(p));applyMood(p.m)}});
});
Object.keys(PARTS).forEach(c=>partsFor(c).forEach(p=>{
    if(norm(p[0]).includes(q)) hits.push({t:p[0],sub:CAT_NAME[c]+' • alege acțiunea',go:()=>{S.cat=c;S.part=p;renderParts();renderActions();toast('Alege acțiunea mai jos, la pasul 4')}});
  }));
  Object.keys(T).forEach(g=>{
    if(norm(g).includes(q)||norm(T[g][0]).includes(q)) hits.push({t:g+' – '+T[g][0],sub:'Țintă individuală',go:()=>setStack({name:g+' Solo',color:'#a78bfa',genes:[g],tags:['Țintă individuală']})});
  });
  hits.slice(0,8).forEach(h=>{
    const b=document.createElement('button'); b.innerHTML=esc(h.t)+'<small>'+esc(h.sub)+'</small>'; b.onclick=h.go; out.appendChild(b);
  });
  if(!hits.length) out.innerHTML='<small style="color:var(--muted)">Nimic găsit. Încearcă un cuvânt mai simplu (ex. „somn”, „spate”, „ficat”).</small>';
});
function pick(cat,partName,act,label){
  if(!S.sex){toast('Alege întâi Femeie sau Bărbat');return}
  const p=PARTS[cat].find(x=>x[0]===partName); S.cat=cat; S.part=p;
  document.querySelectorAll('[data-cat]').forEach(x=>x.classList.toggle('sel',x.dataset.cat===cat));
  renderParts(); renderActions(); buildStack(cat,p,act,label);
}

/* ================== PRESETURI ================== */
function presetStack(p){
  const genes=p.g.slice(), tags=['Stivă predefinită','Ritm '+MOOD[p.m].n];
  const add=(S.sex&&!p.x&&p.dom==='om'&&p.grp!==7&&SEX_ADD[S.sex][p.grp])||[];
  add.forEach(g=>{if(!genes.includes(g)){genes.push(g); tags.push('+'+g+' ('+(S.sex==='F'?'Femeie':'Bărbat')+')')}});
  if(!S.sex&&S.sexSet) tags.push('Universal');
  return {name:p.n,color:p.c,genes,tags,mood:p.m};
}
function renderPresets(){
  const row=$('preset-row'); row.innerHTML='';
  PRESETS.filter(p=>p.dom===S.dom&&(p.dom!=='om'||!p.x||(S.sex?p.x===S.sex:!S.sexSet))&&(!curGrp||p.grp===curGrp)).forEach(p=>{
    const b=document.createElement('button'); b.className='preset'; b.style.setProperty('--c',p.c);
    const ex=(S.sex&&!p.x&&p.dom==='om'&&p.grp!==7&&SEX_ADD[S.sex][p.grp])||[]; b.innerHTML='<span style="color:'+p.c+';font-weight:700">'+esc(p.n)+'</span><small>'+p.g.join(' · ')+(ex.length?' <b style="color:var(--acc)">+ '+ex.join(' · ')+'</b>':'')+'</small>';
    b.onclick=()=>{setStack(presetStack(p)); applyMood(p.m,isKid(p))};
    const w=document.createElement('div'); w.className='pw';
    const q=document.createElement('button'); q.className='small qbtn'; q.textContent='?'; q.setAttribute('aria-label','Explicație '+p.n);
    q.onclick=e=>{e.stopPropagation(); openSheet(p)};
    w.append(b,q); row.appendChild(w);
  });
}
// „Încarcă + preset potrivit”: tempo mic seara/relaxare, tempo alert la focus/energie. Rămâne control manual.
function applyMood(m,kid){
  if(!m) return; const k=MOOD[m]; const adj=kid?-6:({copil:-6,adult:0,senior:-8}[S.age]||0);
  $('bpm').value=k.bpm+adj; $('timbre').value=kid?'flaut':k.timbre; $('drone').checked=k.drone; if(kid||S.age==='copil') $('vol').value=Math.min(+$('vol').value,45); syncLabels();
  toast('Preset '+k.n+': '+(k.bpm+adj)+' BPM, timbru '+$('timbre').selectedOptions[0].text+'. Poți schimba manual.');
}
function guessMood(genes){
  const calm=['MTNR1A','GABRA1','OXT','ASMT','PER2','HTR1A','NPY','PENK'], alert=['PGC1A','AMPK','SIRT3','CHAT','TH','HCRT','COMT','ACTN3'];
  const c=genes.filter(g=>calm.includes(g)).length, a=genes.filter(g=>alert.includes(g)).length;
  return c>a?'calm':(a>c?'alert':'mediu');
}


/* ================== CATEGORII STIVE ================== */
const GROUPS=['Toate','Somn & Calm','Minte & Emoții','Corp & Mișcare','Imunitate & Respirație','Metabolism & Organe','Intimitate & Hormoni','Copii'];
const GRP_OF={
 'Somn Liniștit':1,'Somn Profund Seară':1,'Anti-Stres & Reset':1,'Anxietate Liniștită':1,
 'Calm & Concentrare':2,'Focus Profund & Claritate':2,'Dispoziție Luminoasă':2,'Refacere după Burnout':2,'Echilibru Emoțional':2,'Vitalitate & Bună Dispoziție':2,
 'Regenerare Totală':3,'Articulații Mobile':3,'Refacere Spate':3,'Refacere Post-Antrenament':3,'Articulații & Țesut Conjunctiv':3,'Durere Cronică Calmă':3,'Migrenă Calmă':3,'Piele Luminoasă':3,'Energie Zilnică':3,'Ochi Odihniți':3,
 'Imunitate & Echilibru':4,'Respirație Ușoară':4,'Echilibru Imun & Scut':4,'Scut Respirator':4,'Refacere Post-Viral':4,'Inflamație Silențioasă':4,
 'Detox Celular':5,'Inimă & Circulație':5,'Digestie Calmă':5,'Sânge & Oxigen':5,'Digestie & Gut-Brain':5,'Glicemie Echilibrată':5,'Tensiune Echilibrată':5,'Ficat Curat':5,'Tiroidă Echilibrată':5,'Greutate & Sațietate':5,
 'Echilibru Feminin':6,'Vitalitate Masculină':6,'Libidou Bărbat Intens':6,'Circulație & Climax Bărbat':6,'Libidou Femeie Intens':6,'Climax Femeie Profund':6,'Menopauză Liniștită':6,'Prostată Echilibrată':6
};
const K_EXTRA={
 'Regenerare Totală':'regenerare refacere vindecare rani recuperare operatie','Imunitate & Echilibru':'imunitate imun raceli aparare','Detox Celular':'detox curatare toxine',
 'Energie Zilnică':'energie oboseala obosit vitalitate dimineata','Somn Liniștit':'somn dormi insomnie adormire','Respirație Ușoară':'respiratie plamani astm tuse traheostomie',
 'Articulații Mobile':'articulatii genunchi artroza mobilitate sold','Inimă & Circulație':'inima circulatie cardiac','Piele Luminoasă':'piele riduri ten acnee',
 'Digestie Calmă':'digestie stomac intestin balonare colon burta','Refacere Spate':'spate coloana lombalgie hernie','Sânge & Oxigen':'anemie fier sange oxigen',
 'Calm & Concentrare':'calm concentrare atentie','Somn Profund Seară':'somn seara insomnie dormi','Anti-Stres & Reset':'stres nervos tensionat iritat agitat',
 'Focus Profund & Claritate':'focus concentrare studiu memorie invatare examen','Refacere Post-Antrenament':'sport antrenament sala muschi febra',
 'Articulații & Țesut Conjunctiv':'tendoane ligamente tendinita entorsa','Digestie & Gut-Brain':'digestie apetit satietate','Echilibru Imun & Scut':'autoimun alergii imunitate',
 'Vitalitate & Bună Dispoziție':'dispozitie optimism motivatie veselie','Echilibru Feminin':'ciclu menstruatie hormoni feminin','Vitalitate Masculină':'testosteron vitalitate masculin'
};
/* ================== DOMENII: OM / PLANTE / INSECTE / ANIMALE ================== */
const DOMS={
 om:{n:'Om',ico:'🧍',pre:'Personal ',note:''},
 plante:{n:'Plante',ico:'🌱',pre:'Plante ',g:['Toate','Apărare & Boli','Legume & Cartof','Pomi & Viță','Cereale','Creștere & Recoltă','Secetă, Căldură & Frig'],
   note:'Stive pentru culturi, construite din proteine reale ale plantelor (apărare, fotosinteză, stres) și ale unor patogeni cunoscuți. Experiment de ascultare, neverificat, nu înlocuiește protecția culturilor.'},
 insecte:{n:'Insecte',ico:'🐝',pre:'Insecte ',g:['Toate','Albine','Polenizatori','Dăunători'],
   note:'Stive pentru albine și alte insecte, din proteine reale ale albinei (Apis mellifera) și ale unor paraziți. Experiment de ascultare, neverificat, nu înlocuiește tratamentele apicole.'},
 animale:{n:'Animale',ico:'🐄',pre:'Animale ',g:['Toate','Vaci & Lapte','Porci','Păsări','Câini & Pisici','Stres & Transport'],
   note:'Stive pentru animale de fermă și de companie. Unde nu există o proteină specifică speciei, se folosește proteina umană echivalentă ca reper. Experiment, neverificat, nu înlocuiește medicul veterinar.'}
};
function domGroups(d){d=d||S.dom; return d==='om'?GROUPS:DOMS[d].g}
function domOfText(t){
  const n=' '+norm(t).replace(/[^a-z0-9 ]/g,' ')+' ';
  if(/ (albin|stup|polen|bondar|insect|daunator|varroa|nosema|puiet|matca)/.test(n)) return 'insecte';
  if(/ (vac|vaci|bovin|vitel|porc|purcel|gain|gaini|pasar|pasari|caine|caini|pisic|animal|oaie|oi |capr|mastit|uger|ferma|cal |cai )/.test(n)) return 'animale';
  if(/ (plant|cultur|rosi|ardei|castrav|cartof|grau|porumb|cerea|vita de vie|strugur|pom|livad|gradin|rasad|semint|recolt|mucegai|mana |frunz|sera|legum)/.test(n)) return 'plante';
  return S.dom||'om';
}

Object.assign(T,{
 // apărare umană suplimentară
 DEFB4A:['Beta-defensina 2 (hBD-2)','O15263'], PGLYRP1:['Proteina de recunoaștere a peptidoglicanului 1','O75594'],
 // bacterii rezistente (proteinele lor de rezistență)
 TEM1:['Beta-lactamaza TEM-1 (E. coli)','P62593'], KPC2:['Carbapenemaza KPC-2 (Klebsiella)','Q9F663'], NDM1:['Metalo-beta-lactamaza NDM-1','C7C422'],
 MECA:['PBP2a (stafilococ auriu MRSA)',''], ACRB:['Pompa de eflux AcrB (E. coli)','P31224'], LASR:['LasR (Pseudomonas, quorum sensing)','P25084'], CSGA:['Curlina CsgA (biofilm E. coli)','P28307'],
 // plante
 NPR1:['NPR1 (receptor acid salicilic)','P93002'], PR1:['Proteina de patogeneză PR1','P33154'], FLS2:['FLS2 (receptor de flagelină)','Q9FL28'],
 SYS:['Prosistemină (roșie)','P27058'], COI1:['COI1 (receptor jasmonat)','O04197'], MYC2:['MYC2 (factor de răspuns la jasmonat)','Q39204'],
 PAL1:['Fenilalanin amoniac-liaza 1','P35510'], LOX2:['Lipoxigenaza 2 (cloroplast)','P38418'], PDF12:['Defensina vegetală PDF1.2',''], CHIB:['Chitinaza bazică (PR-3)','P19171'],
 PTO:['Pto (rezistență la roșie)','Q40234'], RBCL:['RuBisCO, subunitatea mare','O03042'], RCA:['RuBisCO activaza','P10896'], PHYB:['Fitocrom B','P14713'],
 PIP21:['Aquaporina PIP2;1','P43286'], NRT11:['Transportor de nitrat NRT1.1','Q05085'], PIN1:['PIN1 (transport auxină)','Q9C6B8'],
 DREB2A:['DREB2A (răspuns la secetă)','O82132'], CBF1:['CBF1 (răspuns la frig)','P93835'], HSP101:['HSP101 (toleranță la căldură)','P42730'], SOS1:['SOS1 (toleranță la sare)','Q9LKW9'],
 BCPG1:['Poligalacturonaza BcPG1 (mucegai cenușiu)',''], AVR3A:['Avr3a (mana cartofului)',''],
 // insecte
 AMVG:['Vitelogenină (albină)','Q868N5'], MRJP1:['Proteina majoră a lăptișorului 1','O18330'], AMDEF1:['Defensina-1 a albinei (royalisină)','P17722'],
 APID:['Apidecină (albină)',''], ABAEC:['Abecină (albină)',''], HYMEN:['Himenoptecină (albină)',''], AMPPO:['Profenoloxidaza (albină)',''],
 NOSSWP:['Proteină de perete a sporului Nosema',''], ORCO:['Orco (co-receptor olfactiv al insectelor)','Q9VNB5'],
 // animale
 BTLTF:['Lactoferină bovină','P24627'], BTGH:['Somatotropină bovină','P01246'], BTPRL:['Prolactină bovină','P01239'], BTLAP:['LAP (beta-defensină din uger, bovină)',''],
 SSPR39:['PR-39 (catelicidină de porc)',''], GGLYZ:['Lizozim (găină)','P00698'], GGOVT:['Ovotransferină (găină)','P02789'], GGAVBD:['Beta-defensine aviare (AvBD)','']
});
Object.assign(D,{
 DEFB4A:'Peptid antimicrobian produs de piele și mucoase când apare o infecție; găurește membrana bacteriilor.',
 PGLYRP1:'Recunoaște peptidoglicanul din peretele bacteriilor și ajută la distrugerea lor; se găsește în neutrofile.',
 TEM1:'Enzimă bacteriană care rupe penicilinele și cefalosporinele vechi; una dintre cele mai răspândite cauze de rezistență.',
 KPC2:'Enzimă a bacteriei Klebsiella care distruge carbapenemele, antibioticele de rezervă din spitale.',
 NDM1:'Enzimă bacteriană care folosește zinc ca să distrugă aproape toate beta-lactaminele, inclusiv carbapenemele.',
 MECA:'Proteina care leagă penicilina la stafilococul MRSA; nu se lasă blocată de meticilină, așa că bacteria își construiește peretele mai departe.',
 ACRB:'Pompă din membrana bacteriei care scoate afară antibiotice de multe feluri; contribuie la rezistența multiplă.',
 LASR:'Receptorul prin care Pseudomonas „numără” câte bacterii sunt în jur și pornește virulența și biofilmul.',
 CSGA:'Proteina care formează fibrele de curlină din biofilmul E. coli, stratul care protejează bacteriile.',
 NPR1:'Regulator central al rezistenței sistemice a plantei; percepe acidul salicilic și pornește genele de apărare.',
 PR1:'Marker clasic al apărării activate de acidul salicilic; are activitate împotriva unor ciuperci și oomicete.',
 FLS2:'Receptor de pe membrana celulei vegetale care recunoaște flagelina bacteriilor și declanșează imunitatea de bază.',
 SYS:'Precursorul sisteminei, peptid din roșie care transmite alarma când e atacată de insecte și pornește inhibitorii de proteaze.',
 COI1:'Receptorul jasmonatului, hormonul plantei pentru apărarea împotriva insectelor și a ciupercilor care omoară țesutul.',
 MYC2:'Factor de transcripție care pornește genele de apărare când crește jasmonatul.',
 PAL1:'Prima enzimă a căii fenilpropanoide: lignină pentru pereți tari, flavonoide și acid salicilic.',
 LOX2:'Enzimă din cloroplast care inițiază sinteza jasmonatului după rănire sau atac.',
 PDF12:'Defensină vegetală cu efect antifungic, pornită de jasmonat și etilenă; marker al apărării împotriva mucegaiurilor.',
 CHIB:'Chitinază care rupe chitina din peretele ciupercilor; face parte din proteinele de patogeneză (PR-3).',
 PTO:'Kinază din roșie care recunoaște efectorii bacteriei Pseudomonas syringae și declanșează rezistența.',
 RBCL:'Subunitatea mare a RuBisCO, enzima care fixează CO₂ în fotosinteză; cea mai abundentă proteină de pe Pământ.',
 RCA:'Activaza care repornește RuBisCO; e sensibilă la căldură și limitează fotosinteza în zilele fierbinți.',
 PHYB:'Fotoreceptor pentru lumina roșie; reglează germinația, alungirea tulpinii și înflorirea.',
 PIP21:'Canal de apă din membrana celulelor rădăcinii și frunzei; controlează cât de repede circulă apa.',
 NRT11:'Transportă nitratul în rădăcină și funcționează și ca senzor de azot pentru creștere.',
 PIN1:'Transportă auxina, hormonul de creștere, și dă direcția de creștere a tulpinii și rădăcinii.',
 DREB2A:'Factor de transcripție pornit de secetă și căldură; activează genele de protecție la deshidratare.',
 CBF1:'Factor de transcripție pornit de frig; activează genele de călire care protejează planta de îngheț.',
 HSP101:'Proteină de șoc termic care desface proteinele agregate de căldură; esențială pentru toleranța la temperaturi mari.',
 SOS1:'Pompă care scoate sodiul din celule; ajută planta să tolereze solul sărat.',
 BCPG1:'Enzimă cu care mucegaiul cenușiu (Botrytis cinerea) descompune peretele celular al fructelor și frunzelor.',
 AVR3A:'Efector al oomicetei Phytophthora infestans (mana cartofului și roșiei) care încearcă să blocheze apărarea plantei.',
 AMVG:'Proteina de rezervă a albinei; e folosită la producerea lăptișorului, susține imunitatea și viața lungă a albinelor de iarnă.',
 MRJP1:'Cea mai abundentă proteină din lăptișorul de matcă; hrănește larvele și matca.',
 AMDEF1:'Peptid antibacterian al albinei, prezent în lăptișor și în hemolimfă.',
 APID:'Peptid antibacterian al albinei, activ mai ales împotriva bacteriilor gram-negative.',
 ABAEC:'Peptid antimicrobian bogat în prolină din imunitatea albinei.',
 HYMEN:'Peptid antimicrobian mare al albinei, pornit la infecții bacteriene.',
 AMPPO:'Enzimă a imunității insectelor care produce melanină și izolează agenții patogeni și rănile.',
 NOSSWP:'Proteină din învelișul sporilor de Nosema ceranae, parazit intestinal care slăbește albinele.',
 ORCO:'Co-receptor olfactiv comun insectelor; prin el miros florile, plantele gazdă și feromonii.',
 BTLTF:'Lactoferina din laptele vacii; leagă fierul și are efect antimicrobian, mai ales în colostru.',
 BTGH:'Hormonul de creștere al vacii; susține creșterea și producția de lapte.',
 BTPRL:'Prolactina vacii; pornește și menține producția de lapte.',
 BTLAP:'Beta-defensină a vacii produsă în glanda mamară; crește când apare mastita.',
 SSPR39:'Peptid antimicrobian al porcului, bogat în prolină și arginină; are și rol în vindecarea rănilor.',
 GGLYZ:'Lizozimul din albușul de ou; rupe peretele bacteriilor gram-pozitive.',
 GGOVT:'Ovotransferina din albuș; leagă fierul și oprește înmulțirea bacteriilor.',
 GGAVBD:'Familie de peptide antimicrobiene ale păsărilor, prezente în intestin, piele și ou.'
});

PRESETS.push(
 // OM – cele 5 direcții
 {n:'Scut Antibacterian Natural',c:'#0369a1',g:['CAMP','DEFB4A','LTF','LYZ','PGLYRP1'],m:'mediu',grp:4,dom:'om',k:'bacterii infectie antibiotic rezistent stafilococ',syn:'Peptidele și proteinele cu care corpul omoară singur bacteriile: catelicidina, beta-defensina 2, lactoferina, lizozimul și PGLYRP1. Tema: apărarea antibacteriană proprie.'},
 {n:'Bacterii Rezistente Slăbite',c:'#f87171',g:['MECA','TEM1','KPC2','NDM1','ACRB'],m:'alert',grp:4,dom:'om',k:'bacterii rezistente antibiotic mrsa klebsiella superbacterii',syn:'Proteinele cu care bacteriile rezistă la antibiotice: PBP2a (MRSA), trei enzime care distrug antibioticele și pompa care le scoate afară. Tema: „sunetul” rezistenței bacteriene, ca experiment.'},
 {n:'Anti-Biofilm',c:'#fca5a5',g:['LASR','CSGA','CAMP','LTF'],m:'mediu',grp:4,dom:'om',k:'biofilm infectie cronica pseudomonas',syn:'Semnalul de grup al bacteriei (LasR) și fibrele biofilmului (curlină), puse lângă două proteine umane care împiedică formarea biofilmului. Tema: infecțiile care se ascund în biofilm.'},
 {n:'Refacere după Operație',c:'#16a34a',g:['VEGFA','COL1A1','COL3A1','TGFB1','FGF2','IL10'],m:'calm',grp:3,dom:'om',k:'operatie chirurgie cicatrice rana interventie postoperator',syn:'Vase noi, colagen I și III pentru cicatrizare, semnalele de creștere TGF-β1 și FGF2, plus frâna inflamației. Tema: vindecarea după intervenție, ca sprijin pe lângă îngrijirea medicală.'},
 {n:'Sprijin în Tratament',c:'#22d3ee',g:['NRF2','SOD2','IL10','ALB','LTF'],m:'calm',grp:4,dom:'om',k:'tratament medicamente spital chimioterapie convalescenta',syn:'Protecția antioxidantă (NRF2, SOD2), echilibrul inflamației, albumina care transportă medicamentele și lactoferina. Tema: susținere în timpul unui tratament, nu înlocuirea lui.'},
 {n:'Scut Copil Bolnav',c:'#facc15',g:['LTF','LYZ','DEFB1','IL10','LALBA'],m:'calm',grp:7,dom:'om',k:'copil bolnav imunitate raceala febra gradinita',syn:'Proteinele protectoare din laptele matern (lactoferină, lizozim, alfa-lactalbumină), defensina mucoaselor și frâna inflamației. Tema: imunitate blândă pentru copii, pe lângă tratamentul dat de medic.'},
 {n:'Seară Fără Stres',c:'#6d28d9',g:['MTNR1A','GABRA1','NR3C1','OXT','NPY'],m:'calm',grp:1,dom:'om',k:'somn stres seara relaxare insomnie',syn:'Receptorul melatoninei, frâna GABA, receptorul cortizolului care închide bucla de stres, oxitocina și neuropeptidul Y. Tema: trecerea de la stresul zilei la somn.'},
 {n:'Pauză Anti-Stres Rapidă',c:'#c4b5fd',g:['OXT','HTR1A','GABRA1','NPY'],m:'calm',grp:1,dom:'om',k:'stres pauza birou anxietate rapid',syn:'Oxitocina, receptorul de serotonină 1A, frâna GABA și neuropeptidul Y. Tema: câteva minute de calm în mijlocul zilei.'},
 // PLANTE
 {n:'Imunitate Plantă Generală',c:'#4ade80',g:['FLS2','NPR1','PR1','COI1','MYC2'],m:'mediu',grp:1,dom:'plante',k:'imunitate planta boli pesticide protectie',syn:'Cele două brațe ale imunității plantei: recunoașterea bacteriilor (FLS2) și calea acidului salicilic (NPR1, PR1), plus calea jasmonatului (COI1, MYC2). Tema: apărare generală fără chimicale.'},
 {n:'Scut Roșii Sănătoase',c:'#fdba74',g:['PTO','SYS','NPR1','PR1','PAL1'],m:'mediu',grp:2,dom:'plante',k:'rosii tomate solar boli bacterioza',syn:'Rezistența roșiei la bacterii (Pto), alarma sisteminei, calea acidului salicilic și PAL pentru pereți tari. Tema: roșii sănătoase.'},
 {n:'Cartof Fără Mană',c:'#ca8a04',g:['AVR3A','NPR1','PR1','PAL1','LOX2'],m:'mediu',grp:2,dom:'plante',k:'cartof mana phytophthora rosii pete frunze',syn:'Efectorul manei (Avr3a) pus lângă proteinele de apărare ale plantei. Tema: cartof și roșie protejate de mană.'},
 {n:'Fără Mucegai Cenușiu',c:'#9ca3af',g:['BCPG1','CHIB','PDF12','COI1','PAL1'],m:'mediu',grp:3,dom:'plante',k:'mucegai botrytis struguri capsuni putregai fructe',syn:'Enzima cu care mucegaiul atacă fructul, față în față cu chitinaza și defensina plantei, calea jasmonatului și PAL. Tema: struguri, căpșuni și fructe fără putregai.'},
 {n:'Scut Anti-Insecte Plantă',c:'#a3e635',g:['SYS','COI1','MYC2','LOX2'],m:'mediu',grp:1,dom:'plante',k:'insecte daunatori afide omizi gandaci frunze roase',syn:'Lanțul de alarmă al plantei la atacul insectelor: sistemina, lipoxigenaza care face jasmonat, receptorul lui și factorul care pornește apărarea. Tema: plante care se apără singure.'},
 {n:'Cereale Puternice',c:'#fbbf24',g:['RBCL','NRT11','NPR1','FLS2','DREB2A'],m:'mediu',grp:4,dom:'plante',k:'grau porumb orz cereale camp',syn:'Fotosinteză (RuBisCO), absorbția azotului, imunitate și toleranță la secetă. Tema: cereale robuste.'},
 {n:'Recoltă Bogată',c:'#b45309',g:['RBCL','RCA','PHYB','NRT11','PIN1'],m:'alert',grp:5,dom:'plante',k:'recolta productie randament fructe crestere foamete',syn:'Fixarea CO₂ și activaza ei, receptorul de lumină, azotul și hormonul de creștere. Tema: creștere și producție.'},
 {n:'Răsaduri Viguroase',c:'#15803d',g:['PHYB','PIN1','NRT11','PIP21'],m:'mediu',grp:5,dom:'plante',k:'rasad rasaduri seminte germinare sera',syn:'Lumină, direcția de creștere, azot și apă. Tema: răsaduri puternice.'},
 {n:'Secetă & Căldură',c:'#86efac',g:['DREB2A','HSP101','PIP21','SOS1','RCA'],m:'calm',grp:6,dom:'plante',k:'seceta canicula caldura sare irigatie',syn:'Răspunsul la secetă, proteina de șoc termic, canalele de apă, toleranța la sare și activaza sensibilă la căldură. Tema: plante care rezistă verii.'},
 {n:'Rezistență la Îngheț',c:'#60a5fa',g:['CBF1','DREB2A','PIP21','HSP101'],m:'calm',grp:6,dom:'plante',k:'frig inghet bruma iarna pomi',syn:'Factorul de călire la frig, răspunsul la deshidratare și canalele de apă. Tema: protecție la brumă și îngheț.'},
 {n:'Livadă & Vie Sănătoasă',c:'#7e22ce',g:['NPR1','CHIB','PDF12','PAL1','CBF1'],m:'mediu',grp:3,dom:'plante',k:'pomi livada mar vie vita strugure',syn:'Calea acidului salicilic, două proteine antifungice, PAL și călirea la frig. Tema: pomi și viță sănătoși.'},
 // INSECTE
 {n:'Albine Puternice Iarna',c:'#34d399',g:['AMVG','MRJP1','AMDEF1','AMPPO'],m:'calm',grp:1,dom:'insecte',k:'albine iarna stup familie putere longevitate',syn:'Vitelogenina care ține albinele de iarnă în viață, proteina lăptișorului, defensina și enzima de apărare melanizantă. Tema: familii puternice peste iarnă.'},
 {n:'Scut Albine Anti-Nosema',c:'#047857',g:['NOSSWP','AMDEF1','APID','ABAEC','AMVG'],m:'mediu',grp:1,dom:'insecte',k:'nosema diaree albine boala parazit',syn:'Proteina sporului de Nosema pusă lângă trei peptide antimicrobiene ale albinei și vitelogenină. Tema: albine protejate de Nosema.'},
 {n:'Puiet Sănătos',c:'#6ee7b7',g:['MRJP1','AMDEF1','HYMEN','APID'],m:'calm',grp:1,dom:'insecte',k:'puiet larve loca americana matca',syn:'Hrana larvelor (MRJP1) și peptidele care le protejează de bacterii. Tema: puiet sănătos.'},
 {n:'Polenizatori Activi',c:'#0d9488',g:['ORCO','AMVG','AMPPO'],m:'alert',grp:2,dom:'insecte',k:'polenizare bondari flori polenizatori',syn:'Mirosul care duce insecta la flori, rezerva de energie și apărarea. Tema: polenizatori activi.'},
 {n:'Alungare Dăunători',c:'#57534e',g:['ORCO','SYS','COI1','LOX2'],m:'alert',grp:3,dom:'insecte',k:'daunatori afide gandaci omizi alungare',syn:'Receptorul de miros al insectelor alături de semnalele de apărare ale plantei. Tema: culturi mai puțin atractive pentru dăunători.'},
 // ANIMALE
 {n:'Uger Sănătos Vaci',c:'#e879f9',g:['BTLTF','BTLAP','LYZ','IL10'],m:'calm',grp:1,dom:'animale',k:'vaci mastita uger lapte fara antibiotice',syn:'Lactoferina și defensina ugerului, lizozimul și frâna inflamației. Tema: uger sănătos fără antibiotice.'},
 {n:'Lapte & Vitalitate',c:'#c026d3',g:['BTPRL','BTGH','LALBA','BTLTF'],m:'mediu',grp:1,dom:'animale',k:'lapte productie vaca vitalitate',syn:'Prolactina și somatotropina vacii, alfa-lactalbumina și lactoferina. Tema: producție de lapte.'},
 {n:'Purcei Fără Antibiotice',c:'#fda4af',g:['SSPR39','LTF','MUC2','TJP1','IL10'],m:'mediu',grp:2,dom:'animale',k:'porci purcei diaree intarcare intestin',syn:'Peptidul antimicrobian al porcului, lactoferina, stratul de mucus și joncțiunile intestinale, plus frâna inflamației. Tema: intestin sănătos la înțărcare.'},
 {n:'Păsări Sănătoase',c:'#5eead4',g:['GGLYZ','GGOVT','GGAVBD','TJP1'],m:'mediu',grp:3,dom:'animale',k:'gaini pui pasari ferma oua',syn:'Lizozimul și ovotransferina din ou, defensinele păsărilor și bariera intestinală. Tema: păsări sănătoase fără antibiotice.'},
 {n:'Câine & Pisică Mobili',c:'#a3a3a3',g:['COL2A1','ACAN','IL1RN','TGFB1'],m:'calm',grp:4,dom:'animale',k:'caine pisica articulatii batran mers',syn:'Cartilaj (colagen II, agrecan) și două semnale care temperează inflamația articulară, cu proteinele umane ca reper. Tema: mobilitate la animalele de companie.'},
 {n:'Animale Calme',c:'#0e7490',g:['OXT','NR3C1','GABRA1','NPY'],m:'calm',grp:5,dom:'animale',k:'stres transport frica artificii calm animal',syn:'Oxitocina, receptorul cortizolului, frâna GABA și neuropeptidul Y. Tema: animale liniștite la transport, artificii sau vizite la veterinar.'},
 {n:'Imunitate Animale Tinere',c:'#2563eb',g:['BTLTF','LYZ','DEFB1','IL10'],m:'calm',grp:1,dom:'animale',k:'vitei catei pisoi tineri imunitate colostru',syn:'Lactoferina din colostru, lizozimul, defensina și frâna inflamației. Tema: imunitate pentru animale tinere.'}
);

PRESETS.forEach(p=>{p.dom=p.dom||'om'; p.grp=p.grp||GRP_OF[p.n]||3; if(K_EXTRA[p.n]) p.k=((p.k||'')+' '+K_EXTRA[p.n]).trim()});
let curGrp=0;
function renderGroups(){
  const r=$('grp-row'); r.innerHTML='';
  domGroups().forEach((g,i)=>{const b=document.createElement('button'); b.textContent=g; if(i===curGrp)b.classList.add('sel'); b.onclick=()=>{curGrp=i;renderGroups();renderPresets()}; r.appendChild(b)});
}

/* ================== ASISTENT STIVE (local, offline) ================== */
const SYN={'dorm':'somn','doarm':'somn','dormi':'somn','adorm':'somn','trist':'tristete','deprim':'depresie','nervos':'stres','iritat':'stres','ingrijor':'anxietate','frica':'anxietate','panica':'anxietate',
 'obosit':'oboseala','epuizat':'epuizare','burta':'digestie','balonat':'balonare','genunch':'articulatii','umar':'articulatii','spatel':'spate','cap':'cefalee','raceal':'raceala','racit':'raceala',
 'tuse':'tuse','muschi':'muschi','slab':'slabire','kilogram':'greutate','zahar':'glicemie','tensiun':'tensiune','libid':'libido','erecti':'erectie','orgasm':'climax','concentr':'concentrare',
 'memor':'memorie','invat':'invatare','vitalit':'vitalitate','imunit':'imunitate','plaman':'plamani','respir':'respiratie','piel':'piele','par ':'piele','ochi':'ochi','ficat':'ficat','rinich':'rinichi','inflam':'inflamatie','durer':'durere'};
const STOP=new Set(['si','sau','am','ma','imi','mi','de','la','in','cu','pe','un','o','sa','nu','mai','foarte','vreau','as','vrea','pentru','care','este','e','ca','din','ce','cand','dupa','prea','tot','mult','putin','stiva','stive']);
function words(t){return norm(t).replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(w=>w.length>2&&!STOP.has(w))}
function wmatch(a,b){if(a.length<4||b.length<4) return a===b; const n=Math.min(5,a.length,b.length); return a.slice(0,n)===b.slice(0,n)}
function expand(ws,raw){const out=new Set(ws); const r=' '+norm(raw)+' '; Object.keys(SYN).forEach(k=>{if(r.includes(k)) out.add(SYN[k])}); return [...out]}
function scoreKw(ws,kw){let s=0; kw.forEach(k=>{if(ws.some(w=>wmatch(w,k))) s++}); return s}
const PALETTE=['#22d3ee','#a3e635','#fb7185','#fbbf24','#34d399','#818cf8','#f472b6','#38bdf8','#facc15','#c084fc','#2dd4bf','#fca5a5'];
let lastChatStack=null;
function makeStack(text){
  const ws=expand(words(text),text); if(!ws.length) return null;
  const score={}, why={}, themes=[], syns=[];
  const bump=(g,v,r)=>{if(!T[g])return; score[g]=(score[g]||0)+v; (why[g]=why[g]||new Set()).add(r)};
  const kidQ=ws.some(w=>/^(copil|copii|kids|fiul|fiica|baiat|fetit|nepot)/.test(w));
  const dq=domOfText(text);
  PRESETS.forEach(p=>{
    if(p.dom!==dq) return;
    if(p.x&&S.sex&&p.x!==S.sex) return;
    if(dq==='om'&&kidQ&&p.grp!==7) return;
    if(dq==='om'&&!kidQ&&p.grp===7) return;
    const kw=words(p.n+' '+(p.k||'')); const sc=scoreKw(ws,kw); if(!sc) return;
    themes.push([sc,p]); p.g.forEach(g=>bump(g,sc,p.n));
  });
  if(dq==='om') PROBLEMS.forEach(p=>{
    if(p[5]&&S.sex&&p[5]!==S.sex) return;
    const sc=scoreKw(ws,p[1].concat(words(p[0]))); if(!sc) return;
    const part=PARTS[p[2]].find(x=>x[0]===p[3]);
    (part[1].length?part[1]:SEX_T[S.sex||'U']).forEach(g=>bump(g,sc*0.8,p[0]));
    (p[4]==='hormon'?SEX_T[S.sex||'U']:ACTIONS[p[4]].t).slice(0,3).forEach(g=>bump(g,sc,p[0]));
  });
  Object.keys(T).forEach(g=>{ if(ws.some(w=>norm(g)===w)) bump(g,5,'cerut de tine'); });
  if(dq!=='om'&&!Object.keys(score).length) return null;
  const ranked=Object.keys(score).sort((a,b)=>score[b]-score[a]);
  if(!ranked.length) return null;
  const genes=ranked.slice(0,Math.max(3,Math.min(7,ranked.length)));
  themes.sort((a,b)=>b[0]-a[0]);
  const top=themes.slice(0,2).map(t=>t[1]);
  const reasons=[...new Set(genes.flatMap(g=>[...why[g]]))];
  const label=top.length?top.map(p=>p.n.split(' ')[0]).filter((v,i,a)=>a.indexOf(v)===i).join(' & '):reasons[0].split(' ')[0];
  const name=shortName(dq!=='om'?DOMS[dq].pre+(top.length?top[0].n.split(' ').slice(0,2).join(' '):label):(kidQ?'Copil ':'Personal ')+label);
  const color=PALETTE[loadMine().length%PALETTE.length];
  let syn='Stivă construită pentru: „'+text.trim()+'”. Combină ';
  syn+= top.length? 'temele '+top.map(p=>'„'+p.n+'”').join(' și ')+' ('+top.map(p=>p.syn.replace(/\s*Tema:.*$/,'').replace(/\.$/,'')).join('; ')+')' : 'țintele legate de '+reasons.slice(0,3).join(', ');
  syn+='. Împreună formează o temă de ascultare pentru nevoia ta, nu un tratament.';
  const st={name,color,genes,tags:['Creată de asistent'],syn,why:Object.fromEntries(genes.map(g=>[g,[...why[g]].join(', ')])),need:text.trim()};
  st.mood=guessMood(genes); return st;
}
function stackHTML(st){
  return '<div class="gname" style="color:'+st.color+'">'+esc(st.name)+'</div>'+
   '<div class="chips" style="margin:4px 0 6px"><span class="chip">Ritm '+MOOD[st.mood].n+' • '+MOOD[st.mood].bpm+' BPM</span><span class="chip">'+st.genes.length+' ținte</span></div>'+
   '<p class="gsyn"><b>Efect cumulat (tema stivei):</b> '+esc(st.syn)+'</p>'+
   st.genes.map(g=>'<div class="gt"><b>'+g+'</b> · '+esc(T[g][0])+'<div>'+esc(D[g]||'')+'</div>'+(st.why&&st.why[g]?'<small>De ce e aici: '+esc(st.why[g])+'</small>':'')+'</div>').join('');
}
function addMsg(who,html,actions){
  const d=document.createElement('div'); d.className='msg '+who; d.innerHTML=html;
  if(actions){const r=document.createElement('div'); r.className='row'; actions.forEach(([t,f,cls])=>{const b=document.createElement('button'); b.className='small '+(cls||''); b.textContent=t; b.onclick=f; r.appendChild(b)}); d.appendChild(r)}
  $('chatlog').appendChild(d); d.scrollIntoView({behavior:'smooth',block:'end'});
  return d;
}
function stackActions(st){return [
  ['Încarcă + redă',()=>{showView('gen'); setStack(st); applyMood(st.mood); generate(st.genes)},'primary'],
  ['Salvează în Stivele mele',()=>{const a=loadMine(); a.unshift({name:st.name,color:st.color,genes:st.genes.slice(),syn:st.syn,why:st.why,need:st.need,date:new Date().toISOString()}); if(saveMine(a)){renderMine();renderMineGuide();toast('Salvat: '+st.name)}}]
]}
function showStack(st,intro){addMsg('bot',(intro?'<div style="margin-bottom:6px">'+esc(intro)+'</div>':'')+stackHTML(st),stackActions(st)); lastChatStack=st; saveChat()}
const CHAT_KEY='proteodyne.chat.v1';
let chatHist=[];
function saveChat(){try{const s=store(); s&&s.setItem(CHAT_KEY,JSON.stringify(chatHist.slice(-30)))}catch(e){}}
function chatReply(text){
  const q=norm(text).trim(); const up=text.toUpperCase();
  const genesIn=Object.keys(T).filter(g=>new RegExp('\\b'+g+'\\b').test(up));
  if(/^(ce (este|e|face)|explica|ce inseamna)/.test(q)&&genesIn.length){
    genesIn.forEach(g=>addMsg('bot','<div class="gt"><b>'+g+'</b> · '+esc(T[g][0])+uni(g)+'<div>'+esc(D[g])+'</div></div>'));
    const inP=PRESETS.filter(p=>p.g.some(x=>genesIn.includes(x))).map(p=>p.n);
    if(inP.length) addMsg('bot','Apare în stivele: '+esc(inP.slice(0,6).join(', '))+'.');
    return;
  }
  if(lastChatStack&&/^(adauga|pune|include)/.test(q)&&genesIn.length){
    const st=lastChatStack; genesIn.forEach(g=>{if(!st.genes.includes(g)){st.genes.push(g); st.why[g]='adăugat de tine'}});
    showStack(st,'Am adăugat '+genesIn.join(', ')+'.'); return;
  }
  if(lastChatStack&&/^(scoate|sterge|elimina|fara)/.test(q)&&genesIn.length){
    const st=lastChatStack; const there=genesIn.filter(g=>st.genes.includes(g));
    if(!there.length){addMsg('bot',esc(genesIn.join(', '))+' nu este în stiva curentă.');return}
    if(st.genes.length-there.length<1){addMsg('bot','Stiva trebuie să rămână cu cel puțin o țintă.');return}
    st.genes=st.genes.filter(g=>!there.includes(g));
    showStack(st,'Am scos '+there.join(', ')+'.'); return;
  }
  if(lastChatStack&&/(mai calm|mai lent|seara|relax)/.test(q)&&q.split(' ').length<=4){lastChatStack.mood='calm'; showStack(lastChatStack,'Am trecut stiva pe ritm calm.'); return}
  if(lastChatStack&&/(mai alert|mai rapid|energic|dimineata)/.test(q)&&q.split(' ').length<=4){lastChatStack.mood='alert'; showStack(lastChatStack,'Am trecut stiva pe ritm alert.'); return}
  const st=makeStack(text);
  if(!st){addMsg('bot','Nu am găsit nimic potrivit în bibliotecă pentru asta. Încearcă să descrii simplu, de exemplu: „somn”, „stres”, „genunchi”, „imunitate”, „digestie”, „energie”, „libido”.'); return}
  showStack(st,'Iată stiva pentru nevoia ta'+(S.sex?(S.sex==='F'?' (Femeie)':' (Bărbat)'):(S.sexSet?' (Universal)':''))+'. O poți modifica scriind „adaugă …” sau „scoate …”.');
}
const CHAT_LIMIT=5;
function chatQuota(){const d=new Date().toISOString().slice(0,10); let q; try{q=JSON.parse(localStorage.getItem('pd_chatq')||'null')}catch(e){} if(!q||q.d!==d) q={d,n:0}; return q}
function renderQuota(){const q=chatQuota(), left=Math.max(0,CHAT_LIMIT-q.n), el=$('chat-quota'); if(el) el.textContent='Mesaje rămase azi: '+left+' din '+CHAT_LIMIT;
  $('chat-send').disabled=left===0; $('chat-q').disabled=left===0; $('chat-q').placeholder=left?'Scrie nevoia ta…':'Limita de azi s-a atins. Revino mâine.'}
function sendChat(){
  const i=$('chat-q'), t=i.value.trim(); if(!t) return;
  const q=chatQuota(); if(q.n>=CHAT_LIMIT){addMsg('bot','Ai folosit cele '+CHAT_LIMIT+' mesaje de azi. Mâine poți scrie din nou. Între timp, stivele gata făcute și Generatorul merg fără limită.'); renderQuota(); return}
  q.n++; try{localStorage.setItem('pd_chatq',JSON.stringify(q))}catch(e){}
  i.value=''; addMsg('me',esc(t)); chatHist.push(t); chatReply(t); saveChat(); renderQuota();
}
function initChat(){
  $('chat-send').onclick=sendChat;
  $('chat-q').addEventListener('keydown',e=>{if(e.key==='Enter')sendChat()});
  $('chat-clear').onclick=()=>{chatHist=[];lastChatStack=null;saveChat();$('chatlog').innerHTML='';greet()};
  greet(); renderQuota();
}
function greet(){
  const d=addMsg('bot','Salut! Spune-mi ce nevoie ai și îți fac o stivă, pentru om, plante, albine sau animale. '+(S.sex?'':'Dacă alegi Femeie, Bărbat sau Universal în Generator, potrivesc stivele după asta.'));
  const sg=document.createElement('div'); sg.className='sugg';
  ['Nu dorm bine și sunt stresat','Dureri de spate și genunchi','Imunitate pentru iarnă','Energie și concentrare','Digestie grea și balonare','Copilul meu nu se concentrează la teme','Roșii fără boli și mucegai','Albine puternice pentru iarnă','Vaci cu mastită, fără antibiotice'].forEach(t=>{const b=document.createElement('button'); b.textContent=t; b.onclick=()=>{$('chat-q').value=t; sendChat()}; sg.appendChild(b)});
  d.appendChild(sg);
}
function renderMineGuide(){
  const a=loadMine(), el=$('mine-guide'); el.innerHTML='';
  if(!a.length) return;
  el.innerHTML='<div class="gh">Stivele tale</div>';
  a.forEach(st=>{const c=document.createElement('div'); c.className='gcard'; c.style.setProperty('--c',st.color||'#22d3ee');
    const s2={...st,genes:st.genes.filter(g=>T[g])}; s2.mood=st.mood||guessMood(s2.genes); s2.syn=st.syn||'Stivă salvată de tine.';
    c.innerHTML=stackHTML(s2); el.appendChild(c)});
}

/* ================== GHID STIVE ================== */
function renderGuide(){
  const el=$('guide-list'); el.innerHTML='';
  let lastG=-1;
  const DO=Object.keys(DOMS);
  PRESETS.slice().sort((a,b)=>(DO.indexOf(a.dom)-DO.indexOf(b.dom))||(a.grp-b.grp)).forEach(p=>{
    const gk=p.dom+p.grp, gname=DOMS[p.dom].ico+' '+DOMS[p.dom].n+' · '+domGroups(p.dom)[p.grp];
    if(gk!==lastG){lastG=gk; const h=document.createElement('div'); h.className='gh'; h.textContent=gname; el.appendChild(h)}
    const c=document.createElement('div'); c.className='gcard'; c.style.setProperty('--c',p.c); c.dataset.s=p.n+' '+(p.k||'')+' '+p.syn+' '+p.g.map(g=>g+' '+T[g][0]+' '+(D[g]||'')).join(' ')+' '+gname+' '+DOMS[p.dom].n;
    c.innerHTML='<div class="gname" style="color:'+p.c+'">'+esc(p.n)+'</div>'+
      '<div class="chips" style="margin:4px 0 8px"><span class="chip">Ritm '+MOOD[p.m].n+' • '+MOOD[p.m].bpm+' BPM</span>'+(p.x?'<span class="chip">'+(p.x==='F'?'Femeie':'Bărbat')+'</span>':'')+'</div>'+
      '<p class="gsyn"><b>Efect sinergic (tema stivei):</b> '+esc(p.syn)+'</p>'+(!p.x&&p.dom==='om'&&p.grp!==7&&(SEX_ADD.F[p.grp]||SEX_ADD.M[p.grp])?'<p class="gsyn" style="color:var(--muted)">Adaptare după sex: '+[SEX_ADD.F[p.grp]?'la Femeie se adaugă '+SEX_ADD.F[p.grp].join(', '):'',SEX_ADD.M[p.grp]?'la Bărbat se adaugă '+SEX_ADD.M[p.grp].join(', '):''].filter(Boolean).join('; ')+'.</p>':'')+
      p.g.map(g=>'<div class="gt"><b>'+g+'</b> · '+esc(T[g][0])+uni(g)+'<div>'+esc(D[g]||'')+'</div></div>').join('');
    const b=document.createElement('button'); b.className='small'; b.style.marginTop='8px'; b.textContent='Încarcă + preset potrivit';
    b.onclick=()=>{showView('gen'); if(S.dom!==p.dom) setDom(p.dom); setStack(presetStack(p)); applyMood(p.m,isKid(p))};
    c.appendChild(b); el.appendChild(c);
  });
  renderGloss('');
}
function renderGloss(q){
  q=norm(q); const el=$('gloss'); el.innerHTML='';
  Object.keys(T).sort().filter(g=>!q||norm(g+' '+T[g][0]+' '+(D[g]||'')).includes(q)).forEach(g=>{
    const d=document.createElement('div'); d.className='gt';
    d.innerHTML='<b>'+g+'</b> · '+esc(T[g][0])+uni(g)+'<div>'+esc(D[g]||'')+'</div>'; el.appendChild(d);
  });
}
function showView(v){
  const cur=['gen','chat','guide'].find(x=>!$('view-'+x).classList.contains('hidden')); S.scr=S.scr||{}; if(cur) S.scr[cur]=window.scrollY;
  ['gen','chat','guide'].forEach(x=>$('view-'+x).classList.toggle('hidden',v!==x)); if(v==='guide'){renderMineGuide(); guideFilter()}
  document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('sel',b.dataset.view===v));
  window.scrollTo({top:(S.scr&&S.scr[v])||0});
}


/* ================== SINTEZĂ ================== */
const SR=44100;
const SCALE=[0,2,4,7,9]; // pentatonică majoră
function aaFreq(aa){
  const m=AA_MASS[aa]; if(!m) return null;
  let f=m*4.0; while(f<196) f*=2; while(f>=392) f/=2; // pliere în octava G3–G4
  const root=196, semis=12*Math.log2(f/root);
  let best=0,bd=99; for(let o=0;o<2;o++) for(const s of SCALE){const v=s+12*o; const d=Math.abs(v-semis); if(d<bd){bd=d;best=v}}
  return root*Math.pow(2,best/12);
}
function voice(timbre,ph,t,f){
  switch(timbre){
    case 'sinus': return Math.sin(ph);
    case 'flaut': {const vib=Math.sin(2*Math.PI*5*t)*0.004; return Math.sin(ph*(1+vib))*0.8+Math.sin(ph*3)*0.12+Math.sin(ph*5)*0.04+(Math.random()-0.5)*0.015}
    case 'clopot': return Math.sin(ph)*0.7+Math.sin(ph*2.76)*0.2*Math.exp(-t*3)+Math.sin(ph*5.4)*0.1*Math.exp(-t*6);
    case 'pad': return (Math.sin(ph)+Math.sin(ph*1.004)+Math.sin(ph*0.996))/3*0.9+Math.sin(ph*2)*0.08;
    default: return Math.sin(ph)*0.75+Math.sin(ph*2)*0.18+Math.sin(ph*3)*0.07; // cald
  }
}
function buildNotes(genes,bpm,targetSec){
  const beat=60/bpm, notes=[]; let t=0;
  let pass=0;
  const once=()=>{pass++; for(const g of genes){const s=seqFor(g); for(let i=0;i<s.length;i++){
    if(pass>1&&targetSec>0&&t>=targetSec) return;
    const aa=s[i], f=aaFreq(aa); if(!f) continue;
    const dur=beat*(('LIVFMWY'.includes(aa))?1.5:(('GAS'.includes(aa))?0.75:1));
    notes.push({t,dur,f,aa,gene:g,acc:i%4===0}); t+=dur;
  } t+=beat;}};
  once(); if(targetSec>0) while(t<targetSec) once();
  return {notes,total:t+beat*2};
}
function synth(genes,opt){
  const {notes,total}=buildNotes(genes,opt.bpm,opt.dur);
  const n=Math.ceil(total*SR), buf=new Float32Array(n);
  const atk=0.03, rel=Math.min(0.35,60/opt.bpm*0.5);
  for(const nt of notes){
    const s0=Math.floor(nt.t*SR), len=Math.floor((nt.dur+rel)*SR), w=2*Math.PI*nt.f/SR, amp=nt.acc?0.42:0.34;
    for(let i=0;i<len&&s0+i<n;i++){
      const tt=i/SR; let env=tt<atk?tt/atk:1;
      if(tt>nt.dur) env*=Math.max(0,1-(tt-nt.dur)/rel);
      env*=Math.exp(-tt*(opt.timbre==='clopot'?2.2:0.6));
      buf[s0+i]+=voice(opt.timbre,w*i,tt,nt.f)*env*amp;
    }
  }
  if(opt.drone){const w1=2*Math.PI*98/SR,w2=2*Math.PI*147/SR; for(let i=0;i<n;i++){const fade=Math.min(1,i/SR/2,(n-i)/SR/2); buf[i]+=(Math.sin(w1*i)*0.08+Math.sin(w2*i)*0.05)*fade}}
  // normalizare + volum
  let pk=0; for(let i=0;i<n;i++){const a=Math.abs(buf[i]); if(a>pk)pk=a}
  const g=(pk>0?0.9/pk:1)*opt.vol;
  const pcm=new Int16Array(n); for(let i=0;i<n;i++){let v=buf[i]*g; v=Math.max(-1,Math.min(1,v)); pcm[i]=v<0?v*32768:v*32767}
  return {pcm,notes,total};
}
function wavBlob(pcm){
  const ab=new ArrayBuffer(44+pcm.length*2), v=new DataView(ab); let o=0;
  const str=s=>{for(const c of s)v.setUint8(o++,c.charCodeAt(0))}, u32=x=>{v.setUint32(o,x,true);o+=4}, u16=x=>{v.setUint16(o,x,true);o+=2};
  str('RIFF');u32(36+pcm.length*2);str('WAVE');str('fmt ');u32(16);u16(1);u16(1);u32(SR);u32(SR*2);u16(2);u16(16);str('data');u32(pcm.length*2);
  new Int16Array(ab,44).set(pcm);
  return new Blob([ab],{type:'audio/wav'});
}
function midiBlob(notes,bpm){
  const ppq=480, beat=60/bpm, ev=[];
  notes.forEach(nt=>{const m=Math.round(69+12*Math.log2(nt.f/440)), on=Math.round(nt.t/beat*ppq), off=Math.round((nt.t+nt.dur*0.95)/beat*ppq); ev.push([on,0x90,m,nt.acc?96:80],[off,0x80,m,0])});
  ev.sort((a,b)=>a[0]-b[0]||(a[1]-b[1]));
  const vlq=x=>{const b=[x&0x7f]; while(x>>=7) b.unshift((x&0x7f)|0x80); return b};
  const tr=[]; const tempo=Math.round(60000000/bpm);
  tr.push(0,0xFF,0x51,3,(tempo>>16)&255,(tempo>>8)&255,tempo&255, 0,0xC0,73);
  let last=0; ev.forEach(e=>{tr.push(...vlq(e[0]-last),e[1],e[2],e[3]); last=e[0]});
  tr.push(0,0xFF,0x2F,0);
  const h=[0x4D,0x54,0x68,0x64,0,0,0,6,0,0,0,1,(ppq>>8)&255,ppq&255], L=tr.length;
  const th=[0x4D,0x54,0x72,0x6B,(L>>>24)&255,(L>>16)&255,(L>>8)&255,L&255];
  return new Blob([new Uint8Array([...h,...th,...tr])],{type:'audio/midi'});
}

/* ================== PLAYER ================== */
const audio=$('audio');
function opts(){return {bpm:+$('bpm').value, vol:+$('vol').value/100, timbre:$('timbre').value, dur:+$('dur').value, drone:$('drone').checked}}
function syncLabels(){$('bpm-v').textContent=$('bpm').value; $('vol-v').textContent=$('vol').value}
['bpm','vol'].forEach(id=>$(id).addEventListener('input',syncLabels));
$('loop').addEventListener('change',()=>audio.loop=$('loop').checked);

function generate(genes,play=true){
  const o=opts(); const t0=performance.now();
  const r=synth(genes,o);
  const blob=wavBlob(r.pcm);
  if(S.url) URL.revokeObjectURL(S.url);
  S.url=URL.createObjectURL(blob); S.wav=blob; S.notes=r.notes; S.bpm=o.bpm; S.total=r.total;
  audio.src=S.url; audio.loop=$('loop').checked;
  $('btn-wav').disabled=false; $('btn-mid').disabled=false;
  const ms=Math.round(performance.now()-t0);
  toast('Generat: '+fmt(r.total)+' • '+(blob.size/1048576).toFixed(1)+' MB • '+ms+' ms');
  if(play){const p=audio.play(); if(p&&p.catch) p.catch(()=>toast('Apasă ▶ pe player ca să pornești sunetul'))}
  return r;
}
function fmt(s){s=Math.round(s);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
$('btn-mood').onclick=()=>S.stack&&applyMood(S.stack.mood);
$('btn-gen').onclick=()=>{ if(!S.stack) return; generate(S.stack.genes); S.playing=S.stack };
$('btn-test').onclick=()=>{ const d=$('dur').value; $('dur').value='0'; generate(['OXT']); $('dur').value=d };
$('btn-wav').onclick=()=>download(S.wav,fileBase()+'.wav');
$('btn-mid').onclick=()=>download(midiBlob(S.notes,S.bpm),fileBase()+'.mid');
function fileBase(){return 'proteodyne-'+norm((S.playing==='mix'?'combinatie':(S.stack?S.stack.name:'test'))).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function download(blob,name){
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; document.body.appendChild(a); a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},4000);
}

/* ================== VIZUALIZATOR (sincronizat pe audio.currentTime) ================== */
const cv=$('viz'), cx=cv.getContext('2d');
function fitCanvas(){const r=cv.getBoundingClientRect(), d=Math.min(2,window.devicePixelRatio||1); cv.width=Math.max(300,r.width*d); cv.height=170*d}
window.addEventListener('resize',fitCanvas);
let lastIdx=-1;
function draw(){
  const W=cv.width,H=cv.height, t=audio.currentTime||0, win=6;
  cx.fillStyle='#070b18'; cx.fillRect(0,0,W,H);
  cx.strokeStyle='#18223f'; cx.lineWidth=1;
  for(let i=1;i<6;i++){const y=H*i/6; cx.beginPath(); cx.moveTo(0,y); cx.lineTo(W,y); cx.stroke()}
  const px=W*0.3; const notes=S.notes;
  if(notes.length){
    const fmin=196,fmax=784, y=f=>H-(Math.log2(f/fmin)/Math.log2(fmax/fmin))*(H*0.8)-H*0.1;
    let cur=-1;
    for(let i=0;i<notes.length;i++){
      const nt=notes[i]; if(nt.t+nt.dur<t-win*0.3) continue; if(nt.t>t+win) break;
      const x=px+(nt.t-t)/win*W, w=Math.max(3,nt.dur/win*W-2), on=t>=nt.t&&t<nt.t+nt.dur;
      if(on) cur=i;
      const hue=(AA_LIST.indexOf(nt.aa)*18+180)%360;
      cx.fillStyle=on?'#ffffff':'hsla('+hue+',80%,62%,'+(nt.t<t?0.35:0.85)+')';
      const yy=y(nt.f); cx.fillRect(x,yy-6,w,12);
    }
    if(!audio.paused&&cur>=0){
      const nt=notes[cur], r=(t-nt.t)/nt.dur;
      cx.beginPath(); cx.strokeStyle='rgba(167,139,250,.9)'; cx.lineWidth=2;
      for(let x=0;x<W;x+=3){const yy=H/2+Math.sin(x/W*Math.PI*2*(nt.f/40)+t*20)*H*0.12*(1-r*0.6)*Math.sin(Math.PI*x/W); x?cx.lineTo(x,yy):cx.moveTo(x,yy)} cx.stroke();
    }
    if(cur!==lastIdx){lastIdx=cur; if(cur>=0){const nt=notes[cur]; $('now-target').textContent=nt.gene; $('now-aa').textContent=nt.aa+' '+AA_NAME[nt.aa]; $('now-hz').textContent=nt.f.toFixed(1)+' Hz'}}
  } else {cx.fillStyle='#5b6896'; cx.font=(14*(W/600))+'px system-ui'; cx.fillText('Alege o stivă și apasă „Generează și redă”',W*0.05,H/2)}
  cx.fillStyle='rgba(34,211,238,.8)'; cx.fillRect(px,0,2,H);
  requestAnimationFrame(draw);
}

/* ================== STIVELE MELE ================== */
const KEY='proteodyne.stacks.v1';
function loadMine(){try{const s=store(); return JSON.parse((s&&s.getItem(KEY))||'[]')}catch(e){return[]}}
function saveMine(a){try{const s=store(); if(!s) throw 0; s.setItem(KEY,JSON.stringify(a)); return true}catch(e){toast('Nu pot salva pe acest dispozitiv');return false}}
function renderMine(){
  const a=loadMine(), el=$('mine-list'); el.innerHTML='';
  if(!a.length){el.innerHTML='<small style="color:var(--muted)">Nicio stivă salvată încă.</small>';return}
  a.forEach((st,i)=>{
    const d=document.createElement('div'); d.className='saved';
    const b=document.createElement('button'); b.className='load'; b.innerHTML='<span style="color:'+esc(st.color||'#e7ecff')+';font-weight:700">'+esc(st.name)+'</span><small>'+esc(st.genes.join(' · '))+'</small>';
    b.onclick=()=>setStack({name:st.name,color:st.color,genes:st.genes.filter(g=>T[g]),tags:['Salvată'].concat(st.need?['Nevoie: '+st.need]:[])});
    const ren=document.createElement('button'); ren.className='small'; ren.textContent='✎'; ren.setAttribute('aria-label','Redenumește');
    ren.onclick=()=>{
      const box=document.createElement('div'); box.className='saved';
      const inp=document.createElement('input'); inp.type='text'; inp.value=st.name; inp.id='ren-'+i;
      const ok=document.createElement('button'); ok.className='small'; ok.textContent='OK';
      ok.onclick=()=>{const n=inp.value.trim(); if(n){a[i].name=n.slice(0,40); saveMine(a)} renderMine(); renderMineGuide()};
      box.append(inp,ok); d.replaceWith(box); inp.focus();
    };
    const del=document.createElement('button'); del.className='small'; del.textContent='🗑'; del.setAttribute('aria-label','Șterge');
    del.onclick=()=>{
      if(del.dataset.arm){a.splice(i,1); saveMine(a); renderMine(); renderMineGuide(); toast('Șters: '+st.name); return}
      del.dataset.arm='1'; del.textContent='Sigur?'; del.style.borderColor='var(--bad)'; setTimeout(()=>{if(del.isConnected){delete del.dataset.arm; del.textContent='🗑'; del.style.borderColor=''}},3000);
    };
    d.append(b,ren,del); el.appendChild(d);
  });
}
$('btn-save').onclick=()=>{
  if(!S.stack) return; const name=($('save-name').value||S.stack.name).trim().slice(0,40);
  const a=loadMine(); a.unshift({name,color:S.stack.color,genes:S.stack.genes.slice(),date:new Date().toISOString()});
  if(saveMine(a)){renderMine(); toast('Salvat: '+name)}
};
$('btn-export-json').onclick=()=>download(new Blob([JSON.stringify(loadMine(),null,2)],{type:'application/json'}),'proteodyne-stive.json');
$('import-json').onchange=e=>{
  const f=e.target.files[0]; if(!f) return; const r=new FileReader();
  r.onload=()=>{try{const x=JSON.parse(r.result); if(!Array.isArray(x)) throw 0; const ok=x.filter(s=>s&&s.name&&Array.isArray(s.genes)); saveMine(ok.concat(loadMine())); renderMine(); toast('Importate: '+ok.length)}catch(err){toast('Fișier invalid')}};
  r.readAsText(f);
};

/* ================== DIAGNOSTIC ================== */
async function runDiagnostics(){
  const out=[]; const ok=(n,c,info='')=>out.push([n,!!c,info]);
  ok('Mase aminoacizi (20)',Object.keys(AA_MASS).length===20);
  ok('Frecvențe în interval',AA_LIST.split('').every(a=>{const f=aaFreq(a);return f>=190&&f<=800}));
  const missing=[...PRESETS.flatMap(p=>p.g),...Object.values(ACTIONS).flatMap(a=>a.t),...Object.values(PARTS).flat().flatMap(p=>p[1])].filter(g=>!T[g]);
  ok('Ținte valide în stive',!missing.length,missing.join(','));
  ok('Nume stive ≤ 4 cuvinte',PRESETS.every(p=>p.n.split(/\s+/).length<=4));
  ok('Culori unice pe stive',new Set(PRESETS.map(p=>p.c)).size===PRESETS.length);
  ok('Explicație pentru fiecare țintă',Object.keys(T).every(g=>D[g]),Object.keys(T).filter(g=>!D[g]).join(','));
  ok('Căutare legată de zone',PROBLEMS.every(p=>PARTS[p[2]].some(x=>x[0]===p[3])&&ACTIONS[p[4]]));
  const s1=seqFor('COL1A1'), s2=seqFor('COL1A1'); ok('Secvențe deterministe',s1===s2&&/^[ACDEFGHIKLMNPQRSTVWY]+$/.test(s1));
  try{const r=synth(['OXT'],{bpm:90,vol:.5,timbre:'cald',dur:0,drone:true}); const b=wavBlob(r.pcm); const h=new Uint8Array(await b.slice(0,4).arrayBuffer());
    ok('Sinteză WAV 44,1 kHz',String.fromCharCode(...h)==='RIFF'&&r.pcm.length>SR,(b.size/1024|0)+' KB');
    const m=new Uint8Array(await midiBlob(r.notes,90).slice(0,4).arrayBuffer()); ok('Export MIDI',String.fromCharCode(...m)==='MThd');
  }catch(e){ok('Sinteză WAV',false,e.message)}
  try{const s=store(); s.setItem('__t','1'); s.removeItem('__t'); ok('Salvare locală',true)}catch(e){ok('Salvare locală',false,'blocată')}
  try{const r=await fetch('manifest.webmanifest',{cache:'no-store'}); const j=await r.json(); ok('Manifest PWA',j.name==='Proteodyne')}catch(e){ok('Manifest PWA',false,'offline sau lipsă')}
  ok('Service Worker',('serviceWorker' in navigator)&&!!(navigator.serviceWorker.controller||await navigator.serviceWorker.getRegistration()),('serviceWorker' in navigator)?'':'nesuportat');
  const sa=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true; ok('Mod aplicație',true,sa?'instalată pe ecranul principal':'deschisă în browser');
  $('diag').innerHTML=out.map(([n,c,i])=>'<li class="'+(c?'ok':'bad')+'">'+(c?'✔':'✖')+' '+esc(n)+(i?' <small>('+esc(i)+')</small>':'')+'</li>').join('');
  return out;
}
$('btn-diag').onclick=runDiagnostics;

/* ================== EXPLICAȚIE RAPIDĂ (fără să schimbi pagina) ================== */
let sheetP=null;
function presetDetail(p){
  const st=p.n?presetStack(p):p; st.mood=st.mood||p.m||guessMood(st.genes);
  st.syn=p.syn||st.syn||'Stivă creată de tine.'; if(!p.n&&!st.why) st.why=null;
  let h=stackHTML(st);
  if(p.n&&!p.x&&(SEX_ADD.F[p.grp]||SEX_ADD.M[p.grp])&&p.dom==='om'&&p.grp!==7) h+='<p class="gsyn" style="color:var(--muted)">Adaptare după sex: '+[SEX_ADD.F[p.grp]?'la Femeie se adaugă '+SEX_ADD.F[p.grp].join(', '):'',SEX_ADD.M[p.grp]?'la Bărbat se adaugă '+SEX_ADD.M[p.grp].join(', '):''].filter(Boolean).join('; ')+'.</p>';
  return h;
}
function openSheet(p){
  sheetP=p; $('sheet-body').innerHTML=presetDetail(p); $('sheet').hidden=false; $('sheet-in').scrollTop=0;
  $('sheet-load').hidden=!p.n; document.documentElement.style.overflow='hidden';
}
function closeSheet(){$('sheet').hidden=true; document.documentElement.style.overflow=''}
$('sheet-back').onclick=closeSheet;
$('sheet').addEventListener('click',e=>{if(e.target.id==='sheet') closeSheet()});
$('sheet-load').onclick=()=>{if(sheetP&&sheetP.n){setStack(presetStack(sheetP)); applyMood(sheetP.m,isKid(sheetP))} closeSheet()};
function curStackDetail(){if(!S.stack) return; const p=PRESETS.find(x=>x.n===S.stack.name); openSheet(p||{...S.stack,genes:S.stack.genes.slice()})}
$('stack-q').onclick=curStackDetail;
/* bara de jos: redă fără să muți pagina */
function showBar(){
  if(!S.stack&&!(S.mix&&S.mix.length)) return; $('bar').hidden=false; document.body.classList.add('hasbar');
  if(S.mix&&S.mix.length){$('bar-name').textContent='Combinație ('+S.mix.length+'): '+S.mix.map(m=>m.name).join(' + '); $('bar-name').style.color='var(--acc)'}
  else {$('bar-name').textContent=S.stack.name; $('bar-name').style.color=S.stack.color||'var(--text)'}
}
$('bar-play').onclick=()=>{if(!audio.paused){audio.pause();return} if(S.mix&&S.mix.length){playMix();return} if(!S.stack) return; generate(S.stack.genes); S.playing=S.stack};
$('bar-view').onclick=()=>{showView('gen'); $((S.mix&&S.mix.length)?'sec-mix':'sec-stack').scrollIntoView({behavior:'smooth',block:'start'})};
$('bar-info').onclick=curStackDetail;
audio.addEventListener('play',()=>$('bar-play').textContent='⏸ Pauză');
audio.addEventListener('pause',()=>$('bar-play').textContent='▶ Redă');
/* căutare în ghid */
function guideFilter(){
  const q=norm($('guide-q').value.trim()); let shown=0;
  document.querySelectorAll('#guide-list .gcard, #mine-guide .gcard').forEach(c=>{const ok=!q||norm(c.dataset.s||c.textContent).includes(q); c.hidden=!ok; if(ok) shown++});
  document.querySelectorAll('#guide-list .gh').forEach(h=>{let n=h.nextElementSibling, any=false; while(n&&!n.classList.contains('gh')){if(!n.hidden&&n.classList.contains('gcard')) any=true; n=n.nextElementSibling} h.hidden=!any});
  $('guide-empty').hidden=shown>0;
}
$('guide-q').addEventListener('input',guideFilter);


/* ================== COMBINAȚIE DE STIVE ================== */
S.mix=[];
function addToMix(st){
  if(!st) return; if(S.mix.some(m=>m.name===st.name&&m.genes.join()===st.genes.join())){toast('„'+st.name+'” e deja în combinație');return}
  S.mix.push({name:st.name,color:st.color||'#22d3ee',genes:st.genes.slice(),mood:st.mood}); renderMix(); showBar();
  toast('Adăugat în combinație: '+st.name+' ('+S.mix.length+' stive)');
}
function mixGenes(){const out=[]; S.mix.forEach(m=>m.genes.forEach(g=>{if(!out.includes(g)) out.push(g)})); return out}
function renderMix(){
  const sec=$('sec-mix'), el=$('mix-list'); sec.classList.toggle('hidden',!S.mix.length); el.innerHTML='';
  $('mix-count').textContent=S.mix.length+' stive • '+mixGenes().length+' ținte';
  S.mix.forEach((m,i)=>{
    const d=document.createElement('div'); d.className='mixs'; d.style.setProperty('--c',m.color);
    const hd=document.createElement('div'); hd.className='hd'; hd.innerHTML='<span style="color:'+m.color+'">'+esc(m.name)+'</span>';
    const rm=document.createElement('button'); rm.className='small'; rm.textContent='Elimină stiva'; rm.onclick=()=>{S.mix.splice(i,1); renderMix(); showBar()};
    hd.appendChild(rm); d.appendChild(hd);
    const ch=document.createElement('div'); ch.className='mchips';
    m.genes.forEach((g,j)=>{const c=document.createElement('span'); c.className='mchip'; c.innerHTML='<b>'+g+'</b>';
      const x=document.createElement('button'); x.textContent='✕'; x.setAttribute('aria-label','Scoate '+g);
      x.onclick=()=>{m.genes.splice(j,1); if(!m.genes.length) S.mix.splice(i,1); renderMix(); showBar()}; c.appendChild(x); ch.appendChild(c)});
    d.appendChild(ch); el.appendChild(d);
  });
}
function playMix(){if(!S.mix.length) return; const g=mixGenes(); S.lastName='Combinație: '+S.mix.map(m=>m.name).join(' + '); generate(g); S.playing='mix'}
$('btn-addmix').onclick=()=>addToMix(S.stack);
$('btn-mix-play').onclick=playMix;
$('btn-mix-clear').onclick=()=>{S.mix=[]; renderMix(); showBar(); toast('Combinația a fost golită')};
$('btn-mix-save').onclick=()=>{
  if(!S.mix.length) return; const name=shortName('Mix '+S.mix.map(m=>m.name.split(' ')[0]).join(' + ').replace(/ \+ /g,' & ')).slice(0,40);
  const genes=mixGenes(); const syn='Combinație din: '+S.mix.map(m=>m.name).join(', ')+'. Se redau una după alta într-un singur audio.';
  const a=loadMine(); a.unshift({name,color:S.mix[0].color,genes,syn,date:new Date().toISOString()}); if(saveMine(a)){renderMine(); toast('Salvat: '+name)}
};
$('sheet-mix').onclick=()=>{if(sheetP){addToMix(sheetP.n?presetStack(sheetP):sheetP)} closeSheet()};
$('bar-add').onclick=()=>addToMix(S.stack);

/* ================== START ================== */
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>showView(b.dataset.view));
$('gloss-q').addEventListener('input',e=>renderGloss(e.target.value));
renderGroups(); renderGuide(); renderMineGuide(); initChat(); renderPresets(); renderMine(); syncLabels(); fitCanvas(); requestAnimationFrame(draw);
if('serviceWorker' in navigator && location.protocol.startsWith('http')){
  window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
