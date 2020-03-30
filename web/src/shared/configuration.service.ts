import { environment } from 'src/environments/environment';

export class ConfigurationService {
    private static Env: any;

    public constructor() {
        ConfigurationService.Env = environment;
    }

    public get Base(): string {
        const base = ConfigurationService.Env.Base;
        if (base) {
            return base + '/';
        } else {
            return '';
        }
    }
}
