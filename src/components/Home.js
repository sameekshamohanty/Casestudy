import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
			<div className="home__row">
					<Product
						id="6"
						title=" Winter Wear "
						price={1499}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={5}
					/>
					<Product
						id="3"
						title=" Stationary Items"
						price={50}
						image="https://image.shutterstock.com/z/stock-vector-vector-collection-of-stationery-items-set-of-school-or-office-supplies-wide-variation-of-things-1676483650.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="Home Applience"
						price={75000}
						image="https://media.istockphoto.com/photos/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609"
						rating={3}
					/>
					<Product
						id="5"
						title="Home Theatre"
						price={125000}
						image="https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2021/8/12/home-theatre-c.jpg.transform/schema-4x3/image.jpg"
						rating={4}
					/>
				</div>
				{/* <img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primedeals/PSW_PC_1x_English_Illustration._CB422946471_.jpg"
					alt="bg"
				/> */}

				<div className="home__row">
					<Product
						id="1"
						title=" Books | Best Seller"
						price={200}
						image="https://cineuropa.org/Galleries/282/481/poster1_en_big.jpg?1457637212688"
						rating={4}
					/>
					<Product
						id="2"
						title="Dairy Products | cow milk"
						price={350}
						image="https://www.dairyfoods.com/ext/resources/DF/2020/August/df-100/GettyImages-1194287257.jpg?1597726305"
						rating={5}
					/>
					<Product
						id="7"
						title="Summer Collection | Men/Women Wear"
						price={1499}
						image="https://cdn2.vectorstock.com/i/1000x1000/37/51/men-and-women-in-fashionable-clothes-vector-9873751.jpg"
						rating={5}
					/>
					<Product
						id="6"
						title="Summer Collection | Men/Women Wear"
						price={1499}
						image="https://cdn2.vectorstock.com/i/1000x1000/37/51/men-and-women-in-fashionable-clothes-vector-9873751.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="Notebooks | Pen/Pencil/Rulers"
						price={50}
						image="https://image.shutterstock.com/z/stock-vector-vector-collection-of-stationery-items-set-of-school-or-office-supplies-wide-variation-of-things-1676483650.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="OTG | Oven | Microwave"
						price={75000}
						image="https://media.istockphoto.com/photos/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609"
						rating={3}
					/>
					<Product
						id="5"
						title="Home Theatre | T.V. | Speakers"
						price={125000}
						image="https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2021/8/12/home-theatre-c.jpg.transform/schema-4x3/image.jpg"
						rating={4}
					/>
					<Product
						id="7"
						title="Summer Collection | Men/Women Wear"
						price={1499}
						image="https://cdn2.vectorstock.com/i/1000x1000/37/51/men-and-women-in-fashionable-clothes-vector-9873751.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="6"
						title="Summer Collection | Men/Women Wear"
						price={1499}
						image="https://cdn2.vectorstock.com/i/1000x1000/37/51/men-and-women-in-fashionable-clothes-vector-9873751.jpg"
						rating={5}
					/>
					<Product
						id="7"
						title="Summer Collection | Men/Women Wear"
						price={1499}
						image="https://cdn2.vectorstock.com/i/1000x1000/37/51/men-and-women-in-fashionable-clothes-vector-9873751.jpg"
						rating={5}
					/>
					<Product
						id="6"
						title="Summer Collection | Men/Women Wear"
						price={1499}
						image="https://cdn2.vectorstock.com/i/1000x1000/37/51/men-and-women-in-fashionable-clothes-vector-9873751.jpg"
						rating={5}
					/>
					<Product
						id="7"
						title="Summer Collection | Men/Women Wear"
						price={1499}
						image="https://cdn2.vectorstock.com/i/1000x1000/37/51/men-and-women-in-fashionable-clothes-vector-9873751.jpg"
						rating={5}
					/>		
				</div>
			</div>
		</div>
	);
}

export default Home; 