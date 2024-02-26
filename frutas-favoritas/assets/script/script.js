document.getElementById("btnAleatorio").addEventListener("click", function(){

    document.getElementById("contenedor").innerHTML = "";

    // alert("Hola mundo");

    var arregloComidaFav = [1,2,3,4,5];

    for (var i = arregloComidaFav.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arregloComidaFav[i];
        arregloComidaFav[i] = arregloComidaFav[j];
        arregloComidaFav[j] = temp;
      }

    for(let i = 0; i < arregloComidaFav.length; i++){
        document.getElementById("contenedor").innerHTML += `
        <img src="assets/img/fruta-${arregloComidaFav[i]}.png" alt="fruta-1" style="width: 20%;">`
    }

    console.log(arregloComidaFav);


});