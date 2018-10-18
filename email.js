var appData = {
    	name: 'Gmail',
    	mailboxes: [
    		inbox:
    		'archives',
        'important',
        'draft',
        'sent'
    	],
    	contacts: [
    		{name: 'Joe', emailAddress: 'joe_hartman@gmail.com'},
    		{name: 'Julie', emailAddress: 'nakole@gmail.com'},
    		{name: 'PK', emailAddress: 'prakashkaramchandani@gmail.com'},
    		{name: 'Linda', emailAddress: 'Lidanle82@gmail.com'},
    		{name: 'Tammy', emailAddress: 'tammytamtam@gmail.com'},
    		{name: 'Sam', emailAddress: 'sammygill@gmail.com'},
    	],
      inbox: {
        primary: [
          {from: 'Kevin', title: 'Homwork and Resource for Week 1'},
          {from: 'Sung Ha', title: 'Resume(Sung Ha)'},
          {from: 'Tim', title: 'Checking In'},
          {fron: 'Julie', title: 'Reading List'}
        ],
        social: [
          {from: 'YouTube', title: 'It’s football season on YouTube TV'},
          {from: 'Pinterest', title: '12 boards full of Blonde hair idea'},
          {from: 'LinkedIn', title: 'The jobs that are safe from automation'},
          {from: 'LinkedIn', title: 'Assistant Video Editor at EXPRESS and 9 other jobs for you'}
        ],
        promotions: [
          {from: 'Blue Aprons', title: '50% Off 3 Deliveries'},
          {from: 'Postmates', title: 'Now get Unlimited FREE delivery on orders over $15!'},
          {from: 'Ladders', title: '11 signs that you lack emotional intelligence'},
          {from: 'SeatGeek', title: 'Don\'t forget those Indiana Hoosiers at Ohio State Buckeyes Football tickets'}
        ]
      }
    }

console.log(appData.name);
console.log(appData.contacts);
console.log(appData.inbox.primary);
console.log(appData.mailboxes);
