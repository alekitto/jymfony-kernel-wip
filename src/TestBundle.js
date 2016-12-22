
module.exports = class TestBundle extends Jymfony.Kernel.Bundle {
    /**
     * {@inheritDoc}
     */
    build(container) {
        container.register('property_accessor', 'Jymfony.PropertyAccess.PropertyAccessor')
            .setPublic(true);
    }
};
