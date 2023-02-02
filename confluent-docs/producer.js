
const Kafka = require("node-rdkafka");
const { readConfigFile } = require('./utils');
const fileName = 'getting-started.properties';
const topicName = 'my-topic';



// Next, create a producer based on the code snippet below.
const producer = new Kafka.Producer(readConfigFile(fileName));
producer.connect();
producer.on("ready", () => {
    Array(50).fill(null).forEach((item, index) => {
        console.log('...produce')
        producer.produce(topicName, -1, Buffer.from(`value-${index}`), Buffer.from(`key-${index}`));
    })
    producer.disconnect()
    
});