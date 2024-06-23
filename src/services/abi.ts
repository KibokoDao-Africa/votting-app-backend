export const Abi= [
    {
      "type": "function",
      "name": "makeVote",
      "inputs": [
        {
          "name": "userId",
          "type": "felt"
        },
        {
          "name": "vote",
          "type": "felt"
        }
      ],
      "outputs": []
    },
    {
      "type": "function",
      "name": "getVote",
      "inputs": [
        {
          "name": "userId",
          "type": "felt"
        }
      ],
      "outputs": [
        {
          "name": "vote",
          "type": "felt"
        }
      ]
    },
    {
      "type": "event",
      "name": "VoteCast",
      "inputs": [
        {
          "name": "userId",
          "type": "felt"
        },
        {
          "name": "vote",
          "type": "felt"
        }
      ],
      "outputs": []
    }
  ];
  