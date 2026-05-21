
//single if is allowed but else is not allowed without if
if (true) {

    console.log("This will always execute"); // This block will always execute
}

else {
    console.log("This will never execute"); // This block is unreachable
}