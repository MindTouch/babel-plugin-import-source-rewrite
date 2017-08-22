/* eslint-env node */
module.exports = () => {
    return {
        visitor: {
            ImportDeclaration(path, state) {
                let sourceValue = path.node.source.value;
                const sourceValueOpt = state.opts.sourceValue;
                if(sourceValueOpt) {
                    if(typeof sourceValueOpt === 'function') {
                        sourceValue = sourceValueOpt(sourceValue);
                    } else if(typeof sourceValueOpt === 'string') {
                        sourceValue = sourceValueOpt;
                    }
                }
                path.node.source.value = sourceValue;
            }
        }
    };
};
