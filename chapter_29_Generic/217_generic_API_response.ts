function wrapResponse<T>(data: T, StatusCode: number): { data: T; StatusCode: number } {
    return {
        data,
        StatusCode
    };
}

let response1 = wrapResponse<string>("Success", 200);
console.log(response1.data);

let response2 = wrapResponse<number>(404, 404);
console.log(response2.data);

let response3 = wrapResponse<boolean>(true, 200);
console.log(response3.data);
console.log(response3.StatusCode);