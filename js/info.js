const products = [
    {
        name: "Lenovo Legion 5 R7000",
        price: "24.900.000đ",
        image: "../assets/images/legion5.jpeg",
        info: "Cấu Hình: R7-8745H, Ram 16GB, SSD 512GB, RTX 4060 8GB, 15.6” FHD 144Hz",
        link: "#"
    },
    {
        name: "Dell Precision 5550",
        price: "15.900.000đ",
        image: "../assets/images/Dell-Precison-5550-3.webp",
        info: "Cấu Hình: Core i7 10850H, Ram 32GB, SSD 1TB, Quadro T1000 4GB, 15.6 4K 60Hz",
        link: "#"
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
						<a href="${obj.link}" class="btn btn-primary">Còn hàng</a>
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