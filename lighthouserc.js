module.exports = {
    ci: {
      collect: {
        staticDistDir: './dist',
        url: 'http://localhost/index.html',
        numberOfRuns: 5,
      },
      upload: {
        target: 'temporary-public-storage',
        githubAppToken: process.env.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,
      },
    },
  }
