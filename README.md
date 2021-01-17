# A Poem A Day

Uses [hugo](https://gohugo.io/) to build static pages.
- See `config.toml` for configuration.
- `hugo new <category-name>/<article-name>.md` to create a new content file.
- `hugo serve -D` to launch local server, `-D` to include draft content.
    - Note: will require you to have pulled the git submodules (see below).

Has many submodules, including:
- The theme, [etch](https://github.com/LukasJoswiak/etch).
- The output directory, which points to the [GitHub Pages repository](https://github.com/yogeshdhamija/yogeshdhamija.github.io), which is served to the web.

To update submodules, run:
- `git submodule update --remote --recursive`
To pull submodules for the first time in a freshly cloned repository, run:
- `git submodule update --init --remote --recursive`

To deploy, run:
- `./deploy.sh`
    - This builds to the output directory and commits it to the GitHub Pages repo, which is served to the web.
