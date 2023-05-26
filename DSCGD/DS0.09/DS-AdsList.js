
const ad_creditopessoal_230522 = `  
<div id="background">
<img src="IMG/bkg-credito-pessoal.jpg">
</div>

<div class="H1-AD WHITE_TXT">
Quer <BR>Viajar?
</div>

<div>
<nav id="menu_ad" class="nav-AD">
  <div onclick="menuManager.goToContent('_creditopessoal_multi_campanha.html');" style="background-color: #00bbed;"
    class="button btSub Hx2 slot1 button-AD-CTA WHITE_TXT WHITE_BOR">
  <div>Toque para <BR>saber mais</div>
  </div>
</nav>
</div>
`;

const ad_creditopessoal_B_230522 = ` 
<div id="background">
<img src="IMG/bkg-credito-pessoal_B.jpg">
</div>

<div class="H1-AD WHITE_TXT">
Quer <BR>Viajar?
</div>

<div>
<nav id="menu_ad" class="nav-AD">
  <div onclick="menuManager.goToContent('_creditopessoal_multi_campanha.html');" style="background-color: #D65778;"
    class="button btSub Hx2 slot1 button-AD-CTA WHITE_TXT WHITE_BOR">
  <div>Toque para <BR>saber mais</div>
  </div>
</nav>
</div>
<div>
<div class="nav-main TRANSPARENT">
</div>
</div>

`;

const ad_creditopessoal_230522_QRCODE = `  
<div id="background">
<img src="IMG/bkg-credito-pessoal_QRCODE.jpg">
</div>

<div class="H1-AD WHITE_TXT">
Quer <BR>Viajar?
</div>
`;

const ad_creditopessoal_B_230522_QRCODE = `  
<div id="background">
<img src="IMG/bkg-credito-pessoal_B_QRCODE.jpg">
</div>

<div class="H1-AD WHITE_TXT">
Quer <BR>Viajar?
</div>
`;

const adsList = [{
  name: 'Credito Pessoal "Quer Viajar?" 230522',
  duration: 10000,
  content: ad_creditopessoal_230522
}, {
  name: 'Credito Pessoal "Quer Viajar? QRC" 230522',
  duration: 10000,
  content: ad_creditopessoal_230522_QRCODE
}, {
  name: 'Credito Pessoal "Quer Viajar? B" 230522',
  duration: 10000,
  content: ad_creditopessoal_B_230522
}, {
  name: 'Credito Pessoal "Quer Viajar? B QRCODE" 230522',
  duration: 10000,
  content: ad_creditopessoal_B_230522_QRCODE
}];

function getAdsList() {
  return adsList;
}