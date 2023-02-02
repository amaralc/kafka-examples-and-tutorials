const Kafka = require("node-rdkafka");
const { readConfigFile } = require("./utils");
const fileName = 'getting-started.properties';
const topicName = 'my-topic';

console.log('...reading config file')
const config = readConfigFile(fileName);
config["group.id"] = "node-group";

console.log('...creating consumer')
const consumer = new Kafka.KafkaConsumer(config, {"auto.offset.reset": "earliest" });

console.log('...connecting')
consumer.connect();

console.log('...check ready event')
consumer.on("ready", () => {
    console.log('...subscribing')
    consumer.subscribe([topicName]);
    console.log('...consuming')
    consumer.consume();
}).on("data", (message) => {
    console.log("Consumed message", message);
});