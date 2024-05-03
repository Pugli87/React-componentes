# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Despliegue gitHub pages

1. instalar ph-pages como dependencia **npm install --save-dev gh-pages** _ó_ **npm i gh-pages -D**
2. Copiar nombre de repositorio en el archivo vite.config y en defineConfig colocamos **base: "/nombre repo/"** normalmente queda en la linea 7 debajo de plugins
3. En los scripts colocar el scripts **"deploy": "npm run build && gh-pages -d dist"** _ó_ **"deploy": "gh-pages -d dist"**
4. ejecutar los comandos **npm run build** _y_ **npm run deploy**
5. Esperar que gitHub se actualice hasta que aparezca el github-pages en activo
6. cuando se actualiza algo en el proyecto se repite el paso 4 para que se guarden los cambios en el pages
