class DS_QRCodeManager {
  constructor() {
    this.showQRcode = this.showQRcode.bind(this);
    this.hideQRcode = this.hideQRcode.bind(this);
    this.qrcodeLayer = document.getElementById("qrcodeLayer");
    this.fullscreenLayer = document.getElementById("fullscreenLayer");
    this.voltarButton = document.getElementById("bt_voltar");
    this.precarioButton = document.getElementById("bt_precario");
    this.qrcodeButton = document.getElementById("qrcode");
    this.setupQRcodeTemplates();
    this.insertQrCodeLayer(this.model_A);
    console.log("QRCodeManager Running");
    window.onload = function () {
      this.initGenerator();
      this.qrcodeGenerator.makeCode();
    }

  }

  insertQrCodeLayer(template) {
    this.qrcodeLayer.innerHTML += template;
  }

  initGenerator() {
    this.qrcodeGenerator = new QRCode("qrcodeImage", {
      text: "http://www.cgd.pt",
      width: 240,
      height: 240,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  showQRcode(event) {
    this.qrcodeLayer.classList.add("show");
    this.fullscreenLayer.style.display = "block"; // Show the full screen layer
    this.voltarButton.classList.add("hidden"); // Hide the Voltar button
    this.precarioButton.classList.add("hidden"); // Hide the Voltar button
    event.stopPropagation(); // Stop event propagation
  }

  hideQRcode(event) {
    // If the event's target is the "Fechar" button, stop the event propagation
    if (event && event.target.id === "fecharButton") {
      event.stopPropagation();
    }

    this.qrcodeLayer.classList.remove("show");
    this.fullscreenLayer.style.display = "none"; // Hide the full screen layer
    this.voltarButton.classList.remove("hidden"); // Show the Voltar button
    this.precarioButton.classList.remove("hidden"); // Show the Voltar button
   /* this.qrcodeButton.classList.remove("active");*/
  }

  setupQRcodeTemplates() {
    this.model_A = `
          <div class="txtH2 semiBold INDIGO_TXT" style="position: absolute; top: 608px">Saiba mais, simule <BR>ou subscreva.</div>
          <div class=" txtH3 regular CGDBLUE_TXT" style="position: absolute; top: 824px">Cartões<BR><span class="bold"></span>
          </div>
          <div id="qrcodeImage" style="position: absolute; top: 900px">
          <img style="width:240px; height:240px;" src="IMG/qrcode-cgd.pt.png">
          </div>
          <div id="qrcodeFocus" class="CGDBLUE_BKG" style="position: absolute; top: 1196px"></div>
          <div class="txtH3 regular INDIGO_TXT" style="position: absolute; top: 1473px">Em alternativa, <BR>consulte<span class=" bold"><BR>cgd.pt/cartoes</span>
          </div>
          <div id="fecharButton" onclick="qrCodeManager.hideQRcode(event)" class="button B1b btMain slot1">
              <img src="IMG/voltar.svg" alt="SVG Image">
              <div>Fechar</div>
          </div>
          `;
  }
}