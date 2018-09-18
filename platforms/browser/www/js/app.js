$(".btn-scanqrcode").click(scannerInit);

$(document).bind("swipe", function () {
    $.event.special.swipe.horizontalDistanceThreshold = 180;
    scannerInit();
});

function scannerInit(){
    cordova.plugins.barcodeScanner.scan(
        function(result) {
            if (result==true) {
                window.location.href = "content/" + result.text;
            } else {
                window.location.href = "#"
            }
        },
        function(error) {
            alert("Falha no carregamento. " + error);
        }, {
            preferFrontCamera: false,
            showFlipCameraButton: false,
            showTorchButton: false,
            torchOn: false,
            saveHistory: true,
            prompt: "Coloque o código QR do vídeo nesta área.",
            resultDisplayDuration: 0,
            formats: "QR_CODE,PDF_417",
            orientation: "portrait",
            disableSuccessBeep: true
        }
    );
}