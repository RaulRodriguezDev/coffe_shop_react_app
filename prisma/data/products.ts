const products = [
    {
        name: "Caramel with chocolate coffee",
        price: 59.9,
        image: "cafe_01",
        categoryId: 1
    },
    {
        name: "Cold Ice Chocolate Coffee",
        price: 49.9,
        image: "cafe_02",
        categoryId: 1
    },
    {
        name: "Cold Chocolate Latte (Big)",
        price: 54.9,
        image: "cafe_03",
        categoryId: 1
    },
    {
        name: "Cold Chocolate Latte (Big)",
        price: 54.9,
        image: "cafe_04",
        categoryId: 1
    },
    {
        name: "Chocolate Milkshake (big)",
        price: 54.9,
        image: "cafe_05",
        categoryId: 1
    },
    {
        name: "Hot Mocha Coffee (Small)",
        price: 39.9,
        image: "cafe_06",
        categoryId: 1
    },
    {
        name: "Hot Mocha Coffee with Chocolate  (Big)",
        price: 59.9,
        image: "cafe_07",
        categoryId: 1
    },
    {
        name: "Hot Capuccino Coffee (Big)",
        price: 59.9,
        image: "cafe_08",
        categoryId: 1
    },
    {
        name: "Hot Mocha Coffee (Medium)",
        price: 49.9,
        image: "cafe_09",
        categoryId: 1
    },
    {
        name: "Cold Mocha Coffee with Caramel (Medium)",
        price: 49.9,
        image: "cafe_10",
        categoryId: 1
    },
    {
        name: "Cold Mocha Coffee with Chocolate (Medium)",
        price: 49.9,
        image: "cafe_11",
        categoryId: 1
    },
    {
        name: "Expresso Coffee",
        price: 29.9,
        image: "cafe_12",
        categoryId: 1
    },
    {
        name: "Capuccino Coffee with Caramel (Big)",
        price: 59.9,
        image: "cafe_13",
        categoryId: 1
    },
    {
        name: "Caramel Coffee (Big)",
        price: 59.9,
        image: "cafe_14",
        categoryId: 1
    },
    {
        name: "Chocolate Donuts (3pcs)",
        price: 39.9,
        image: "donas_01",
        categoryId: 4
    },
    {
        name: "Glazed Donuts (3pcs)",
        price: 39.9,
        image: "donas_02",
        categoryId: 4
    },
    {
        name: "Strawberry Donut",
        price: 19.9,
        image: "donas_03",
        categoryId: 4
    },
    {
        name: "Donut with Chocolate Cookie",
        price: 19.9,
        image: "donas_04",
        categoryId: 4
    },
    {
        name: "Glazed Donut with Strawberry Sparkles",
        price: 19.9,
        image: "donas_05",
        categoryId: 4
    },
    {
        name: "Glazed Donut with Chocolate",
        price: 19.9,
        image: "donas_06",
        categoryId: 4
    },
    {
        name: "Chocolate Donut with Extra Chocolate",
        price: 19.9,
        image: "donas_07",
        categoryId: 4
    },
    {
        name: "Chocolate Donuts (3pcs)",
        price: 39.9,
        image: "donas_08",
        categoryId: 4
    },
    {
        name: "Vanilla and Chocolate Donuts (3pcs)",
        price: 39.9,
        image: "donas_09",
        categoryId: 4
    },
    {
        name: "Donuts (6pcs)",
        price: 69.9,
        image: "donas_10",
        categoryId: 4
    },
    {
        name: "Donuts Variety (3pcs)",
        price: 39.9,
        image: "donas_11",
        categoryId: 4
    },
    {
        name: "Natural Donut with Chocolate",
        price: 19.9,
        image: "donas_12",
        categoryId: 4
    },
    {
        name: "Donuts with Sparkles Chocolate (3pcs)",
        price: 39.9,
        image: "donas_13",
        categoryId: 4
    },
    {
        name: "Chocolate and Coconut Donut",
        price: 69.9,
        image: "donas_14",
        categoryId: 4
    },
    {
        name: "Chocolate Cookie Pack",
        price:29.9,
        image: "galletas_01",
        categoryId: 6
    },
    {
        name: "Oatmeal and Chocolate Cookie Pack",
        price:39.9,
        image: "galletas_02",
        categoryId: 6
    },
    {
        name: "Vanilla Muffins Pack",
        price:39.9,
        image: "galletas_03",
        categoryId: 6
    },
    {
        name: "4 Oatmeal Cookie Pack",
        price:24.9,
        image: "galletas_04",
        categoryId: 6
    },
    {
        name: "Butter Cookies",
        price:39.9,
        image: "galletas_05",
        categoryId: 6
    },
    {
        name: "Fruit Flavors Cookies",
        price:39.9,
        image: "galletas_06",
        categoryId: 6
    },
    {
        name: "Simple Hamburger",
        price: 59.9,
        image: "hamburguesas_01",
        categoryId: 2
    },
    {
        name: "Chiken Hamburger",
        price: 59.9,
        image: "hamburguesas_02",
        categoryId: 2
    },
    {
        name: "Chiken and Chili Hamburger",
        price: 59.9,
        image: "hamburguesas_03",
        categoryId: 2
    },
    {
        name: "Cheese and Pickles Hamburger",
        price: 59.9,
        image: "hamburguesas_04",
        categoryId: 2
    },
    {
        name: "1/4 Pound Hamburger",
        price: 59.9,
        image: "hamburguesas_05",
        categoryId: 2
    },
    {
        name: "Double Cheese Hamburger",
        price: 69.9,
        image: "hamburguesas_06",
        categoryId: 2
    },
    {
        name: "Special HotDog",
        price: 49.9,
        image: "hamburguesas_07",
        categoryId: 2
    },
    {
        name: "2 HotDogs Pack",
        price: 69.9,
        image: "hamburguesas_08",
        categoryId: 2
    },
    {
        name: "Cheesecake (4 slices)",
        price: 69.9,
        image: "pastel_01",
        categoryId: 5
    },
    {
        name: "Especial Waffle",
        price: 49.9,
        image: "pastel_02",
        categoryId: 5
    },
    {
        name: "House Croissants",
        price: 39.9,
        image: "pastel_03",
        categoryId: 5
    },
    {
        name: "Cheesecake",
        price: 19.9,
        image: "pastel_04",
        categoryId: 5
    },
    {
        name: "Chocolate Cake",
        price: 29.9,
        image: "pastel_05",
        categoryId: 5
    },
    {
        name: "Chocolate Cake (Slice)",
        price: 19.9,
        image: "pastel_06",
        categoryId: 5
    },
    {
        name: "Double Cheese Spicy Pizza",
        price: 69.9,
        image: "pizzas_01",
        categoryId: 3
    },
    {
        name: "Ham and Cheese Pizza",
        price: 59.9,
        image: "pizzas_02",
        categoryId: 3
    },
    {
        name: "Double Cheese Pizza",
        price: 59.9,
        image: "pizzas_03",
        categoryId: 3
    },
    {
        name: "House Special Pizza",
        price: 69.9,
        image: "pizzas_04",
        categoryId: 3
    },
    {
        name: "Sausage Pizza",
        price: 49.9,
        image: "pizzas_05",
        categoryId: 3
    },
    {
        name: "Hawaian Pizza",
        price: 49.9,
        image: "pizzas_06",
        categoryId: 3
    },
    {
        name: "Bacon Pizza",
        price: 69.9,
        image: "pizzas_07",
        categoryId: 3
    },
    {
        name: "Vegetables and Cheese Pizza",
        price: 69.9,
        image: "pizzas_08",
        categoryId: 3
    },
    {
        name: "Peperoni and Cheese Pizza",
        price: 69.9,
        image: "pizzas_09",
        categoryId: 3
    },
    {
        name: "Olive and Cheese Pizza",
        price: 69.9,
        image: "pizzas_10",
        categoryId: 3
    },
    {
        name: "Ham, Mushrooms and Peperoni Pizza",
        price: 69.9,
        image: "pizzas_11",
        categoryId: 3
    }
]

export { products }