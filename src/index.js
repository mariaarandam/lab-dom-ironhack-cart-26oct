// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  // Iteration 1

  // Escribid con vuestras palabras lo que entendeis que teneis que hacer a partir de los Steps de la Iteration 1.

  // 1. Crear dues variables noves (preu, quantitat)
  const price = +product.querySelector('.price span').textContent;
  console.log (price)

  // 2. Recollir els valors d'aquestes variables
  const quantity  = +product.querySelector('.quantity input').value;
  console.log (quantity)

  // 3. Calcular el subtotal s'aquestes variables
  let subtotal = price * quantity;

  // 4. Recollir aquest subtotal
  product.querySelector('.subtotal span').textContent = subtotal;

  // 5. Calcular el subtotal d'aquest producte i mostrar-lo
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
  //... your code goes here

    // 1. Actualitzar el subtotal de cada producte que creem
    // usa adecuadamente document.querySelectorAll para recuperar todos los productos. selector .product
    const products = document.querySelectorAll('.product');
    console.log(products);

    // 2. Para cada producto, tenemos que invocar la función updateSubtotal

    // acumular el subtotal de cada producto
    let total = 0;

    products.forEach(function (p) {
      // tenemos que invocar la función updateSubtotal y pasarle como parámetro el producto p
      // COMPLETAR 1 linea
      total = total + updateSubtotal(p); // MODIFICAR
    });
    // 3. Afegir un altre producte al .html


  // ITERATION 3
  //... your code goes here
  // Tenemos que actualizar el nodo del DOM adecuado con el valor de la variable total
  // AÑADIR UNA LINEA DE CODIGO
  document.querySelector('#total-value span').textContent = total;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
