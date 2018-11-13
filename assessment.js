(function(){
  'use strict';
  const userNaneInput = document.getElementById('user-name');
  const assesmentButton = document.
getElementById('assessment');
  const resultDivided = document.getElementById('result-
area');
  const tweetDivided = document.getElementById('tweet-area');  
  
function removeAllChildren(element){
  while (element.firstChild){
    element.removeChild(element.firstChild);
  }
}

assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0){
    return;
  }
  
 removeAllChildren(resultDivided);
 const header = document.createElement('h3');
 header.innerText = '診断結果';
 resultDivided.appendChild(header);
 
 const paragraph = document.createElement('p');
 cpnst result = assessment(userName);
 
