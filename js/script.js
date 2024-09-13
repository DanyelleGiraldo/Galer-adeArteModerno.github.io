function explorar() {
    window.location.href = "#colecciones";
}


function openModal(title, artist, description, imageUrl) {
    document.getElementById('artTitle').innerText = title;
    document.getElementById('artArtist').innerText = artist;
    document.getElementById('artDescription').innerText = description;
    document.getElementById('artImage').src = imageUrl;
    document.getElementById('artModal').style.display = 'block';
}


function closeModal() {
    document.getElementById('artModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('artModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function openNewsModal(title, date, description, imgSrc) {
    document.getElementById('newsTitle').innerText = title;
    document.getElementById('newsDate').innerText = date;
    document.getElementById('newsDescription').innerText = description;
    document.getElementById('newsImage').src = imgSrc;
    document.getElementById('newsModal').style.display = 'block';
}

function closeNewsModal() {
    document.getElementById('newsModal').style.display = 'none';
}

window.onclick = function(event) {
    const artModal = document.getElementById('artModal');
    const newsModal = document.getElementById('newsModal');
    if (event.target == artModal) {
        artModal.style.display = 'none';
    } else if (event.target == newsModal) {
        newsModal.style.display = 'none';
    }
}

function openEventModal(title, artist, date, description, imageUrl) {
    document.getElementById('eventTitle').innerText = title;
    document.getElementById('eventArtist').innerText = 'Artista: ' + artist;
    document.getElementById('eventDate').innerText = 'Fecha: ' + date;
    document.getElementById('eventDescription').innerText = description;
    document.getElementById('eventImage').src = imageUrl;
    document.getElementById('eventModal').style.display = 'block';
}

function closeEventModal() {
    document.getElementById('eventModal').style.display = 'none';
}


