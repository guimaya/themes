import path from "path"
import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: ["../stories/*/.mdx", "../stories/*/.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    {
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve("postcss-loader"),
                options: {
                  implementation: require.resolve("postcss"),
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    if (!config.resolve) {
      return config
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../"),
    }
    return config
  },
}
export default config
