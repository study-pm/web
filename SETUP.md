
# Setup

- [Overview](#overview)
  - [About this file](#about-this-file)
- [Prerequisites](#prerequisites)
  - [Git](#git)
    - [Linux](#linux)
    - [Windows](#windows)
      - [Using installer](#using-installer)
      - [Using winget tool](#using-winget-tool)
- [Fetch code](#fetch-code)
- [Setup New project](#setup-new-project)

## Overview

### About this file
This file provides detailed setup instructions for developers and maintainers, such as fetching the source code, managing the dependencies, setting up environments, build generation, running tests etc.

> **Note**: Any dependencies added to this project (or modifying it) which affect the running of the code in this git repository must be listed in this file. All developers must ensure that the instructions mentioned in this file are sufficient to enable a new developer to obtain an executable/runnable/working copy of the lastest code in this repository, without involvement from any other human assistance.

## Prerequisites
Before fetching and installing the project you must have the appropriate working environment. The project can be operated on Linux or Windows systems and requires some special software.

### Git
Git is necessary to fetch, commit and deliver the source code. Detailed setup instructions are layed down on the [official git site](https://git-scm.com/downloads).

#### Linux
It is easiest to install Git on Linux using the preferred package manager of your Linux distribution. Go https://git-scm.com/download/linux and follow the setup instructions.

For the latest stable version for your release of Debian/Ubuntu
```
# apt-get install git
```
For Ubuntu, this PPA provides the latest stable upstream Git version
```
# add-apt-repository ppa:git-core/ppa # apt update; apt install git
```

To check the git version use any of the following commands:
- `git --version`
- `git -v`

#### Windows
Follow the setup instructions on https://git-scm.com/download/win.

##### Using installer
You can download git for Windows from installer from https://git-scm.com/download/win. Choose a compatible version. We recommend using Git Bash standalone for Windows.

##### Using winget tool
Install winget tool if you don't already have it, then type this command in command prompt or Powershell.
```ps
$ winget install --id Git.Git -e --source winget
```

## Fetch code
1. Use `git clone` command to fetch the source code from a remote repository. Using `--recurse-submodules` option will automatically initialize and update each submodule in the repository, including nested submodules if any of the submodules in the repository have submodules themselves.

    ```sh
    $ git clone --recurse-submodules  git@gitlab.com:<project-group>/<project-name>.git
    ```

    > ❗ Don't forget to prepend the domain with your account name if you have multiple git accounts:

    ```sh
    $ git clone --recurse-submodules git@dev-pm.git@gitlab.com:<project-group>/<project-name>.git
    ```

2. Change into the project's root folder:

    ```sh
    $ cd <project-name>
    ```

3. To also initialize, fetch and checkout any nested submodules, you can use the foolproof `git submodule update --init --recursive`:

    ```sh
    $ git submodule update --init --recursive
    ```

    > If you want the submodules merged with remote branch automatically, use `--merge` or `--rebase` with `--remote` option. Otherwise all submodules will be in the `DETACHED HEAD` state:

    ```sh
    $ git submodule update --init --recursive --remote --merge
    ```

## Setup New project

1. Setup a new git branch with an upstream.

    ```sh
    git checkout -b pw_01
    git push -u origin pw_01
    ```

    > Optionally you can create a new subbranch for the each of the project's tasks to better handling solutions provision via merge request commits.

    ```sh
    git checkout -b pw_01/task_01
    git push -u origin pw_01/task_01
    ```

2. Create a new project folder somewhere inside the *src* directory.

   ```sh
   $ mkdir src/2024_oct-nov/pw_01
   ```

3. Proceed to the project folder and init a new npm project inside it.

   ```sh
   $ cd src/2024_oct-nov/pw_01
   $ npm init -y
   ```

4. Install all necessary dependencies via npm.

   ```sh
   $ npm i live-server
   ```

5. Create a new *index.html* file inside the project root.

   ```sh
   $ touch index.html
   ```

6. Fill in the index file (press `!` and use the Visual Studio's Emmet plugin suggestion)

   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practical Work 01</title>
    </head>
    <body>

    </body>
    </html>
    ```

7. Commit the changes

   ```sh
   $ git add src/2024_oct-nov/pw_01/
   $ git commit -m 'feat: setup project'
