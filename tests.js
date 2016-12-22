require('jymfony-autoloader');

let b = new Jymfony.Kernel.TestKernel('dev', true);
b.boot();

console.log(b);

// require('mocha/bin/_mocha');
