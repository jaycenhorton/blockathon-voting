const Voting = artifacts.require('./Voting.sol');

let voting;

before(async () => {
  voting = await Voting.deployed();
});

contract('Voting', accounts => {
  describe('giveRightToVote', () => {
    accounts.forEach(async (element, i) => {
      it(`should give accounts[${i}] the right to vote`, async () => {
        await voting.giveRightToVote(accounts[i]);
        assert.lengthOf(
          await voting.voters.call(accounts[i]),
          2,
          `failed adding voter ${i}`
        );
      });
    });
  });

  describe('addProposal', () => {
    it(`should add a project proposal`, async () => {
      await voting.addProposal('test project name');
      let proposal = await voting.proposals.call(0);
      proposal = proposal[0];
      assert.equal(
        proposal,
        'test project name',
        'failed adding proposal "test project name"'
      );
    });
  });

  describe('vote', () => {
    accounts.forEach(async (element, i) => {
      it(`should vote for the first project from accounts[${i}]`, async () => {
        await voting.vote(0, { from: accounts[i] });
        let proposalVoteCount = await voting.proposals.call(0);
        proposalVoteCount = proposalVoteCount[1];
        assert.equal(proposalVoteCount, i + 1, `failed voting`);
      });
    });
  });

  describe('winnerName', () => {
    it('should find the winning project: "test project name"', async () => {
      let proposalVoteCount = await voting.proposals.call(0);
      proposalVoteCount = proposalVoteCount[1];
      assert.equal(
        await voting.winnerName(),
        'test project name',
        `wrong winner found`
      );
    });
  });
});
