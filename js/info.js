const products = [
    {
        name: "Lenovo Legion 5 R7000",
        price: "24.900.000đ",
        image: "../assets/images/legion5.jpeg",
        info: "Cấu Hình: R7-8745H, Ram 16GB, SSD 512GB, RTX 4060 8GB, 15.6” FHD 144Hz",
        link: "../html/legion.html",
        category:{
            id:"01",
            brand:"lenovo",
            type: "laptop-gaming"
        }
    },
    {
        name: "Dell Precision 5550",
        price: "15.900.000đ",
        image: "../assets/images/Dell-Precison-5550-3.webp",
        info: "Cấu Hình: Core i7 10850H, Ram 32GB, SSD 1TB, Quadro T1000 4GB, 15.6 4K 60Hz",
        link: "#",
        category:{
            id:"02",
            brand:"dell",
            type: "worktasion"
        }
    },
    {
        name: "Lenovo IdeaPad Slim 3 (Xiaoxin 16c)",
        price: "16.800.000đ",
        image: "../assets/images/16c.png",
        info: "Cấu Hình: R7-8745H, Ram 16GB, SSD 512GB, Radeon 780M, 15.6” FHD 60Hz",
        link: "#",
        category:{
            id:"03",
            brand:"lenovo",
            type: "laptop"
        }

    },
    {
        name: "ROG Zephyrus G14 2025",
        price: "55.900.000đ",
        image: "../assets/images/rog-zep-g14-2025.png",
        info: "Cấu Hình:  Ryzen AI 9 HX370, Ram 32GB, SSD 512GB, RTX 5060 8GB, 14” 3K 120Hz",
        link: "#",
        category:{
            id:"04",
            brand:"asus",
            type: "laptop-gaming"
        }
    }
]

function createItem(obj) {
    const productList = document.getElementById("product-list")
    productList.innerHTML += `
    <div class ="col product-item">
				<div class="card ">
					<div class=" ratio ratio-1x1 product-image">
						<img src= "${obj.image}" alt="${obj.name}" class="card-img-top object-fit-cover">
					</div>
					<!-- info product -->
					<div class="card-body product-info">
						<h4 class="card title">${obj.name}</h4>
						<h6 class="text-danger">${obj.price}</h6>
						<p>${obj.info}</p>
						<a href="${obj.link}" class="btn btn-primary">Chi Tiết</a>
					</div>
	            </div>
    </div>`;
}

function AllItem (objArray) {
    let i = 0;
    while (i<objArray.length) {
        createItem(objArray[i]);
        i++;
    }
} 

function createItemRecommended (obj) {
    const productList = document.getElementById("Recommended")
    productList.innerHTML   += `
    <div class="col product-item">
            <div class="card">
                <div class="ratio ratio-1x1 product-image">
                    <img src="${obj.image}" alt="${obj.name}" class="card-img-top object-fit-cover">
                </div>

                <div class="card-body product-info">
                    <h4 class="card-title">${obj.name}</h4>
                    <h6 class="text-danger">${obj.price}</h6>
                    <a href="${obj.link}" class="btn btn-primary">Chi Tiết</a>
                </div>
            </div>
    </div>`;
}

// function getBrand(name) {
//     return name.split(" ")[0].toLowerCase();
// }

function recommendByBrand(currentProduct) {
    const currentBrand = currentProduct.category.brand.toLowerCase();
    const currentType = currentProduct.category.type.toLowerCase();

    const recommended = products.filter(products =>
        products.category.brand.toLowerCase() === currentBrand || 
        products.category.type.toLowerCase() == currentType
    );

    document.getElementById("Recommended").innerHTML = "";

    recommended.forEach(products => { 
        createItemRecommended(products);
    });
}
