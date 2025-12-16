const result = document.querySelector('.resultFetch');

//関数化
const loadNews = function () {
    fetch('./news.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            // console.log(json);
            result.innerHTML = `<p>${json.news}</p>`;
        })
        .catch(function (error) {
            console.log(error);
        });
};


loadNews();

const Btn = document.querySelector('.loadAjaxBtn');
loadAjaxBtn.addEventListener('click', function () {
    loadNews();
});
