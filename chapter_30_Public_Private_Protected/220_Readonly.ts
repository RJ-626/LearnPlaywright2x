class PlaywrightConfig{
    readonly baseUrl: string;
    readonly timeout: number;
    readonly retryCount: number;

    constructor(baseUrl: string, timeout: number, retryCount: number) {
        this.baseUrl = baseUrl;
        this.timeout = timeout;
        this.retryCount = retryCount;
    }

    showconfig(): void {
        console.log(`Base URL: ${this.baseUrl}`);
        console.log(`Timeout: ${this.timeout}ms`);
        console.log(`Retry Count: ${this.retryCount}`);
    }
}

let config = new PlaywrightConfig("https://example.com", 5000, 3);
config.showconfig();

//config.baseUrl = "https://newexample.com"; // This line will cause an error because baseUrl is readonly