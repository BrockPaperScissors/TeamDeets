# Team Deets

## Link to the app:

## The goal:

## User Stories:

### User functionality:

## How to use the app:

## A little more about the project:

## Wireframe

## Sources

//////////////////////////////////////

## Project Description

> A short description of your project.
> The project I would like to make is a League of Legends related app using official Riot APIs. At first my goal is to just pull match history. A stretch goal will be to pull statistics from the players of a live match.

## Link to the API you plan to use

I will need to use several APIs, in order listed below:

> https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName >https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID > https://developer.riotgames.com/apis#match-v5/GET_getMatch

## Example data response you plan to use

Some sample data, much more where this came from!

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

## Visual of your component hierarchy

## Wire Frames

> Copy and paste or drag and drop your images here.
> ![Wireframe](https://wireframe.cc/sehG1C)

## User Stories

> As a player of League of Legends, and user of Team Deets, I want to be able to look up my match history so that I can see the stats of my past games.
> As a user of Team Deets, I want the ability to search using my Summoner Name, and have the app return information on my last game.
> As a user of Team Deets, I want to have access to the kill/death ratios of each player, the number of minions killed, the amount of gold earned by the players in the displayed game.

### MVP Goals

The player should be able to search their summoner name if they are on the NA server and return information related to their last game played.
The player should see statistics for every player on both teams.
The player should be able to see what items were bought by each player.
The players should be sorted by the winning team, and the losing team.

### Stretch Goals

The user can review matches beyond their last played match. Up to 5 matches.
The user can access more specific details about the match.

###Super Stretch Goal
The user can get data on a player(s) that is/are in a live game.
