# LÖVE 2D TypeScript Definition Files

![Use](https://i.imgur.com/NPfeARe.png)

[![LOVE](https://img.shields.io/badge/L%C3%96VE-11.1-EA316E.svg)](http://love2d.org/)
[![tstl](https://img.shields.io/badge/TypescriptToLua-0.13.1-blue.svg)](https://github.com/Perryvw/TypescriptToLua)
[![Build Status](https://travis-ci.org/hazzard993/love-typescript-definitions.svg?branch=master)](https://travis-ci.org/hazzard993/love-typescript-definitions)

This repository contains definition files to use with the [TypescriptToLua](https://github.com/Perryvw/TypescriptToLua) transpiler within the `include/` folder.

These definitions are for LÖVE 2D's environment.

These include:
- Definitions for LuaJIT's Lua implementation (`unpack`, `string.format`, etc)
- Definitions for LÖVE 2D (`love.graphics.draw`, `love.graphics.newImage`, etc)

See [usage](#Usage) for how you use these.

## Try the Transpiler and Definitions Online
You'll be able to see what the TypescriptToLua transpiler creates as Lua code.

This can be used in a `main.lua` file for a LÖVE 2D game or [run online](https://schellingb.github.io/LoveWebBuilder/run-code).
- [LÖVE 2D Hello World](https://bit.ly/2qB3Ljj)
- [Classes, Autocomplete and Editor Tooltips](https://bit.ly/2zEDdli)
- [Near Empty Editor](https://bit.ly/2zCUknC) for playing around

## Goal

The goal of these definitions is to make the TypeScript you write be as similar as possible to the code you write in a LÖVE 2D project.

e.g.

```ts
love.graphics.circle("fill", 0, 0, 12);     // love.graphics.circle("fill", 0, 0, 12)
```

The advantage of writing the same code in TypeScript is that:
- Source code is checked with TypeScript's strong type checking systems
    - Checks that a valid number of arguments have been supplied to a function
    - Checks that a function's arguments are of the correct types
    - Checks if a variable has been defined within the current scope
    - Checks if a module in a seperate file exists and can be imported
    - ...
- Your source code can be linted with [tslint](https://palantir.github.io/tslint/)
- Editors passively check and underline errors in your source code (depends on editor)
- JSDoc tooltips appear when hovering over elements of source code (depends on editor)

The transpiler will also allow you to use some of TypeScript's/Javascript's paradigms.

See the [Wiki](https://github.com/hazzard993/love-typescript-definitions/wiki) for more information.

## Usage
You'll need access to [npm](https://www.npmjs.com/get-npm).

**Install TypescriptToLua**

`npm install -g typescript-to-lua`

**Download the definitions**

`git clone https://github.com/hazzard993/love-typescript-definitions.git`

Or download from the [releases page](https://github.com/hazzard993/love-typescript-definitions/releases)

**Create a tsconfig.json file**

Consider the options below for the contents of the file
```js
{
    "compilerOptions": {
        "baseUrl": ".",         // For resolving require(...) paths
        "noLib": true,          // Prevents auto-complete suggestions from non-lua libraries
        "outDir": "lua"         // Output lua files to a directory named lua
    },
    "include": [

        // the definition files from this repo
        "../love-typescript-definitions/include/*.d.ts",
        
        // any file ending in ts within the current directory is targeted for transpilation
        // except d.ts files
        "*.ts",

    ],
    "luaTarget": "JIT"          // LÖVE 2D uses LuaJIT, tstl will be considerate of LuaJIT's environment
}
```

Your `tsconfig.json` file determines your compilation arguments and can influence what your chosen editor does.

**Create main.ts**

Here are some tools / editors that may be useful when editing `main.ts`
- [Typescript plugin for Sublime](https://packagecontrol.io/packages/TypeScript)
- [VS Code](https://code.visualstudio.com/)

```ts
love.draw = () => {
    love.graphics.print("Hello World", 400, 300);
}
```

**Compile your project**

`tstl -p tsconfig.json`

**Run your project**

`love.exe lua`

Or drag the lua/ directory to love.exe

## Building and Cleaning
LÖVE 2D's definitions are transpiled from the [love-api](https://github.com/love2d-community/love-api).

**Dependencies**
- [Moonscript](https://moonscript.org)
- [Lua](https://www.lua.org/download.html)

```bash
npm run         # See all npm commands
npm run init    # Prepare for build
npm run build   # Build include/love.d.ts
npm run clean   # Clean out generated files
```
