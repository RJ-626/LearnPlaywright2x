const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT : 2500,
    RETRIES: 2,
    BROWSER: "chrome"

}

const EXPECTED_RESPONSE ={
    status:200,
    body: {
        user:{role:"admin, active: true"}
    }
}