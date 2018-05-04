${icons.map(icon => "import " + icon.capitalized + " from '" + icon.root + icon.name + "'").join('\n')}

export {
  ${icons.map(icon => icon.capitalized).join(`,\n  `)},
}
