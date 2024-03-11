document.addEventListener("DOMContentLoaded", function(){

    document.querySelector(".hamburger").addEventListener("click", function(){
        document.querySelector(".side-menu").classList.toggle("active-side");
    });

    // ANIMASI Animate-On-Scroll (AOS)

    // Inisialisasi Element
    const firstE = document.querySelector('#firstE');
    const secondE = document.querySelector('#secondE');

    const thirdE = document.querySelector('#thirdE');
    const fourthE = document.querySelector('#fourthE');

    
    // Buat instance dari Intersection Observer
    // Buat fungsi observer pemantau element
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            // Jika elemen masuk ke dalam viewport
            if (entry.isIntersecting) {
    
                // // Tambah animasi
                // entry.target.classList.add("animation-fadeDown")
    

                if (entry.target.id == 'firstE' || entry.target.id == 'secondE') {
                    entry.target.classList.add("animation-fadeDown");
                } 
                else if (entry.target.id == 'thirdE' || entry.target.id == 'fourthE' ){
                    entry.target.classList.add("animation-slide");
                }


                // Hentikan observasi setelah animasi dijalankan jika hanya ingin dijalankan sekali
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 }); // threshold: 0.5, Berarti observer akan dipanggil ketika setengah atau lebih dari area elemen yang dipantau masuk ke dalam viewport.
    
    
    observer.observe(firstE);
    observer.observe(secondE);

    observer.observe(thirdE);
    observer.observe(fourthE);

});

