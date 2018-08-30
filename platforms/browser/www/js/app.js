$(".btn-qrcode").click(function(){
    cordova.plugins.barcodeScanner.scan(function(resultado){
        
    });
})  