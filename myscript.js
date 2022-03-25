var appData ={
    mailboxes: {
        inbox:[
            {from: "Creative Market", subject: "Just in!"},
            {from: "Hello form Otta", subjet: "New match"},
            {from: "Live Nation Concert", subject: "Presale"},
        ],
        spam:[
            {from: "Warby Parker", subject: "Find new glasses"},
            {from: "SHEIN", subject: " Coupons!"},
        ],
        sent:[
            {to: "Erin", subject: "Vaccination cards"},
            {to: " Jamie", subject: "Confirmation"},

        ],
        draft:[
            {to: "John", subjet: "Hello"},
        ],
    },   
    Contacts: [
        {name: 'Erin', lastMessage: "I won't be in class today"},
        {name: 'Matt', lastMessage: "Today, we are going to rock it!"}
        ] ,
    
}

console.log(appData.mailboxes);
// console.log(appData.mailboxes.inbox);
// console.log(appData.mailboxes.inbox[1]);





// var newdraft= {to:'erin', subject:'hey'};

// appData.mailboxes.draft.push(newdraft);
// console.log(appData.mailboxes.draft)

appData.mailboxes.sent.push(appData.mailboxes.draft);
console.log(appData.mailboxes.sent);