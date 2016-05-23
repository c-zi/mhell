//引入React和HelloMessage模块
var $ = require('/common/js/mod/jquery-2.2.4.js');
var React = require('react');
var HelloMessage = require(['/common/components/HelloMessage/HelloMessage']);
React.render(
    <HelloMessage message="I like commonjs!" />,
    document.getElementById('helloApp')
);