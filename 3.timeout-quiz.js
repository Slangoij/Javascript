// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
    if (!seconds || seconds < 0)
    {
        throw new Error('시간은 양수로 입력!');
    }
    if (!callback) {
        throw new Error('callback함수를 전달해야 함!');
    }
    setTimeout(callback, seconds * 1000);
}

runInDelay(() => {console.log('타이머 완료!');}, 3)