const a = [10,20, 20, 10, 10, 30, 50, 10, 20]

const b = a.sort();

function sliceIntoChunks(b, chunkSize) {
    const res = [];
    for (let i = 0; i < b.length; i += chunkSize) {
        const chunk = b.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const c = sliceIntoChunks(b, 2);
console.log(c.length)

