# Arizona Blockathon voting dapp

## Setup (devs)

* clone project
* `yarn install`

## Tests

You can test the contracts by running:

`yarn truffle test`

## Interaction

### Add a proposal

`addProposal("Example Project Name")`

Adds "Project Name" to the available proposals a person can vote on

### Give an address (pub key) right to vote

`giveRightToVote(0xf17f52151ebef6c7334fad080c5704d77216b732)`

Gives 0xf17f52151ebef6c7334fad080c5704d77216b732 the ability to vote a single time

### Vote for a particular proposal

`vote(0)`

votes for project proposal at index 0, incrementing its votecount by 1. This sets the senders ability to vote again to false.

### Find the winning project proposal by name

`getWinnerName()`

Returns the winning project name by number of votes. In the above example this would return "Example Project Name"
