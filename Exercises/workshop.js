// terminal object
var terminal = require('terminal');
var toolkit = require('hacker-toolkit');
var accounts = require('blackmarket-accounts');

console.log((accounts));

var objectAccount = [];

for (let i = 0; i < accounts.length; i++) {
    const username = accounts[i].split(':')[0];
    const password = accounts[i].split(':')[1];
    var desincryptedpassword = toolkit.rot13(password);
    console.log(username);
    console.log(desincryptedpassword);
    var account = {
        username: username,
        password: desincryptedpassword
    }
    objectAccount.push(account);
}


toolkit.bruteForce(terminal, objectAccount, function (username, desincryptedpassword) {
    console.log(username, desincryptedpassword);
    var success = terminal.login(username, desincryptedpassword);
    toolkit.spy(terminal, username, terminal.printFile('/var/logs/ecorp.txt'));

});
