import bcrypt from "bcryptjs";
const data = {
	//sample user
	users: [
		{
			name: "Dhanashri",
			email: "admin@example.com",
			password: bcrypt.hashSync("1234", 8),
			//first parameter is real password and second para is 8 is option to make hsh value using an auto sort so we not need to do manual sort for it
			isAdmin: true,
		},
		{
			name: "Surpure",
			email: "user@example.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: false,
		},
	],

	//id removed cz id automatically set by mongoodb
	products: [
		{
			name: "Nike Slim Shirt",
			category: "Shirts",
			image: "/images/p1.jpg",
			price: 120,
			countInStock: 10,
			brand: "Nike",
			rating: 4.5,
			numReviews: 10,
			description: "Cotton Blend, Button closure, Hand Wash, HIGH QUALITY - Cotton Blend, Long sleeve denim shirt for men, perfect for casual, business, make you look great and handsome",
		},
		{
			name: "Adidas Fit Shirt",
			category: "Shirts",
			image: "/images/p2.jpg",
			price: 100,
			countInStock: 20,
			brand: "Adidas",
			rating: 4.0,
			numReviews: 10,
			description: " Soft and stylish at the same time. this shirt keep you warm when you are exploring the outdoors. Quality outdoor apparel that looks great, the perfect gift for man.",
		},
		{
			name: "Lacoste Free Shirt",
			category: "Shirts",
			image: "/images/p3.jpg",
			price: 220,
			countInStock: 0,
			brand: "Lacoste",
			rating: 4.8,
			numReviews: 17,
			description: "men shirt is made of 97% cotton and 3% spandex. The material is comfortable, breathable The stitching is solid, it can come through the wash cycle without producing any bad seems or loose threads.",
		},
		{
			name: "Nike Slim Pant",
			category: "Pants",
			image: "/images/p4.jpg",
			price: 78,
			countInStock: 15,
			brand: "Nike",
			rating: 4.5,
			numReviews: 14,
			description: "100% Polyester, Imported, Machine Wash, Natural stretch fabric provides comfort that moves with you.",
		},
		{
			name: "Puma Slim Pant",
			category: "Pants",
			image: "/images/p5.jpg",
			price: 65,
			countInStock: 5,
			brand: "Puma",
			rating: 4.5,
			numReviews: 10,
			description: "73% Cotton, 25% Polyester, 2% Spandex, Imported Zipper closure, Machine Wash, These mid-rise pants feature a relaxed fit through the seat and thigh with a tapered leg.",
		},
		{
			name: "Adidas Fit Pant",
			category: "Pants",
			image: "/images/p6.jpg",
			price: 139,
			countInStock: 12,
			brand: "Adidas",
			rating: 4.5,
			numReviews: 15,
			description: "97% Cotton, 3% Spandex, Imported, Button closure, Machine Wash, Straight fit, flat front Straight leg bottom opening.",
		},
	],
};
export default data;
