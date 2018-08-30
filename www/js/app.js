$(".btn-qrcode").click(function(){
    cordova.plugins.barcodeScanner.scan(
        function(result){
            window.location.href = "'../content/"+result.text+"'";
        },
        function(error) {
            alert("Falha no carregamento. " + error);
        }
    );
});