new Vue({
  el: '#app',
  data: {
    event: {
      eventDate: 'Agusti 14 - 16',
      eventTitle: 'Sommar festival!',
      eventTitle2: 'v text!',
      signUpText: 'Lägg till ditt namn till gäst listan för fina <em>erbjudnanden</em>',
      eventDescription: "sommar festival kommer bli den vackra sidan av bla bla!"
    },
    newNameText: '',
    guestName: [],
    appStyles: {
      marginTop: '25px'
    },
    eventCapacity: 25,
    eventCapacityPercentage: 0
 },
 methods: {
   formSubmitted: function() {
     if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
     this.guestName.push(this.newNameText)
     this.newNameText = ''
     this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)
   }
 }
}
});
