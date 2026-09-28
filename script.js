document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // MOBILE MENU
    // =========================

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
        });

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mainNav.classList.remove("active");
            });
        });
    }


    // =========================
    // GALLERY LIGHTBOX
    // =========================

    const images = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeButton = document.getElementById("lightboxClose");

    if (lightbox && lightboxImage && closeButton) {

        images.forEach(function (image) {

            image.addEventListener("click", function () {
                lightboxImage.src = image.src;
                lightbox.style.display = "flex";
            });

        });

        closeButton.addEventListener("click", function () {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }

        });

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                lightbox.style.display = "none";
            }

        });
    }


    // =========================
    // GALLERY AUTO SLIDESHOW
    // 4 PHOTOS AT A TIME
    // =========================

    const galleryItems = document.querySelectorAll(".gallery-item");

    if (galleryItems.length >= 4) {

        // सभी original photos को save करना
        const galleryData = [];

        galleryItems.forEach(function (item) {

            const image = item.querySelector("img");

            let captionElement = item.querySelector("p");

            if (!captionElement) {
                captionElement = item.querySelector("h3");
            }

            if (!captionElement) {
                captionElement = item.querySelector("h4");
            }

            galleryData.push({
                image: image ? image.src : "",
                caption: captionElement ? captionElement.textContent : ""
            });

        });


        // सिर्फ 4 gallery boxes दिखेंगे
        galleryItems.forEach(function (item, index) {

            if (index < 4) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });


        let currentIndex = 0;


        // =========================
        // 4 PHOTOS SHOW FUNCTION
        // =========================

        function showFourPhotos() {

            for (let i = 0; i < 4; i++) {

                const galleryItem = galleryItems[i];

                const image =
                    galleryItem.querySelector("img");

                let captionElement =
                    galleryItem.querySelector("p");

                if (!captionElement) {
                    captionElement =
                        galleryItem.querySelector("h3");
                }

                if (!captionElement) {
                    captionElement =
                        galleryItem.querySelector("h4");
                }


                // Photo number
                const photoIndex =
                    (currentIndex + i) % galleryData.length;


                // Image change
                if (image && galleryData[photoIndex].image) {

                    image.src =
                        galleryData[photoIndex].image;

                }


                // Caption change
                if (
                    captionElement &&
                    galleryData[photoIndex].caption
                ) {

                    captionElement.textContent =
                        galleryData[photoIndex].caption;

                }

            }

        }


        // शुरुआत में पहली 4 photos
        showFourPhotos();


        // =========================
        // EVERY 3 SECONDS CHANGE
        // =========================

        setInterval(function () {

            currentIndex++;

            if (currentIndex >= galleryData.length) {
                currentIndex = 0;
            }

            showFourPhotos();

        }, 3000);

    }


    // =========================
    // BACK TO TOP
    // =========================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    // =========================
    // PHOTOGRAPHY POPUP
    // =========================

    const photographyCard =
        document.getElementById("photographyCard");

    const photographyPopup =
        document.getElementById("photographyPopup");

    const closePhotography =
        document.getElementById("closePhotography");


    if (
        photographyCard &&
        photographyPopup &&
        closePhotography
    ) {

        photographyCard.addEventListener("click", function () {

            photographyPopup.style.display = "flex";

        });


        closePhotography.addEventListener("click", function () {

            photographyPopup.style.display = "none";

        });


        photographyPopup.addEventListener("click", function (event) {

            if (event.target === photographyPopup) {

                photographyPopup.style.display = "none";

            }

        });

    }


    // =========================
    // VIDEOGRAPHY POPUP
    // =========================

    const videographyCard =
        document.getElementById("videographyCard");

    const videographyPopup =
        document.getElementById("videographyPopup");

    const closeVideography =
        document.getElementById("closeVideography");


    if (
        videographyCard &&
        videographyPopup &&
        closeVideography
    ) {

        videographyCard.addEventListener("click", function () {

            videographyPopup.style.display = "flex";

        });


        closeVideography.addEventListener("click", function () {

            videographyPopup.style.display = "none";

        });


        videographyPopup.addEventListener("click", function (event) {

            if (event.target === videographyPopup) {

                videographyPopup.style.display = "none";

            }

        });

    }


    // =========================
    // PHOTO PRINTING & CUSTOM FRAMES POPUP
    // =========================

    const framesCard =
        document.getElementById("framesCard");

    const framesPopup =
        document.getElementById("framesPopup");

    const closeFrames =
        document.getElementById("closeFrames");


    if (
        framesCard &&
        framesPopup &&
        closeFrames
    ) {

        framesCard.addEventListener("click", function () {

            framesPopup.style.display = "flex";

        });


        closeFrames.addEventListener("click", function () {

            framesPopup.style.display = "none";

        });


        framesPopup.addEventListener("click", function (event) {

            if (event.target === framesPopup) {

                framesPopup.style.display = "none";

            }

        });

    }


    // =========================
    // WEDDING SERVICES POPUP
    // =========================

    const weddingCard =
        document.getElementById("weddingCard");

    const weddingPopup =
        document.getElementById("weddingPopup");

    const closeWedding =
        document.getElementById("closeWedding");


    if (
        weddingCard &&
        weddingPopup &&
        closeWedding
    ) {

        weddingCard.addEventListener("click", function () {

            weddingPopup.style.display = "flex";

        });


        closeWedding.addEventListener("click", function () {

            weddingPopup.style.display = "none";

        });


        weddingPopup.addEventListener("click", function (event) {

            if (event.target === weddingPopup) {

                weddingPopup.style.display = "none";

            }

        });

    }


    // =========================
    // LIVE TELECAST POPUP
    // =========================

    const liveCard =
        document.getElementById("liveCard");

    const livePopup =
        document.getElementById("livePopup");

    const closeLive =
        document.getElementById("closeLive");


    if (
        liveCard &&
        livePopup &&
        closeLive
    ) {

        liveCard.addEventListener("click", function () {

            livePopup.style.display = "flex";

        });


        closeLive.addEventListener("click", function () {

            livePopup.style.display = "none";

        });


        livePopup.addEventListener("click", function (event) {

            if (event.target === livePopup) {

                livePopup.style.display = "none";

            }

        });

    }


    // =========================
    // MOBILE REPAIR POPUP
    // =========================

    const mobileRepairCard =
        document.getElementById("mobileRepairCard");

    const mobileRepairPopup =
        document.getElementById("mobileRepairPopup");

    const closeMobileRepair =
        document.getElementById("closeMobileRepair");


    if (
        mobileRepairCard &&
        mobileRepairPopup &&
        closeMobileRepair
    ) {

        mobileRepairCard.addEventListener("click", function () {

            mobileRepairPopup.style.display = "flex";

        });


        closeMobileRepair.addEventListener("click", function () {

            mobileRepairPopup.style.display = "none";

        });


        mobileRepairPopup.addEventListener("click", function (event) {

            if (event.target === mobileRepairPopup) {

                mobileRepairPopup.style.display = "none";

            }

        });

    }

});


// =========================
// WHATSAPP BOOKING
// =========================

function sendBookingToWhatsApp() {

    const name =
        document.getElementById("bookingName").value.trim();

    const phone =
        document.getElementById("bookingPhone").value.trim();

    const service =
        document.getElementById("bookingService").value;

    const message =
        document.getElementById("bookingMessage").value.trim();


    if (!name || !phone || !service) {

        alert(
            "Please fill Name, Mobile Number and Service."
        );

        return;
    }


    const whatsappMessage =
        "📋 New Booking Request\n\n" +
        "👤 Name: " + name + "\n" +
        "📱 Mobile: " + phone + "\n" +
        "🛠️ Service: " + service + "\n" +
        "📝 Requirement: " +
        (message || "Not provided");


    const whatsappURL =
        "https://wa.me/9779822064268?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(whatsappURL, "_blank");

}