{
    /*************************
        Python settings
    *************************/
    // linter
    "python.linting.flake8Enabled": true,
    "python.linting.flake8Path": "/usr/local/bin/flake8",
    // formatter
    "python.formatting.autopep8Path": "/usr/local/bin/autopep8",
    // increase ram for plone projects
    "files.maxMemoryForLargeFilesMB": 8192,
    // pep8 helper
    "editor.rulers": [79],
    "files.insertFinalNewline": true,
    // Python Language Server
    "python.jediEnabled": false,
    "python.pythonPath": "/Users/busykoala/.pyenv/versions/2.7.15/envs/plone_init/bin/python",
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/chameleon-cache": true,
        "**/parts": true,
    },
    "python.autoComplete.extraPaths": [
        "${workspaceFolder}/parts/omelette",
    ],
    // Beta and Daily
    "python.analysis.downloadChannel": "daily",
    "python.analysis.downloadChannel": "beta",
    /*********************
        Javascript
    *********************/

    /*********************
        Other settings
    *********************/
    // file association for xml files
    "files.associations": {
        "*.zcml": "xml"
    },
    // two trailing spaces in md are a newline
    "trailing-spaces.syntaxIgnore": [
        "markdown"
    ],
    // self explanatory
    "editor.fontSize": 11,
    "files.autoSave": "afterDelay",
    "workbench.activityBar.visible": false,
    "trailing-spaces.highlightCurrentLine": false,
    // exclude from nerd tree
    "files.exclude": {
        "**/.idea": true,
    },
    // sort imports (source, args -> one per line, on save)
    "python.sortImports.path": "/Users/busykoala/bin/isort",
    "python.sortImports.args": ["-sl"],
    "editor.codeActionsOnSave": {
        "source.organizeImports": true,
    },
    // debugging
    "python.analysis.logLevel": "Trace",
}
