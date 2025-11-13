import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
 
addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Explorando Storybook',
    brandUrl: 'https://www.linkedin.com/in/viniciusrbr/',
    brandImage: 'https://img.shields.io/badge/-viniciusrbr-blue?style=flat-square&logo=Linkedin&logoColor=white',
  })
});