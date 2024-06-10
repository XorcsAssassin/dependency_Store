/*Stream*/
/*At its simplest, it is used to read or write data  sequntially*/
/*In node there are 4 diff. types of streams-
  Writeable- Write data sequentially
  Readable- Read data sequntially
  Duplex- Used to read and write data sequntially
  Transform- Used to modify data while reading or writing*/

//Used in many modules extensively, like EventEmitter
//Streams extend EventEmitter class, which simply means that we can use event on streams

// console.log('start')
// const first=readFileSync('./Folder/first.txt','utf8')
// const second=readFileSync('./Folder/second.txt','utf8')
// console.log(first,second)
//The problem with above readFileSync and readFile(aysnc) is that when the file size gets too big, it will throw an error.
//Since a varible can store limited and small amount of data only.

const {createReadStream}=require('fs')

//stream is an object representing the readable stream created by createReadStream. 
//In Node.js, streams are instances of EventEmitter, which allows them to emit events like data, error, end, etc.
//so 'data' event emitted is used later
const stream=createReadStream('./Folder/big.txt', {highWaterMark:90000, encoding:'utf-8'})  //highWaterMark-controls sizeof buffer, rest of data/chunk is- remainder, encoding:'utf-8' gives us readable 'data' as chunks here as 'result'

stream.on('data', (result)=>{
  console.log(result)
})

stream.on('error',(result)=>{
  console.log(result)
})
/*In Node.js, when you attach an event listener to a readable stream for the `'data'` event,
you're essentially telling Node.js that whenever data becomes available to be read from the stream, 
it should execute the provided callback function and pass the received data as an argument to that function.

Node.js internally handles the reading of data from the stream's internal buffer and packages it into chunks. 
These chunks are then passed to your callback function(listener callback) as arguments, and the data event is emitted. 

So, when you define `(result) => {...}` as your callback function for the `'data'` event, `result` is just a variable name that you've chosen to represent the data chunk that is received from the stream. 

Internally, Node.js takes care of ensuring that the received data is passed to your callback function and assigned to the parameter you've specified (in this case, `result`). 
This is a fundamental mechanism of event-driven programming in Node.js, where the framework manages the flow of events and data.*/

/*in the context of a readable stream in Node.js, data chunks are implicitly passed to the callback function whenever the 'data' event occurs. This is a fundamental feature of readable streams in Node.js, designed to handle potentially large amounts of data efficiently.

Here's how it works:

Reading Data from Stream: When you attach a 'data' event listener to a readable stream, you're telling Node.js that you're interested in reading data from that stream.

Internal Buffering: Internally, Node.js maintains a buffer to handle incoming data. As data becomes available from the underlying source (like a file, network socket, etc.), it's read into this buffer.

Data Chunking: When the buffer contains a chunk of data, Node.js emits the 'data' event. This event indicates to your code that there's data available to be processed. default size:64kb

Callback Invocation: When the 'data' event occurs, Node.js automatically invokes the callback function you've provided for that event, passing the data chunk as an argument to the callback function.

Handling Data: Inside your callback function, you can access and process the data chunk that was passed as an argument. You can perform operations such as logging, parsing, or any other processing necessary for your application.

Repeat: This process repeats as long as there is more data available to be read from the stream. Each time new data is available, the 'data' event is emitted, and the corresponding callback function is invoked with the new data chunk.

This mechanism allows Node.js to handle potentially large streams of data efficiently and asynchronously, without requiring your code to explicitly manage low-level details like buffer management or data retrieval. 
Instead, you can focus on defining how to handle the data once it's available, and Node.js takes care of the rest.*/

/*fs.ReadStream is a built-in class provided by the Node.js 'fs' module.
It is used for asynchronously reading data from a file.
Instances of fs.ReadStream are created indirectly by using the fs.createReadStream() method.
When you call fs.createReadStream() with a file path, it internally creates and returns an instance of fs.ReadStream that represents a readable stream for that file.
You can then listen for events emitted by this stream, such as 'data', 'end', and 'error', to handle the data reading process.*/

