#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { main } from './src/main.js';
import { validateProjectName } from './src/validateProjectName/validateProjectName.js';

// get argv using yargs docs
const argv = yargs(hideBin(process.argv)).argv;

const { project } = argv;

const projectName = validateProjectName(project);

main(projectName);
