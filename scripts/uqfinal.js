// Description
//   Determine exactly how little effort you need to put into your final piece of assessment.
// 
// Commands:
//   uqcsbot final 
//


var Conversation = require('hubot-conversation');
module.exports = function (robot) {

    var switchBoard = new Conversation(robot);

    robot.respond(/^(wdinotf|uqfinal)( ){1}[a-z]{4}[0-9]{4}/, function (msg) {
        var dialog = switchBoard.startDialog(msg);
        
        msg.reply('');
        
        dialog.timeout = function (msg2) {
            msg2.reply('');
        }
        dialog.addChoice(//i, function (msg3) {
            msg3.reply('');
        });
    });
};
