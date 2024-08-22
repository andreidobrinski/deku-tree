# Deku Tree

🌳 A CLI tool to help with conventional git branch names

## Purpose

This package was built on the idea that some projects prefer to keep consistent git branch names.

Instead of remembering and manually entering the branch name to conform to the pattern, Deku Tree uses CLI prompts to produce a standardized branch name that then gets passed to a git branch command.

Use it when going alone would otherwise be dangerous!

## How it works

Branch names are produced with the following format, with an example below:

```
${type}/${project}-${ticketNumber}-${description}
feature/PROJ-123-add-the-thing
```

To break this down:

- `type` is the branch type, chosen from an array of `bug`, `feature`, or `techdebt`
- `project` is your project's name, passed into the command as part of the script
- `ticketNumber` is the ticket number, prompted by a text input
- `description` is the ticket description, prompted by a text input and result will be kebab-cased

Once the branch string is concatenated, it gets passed to a `git checkout -b` command, and the process exits with the user on the new git branch.

## Installation

```
npm i -D deku-tree
```

## Usage

1. In your `package.json`, inside of `scripts` add `"branch": "deku-tree --project PROJ"`, where `PROJ` is your alphanumeric project name
2. Run the command from the terminal with `npm run branch`
3. Enter the prompts and the process will create and checkout your new git branch

Happy branching! 🌳
