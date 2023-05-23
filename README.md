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


<h2>build with rollup.config.js</h2>
some time using config file is easier

```

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs'
	}
};

```

and to invoke it simple use

```

   npm run build-with-config

```

remark - this is working is you add the following to package.json

```

  "type": "module",

```

<h2>invoke main.js without bundle</h2>

this is possible provided you will import using .js i.e. import {sum} from './utils.js'
not import {sum} from './utils'

<p>and add the following to package.json</p>

```

  "type": "module",

```

than invoke 

```

npm run dev

```
