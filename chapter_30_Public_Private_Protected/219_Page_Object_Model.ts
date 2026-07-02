class BasePage{
    protected url: string;
    protected title: string;
    constructor(url: string, title: string){
        this.url = url;
        this.title = title;
    }

    protected navigate(path: string): void {
        console.log("Navigating to: " + this.url + path);
    }

}

class LoginPage extends BasePage{
    
    constructor(){
        super ("https://example.com/login", "Login Page");
    }
    login(username: string, password: string): void {
        this.navigate("/login");
        console.log(`Logging in with username: ${username} and password: ${password}`);
    }
}

let loginPage = new LoginPage();
loginPage.login("testuser", "password123");