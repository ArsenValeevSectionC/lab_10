$(document).ready(function () {
    function fetchImages(query) {
        const apiKey = '42901061-a3eededc57e9ac223b2a4c87e';
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&per_page=9`;

        $.ajax({
            url: apiUrl,
            success: function (data) {
                $('#gallery').empty();
                $('#carousel1').empty();
                $('#carousel1').append(`
                    <div class="carousel-item active">
                        <img src="${data.hits[0].largeImageURL}" class="d-block w-100 rounded" alt="${query}">
                    </div>
                    `);
                console.log(1);
                data.hits.forEach(function (image) {
                    $('#gallery').append(`
                    <div class="card m-2" style="width: 18rem;">
                    <div class="image">
                        <img src="${image.largeImageURL}" class="card-img-top" alt="${query}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${query}</h5>
                        <a href="${image.largeImageURL}" class="btn btn-primary">Go to big image</a>
                    </div>
                    </div>
                    `);
                    $('#carousel1').append(`
                    <div class="carousel-item">
                        <img src="${image.largeImageURL}" class="d-block w-100" alt="${query}">
                    </div>
                    `);
                });
            }
        });
    }

    fetchImages('apple');

    $('#SearchButton').click(function () {
        let query = $('#searchInput').val().trim();
        console.log(query);
        if (query !== '') {
            fetchImages(query);
        }
    });
});


