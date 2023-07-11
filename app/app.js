const categoryBtns = document.querySelectorAll('#card_catalog-element_button');
const products = document.querySelectorAll('.product');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const category = btn.dataset.category;

        products.forEach(product => {
            if (category == 'all') {
                product.style.display = 'block';
            }
            else if (product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

const burguer = document.querySelector('.toggle');
const panel = document.querySelector('.links');

burguer.addEventListener('click',function(){
   burguer.classList.toggle('rotate')

   if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 

});

