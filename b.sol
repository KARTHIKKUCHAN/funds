// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract FundManager {
    address public owner;
    uint public limit;
    mapping(address => uint) public balances;
    
    constructor(uint _limit) {
        owner = msg.sender;
        limit = _limit;
    }
    
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }
    
    function withdraw(uint _amount) public {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        require(_amount <= limit, "Amount exceeds limit");
        payable(msg.sender).transfer(_amount);
        balances[msg.sender] -= _amount;
    }
    
    function setLimit(uint _limit) public {
        require(msg.sender == owner, "Only owner can set limit");
        limit = _limit;
    }
}
