enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}

function sendRequest(method: HTTPMethod, url: string): void {
    console.log(method + " " + url + "-> 200 OK");
}

sendRequest(HTTPMethod.GET, "https://example.com/api/data");
sendRequest(HTTPMethod.POST, "https://example.com/api/data");
sendRequest(HTTPMethod.PUT, "https://example.com/api/data/1");