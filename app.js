const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SUITS",
    price: 1199,
    colors: [
      {
        code: "black",
        img: "suits.jpg",
      },
      {
        code: "brown",
        img: "suits2.webp",
      },
    ],
  },
  {
    id: 2,
    title: "LONG KURTI",
    price: 1499,
    colors: [
      {
        code: "dark blue",
        img: "long kurti.jpg",
      },
      {
        code: "blue",
        img: "long2.webp",
      },
    ],
  },
  {
    id: 3,
    title: "PARTY WEAR",
    price: 1095,
    colors: [
      {
        code: "gray",
        img: "party wear.jpg",
      },
      {
        code: " pink",
        img: "party wear2.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "DENIM",
    price: 1290,
    colors: [
      {
        code: "sky blue",
        img: "denim.jpg",
      },
      {
        code: "lightgray",
        img: "denim2.avif",
      },
    ],
  },
  {
    id: 5,
    title: "TANK TOPS",
    price: 99,
    colors: [
      {
        code: "black",
        img: "crop top.jpg",
      },
      {
        code: "purple",
        img: "hoodie.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});