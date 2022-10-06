import { virtualFile } from "../../../shared";
import { OutputOptions } from "rollup";

export function mergeManualChunks(
  originalOutput: OutputOptions
): OutputOptions {
  let output: OutputOptions;

  const manualChunks = originalOutput.manualChunks;
  if (manualChunks === undefined) {
    output = {
      ...originalOutput,
      manualChunks: {
        [virtualFile]: [virtualFile],
      },
    };
  } else if (typeof manualChunks === "function") {
    output = {
      ...originalOutput,
      manualChunks: (id, api) => {
        const result = manualChunks(id, api);
        if (result === undefined && id === virtualFile) {
          return virtualFile;
        }
        return result;
      },
    };
  } else {
    output = {
      ...originalOutput,
      manualChunks: {
        [virtualFile]: [virtualFile],
        ...manualChunks,
      },
    };
  }

  return output;
}
