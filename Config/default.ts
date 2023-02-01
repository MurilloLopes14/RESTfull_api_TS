const host_db = process.env.HOST_DB;

export default {
  port: 5000,
  dbURI: `mongodb://${host_db}`,
  env: "development",
};
