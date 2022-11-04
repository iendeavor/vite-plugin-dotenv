import { createPlaceholderRegExp } from "../../../shared";

const builtInEnvKeys = ["BASE_URL", "MODE", "DEV", "PROD", "SSR", "LEGACY"];

export function preserveViteBuiltInEnv({
  code,
  envPrefix,
}: {
  code: string;
  envPrefix: undefined | string | string[];
}) {
  builtInEnvKeys.forEach((key) => {
    code = code.replace(
      createPlaceholderRegExp(`\\.${key}\\b`),
      `import.meta.env.${key}`
    );
  });

  const normalizedEnPrefix = (() => {
    if (envPrefix === void 0) {
      return ["VITE_"];
    } else if (typeof envPrefix === "string") {
      return [envPrefix];
    } else {
      return envPrefix;
    }
  })();
  normalizedEnPrefix.forEach((prefix) => {
    code = code.replace(
      createPlaceholderRegExp(`\\.${prefix}`),
      `import.meta.env.${prefix}`
    );
  });

  return code;
}
