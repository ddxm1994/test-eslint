module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['vue'],
  rules: {
    // 代码风格规则
    indent: ['error', 2], // 2 空格缩进
    quotes: ['error', 'single'], // 强制单引号
    semi: ['error', 'never'], // 禁止行尾分号
    'comma-dangle': ['error', 'never'], // 禁止末尾逗号
    'linebreak-style': ['error', 'unix'], // 强制 Unix 换行符（LF）

    // 编码最佳实践
    'no-console': 'warn', // 警告 console 语句
    'no-unused-vars': 'warn', // 警告未使用变量
    'no-var': 'error', // 禁止使用 var
    'prefer-const': 'error', // 优先使用 const
    'arrow-parens': ['error', 'as-needed'], // 箭头函数单参数时不强制括号
    // 模块化规则
    'import/prefer-default-export': 'off', // 关闭强制默认导出
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
}
