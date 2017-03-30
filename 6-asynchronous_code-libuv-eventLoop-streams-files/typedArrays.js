var buffer = new ArrayBuffer(8);//8 = size in bytes
//a view is a typed array
//typed array = a way for us to deal with binary data in the buffer
var view = new Int32Array(buffer);//Int32Array = we use 32 bits to store a single number
view[0] = 5;
view[1] = 15;
console.log(view);