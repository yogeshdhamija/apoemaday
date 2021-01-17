# A Poem A Day

Uses [hugo](https://gohugo.io/) to build static pages.
- See `config.toml` for configuration.
- `hugo new <category-name>/<article-name>.md` to create a new content file.
- `hugo serve -D` to launch local server, `-D` to include draft content.
    - Note: will require you to have pulled the git submodules (see below).
- `hugo -d docs` to build into docs folder. This is deployed using Github Pages.

Has git submodules, including:  
- The theme, [etch](https://github.com/LukasJoswiak/etch).

To update submodules, run:  
- `git submodule update --remote --recursive`  
To pull submodules for the first time in a freshly cloned repository, run:  
- `git submodule update --init --remote --recursive`