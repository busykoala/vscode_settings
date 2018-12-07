{
    /*********************
    General settings
    *********************/
    "files.autoSave": "afterDelay",
    "editor.rulers": [79],
    // insert newline in end of file
    "files.insertFinalNewline": true,
    // don't show workbench
    "workbench.activityBar.visible": false,
    // file associations
    "files.associations": {
        "*.zcml": "xml"
    },
    // trailing spaces
    "trailing-spaces.highlightCurrentLine": false,
    "trailing-spaces.syntaxIgnore": [
        "markdown"
    ],
    // .rst options
    "restructuredtext.linter.executablePath": "/Users/busykoala/src/doc8/venv/bin/doc8",
    "restructuredtext.confPath": "${workspaceFolder}/source",
    "restructuredtext.builtDocumentationPath": "${workspaceRoot}/build/html",
    // exclude in autocomplete search
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/chameleon-cache": true,
        "**/parts": true,
    },
    // include omelette
    "python.autoComplete.extraPaths": ["${workspaceFolder}/parts/omelette", ],
    // do not show in nerd tree
    "files.exclude": {
        "**/.DS_Store": true,
        ".vscode": true,
        "**/__pycache__": true,
        "**/**/*.pyc": true,
        "**/.idea": true,
    },
    // cmd+p also search in gitignored
    "search.useIgnoreFiles": false,
    // whether to show recommendations
    "extensions.ignoreRecommendations": false,
    /*********************
    Python specific
    *********************/
    // linter
    "python.linting.pylintEnabled": true,
    "python.linting.pylintPath": "/Users/busykoala/bin/pylint",
    "python.linting.pylintUseMinimalCheckers": false,
    "python.linting.flake8Enabled": true,
    "python.linting.flake8Path": "/usr/local/bin/flake8",
    // formatter
    "python.formatting.autopep8Path": "/usr/local/bin/autopep8",
    // debugger
    "python.analysis.logLevel": "Trace",
    // ms python language server
    "python.jediEnabled": false,
    // sort imports (source, args -> one per line, on save)
    "python.sortImports.path": "/Users/busykoala/bin/isort",
    "python.sortImports.args": ["-sl"],
    "editor.codeActionsOnSave": {
		"source.organizeImports": true,
	},
    // Limits the depth of the symbol tree in the document outline.
    // "python.analysis.symbolsHierarchyDepthLimit": 5,
    "python.linting.pylintCategorySeverity.convention": "Hint",
    "python.linting.pylintCategorySeverity.warning": "Error",
    "python.analysis.downloadChannel": "daily",

    /*********************
    Javascript specific
    *********************/
    "eslint.packageManager": "yarn",
    "python.linter": "/usr/local/bin/flake8",
    "editor.fontSize": 11,
    "editor.largeFileOptimizations": false,
    // Use sara drasner snippets instead of veturs
    "vetur.completion.useScaffoldSnippets": false,
}
