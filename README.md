# Team Deets

The project I would like to make is a League of Legends related app using official Riot APIs. I would like to be able to search a summoners name and see a history and the stats of their recent matches.

## Link to the app:

## MVP goals:

The player should be able to search their summoner name if they are on the NA server and return information related to their last game played.
The player should see statistics for every player on both teams.
The player should be able to see what items were bought by each player.
The players should be sorted by the winning team, and the losing team.

## User Stories:

As a player of League of Legends, and user of Team Deets, I want to be able to look up my match history so that I can see the stats of my past games.
As a user of Team Deets, I want the ability to search using my Summoner Name, and have the app return information on my last game.
As a user of Team Deets, I want to have access to the kill/death ratios of each player, the number of minions killed, the amount of gold earned by the players in the displayed game.

## User functionality:

Players will enter a summoner name into the search field, and hit the search button. This will return results based on that summoner name. If the name is not found, they will get routed to a page that explains the error. If the summoner name is found, the page will display the information based on their last played match!

## A little more about the project:

As a passionate League of Legends player myself, I wanted to create something that was related to one of my favorite games. I was inspired by several applications both League of Legends and non League of Legends related that deal with the statistics and analytics of players and player profiles. I thought a perfect project would be to create this app, Team Deets.

## Wireframe

![Wireframe](https://i.imgur.com/zZ8F0NY.jpg)

## Visual Component Hierarchy

![Component-Hierarchy](https://i.imgur.com/AQzvN9F.jpg)

## Strech Goals

The user can review matches beyond their last played match. Up to 5 matches.
The user can access more specific details about the match.

### Super Stretch Goal

The user can get data on a player(s) that is/are in a live game.

## Sources

### APIs in use:

https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName<br> https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID <br>https://developer.riotgames.com/apis#match-v5/GET_getMatch

### An example of what the data that I will use looks like

```json
                "summonerName": "BestPizzaManNA",
                "teamEarlySurrendered": false,
                "teamId": 200,
                "teamPosition": "TOP",
                "timeCCingOthers": 25,
                "timePlayed": 1960,
                "totalDamageDealt": 184060,
                "totalDamageDealtToChampions": 33721,
```
