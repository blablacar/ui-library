#!/bin/bash
set -euo pipefail

readonly SRC_DIR="/code"
readonly TARGET_DIR="${ROOTFS}/app"
readonly NPM_TOKEN=${NPM_TOKEN:-}
readonly VERSION="0.1.$(git --git-dir=${SRC_DIR}/.git show -s --format='%at-%h')"

if [ -z "${NPM_TOKEN}" ]; then
  echo >&2 "You must specify a valid NPM_TOKEN environment variable"
  exit 1
fi

echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

cd "${SRC_DIR}"

echo "==> Installing npm dependencies"
npm install

echo "==> Bump version"
cat <<EOF > /dgr/builder/attributes/version.yml
default:
  version: ${VERSION}
EOF

echo "==> Copy files to target directory"
mkdir -p "${TARGET_DIR}"
cp -a \
  .babelrc .storybook \
  package.json \
  bin/ src/ node_modules/ utils/ stories/ \
  "${TARGET_DIR}"
