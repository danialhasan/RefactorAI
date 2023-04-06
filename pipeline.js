/* eslint-disable no-console */
const cp = require('child_process');
// const util = require('util');

const childOptions = {
    shell: 'bash',
    stdio: 'inherit',
};

// const exec = util.promisify(cp.exec);

(async () => {
    try {
        cp.execSync('cd packages/client/ && npm run tailwind:build');
        await Promise.all([
            cp.exec('cd packages/client/ && npm run build', childOptions),
            cp.exec('cd packages/extension/ && npm run compile', childOptions),
        ]);
        cp.execSync('cd packages/extension/ && npm run dev', childOptions);
    } catch (error) {
        console.error('ERROR IN BUILD SCRIPT');
        console.error(error);
    }
})();
