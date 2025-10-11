function tampilKonten(item) {
    const konten = document.getElementById('konten');

    // Jika tombol Lokasi diklik
    if (item === 'gambar4.jpg') {
        konten.innerHTML = `
            <div class="lokasi-container">
                <h2>Lokasi Kami 📍</h2>
                <p>Klik gambar di bawah untuk membuka Google Maps.</p>
                <img src="gambar4.jpg" alt="Lokasi" class="lokasi-img" onclick="bukaMaps()">
            </div>
        `;
    } 
    // Jika tombol lain (gambar biasa)
    else {
        konten.innerHTML = `
            <img src="${item}" alt="Gambar Konten" class="full-img">
        `;
    }
}

function bukaMaps() {
    // Ganti URL sesuai lokasi restoran kamu
    window.open('https://www.google.com/maps/place/Medan', '_blank');
}