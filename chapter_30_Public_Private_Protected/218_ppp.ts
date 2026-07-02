class APIClient {
    public baseUrl: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseUrl: string, apiKey: string, timeout: number) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }

    private getAuthHeader(): string {
        return ("Bearer" + this.apiKey);
    }

    public sendRequest(endpoint: string): void {
        console.log(`Sending request to ${this.baseUrl}${endpoint} with timeout ${this.timeout}ms`);
        console.log(`Authorization Header: ${this.getAuthHeader()}`);
        console.log(`Request sent successfully!`);
        console.log("Timeout: " + this.timeout + "ms");
    }
}

class ExtendedAPIClient extends APIClient {
    getuser(): void {
        console.log(`Sending request to ${this.baseUrl}/user with timeout ${this.timeout}ms`);
        console.log("URL: " + this.baseUrl + "/user");
        console.log("Timeout: " + this.timeout + "ms");
        // console.log(`Authorization Header: ${this.getAuthHeader()}`); // This line will cause an error because getAuthHeader is private in the base class
    }

}

let client = new APIClient("https://api.example.com", "my-api-key", 5000);
console.log("Base URL: " + client.baseUrl);
client.sendRequest("/data");

let extendedClient = new ExtendedAPIClient("https://api.example.com", "my-api-key", 5000);
extendedClient.getuser();
