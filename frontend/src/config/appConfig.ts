type APP_LOCATION = 'local' | 'prod';
type NODE_ENV = 'development' | 'test' | 'production';

export const APP_LOCATION = process.env.APP_LOCATION! as APP_LOCATION;
export const NODE_ENV = process.env.NODE_ENV! as NODE_ENV;
export const BACKEND_URL = process.env.BACKEND_URL!;
export const FRONTEND_URL = process.env.FRONTEND_URL!;
