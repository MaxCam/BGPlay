addTemplateContent('controller.html', '<img class="bgplayControlPanelDivFlagIco" src="{{imageRoot}}config.png" alt="Open config" title="Open config"/>'+
''+
'<div class="bgplayControlAnimationDiv">' +
    '{{#environment.updateWithStreaming}}' +
    '<div class="bgplayControlStreamingOn">' +
    '<img src="{{imageRoot}}bgplay_streaming_on.png" alt="Streaming off" title="Turn streaming off"/> ' +
    '</div> ' +
    '<div class="bgplayControlStreamingOff"> ' +
    '<img src="{{imageRoot}}bgplay_streaming_off.png" alt="Streaming on" title="Turn streaming on"/> ' +
    '</div>' +
    '{{/environment.updateWithStreaming}}' +
    '<div class="bgplayControlAnimationPrev">'+
'        <img src="{{imageRoot}}play_prev.png" alt="Previous event" title="Previous event"/>'+
'    </div>'+
'    <div class="bgplayControlAnimationStartPause">'+
'        <img class="bgplayControlAnimationPause" src="{{imageRoot}}pause.png" alt="Pause animation" title="Pause animation"/>'+
'        <img class="bgplayControlAnimationStart" src="{{imageRoot}}play.png" alt="Play animation" title="Play animation or press shift/ctrl to repeat the last event"/>'+
'        <div class="bgplayControlAnimationRepeat"/>'+
'    </div>'+
''+
'    <div class="bgplayControlAnimationStop">'+
'        <img src="{{imageRoot}}stop.png" alt="Stop animation" title="Stop animation"/>'+
'    </div>'+
''+
'    <div class="bgplayControlAnimationNext">'+
'        <img src="{{imageRoot}}play_next.png" alt="Next event" title="Next event"/>'+
'    </div>'+
'</div>'+
'<div class="bgplayControlPanelDivComplete">'+
''+
'    <div>'+
'        <label for="bgplayStarttimestampPicker">Start date: </label>'+
'        <input class="bgplayStarttimestampPicker" type="text"/>'+
'    </div>'+
'    <div>'+
'        <label for="bgplayEndtimestampPicker">End date: </label>'+
'        <input class="bgplayEndtimestampPicker" type="text"/>'+
'    </div>'+
''+

'    {{#selectableRrcs}}'+
'    <div class="bgplayControlRRCDiv">'+
'        <label style="float:left; clear:both; width:100%;">Route Collectors: </label>'+
'        {{#selectableRrcsObj}}'+
'        <div class="bgplayRrcsSelect">'+
'            <label><input name="bgplayRrcSelect" type="checkbox" value="{{id}}" {{#selected}}checked="checked"{{/selected}}/>{{label}}</label>'+
'        </div>'+
'        {{/selectableRrcsObj}}'+
'    </div>'+
'    {{/selectableRrcs}}'+
''+
'    {{#showResourceController}}'+
'    <div>'+
'        <label for="bgplayControlPrefixValue">Resources to reach: </label>'+
'        <div class="bgplayControlPrefixDiv">'+
'            <div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>'+
''+
'            <div class="viewport">'+
'                <div class="overview bgplayControlPrefixValue">'+
'                    <div>'+
''+
'                        {{#prefixes}}'+
'                        <div>'+
'                            <input name="bgplayControlPrefixValues" type="text" value="{{.}}"/>'+
'                            <img class="bgplayControlPrefixDelete" src="{{imageRoot}}delete.png" alt="Delete this prefix" title="Delete this prefix"/>'+
'                        </div>'+
'                        {{/prefixes}}'+
''+
'                    </div>'+
'                    <img class="bgplayControlPrefixMore" alt="more" title="more" src="{{imageRoot}}more.png"/>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'    {{/showResourceController}}'+
''+
'    <div class="bgplaySuppressReannounceDiv">'+
    '   <label for="bgplaySuppressReannounce">Ignore re-announcements</label><input class="bgplaySuppressReannounce" type="checkbox" {{#ignoreReannouncements}}checked="checked"{{/ignoreReannouncements}}/>'+
'    </div>'+
''+
'    <input type="button" class="bgplayControlApplyButton"/>'+
'    <input type="button" class="bgplayControlDiscardButton"/>'+
'</div>'+
'');