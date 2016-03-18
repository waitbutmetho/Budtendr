
if [ ! -d ~/.atom/packages/minimap ]; then
  echo "Setting up atom"
  cp -r ./atomconfigfile/config.cson ~/.atom/
  apm install TODO-show
  apm install minimap minimap-highlight-selected minimap-selection
  apm install highlight-selected
  apm install linter linter-csslint linter-jshint
  apm install file-icons
  apm install atom-beautify
  # apm install color-picker
  # apm install merge-conflicts
fi

echo "Opening directory in atom"
atom .

if [ ! -d "./node_modules" ]; then
  npm install
  sed -i 'bak' 's/git commit/git pair-commit/g' ./node_modules/gulp-git/lib/commit.js
fi

if [ ! -d "bower_componenets" ]; then
  bower install
fi

if [ ! -d "build" ]; then
  gulp build
fi

while true
do
  gulp serve
done
