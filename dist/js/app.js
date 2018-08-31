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
            prompt : "Coloque o código QR do vídeo nesta área.",
            resultDisplayDuration:0,
            formats : "QR_CODE,PDF_417",
            orientation : "portrait",
            disableSuccessBeep: true
        }
    );
});