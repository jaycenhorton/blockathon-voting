/* globals artifacts */
const Voting = artifacts.require('./Voting.sol');

module.exports = deployer => {
  deployer.then(async () => {
    await deployer.deploy(Voting);
  });
};
