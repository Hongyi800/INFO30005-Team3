//add value of the event into variable preOnload
const addEvent = (func) => {
    var preOnload = window.onload;

    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            preOnload();
            func();
        }
    }
};

//receive the comment
const getMessage = () => {
    var comBtn = document.getElementById("btn1");
    var message = document.getElementById("message");
    var name = document.getElementById("name");
    var nameValue = "";
    var messageValue = "";

    name.onfocus = function () {
        name.value = "";
    };

    message.onfocus = function () {
        message.value = "";
    };

    comBtn.onclick = function () {
        messageValue = message.value || "My comment: ";
        nameValue = name.value || "new user";
        var messageList = document.getElementById("messageList");
        var messageDiv = document.createElement("div");
        var messageText = document.createTextNode(nameValue + ": " + messageValue);

        messageDiv.appendChild(messageText);
        messageList.appendChild(messageDiv);
    }
};

addEvent(getMessage());
module.exports = {
    addEvent,
    getMessage
};