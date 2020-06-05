class ConfigService {
  constructor() {
    this.config = null;
  }

  setConfig(config) {
    this.config = config;
  }

  getConfig() {
    if (!this.config) {
      throw new Error('You are trying to access config, but it is not defined');
    }

    return this.config;
  }
}

const configService = new ConfigService();

export default configService;
