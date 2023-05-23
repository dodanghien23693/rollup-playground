<h2>Motivation</h2>
Experiment with rollup. in particular create one file from few and also exclude.

<h2>Setup</h2>
According to the <a href='https://rollupjs.org/introduction/#installation'>official docs</a> it is recommended to install rollup globally

```
npm install --global rollup

```

<h2>build script</h2>
The following take all the files that main.js depend on and create using CommonJS module ('cjs') format a single file - dist/bundle.js ready to run for node application 

```

"build": "rollup src/main.js -o dist/bundle.js -f cjs ",

```

<h2>start script</h2>

```
"start": "node dist/bundle.js"

```

note that running node src/main.js will fail with an error 'Cannot use import statement outside a module'