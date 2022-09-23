# E-Commerce Site Back-End
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
## Description
This is the backend for an e-commerce site. It has a node.js server, express.js API, MySQL database, and sequelize ORM. 
## Table of Contents
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact)


## Usage
1. Clone the repo: https://github.com/jroller33/E-Commerce-Site.git
2. Create a .env file in the main directory,, put your mysql credentials inside it in this format:
```
DB_NAME='ecommerce_db'
DB_USER='username'
DB_PASSWORD='password'

```
3. Run:
    - node: `npm i`   
    - mysql: `SOURCE ./db/schema.sql`   
    - node: `npm run seed`   
    - node: `node server.js`
4. Server should be listening on http://localhost:3001/
5. Open [Insomnia](https://insomnia.rest/) (or download, install it)
6. Test the following API Routes:
    
    - GET /api/products
    - GET /api/products/:id
    - POST /api/products
    - PUT /api/products/:id
    - DELETE /api/products/:id

    - GET /api/categories
    - GET /api/categories/:id
    - POST /api/categories
    - PUT /api/categories/:id
    - DELETE /api/categories/:id

    - GET /api/tags
    - GET /api/tags/:id
    - POST /api/tags
    - PUT /api/tags/:id
    - DELETE /api/tags/:id
```
    Req body for POST /api/products, PUT /api/products/:id 
        {
            "product_name": "Test Product",
            "price": 100.00,
            "stock": 5,
            "tagIds": [1, 2, 3, 4]
        }

    Req body for POST /api/categories, PUT /api/categories/:id 
        {
            "category_name": "Test Category"
        }

    Req body for POST /api/tags, PUT /api/tags/:id
        {
            "tag_name": "New tag"
        }
```
## Demo Video
https://youtu.be/WwZyolK3yYc

## Contribution
You can contribute [here](https://github.com/jroller33/E-Commerce-Site).


## License
This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md).

## Contact
[GitHub](https://github.com/jroller33)

