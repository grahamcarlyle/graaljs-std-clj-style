    rm -rf src/main/resources

    npx esbuild src/main/js/std-clj-style.js \
      --format=esm \
      --outdir=src/main/resources/com/grahamcarlyle/std-clj-style \
      --bundle \
      --target=es2022