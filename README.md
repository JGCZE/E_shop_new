## About eshop
### live demo: https://e-shop-new.vercel.app

Mock e-shop with mock items. Products can be added, removed and their quantities can be adjusted in the shopping cart. One can filter by ratings, sort by price or delivery speed. I utilized useState, useEffect, Context, and useReducer for state management and data transfer between components. The React router was used to create the Home and Cart pages. Tailwind was employed for styling, and npm Faker for generating imaginary items.

My future plans:
I intend to gradually expand this e-shop into a full-stack project.

1. Pagination
2. Improve of graphics and addition of a footer.
3. Products will be loaded from a MySQL database
4. Administrator login
5. In the admin section, you will be able to delete, add, or modify products and their prices, and more.
6. Performance optimalization
   
<strong> Preview of the home page after adding one item to the cart. </strong>
<img width="700" alt="eshop_a" src="https://github.com/JGCZE/E_shop_new/assets/97174593/f062f349-247e-4459-b25b-81805cb80dc9">
<br>

<strong> Preview of items in the cart. </strong> <br>
<img width="700" alt="eshop_b" src="https://github.com/JGCZE/E_shop_new/assets/97174593/ee680e4c-72bc-412f-a3df-799be6597480">



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
