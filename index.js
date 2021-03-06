const { exec } = require("child_process");

exec("netstat -ano | findstr \"pid: 8081\"", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout.trim()}`);
    console.log("\n\n\n");
    const pid = getPortFromCommand(stdout);
    console.log(getPortFromCommand(`process found: ${pid}`));
});

function getPortFromCommand(output) { 
    console.log("Length is : " + output.length);
    return output.trim().substr(output.length - 5);
}