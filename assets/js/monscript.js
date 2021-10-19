window.onload = function() {
  //Je récupères les éléments de la classe menuitem
  var menuitem = document.getElementsByClassName('menuitem');
  //J'organise mes éléments dans un tableau
  var menuitems = [].slice.call(menuitem);
  //Initialisation de l'index courant
  var currentIdx = 0;
  //Initialisation de l'index -1
  var oldIdx = 0;

  //je parcours mon tableau d'items menuitem
  menuitems.forEach(function (item, idx) {
    //J'abonne mon item courant a un listeneur (j'écoute les événements clicks)
    item.addEventListener('click', function () {
      //Je mémorise l'index courant
      currentIdx = idx;
      //J'applique la classe active de bootsrap a mon item courant
      item.classList.add("active");
      //Retire la classe active de l'ancien item cliqué
      if(oldIdx !== idx) {
        menuitems[oldIdx].classList.remove("active");
      }
      //je mémorise l'item selectionner pour plus tard
      oldIdx = currentIdx;
    });
  });
}