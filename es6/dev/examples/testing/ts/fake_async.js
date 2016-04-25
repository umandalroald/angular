import { describe, it, fakeAsync, expect, tick, clearPendingTimers } from 'angular2/testing';
// #docregion basic
describe('this test', () => {
    it('looks async but is synchronous', fakeAsync(() => {
        var flag = false;
        setTimeout(() => { flag = true; }, 100);
        expect(flag).toBe(false);
        tick(50);
        expect(flag).toBe(false);
        tick(50);
        expect(flag).toBe(true);
    }));
});
// #enddocregion
// #docregion pending
describe('this test', () => {
    it('aborts a timer', fakeAsync(() => {
        // This timer is scheduled but doesn't need to complete for the
        // test to pass (maybe it's a timeout for some operation).
        // Leaving it will cause the test to fail...
        setTimeout(() => { }, 100);
        // Unless we clean it up first.
        clearPendingTimers();
    }));
});
// #enddocregion 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZV9hc3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtWjlaY3hvVVAudG1wL2FuZ3VsYXIyL2V4YW1wbGVzL3Rlc3RpbmcvdHMvZmFrZV9hc3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0I7QUFFMUYsbUJBQW1CO0FBQ25CLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDcEIsRUFBRSxDQUFDLGdDQUFnQyxFQUFPLFNBQVMsQ0FBQztRQUMvQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBVSxDQUFDLFFBQVEsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxDQUFDLENBQUM7QUFDSCxnQkFBZ0I7QUFFaEIscUJBQXFCO0FBQ3JCLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDcEIsRUFBRSxDQUFDLGdCQUFnQixFQUFPLFNBQVMsQ0FBQztRQUMvQiwrREFBK0Q7UUFDL0QsMERBQTBEO1FBQzFELDRDQUE0QztRQUM1QyxVQUFVLENBQUMsUUFBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFMUIsK0JBQStCO1FBQy9CLGtCQUFrQixFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNULENBQUMsQ0FBQyxDQUFDO0FBQ0gsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkZXNjcmliZSwgaXQsIGZha2VBc3luYywgZXhwZWN0LCB0aWNrLCBjbGVhclBlbmRpbmdUaW1lcnN9IGZyb20gJ2FuZ3VsYXIyL3Rlc3RpbmcnO1xuXG4vLyAjZG9jcmVnaW9uIGJhc2ljXG5kZXNjcmliZSgndGhpcyB0ZXN0JywgKCkgPT4ge1xuICBpdCgnbG9va3MgYXN5bmMgYnV0IGlzIHN5bmNocm9ub3VzJywgPGFueT5mYWtlQXN5bmMoKCk6IHZvaWQgPT4ge1xuICAgICAgIHZhciBmbGFnID0gZmFsc2U7XG4gICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGZsYWcgPSB0cnVlOyB9LCAxMDApO1xuICAgICAgIGV4cGVjdChmbGFnKS50b0JlKGZhbHNlKTtcbiAgICAgICB0aWNrKDUwKTtcbiAgICAgICBleHBlY3QoZmxhZykudG9CZShmYWxzZSk7XG4gICAgICAgdGljayg1MCk7XG4gICAgICAgZXhwZWN0KGZsYWcpLnRvQmUodHJ1ZSk7XG4gICAgIH0pKTtcbn0pO1xuLy8gI2VuZGRvY3JlZ2lvblxuXG4vLyAjZG9jcmVnaW9uIHBlbmRpbmdcbmRlc2NyaWJlKCd0aGlzIHRlc3QnLCAoKSA9PiB7XG4gIGl0KCdhYm9ydHMgYSB0aW1lcicsIDxhbnk+ZmFrZUFzeW5jKCgpOiB2b2lkID0+IHtcbiAgICAgICAvLyBUaGlzIHRpbWVyIGlzIHNjaGVkdWxlZCBidXQgZG9lc24ndCBuZWVkIHRvIGNvbXBsZXRlIGZvciB0aGVcbiAgICAgICAvLyB0ZXN0IHRvIHBhc3MgKG1heWJlIGl0J3MgYSB0aW1lb3V0IGZvciBzb21lIG9wZXJhdGlvbikuXG4gICAgICAgLy8gTGVhdmluZyBpdCB3aWxsIGNhdXNlIHRoZSB0ZXN0IHRvIGZhaWwuLi5cbiAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt9LCAxMDApO1xuXG4gICAgICAgLy8gVW5sZXNzIHdlIGNsZWFuIGl0IHVwIGZpcnN0LlxuICAgICAgIGNsZWFyUGVuZGluZ1RpbWVycygpO1xuICAgICB9KSk7XG59KTtcbi8vICNlbmRkb2NyZWdpb24iXX0=