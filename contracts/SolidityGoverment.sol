pragma solidity ^0.4.25;

contract fixGovernment14 {
    
    struct User {
        string name;
        address userAddress;
        bool isStudent;
        bool hasValidLicense;
        uint age;
        bool isMarried;
        bool hasChildren;
        bool isLivingWithParents;
        bool isJobSeeker;
        uint eligibleForr;
        uint readyTime;
    }
    
    uint pay1 = 249;
    uint pay2 = 455;
    uint pay3 = 300;
    uint pay4 = 455;
    uint pay5 = 597;
    uint pay6 = 455;
    uint pay7 = 500;
    
    uint cooldownTime = 14 days;
    
    User[] public users;
    
    mapping (address => uint) userIdfromAddress;
    
    //Only the owner of the contract can add users (govenment)
    function addUser(string _name, address _userAddress, bool _isStudent, bool _hasValidLicense, uint _age, bool _isMarried, bool _hasChildren, bool _isLivingWithParents, bool _isJobSeeker) public returns (uint){
        User memory newUser = User(_name, _userAddress, _isStudent, _hasValidLicense, _age, _isMarried, _hasChildren, _isLivingWithParents, _isJobSeeker, 0, 0);
        uint id = users.push(newUser) -1;
        userIdfromAddress[msg.sender] = id;
        return id;
    }
   function getIdByAddress(address _userAddress) returns (uint){
        uint id = userIdfromAddress[_userAddress];   
    }
    
    //Check how much they are eligible for, only centrelink can check
    function eligibileForAmount(address _userAddress) public returns (uint){
        uint eligibleFor = 0;
        uint userIndex = getIdByAddress(_userAddress);
        User currUser = users[userIndex];
        //age student
        if (currUser.isStudent && currUser.age < 18 ){
            eligibleFor = pay1;
        }
        else if (currUser.isStudent && currUser.age > 18){
            eligibleFor = pay3;
        }
        currUser.eligibleForr = eligibleFor;
        return eligibleFor;
    }
    //If a user is eligible for payments and has not received payment in at least 2 weeks, send to their account0
    function payAccount(address _userAddress) public {
        uint eligibleFor = 0;
        uint userIndex = userIdfromAddress[_userAddress];
        User currUser = users[userIndex];
        if (currUser.eligibleForr > 0 && _isReady(userIndex)){
            if (this.balance > currUser.eligibleForr){
                _userAddress.transfer(currUser.eligibleForr);
                _triggerCooldown(userIndex);
            }
            else{
                //Not enough Balance in contract
            }
        }
        
    }
    //helper function to require 14 days before next payments
    function _triggerCooldown(uint id) internal {
        User currUser = users[id];
        currUser.readyTime = uint(now + cooldownTime);
    }   
    //helper function to check if user is ready to receive next payment
    function _isReady(uint id) internal view returns (bool) {
        User currUser = users[id];
        return (currUser.readyTime <= now);
    }
    
    /*function() public payable{
    }*/
    
    function getContractValue() returns (uint){
        return this.balance;
    }
    
        
}

    