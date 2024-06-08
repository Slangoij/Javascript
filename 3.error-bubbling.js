// Bubbling up, Propagating
function a() {
    throw new Error('error');
}

function b() {
    try  {
        a();
    } catch (error) {
        console.log('생각해보니 이 에러를 내가 핸들링 못함!');
        throw error;
    }
}

function c() {
    b();
}

try {
    c();
} catch (error) {
    console.log('Catched!');
}
console.log('done!');