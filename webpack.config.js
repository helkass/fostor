module.exports = {
  //...
  devServer: {
    onAfterSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      devServer.app.get("/some/path", function (req, res) {
        res.json({ custom: "response" });
      });
    },
  },
};
War;
