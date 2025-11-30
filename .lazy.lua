return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        vtsls = {
          settings = {
            typescript = {
              preferences = {
                importModuleSpecifier = "non-relative",
              },
            },
            javascript = {
              preferences = {
                importModuleSpecifier = "non-relative",
              },
            },
          },
        },
      },
    },
  },
}
