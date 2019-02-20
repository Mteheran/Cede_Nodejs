module.exports = {
    apps: [{
        name: 'API',
        script: './.bin/www',
        instances: 1,
        autorestart: true,
        watch: true,
        restart: 3,
        max_memory_restart: '1G',
        env: {
            PORT: 3000,
            HOST: '0.0.0.0',
        },
        env_production: {
            NODE_ENV: 'production',
        },
    }],
};
