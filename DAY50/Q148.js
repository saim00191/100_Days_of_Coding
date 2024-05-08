console.log('This Message is executed before the setTimeout');
setTimeout(function () {
    console.log('This Message is executed after 3 seconds');
}, 3000);
