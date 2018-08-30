$(".btn-scanqrcode").click(function(){
    alert('a');
    cordova.plugins.barcodeScanner.scan(
        function(result){
            window.location.href = "'../content/"+result.text+"'";
        },
        function(error) {
            alert("Falha no carregamento. " + error);
        }
    );
});