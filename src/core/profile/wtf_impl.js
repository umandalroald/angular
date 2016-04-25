'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
var trace;
var events;
function detectWTF() {
    var wtf = lang_1.global['wtf'];
    if (wtf) {
        trace = wtf['trace'];
        if (trace) {
            events = trace['events'];
            return true;
        }
    }
    return false;
}
exports.detectWTF = detectWTF;
function createScope(signature, flags) {
    if (flags === void 0) { flags = null; }
    return events.createScope(signature, flags);
}
exports.createScope = createScope;
function leave(scope, returnValue) {
    trace.leaveScope(scope, returnValue);
    return returnValue;
}
exports.leave = leave;
function startTimeRange(rangeType, action) {
    return trace.beginTimeRange(rangeType, action);
}
exports.startTimeRange = startTimeRange;
function endTimeRange(range) {
    trace.endTimeRange(range);
}
exports.endTimeRange = endTimeRange;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3RmX2ltcGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUxVZVJ0WXU1LnRtcC9hbmd1bGFyMi9zcmMvY29yZS9wcm9maWxlL3d0Zl9pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBcUIsMEJBQTBCLENBQUMsQ0FBQTtBQTBCaEQsSUFBSSxLQUFZLENBQUM7QUFDakIsSUFBSSxNQUFjLENBQUM7QUFFbkI7SUFDRSxJQUFJLEdBQUcsR0FBUSxhQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNSLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNmLENBQUM7QUFWZSxpQkFBUyxZQVV4QixDQUFBO0FBRUQscUJBQTRCLFNBQWlCLEVBQUUsS0FBaUI7SUFBakIscUJBQWlCLEdBQWpCLFlBQWlCO0lBQzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRmUsbUJBQVcsY0FFMUIsQ0FBQTtBQUVELGVBQXlCLEtBQVksRUFBRSxXQUFlO0lBQ3BELEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQUhlLGFBQUssUUFHcEIsQ0FBQTtBQUVELHdCQUErQixTQUFpQixFQUFFLE1BQWM7SUFDOUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFGZSxzQkFBYyxpQkFFN0IsQ0FBQTtBQUVELHNCQUE2QixLQUFZO0lBQ3ZDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUZlLG9CQUFZLGVBRTNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dsb2JhbH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuLyoqXG4gKiBBIHNjb3BlIGZ1bmN0aW9uIGZvciB0aGUgV2ViIFRyYWNpbmcgRnJhbWV3b3JrIChXVEYpLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFd0ZlNjb3BlRm4geyAoYXJnMD86IGFueSwgYXJnMT86IGFueSk6IGFueTsgfVxuXG5pbnRlcmZhY2UgV1RGIHtcbiAgdHJhY2U6IFRyYWNlO1xufVxuXG5pbnRlcmZhY2UgVHJhY2Uge1xuICBldmVudHM6IEV2ZW50cztcbiAgbGVhdmVTY29wZShzY29wZTogU2NvcGUsIHJldHVyblZhbHVlOiBhbnkpO1xuICBiZWdpblRpbWVSYW5nZShyYW5nZVR5cGU6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpOiBSYW5nZTtcbiAgZW5kVGltZVJhbmdlKHJhbmdlOiBSYW5nZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2Uge31cblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gIGNyZWF0ZVNjb3BlKHNpZ25hdHVyZTogc3RyaW5nLCBmbGFnczogYW55KTogU2NvcGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NvcGUgeyAoLi4uYXJncyk6IGFueTsgfVxuXG52YXIgdHJhY2U6IFRyYWNlO1xudmFyIGV2ZW50czogRXZlbnRzO1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0V1RGKCk6IGJvb2xlYW4ge1xuICB2YXIgd3RmOiBXVEYgPSBnbG9iYWxbJ3d0ZiddO1xuICBpZiAod3RmKSB7XG4gICAgdHJhY2UgPSB3dGZbJ3RyYWNlJ107XG4gICAgaWYgKHRyYWNlKSB7XG4gICAgICBldmVudHMgPSB0cmFjZVsnZXZlbnRzJ107XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2NvcGUoc2lnbmF0dXJlOiBzdHJpbmcsIGZsYWdzOiBhbnkgPSBudWxsKTogYW55IHtcbiAgcmV0dXJuIGV2ZW50cy5jcmVhdGVTY29wZShzaWduYXR1cmUsIGZsYWdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlYXZlPFQ+KHNjb3BlOiBTY29wZSwgcmV0dXJuVmFsdWU/OiBUKTogVCB7XG4gIHRyYWNlLmxlYXZlU2NvcGUoc2NvcGUsIHJldHVyblZhbHVlKTtcbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRUaW1lUmFuZ2UocmFuZ2VUeXBlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKTogUmFuZ2Uge1xuICByZXR1cm4gdHJhY2UuYmVnaW5UaW1lUmFuZ2UocmFuZ2VUeXBlLCBhY3Rpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kVGltZVJhbmdlKHJhbmdlOiBSYW5nZSk6IHZvaWQge1xuICB0cmFjZS5lbmRUaW1lUmFuZ2UocmFuZ2UpO1xufVxuIl19