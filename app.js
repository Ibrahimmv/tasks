const products = document.getElementById("products");

const content = [
    { pic: "https://yandex.ru/images/search?text=cars&pos=6&rpt=simage&img_url=https%3A%2F%2Fi.artfile.ru%2F4168x2779_703064_%5Bwww.ArtFile.ru%5D.jpg&from=tabbar&lr=105896", name: "car1", price: `$20.000`   },
    { pic: "https://yandex.ru/images/search?text=cars&pos=6&rpt=simage&img_url=https%3A%2F%2Fi.artfile.ru%2F4168x2779_703064_%5Bwww.ArtFile.ru%5D.jpg&from=tabbar&lr=105896", name: "car2", price: `$ 20000 - $ 30000`   },
    { pic: "https://yandex.ru/images/search?text=cars&pos=6&rpt=simage&img_url=https%3A%2F%2Fi.artfile.ru%2F4168x2779_703064_%5Bwww.ArtFile.ru%5D.jpg&from=tabbar&lr=105896", name: "car3", price: `<del>$ 50.000</del> $ 25.000`   },
    { pic: "https://yandex.ru/images/search?text=cars&pos=6&rpt=simage&img_url=https%3A%2F%2Fi.artfile.ru%2F4168x2779_703064_%5Bwww.ArtFile.ru%5D.jpg&from=tabbar&lr=105896", name: "car4", price: `$ 30.000`   },
]; 

let result=""
content.forEach(function(item,index) {

    result += `

        <div class="product">
            <img src=${item.pic} alt="">
            <h3>${item.name}</h3>
            <h4>${item.price}</h4>
        </div>
    `
    
});

products.innerHTML = result;