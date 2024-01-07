let mysql = require("mysql2");
let express = require("express");
let app = express();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let connection = mysql.createConnection({
	host: "localhost",
	user: "ousman",
	password: "123456789",
	database: "apple_react",
});

connection.connect((err) => {
	if (err) {
		console.error("Error connecting to MySQL:", err);
		return;
	}
	console.log("MySQL is Connected");
});

app.use(express.json());

// app.get("/install", (req, res) => {
let product = `
    CREATE TABLE IF NOT EXISTS product (
      product_id INT AUTO_INCREMENT PRIMARY KEY,
      product_url VARCHAR(255),
      product_name VARCHAR(255)
    );
  `;

let ProductDescription = `
    CREATE TABLE IF NOT EXISTS ProductDescription (
      description_id INT AUTO_INCREMENT PRIMARY KEY, 
	  product_id INT ,  
      product_brief_description VARCHAR(255),
      product_description VARCHAR(255),
      product_img VARCHAR(255),
      product_link VARCHAR(255),
      FOREIGN KEY (product_id) REFERENCES product(product_id)
    );
  `;

let ProductPrice = `
    CREATE TABLE IF NOT EXISTS ProductPrice (
      price_id INT AUTO_INCREMENT PRIMARY KEY,
	  product_id INT, 
      starting_price INT,
      price_range INT,
      FOREIGN KEY (product_id) REFERENCES product(product_id)
    );
  `;

let user = `
CREATE TABLE IF NOT EXISTS user (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(255),
  user_password VARCHAR(255)
);`;

let oreder_of_product = `
CREATE TABLE IF NOT EXISTS \`oreder_of_product\` (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  product_id INT,
  FOREIGN KEY (product_id) REFERENCES product(product_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
);`;

// apple table
connection.query(product, (err, results) => {
	if (err) {
		console.log("Error product Table creating the table:", err.message);
	} else {
		console.log("product Table created successfully");
	}
});
connection.query(ProductDescription, (err, results) => {
	if (err) {
		console.log(
			"Error product-description Table creating the table:",
			err.message
		);
	} else {
		console.log("product description Table created successfully");
	}
});
connection.query(ProductPrice, (err, results) => {
	if (err) {
		console.log("Error price Table creating the table:", err.message);
	} else {
		console.log("product price Table created successfully");
	}
});
connection.query(user, (err, results) => {
	if (err) {
		console.log("Error user Table creating the table:", err.message);
	} else {
		console.log("user Table created successfully");
	}
});
connection.query(oreder_of_product, (err, results) => {
	if (err) {
		console.log("Error order Table creating the table:", err.message);
	} else {
		console.log("order Table created successfully");
	}
});

// res.end("<h1>Tables are Successfully Created</h1>");
// });

const bcrypt = require("bcrypt");

// sign up table
let createLoginTable = `CREATE TABLE IF NOT EXISTS login (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255)
);`;

connection.query(createLoginTable, (err, results) => {
	if (err) {
		console.log("Error creating login table:", err.message);
	} else {
		console.log("Login table created successfully");
	}
});

// Register new user
// app.post("/signup", async (req, res) => {
// 	let { user_name, email, password } = req.body;

// 	// Hash the password
// 	const saltRounds = 10;
// 	const passwordHash = await bcrypt.hash(password, saltRounds);

// 	let insertUserQuery =
// 		"INSERT INTO login (user_name, email, password_hash) VALUES (?, ?, ?)";

// 	connection.query(
// 		insertUserQuery,
// 		[user_name, email, passwordHash],
// 		(error, result) => {
// 			if (error) {
// 				console.error(error);
// 				res.status(500).send("Internal Server Error");
// 			} else {
// 				res.status(200).send("User registered successfully");
// 			}
// 		}
// 	);
// });

app.post("/signup", async (req, res) => {
	let { user_name, email, password } = req.body;

	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	let checkEmail = "SELECT * FROM login WHERE email = ?";
	connection.query(checkEmail, [email], (error, results) => {
		if (error) {
			console.error(error);
			
			return;
		}

		if (results.length > 0) {
			res.status(400).send("Email already in use");
		} else {
			let insertDatas =
				"INSERT INTO login (user_name, email, password_hash) VALUES (?, ?, ?)";
			connection.query(
				insertDatas,
				[user_name, email, passwordHash],
				(error, result) => {
					if (error) {
						console.error(error.message);
						
					} 
				}
			);
		}
	});
});

// Login form
app.post("/login", async (req, res) => {
	let { user_name, password } = req.body;

	let getUser =
		"SELECT user_id, user_name, email, password_hash FROM login WHERE user_name = ?";

	connection.query(getUser, [user_name], async (error, results) => {
		if (error) {
			console.error(error);
		
			return;
		}

		if (results.length === 0) {
			res.send("User not found");
			return;
		}

		const user = results[0];

		const passwordMatch = await bcrypt.compare(password, user.password_hash);

		if (passwordMatch) {
			res.send("Login successful");
		} else {
			res.send("Invalid password");
		}
	});
});

// === data submit to apple web site

app.post("/form", (req, res) => {
	let {
		product_name,
		product_url,
		product_brief_description,
		product_description,
		product_img,
		product_link,
		user_name,
		user_password,
		starting_price,
		price_range,
	} = req.body;

	let checkProductName =
		"SELECT product_id FROM product WHERE product_name = ?";

	connection.query(checkProductName, [product_name], (error, results) => {
		if (error) {
			console.error(error);
			res.status(500).send("Internal Server Error");
			return;
		}

		if (results.length !== 0) {
			console.log("Product with the same name already exists");
			res.status(400).send("Product with the same name already exists");
		} else {
			let insertProductQuery =
				"INSERT INTO product (product_name, product_url) VALUES (?, ?)";

			connection.query(
				insertProductQuery,
				[product_name, product_url],
				(error, productResults) => {
					if (error) {
						console.error(error);
						res.status(500).send("Internal Server Error");
						return;
					}

					let productID = productResults.insertId;

					let insertProductDescriptionQuery =
						"INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)";

					connection.query(
						insertProductDescriptionQuery,
						[
							productID,
							product_brief_description,
							product_description,
							product_img,
							product_link,
						],
						(error, descriptionResults) => {
							if (error) {
								console.error(error);
								res.status(500).send("Internal Server Error");
								return;
							}

							// Insert user data
							let insertUserQuery =
								"INSERT INTO user (user_name, user_password) VALUES (?, ?)";
							connection.query(
								insertUserQuery,
								[user_name, user_password],
								(error, userResult) => {
									if (error) {
										console.error(error.message);
										res.status(500).send("Internal Server Error");
										return;
									}

									let userId = userResult.insertId;

									// Insert order data
									let insertOrderQuery =
										"INSERT INTO oreder_of_product (user_id, product_id) VALUES (?, ?)";
									connection.query(
										insertOrderQuery,
										[userId, productID],
										(error, priceResults) => {
											if (error) {
												console.error(error);
												res.status(500).send("Internal Server Error");
												return;
											}

											// Insert product price data
											let insertProductPriceQuery =
												"INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)";
											connection.query(
												insertProductPriceQuery,
												[productID, starting_price, price_range],
												(error, priceResults) => {
													if (error) {
														console.error(error);
														res.status(500).send("Internal Server Error");
														return;
													}

													res.status(200).send("Data inserted successfully");
												}
											);
										}
									);
								}
							);
						}
					);
				}
			);
		}
	});
});

// Handle GET request

app.get("/data", (req, res) => {
	const allData = `
    SELECT
    
      product.product_name,
      product.product_url,
      ProductDescription.product_brief_description,
      ProductDescription.product_description,
      ProductDescription.product_img,
      ProductDescription.product_link,
      ProductPrice.starting_price,
      ProductPrice.price_range,
      user.user_name
    FROM
      product
    INNER JOIN ProductDescription ON product.product_id = ProductDescription.product_id
    INNER JOIN ProductPrice ON product.product_id = ProductPrice.product_id
    INNER JOIN oreder_of_product ON product.product_id = oreder_of_product.product_id
    INNER JOIN user ON oreder_of_product.user_id = user.user_id
  `;

	connection.query(allData, (error, results) => {
		if (error) {
			console.error("Error fetching data:", error);
			res.status(500).json({ error: "Internal Server Error" });
			return;
		}

		res.json(results);
	});
});

app.listen(5000, () => {
	console.log("Server is Connected on port 5000");
});
