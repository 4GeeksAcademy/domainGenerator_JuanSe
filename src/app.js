let pronoun = ['the', 'our', 'my', 'your', 'their'];
let adj = ['great', 'big', 'amazing', 'cool', 'weird'];
let noun = ['jogger', 'racoon', 'developer', 'pirate', 'unicorn'];

function domainGenerator() {
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                let domain = pronoun[i] + adj[j] + noun[k] + '.com';
                console.log(domain);
            }
        }
    }
}

domainGenerator();