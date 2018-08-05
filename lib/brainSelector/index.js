
async function brainSelector(brains, input) {
    if (input.matches(/^plugin (update|search|install)/)) {
        return 'manager';
    }

    throw new Error('No input for manager.');
}

module.exports = brainSelector;
