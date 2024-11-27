class Config {
  private static instance: Config;

  // environment variables
  public readonly endpoint_services: string;
  public readonly create_services: string;

  // Singleton constructor
  private constructor() {
    this.endpoint_services = import.meta.env.VITE_ENDPOINT_SERVICES || "";
    this.create_services = import.meta.env.VITE_CREATE_SERVICES || "";
  }

  // static method to create instance of Singleton class
  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

export default Config.getInstance();
