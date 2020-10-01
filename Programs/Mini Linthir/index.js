let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';


let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ')
console.log('there are: ', + storyWords.length, 'words')

const betterWords = storyWords.filter(nope => {
    return !unnecessaryWords.includes(nope);
});

console.log(betterWords)
console.log('there are now: ', + betterWords.length, 'words. After we filtered.')


let count1 = 0;
let count2 = 0;
let count3 = 0;
for (word of storyWords)  { 
   if(word === 'really') {
      count1 += 1
   } else if (word === 'very') {
     count2 += 1
   }else if (word === 'basically') {
     count3 += 1
   } 
}

let total = count1 + count2 + count3;

console.log('There are: ', + total, 'repetitive words.')


let numSentences = 0;
storyWords.forEach(sen => {
  if(sen[sen.length-1] === '.' || sen[sen.length-1] === '!'){
    numSentences +=1;
  }
});

console.log('The numbers of sentences are: ', + numSentences)

console.log(betterWords.join(' '))
