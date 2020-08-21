# getting-tweets
This app get tweets and save them on redis, then you can get that saved tweets by an edpoint!

# getting started 🚀
## Things that you need: 🛠️
 * [Redis](https://redis.io/)
 * [RabbitMQ](https://www.rabbitmq.com/)
 * Access to [twitter API](https://developer.twitter.com/en/apply/user.html)
### Little guide to get redis and rabbit. 🛠️
#### ~ Redis 📌
I installed Redis on WSL; to do that, follow the next steps


```bash 
sudo apt update
```
```bash 
sudo apt install redis-server
```
Confirm redis instaltion 
```bash
sudo apt install redis-server 
```
Redis version
```bash
redis-server --version
```
Confirm that redis is connected
```bash
redis-cli ping
```
#### ~ RabbitMQ
I used docker to run an image, if you want follow this option run the next command
```bash
docker run -d --hostname my-rabbit -p 5672:5672 -p 8081:15672 --name some-rabbit rabbitmq:3-management
```
[docker](https://www.docker.com/) required

# How to use 📝

## Instalación 🔧
```bash
npm install
```
### Command to run
```bash
npm run dev
```
Inmediatly when you run the app, it will connect to twitter streaming and start listening for tweets

## Configuration 🔧
I give you an example of the ".env" file, you just have to add there your values, raname ".env.example" to ".env" and the app will work perfectly

###   Change keywords that will the app looking for 🔗
By now the only way is change it manually accesing to src > server > routes > twitter.js 
There you will find:
```javascript
const rules = [
        { 'value': 'platzi -is:retweet', 'tag': 'platzi_tweet'},
        { 'value': 'node -is:retweet', 'tag': 'node_tweet'},
        { 'value': 'open source -is:retweet', 'tag': 'open_source_tweet'}
    ]
```
You can change it or add more, and remember that you will need the tags for your gets; to create [your own rules check this link](https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/integrate/build-a-rule)

# API 📦
There is only one endpoint, where you can get the tweets by two options:
  - Every tweet
  - Tweets with your keyword
  ### How to use both of them.
  - Get every tweet; you will recive EVERY tweet that is saved in your DB.
  ```bash
    curl -X GET -H "Content-Type: application/json" -d localhost:3000/api/
  ```
  - Get only tweets that contains one of your keyword (Needs match with the "tag" that you asigned) BY NOW you have to made a get request with a body like this:
  
    ```
    {
            "tweetsAbout": "platzi_tweet"
    }
    to: localhost:3000/api/
    ```
