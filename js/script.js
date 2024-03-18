document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('gridContainer');
    const detailTitle = document.getElementById('titreDetail');
    const detailTxt = document.getElementById('detailTxt');

    // Charger le fichier JSON
    fetch('details.json')
        .then(response => response.json())
        .then(data => {
            // Traiter les clics sur les images
            gridContainer.addEventListener('click', function(event) {
                if (event.target.tagName === 'IMG') {
                    const itemId = event.target.dataset.id;
                    const detail = data[itemId];
                    if (detail) {
                        // Mettre à jour le titre et le contenu dans la div de détail
                        detailTitle.textContent = "[ " + itemId.replace(/_/g, ' ') + " ]";
                        detailTxt.innerHTML = "<p>" + detail.replace(/\n/g, '</p><p>') + "</p>"; // Ajoute les paragraphes à partir du texte
                    }
                }
            });
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
});
