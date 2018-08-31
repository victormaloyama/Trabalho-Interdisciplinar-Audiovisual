$(".btn-scanqrcode").click(function(){
    cordova.plugins.barcodeScanner.scan(
        function(result){
            window.location.href = "content/"+result.text;
        },
        function(error) {
            alert("Falha no carregamento. " + error);
        },
        {
            preferFrontCamera : false,
            showFlipCameraButton : false,
            showTorchButton : false,
            torchOn: false,
            saveHistory: false,
            prompt : "Coloca o código QR do vídeo nessa área.",
            resultDisplayDuration: 500,
            formats : "QR_CODE,PDF_417",
            orientation : "portrait",
            disableSuccessBeep: true
        }
    );
});