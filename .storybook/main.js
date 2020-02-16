const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/addon-storysource'
    }
  ]
}