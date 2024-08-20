#!/usr/bin/env node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { main } from './src/main.js';

// get argv using yargs docs
const argv = yargs(hideBin(process.argv)).argv;

const { project } = argv;

if (!project) {
  throw new Error(`must pass 'project' argument`);
}

main(project);
