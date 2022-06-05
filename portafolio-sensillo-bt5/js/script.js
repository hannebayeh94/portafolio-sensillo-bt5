const $porfolio = document.querySelector('.sec-portfolio-js');
const $modalImgPortfolio = document.querySelector('.img-modal-js');

$porfolio.addEventListener('click', (e) => {
     
    if (e.target.classList.contains('img-btn-modal-js')) {

        // src
        
        let urlImg = e.target.attributes[0].nodeValue;

        // add modal
        $modalImgPortfolio.src = urlImg;
        console.log(urlImg);
       
        
    }
})


