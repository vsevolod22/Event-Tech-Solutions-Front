

module.exports = {
    webpack: (config, { isServer }) => {
        // Добавление разрешения для .jsx и .tsx файлов
        config.resolve.extensions.push('.jsx', '.tsx');

        return config;
    },
};