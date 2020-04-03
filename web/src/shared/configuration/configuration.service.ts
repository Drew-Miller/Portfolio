import { environment } from 'src/environments/environment';

export class ConfigurationService {
    private static Env: any;

    public constructor() {
        ConfigurationService.Env = environment;
    }
}
