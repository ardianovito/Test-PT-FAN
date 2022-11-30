const a = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]

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