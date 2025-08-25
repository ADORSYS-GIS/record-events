type ProjectEnvVariablesType = Pick<
  ImportMetaEnv,
  | "VITE_REPORTHUB_WEBAUTH_RP_ID"
  | "VITE_REPORTHUB_WEBAUTH_RP_NAME"
>;

const projectEnvVariables: ProjectEnvVariablesType = {
  VITE_REPORTHUB_WEBAUTH_RP_ID: "${VITE_REPORTHUB_WEBAUTH_RP_ID}",
  VITE_REPORTHUB_WEBAUTH_RP_NAME: "${VITE_REPORTHUB_WEBAUTH_RP_NAME}",
};

interface ProjectEnvVariables {
  envVariables: ProjectEnvVariablesType;
}

export const getProjectEnvVariables = (): ProjectEnvVariables => {
  return {
    envVariables: {
      VITE_REPORTHUB_WEBAUTH_RP_ID:
        !projectEnvVariables.VITE_REPORTHUB_WEBAUTH_RP_ID.includes("VITE_REPORTHUB_")
          ? projectEnvVariables.VITE_REPORTHUB_WEBAUTH_RP_ID
          : import.meta.env.VITE_REPORTHUB_WEBAUTH_RP_ID,

      VITE_REPORTHUB_WEBAUTH_RP_NAME:
        !projectEnvVariables.VITE_REPORTHUB_WEBAUTH_RP_NAME.includes("VITE_REPORTHUB_")
          ? projectEnvVariables.VITE_REPORTHUB_WEBAUTH_RP_NAME
          : import.meta.env.VITE_REPORTHUB_WEBAUTH_RP_NAME,
    },
  };
};
