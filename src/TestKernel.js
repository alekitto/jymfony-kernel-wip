const Kernel = Jymfony.Kernel.Kernel;

module.exports = class TestKernel extends Kernel {
    registerBundles() {
        return [
            new Jymfony.Kernel.TestBundle(),
        ];
    }
};
