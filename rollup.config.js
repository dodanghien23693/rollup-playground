export default {
	input: 'src/main.js',
	output: [{
		file: 'dist/bundle.esm.js',
		format: 'esm'
	},
	{
		file: 'dist/bundle.cjs.js',
		format: 'cjs'
	},
	{
		file: 'dist/bundle.iife.js',
		format: 'iife'
	},
	{
		file: 'dist/bundle.amd.js',
		format: 'amd'
	},
],
	external: ['dayjs']
};