function nameAsSnakeCase(name: any): string {
  return name?.replaceAll(" ", "_").toLowerCase() ?? "";
}

function nameAsPath(name: any) {
  return `/${nameAsSnakeCase(name)}`;
}

export { nameAsSnakeCase, nameAsPath };
